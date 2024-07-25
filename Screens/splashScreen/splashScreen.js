import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';

const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSplash(false);
    }, 4000); // 4 seconds

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <View style={styles.container}>
      {showSplash && (
        <Image
          source={require('../../assets/google.png')} // Replace with your actual image
          style={styles.splashImage}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default SplashScreen;