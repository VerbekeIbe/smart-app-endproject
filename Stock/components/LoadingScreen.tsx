import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { loading } from '../styles/generic'
import colors from '../styles/colors'


const Loading = () => {
  return (
    <View style={loading.neutral}>
      <ActivityIndicator size="large" color={colors.light} />
    </View>
  )
}

export default Loading;