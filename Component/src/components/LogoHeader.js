import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

function LogoHeader(props) {
  return (
    <View style={[styles.rect, props.style]}>
      <Text style={styles.text}>bx</Text>
      <View style={styles.rect2}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  rect: {},
  text: {
    color: "rgba(255,255,255,1)",
    fontSize: 36,
    alignSelf: "center"
  },
  rect2: {
    backgroundColor: "rgba(5,5,5,1)",
    flex: 1,
    marginBottom: 1,
    marginTop: 2
  }
});

export default LogoHeader;
