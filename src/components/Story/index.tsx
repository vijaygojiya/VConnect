import {Image, View} from 'react-native';
import React from 'react';
import {GradientBorder} from '../../components';

const Story = ({profilePic}) => {
  return (
    <View style={{marginHorizontal: 5}}>
      <GradientBorder>
        <Image
          source={{uri: profilePic}}
          style={{
            height: 66,
            width: 66,
            borderRadius: 66 / 2,
            margin: 1.5,
            borderWidth: 1.5,
            borderColor: 'white',
          }}
        />
      </GradientBorder>
    </View>
  );
};

export default Story;
