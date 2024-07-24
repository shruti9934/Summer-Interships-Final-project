import { useState, useEffect } from "react";
import { useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

const useTheme = () => {
      const systemTheme = useColorScheme(); // 'light' or 'dark'
      const [isDarkMode, setIsDarkMode] = useState(systemTheme === 'dark');

      useEffect(() => {
            setIsDarkMode(systemTheme === 'dark');
      }, [systemTheme]);

      const themeStyles = isDarkMode ? darkTheme : lightTheme;

      return { isDarkMode, themeStyles, toggleTheme: () => setIsDarkMode(!isDarkMode) };
};

const lightTheme = {
      container: {
            flex: 1,
            width: "100%",
            backgroundColor: "blue",
            alignItems: "flex-start",
            justifyContent: "center",
      },
      headText: {
            fontSize: 30,
            fontWeight: "700",
            color: "#000",
            marginTop: 100
      },
      inputContainer: {
            flex: 1,
            width: "100%",
            backgroundColor: "pink",
            alignItems: "center",
            justifyContent: "center",
      },
      textBox: {
            backgroundColor: "white",
            height: 55,
            width: "90%",
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 8,
            padding: 3,
            paddingLeft: 8,
            margin: 5
      },
      innerText: {
            color: "#000",
      },
      innerInput: {
            color: "#000",
      },
      buttonContainer: {
            flex: .5,
            backgroundColor: "yellow",
            width: "100%",
            justifyContent: "flex-start",
            alignItems: "center", //

      },
      iconColor: "#000",
      button: {
            height: 48,
            width: 342,
            backgroundColor: "red",
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center", //
            marginTop: 20,

      },
      ButtonText: {
            fontSize: 19,
            fontWeight: 700,
            color: "#000"
      },
      SignupBottom: {
            flex: .5,
            width: "100%",
            flexDirection: "column",
            backgroundColor: "red",
            alignItems: "center",
            justifyContent: "flex-start"

      },
      SignupBottomText: {
            color: "#000"
      },

      SocialSignupButton: {
            flex: 1,
            flexDirection: "row", // or "row"
            width: '100%',
            backgroundColor: "#fff",
            alignItems: 'flex-start', // Optional: Align items horizontally
            justifyContent: "center", // Optional: Align items vertically
            padding: 10, // Optional: Add padding
      },
      SocialButton: {
            height: 60,
            backgroundColor: "#fff",
            width: 80,
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            margin: 10
      }

};

const darkTheme = {
      container: {
            flex: 1,
            width: "100%",
            backgroundColor: "blue",
            alignItems: "flex-start",
            justifyContent: "center",
      },
      headText: {
            fontSize: 30,
            fontWeight: "700",
            color: "#fff",
            marginTop: 100
      },
      inputContainer: {
            flex: 1,
            width: "100%",
            backgroundColor: "pink",
            alignItems: "center",
            justifyContent: "center",
      },
      textBox: {
            backgroundColor: "black",
            height: 55,
            width: "90%",
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 8,
            padding: 3,
            paddingLeft: 8,
            margin: 5
      },
      innerText: {
            color: "#fff",
      },
      innerInput: {
            color: "#fff",
      },
      buttonContainer: {
            flex: .5,
            backgroundColor: "yellow",
            width: "100%",
            justifyContent: "flex-start",
            alignItems: "center", //

      },
      iconColor: "#fff",
      button: {
            height: 48,
            width: 342,
            backgroundColor: "red",
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center", //
            marginTop: 20,

      },
      ButtonText: {
            fontSize: 19,
            fontWeight: 700,
            color: "#fff"
      },
      SignupBottom: {
            flex: .5,
            width: "100%",
            flexDirection: "column",
            backgroundColor: "red",
            alignItems: "center",
            justifyContent: "flex-start"

      },
      SignupBottomText: {
            color: "#000"
      },

      SocialSignupButton: {
            flex: 1,
            flexDirection: "row", // or "row"
            width: '100%',
            backgroundColor: "#fff",
            alignItems: 'flex-start', // Optional: Align items horizontally
            justifyContent: "center", // Optional: Align items vertically
            padding: 10, // Optional: Add padding
      },
      SocialButton: {
            height: 60,
            backgroundColor: "#fff",
            width: 80,
            borderColor: "black",
            borderWidth: 1,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            margin: 10
      }
};


export default useTheme;
