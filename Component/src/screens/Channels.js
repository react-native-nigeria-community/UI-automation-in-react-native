import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  StatusBar
} from "react-native";

function Channels(props) {
  return (
    <View style={styles.rect}>
      <View style={styles.textColumn}>
        <Text style={styles.text}>
          See what&#39;s happening in the world right now.
        </Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Signup")}
          style={styles.button}
        >
          <Text style={styles.text2}>Create account</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textColumnFiller}></View>
      <View style={styles.rect2}>
        <StatusBar barStyle="dark-content" hidden={true}></StatusBar>
        <View style={styles.text3Row}>
          <Text style={styles.text3}>Have an account already?</Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Login")}
            style={styles.button2}
          >
            <Text style={styles.text4}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar barStyle="light-content" hidden={true}></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {
    flex: 1,
    backgroundColor: "rgba(21,31,40,1)"
  },
  text: {
    color: "rgba(255,255,255,1)",
    fontSize: 36,
    lineHeight: 50,
    textAlign: "left",
    marginLeft: 3,
    marginRight: 2
  },
  button: {
    height: 81,
    backgroundColor: "rgba(29,161,242,1)",
    borderRadius: 100,
    justifyContent: "center",
    marginTop: 120
  },
  text2: {
    color: "rgba(255,255,255,1)",
    fontSize: 24,
    alignSelf: "center"
  },
  textColumn: {
    marginTop: 233,
    marginLeft: 31,
    marginRight: 31
  },
  textColumnFiller: {
    flex: 1
  },
  rect2: {
    height: 39,
    marginBottom: 45,
    marginLeft: 28,
    marginRight: 28
  },
  text3: {
    color: "rgba(255,255,255,1)",
    fontSize: 20,
    marginTop: 4
  },
  button2: {
    width: 55,
    height: 29,
    marginLeft: 17
  },
  text4: {
    color: "#1da1f2",
    fontSize: 20,
    lineHeight: 50,
    marginTop: -11
  },
  text3Row: {
    height: 29,
    flexDirection: "row",
    marginTop: 9,
    marginRight: 24
  }
});

export default Channels;
