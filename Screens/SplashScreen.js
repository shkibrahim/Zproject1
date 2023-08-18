import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
// import Video from 'react-native-video';

const SplashScreen = ({ navigation }) => {
    const splashImage = require('../Images/zimologo.png'); // Change the image source as needed

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace('DrawerNavigator');
    }, 500);

    return () => clearTimeout(timeout);
  }, [navigation]);

  return (
    <View style={{ alignItems:'center', justifyContent:'center' , flex:1}}>
   <Image
                source={splashImage}
                style={{
                  height: 100,
                  margin:20
                  
              
                  
                //   width: 40,
             
                
                }}
              />
    </View>
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    justifyContent: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default SplashScreen;