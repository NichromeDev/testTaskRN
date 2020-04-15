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
    paddingLeft: "25px",
    paddingRight: "25px",
    paddingTop: "15px",
    paddingBottom: "15px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    position: "fixed",
    bottom: "0",
    left: "0",
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: {
          height: 10
        },
        shadowOpacity: 1
      },
      android: {
        elevation: 15
      }
    })
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "0.5px",
    color: "#7C8186"
  },
  textActive: {
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "0.5px",
    color: "#2270B3"
  },
  image: {
    marginBottom: "3px",
    width: "24px",
    height: "24px"
  }
});
