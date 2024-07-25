import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image,Text } from 'react-native';
const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSplash(false);
    }, 6000); // 5 seconds

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <View style={styles.container}>
    {showSplash && (
      <Image
        source={require("../../../../assets/images/zyngal.png")}
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
    width: 300,
    height: 300,
    
  },
});

export default SplashScreen;
