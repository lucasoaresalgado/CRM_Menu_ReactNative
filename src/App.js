import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/header";
import MenuBar from "./components/menuBar";

function Link(props) {
  return <Text {...props} role="link" style={[styles.link, props.style]} />;
}

function App() {
  return (
    <View style={styles.app}>
      <Header />
      <MenuBar />
      <View style={styles.header}></View>
      <Text style={styles.text}>
        This is an example of an app built with{" "}
        <Link href="https://github.com/facebook/create-react-app">
          Create React App
        </Link>{" "}
        and{" "}
        <Link href="https://github.com/necolas/react-native-web">
          React Native for Web
        </Link>
      </Text>
      <Text style={styles.text}>
        To get started, edit{" "}
        <Link href="https://codesandbox.io/s/q4qymyp2l6/" style={styles.code}>
          src/App.js
        </Link>
        .
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  logo: {
    height: 80
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  }
});

const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: "#2196F3",
    borderRadius: 2
  },
  text: {
    color: "#fff",
    fontWeight: "500",
    padding: 8,
    textAlign: "center",
    textTransform: "uppercase"
  }
});

export default App;
