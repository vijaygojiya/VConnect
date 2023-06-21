import {
  Album,
  CameraRoll,
  PhotoIdentifier,
  PhotoIdentifiersPage,
} from '@react-native-camera-roll/camera-roll';
import {useEffect, useState} from 'react';
import {PERMISSIONS, RESULTS, check, request} from 'react-native-permissions';

import {Platform} from 'react-native';
import {StyleConfig} from '../theme';

export interface FetchPaginatedResult {
  data: PhotoIdentifier[] | null;
  isLoading: boolean;
  hasNextPage: boolean;
  folders: Album[];
  fetchMore: (pageSize?: number) => Promise<void>;
}

const showToast = (e: string) => {
  console.log('e', e);
};

const PlatformPermission = StyleConfig.isAndroid
  ? Number(Platform.Version) >= 33
    ? PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
    : PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
  : PERMISSIONS.IOS.PHOTO_LIBRARY;

const useGallery = (pageSize = 50): FetchPaginatedResult => {
  const [data, setData] = useState<PhotoIdentifier[] | null>(null);
  const [lastPageInfo, setLastPageInfo] = useState<
    PhotoIdentifiersPage['page_info'] | undefined
  >();
  const [isLoading, setIsLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [folders, setFolders] = useState<Album[]>([]);

  useEffect(() => {
    checkLocationPermission();
  }, []);

  const checkLocationPermission = () => {
    check(PlatformPermission)
      .then(result => {
        console.log('checkLocationPermission', result);

        switch (result) {
          case RESULTS.UNAVAILABLE:
            showToast(
              'This feature is not available (on this device / in this context)',
            );
            break;
          case RESULTS.DENIED:
            askPermission();
            break;
          case RESULTS.GRANTED:
            getFolders();
            break;
          case RESULTS.BLOCKED:
            showToast('The permission is denied and not requitable anymore');
            break;
        }
      })
      .catch(error => {
        showToast(error);
      });
  };

  const askPermission = () => {
    request(PlatformPermission)
      .then(result => {
        console.log('resultresultresultresult', result);
        switch (result) {
          case RESULTS.UNAVAILABLE:
            showToast(
              'This feature is not available (on this device / in this context)',
            );
            break;
          case RESULTS.DENIED:
            showToast('The permission is denied and not rerequestable anymore');
            break;
          case RESULTS.GRANTED:
            getFolders();
            break;
          case RESULTS.BLOCKED:
            showToast('The permission is denied and not rerequestable anymore');
            break;
        }
      })
      .catch(error => {
        showToast(error);
      });
  };

  const getFolders = async () => {
    fetchInitialPhotos();
    try {
      const albumsData = await CameraRoll.getAlbums();
      const sortData = albumsData.sort(function (a, b) {
        return a.title.localeCompare(b.title);
      });
      setFolders(sortData);
    } catch (error) {
      console.log('eerr-', error);
    }
  };

  const fetchInitialPhotos = async () => {
    setIsLoading(true);
    const result = await paginatePhotos(pageSize);
    setData(result.data);
    setLastPageInfo(result.lastPageInfo);
    setIsLoading(false);
  };

  const fetchMorePhotos = async (pageSize = 50) => {
    setIsLoading(true);
    const result = await paginatePhotos(pageSize);
    if (result.data) {
      setData(prevData => [...(prevData ?? []), ...result.data]);
      setLastPageInfo(result.lastPageInfo);
    }
    setIsLoading(false);
  };

  const paginatePhotos = async (
    _pageSize: number,
  ): Promise<{
    data: PhotoIdentifier[] | null;
    lastPageInfo: PhotoIdentifiersPage['page_info'] | undefined;
  }> => {
    let photos: PhotoIdentifiersPage | undefined;
    let newLastPageInfo: PhotoIdentifiersPage['page_info'] | undefined;

    if (lastPageInfo && lastPageInfo.has_next_page) {
      photos = await CameraRoll.getPhotos({
        first: _pageSize,
        after: lastPageInfo.end_cursor,
        include: ['filename'],
        assetType: 'All',
      });
    } else {
      photos = await CameraRoll.getPhotos({
        first: _pageSize,
        include: ['filename'],
        assetType: 'All',
      });
    }

    newLastPageInfo = photos.page_info;
    if (!newLastPageInfo || !newLastPageInfo.has_next_page) {
      setHasNextPage(false);
    }
    const formateData = convertCameraRollPicturesToImageDtoType(photos.edges);
    return {
      data: formateData,
      lastPageInfo: newLastPageInfo,
    };
  };

  return {
    data,
    isLoading,
    hasNextPage,
    fetchMore: fetchMorePhotos,
    folders,
  };
};

export default useGallery;

const convertCameraRollPicturesToImageDtoType = (
  pictures: PhotoIdentifier[],
) => {
  return pictures.map(picture => {
    // Extract necessary information from the picture object and convert it to ImageDTO format
    const {uri, filename} = picture.node.image;
    return {
      uri,
      filename,
      type: picture.node.type,
      // Include any other properties or transformations you need for the ImageDTO format
    };
  });
};
