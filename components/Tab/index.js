import React from "react";
import { StyleSheet, Platform, View, Image } from "react-native";

import { AppText as Text } from "..";

import allBid from "../../assets/all_bid.png";
import waiting from "../../assets/waiting.png";
import myBid from "../../assets/my_bid.png";

export default () => (
  <View style={styles.view}>
    <View style={styles.item}>
      <Image style={styles.image} source={allBid} />
      <Text style={styles.textActive}>Все заявки</Text>
    </View>
    <View style={styles.item}>
      <Image style={styles.image} source={waiting} />
      <Text style={styles.text}>Ожидают</Text>
    </View>
    <View style={styles.item}>
      <Image style={styles.image} source={myBid} />
      <Text style={styles.text}>Мои заявки</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  view: {
    backgroundColor: "white",
    width: "100%",
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 15,
    paddingBottom: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 0,
    left: 0,
    borderTopWidth: 1,
    borderColor: "rgba(175, 177, 184, 0.8)",
    //boxSizing: "border-box"
    // ...Platform.select({
    //   ios: {
    //     shadowColor: "black",
    //     shadowOffset: {
    //       height: 10
    //     },
    //     shadowOpacity: 1
    //   },
    //   android: {
    //     elevation: 15
    //   }
    // })
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.5,
    color: "#7C8186"
  },
  textActive: {
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.5,
    color: "#2270B3"
  },
  image: {
    marginBottom: 3,
    width: 24,
    height: 24
  }
});
