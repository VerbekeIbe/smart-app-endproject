import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { loading } from '../styles/utils/loading';
import {neutral, theme} from '../styles/colors'


const Loading = () => {
  return (
    <View style={loading.neutral}>
      <ActivityIndicator size="large" color={theme['alpha']} />
    </View>
  )
}

export default Loading;