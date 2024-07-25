import React, { useState } from "react";
import {
  Image,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import useTheme from './useTheme';


const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSignup = () => {
    console.log("Signup with:", name, email, password);
  };

  const { isDarkMode, themeStyles, toggleTheme } = useTheme();

  return (
    <SafeAreaView style={themeStyles.container}>
      <Text style={themeStyles.headText}>Signup</Text>

      <View style={themeStyles.inputContainer}>
        <View style={themeStyles.textBox}>
          <Text style={themeStyles.innerText}>Name</Text>
          <TextInput
            style={themeStyles.innerInput}
            value={name}
            onChangeText={setName}
          />
        </View>

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
        <View style={{backgroundColor:"green", width:"100%",flexDirection:'row',justifyContent:"flex-end", paddingLeft:20, paddingRight:20,paddingTop:10}}>
            <Pressable  onPress={() => navigation.navigate('login')}><Text style={themeStyles.innerText}>
            Already have account? <Icon name="arrow-forward-outline" size={20} color={themeStyles.iconColor} /></Text>
          </Pressable>
        </View>
      </View>

      <View style={themeStyles.buttonContainer}>

        <View sytle={themeStyles.signupButton}>
          <Pressable style={themeStyles.button} onPress={()=>navigation.navigate("login")}>
            <Text style={themeStyles.ButtonText}>Signup</Text>
          </Pressable>
        </View>
      </View>
      <View style={themeStyles.SignupBottom}>
        <View><Text style={themeStyles.SignupBottomText}>Or signUp with Social Account</Text></View>
        <View style={themeStyles.SocialSignupButton}>
          <Pressable style={themeStyles.SocialButton}>
          <Image source={require("../assets/google.png")} style={{height:30,width:30}} />
          </Pressable>
          <Pressable style={themeStyles.SocialButton}>
          <Image source={require("../assets/fecebook.png")} style={{height:30,width:30}} />
          </Pressable>
        </View>
        <Button title="Toggle Mode" onPress={toggleTheme} />
      </View>

    </SafeAreaView>
  );
};

export default SignupScreen;
