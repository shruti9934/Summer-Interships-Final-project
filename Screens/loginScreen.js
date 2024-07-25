import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Pressable,
  SafeAreaView,
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import useTheme from './useTheme';


const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log("Login with:", email, password);
  };

  const { isDarkMode, themeStyles, toggleTheme } = useTheme();

  return (
    <SafeAreaView style={themeStyles.container}>
      <Text style={themeStyles.headText}>Login</Text>

      <View style={themeStyles.inputContainer}>
        <View style={themeStyles.inputContainer}>
        
        <View style={themeStyles.textBox}>
          <Text style={themeStyles.innerText}>Email</Text>
          <TextInput
            style={themeStyles.innerInput}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        <View style={themeStyles.textBox}>
          <Text style={themeStyles.innerText}>Password</Text>
          <TextInput
            style={themeStyles.innerInput}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <View style={{backgroundColor:"green", width:"100%",flexDirection:'row',justifyContent:"space-between", paddingLeft:20, paddingRight:20,paddingTop:10}}>
          <Pressable><Text>Create account</Text></Pressable>
          <Pressable style={themeStyles.innerText}><Text>
            Forgot your password? <Icon name="arrow-forward-outline" size={20} color={themeStyles.iconColor} /></Text>
          </Pressable>
        </View>
        </View>
      </View>

      <View style={themeStyles.buttonContainer}>
        <Pressable style={themeStyles.button} onPress={handleLogin}>
          <Text style={themeStyles.ButtonText}>Login</Text>
        </Pressable>
      </View>

      <View style={themeStyles.SignupBottom}>
        <View>
          <Text style={themeStyles.SignupBottomText}>
            Or login with Social Account
          </Text>
        </View>
        <View style={themeStyles.SocialSignupButton}>
          <Pressable style={themeStyles.SocialButton}>
          <Image source={require("../assets/fecebook.png")} style={{height:30,width:30}} />
            
          </Pressable>
          <Pressable style={themeStyles.SocialButton}>
          <Image source={require("../assets/google.png")} style={{height:30,width:30}} />
          </Pressable>
        </View>
        <Button title="Toggle Mode" onPress={toggleTheme} />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
