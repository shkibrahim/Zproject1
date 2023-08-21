import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Svg, { Rect } from 'react-native-svg';

const SquareProgressBar = ({ progress }) => {
  const [progressAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(progressAnimation, {
      toValue: progress,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [progress, progressAnimation]);

  return (
    <Svg width="100%" height={20}>
      <Rect
        width={progressAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: ['0%', '100%'],
        })}
        height="100%"
        fill="#FFA500" // Orange color for filled part
      />
    </Svg>
  );
};

export default SquareProgressBar;
