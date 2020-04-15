import React from "react";
import { StyleSheet, View, Image } from "react-native";

import { AppText as Text } from "../..";

import location from "../../../assets/location.png";
import arrow from "../../../assets/arrow.png";

export default ({ title, address, distance, quantity, company, price }) => (
  <View style={styles.view}>
    <Text style={styles.title}>{title}</Text>
    <View style={styles.rowList}>
      <Image style={styles.image1} source={location}/>
      <Text style={styles.text1}>{address[0]}</Text>
      <Text style={styles.text2}></Text>
      <Text style={styles.text1}>{distance[0]}</Text>
    </View>
    <View style={styles.rowList}>
      <Image style={styles.image2} source={arrow}/>
      <Text style={styles.text3}>{quantity}</Text>
    </View>
    <View style={styles.rowList}>
      <Image style={styles.image1} source={location}/>
      <Text style={styles.text1}>{address[1]}</Text>
      <Text style={styles.text2}></Text>
      <Text style={styles.text1}>{distance[1]}</Text>
    </View>
    <View style={styles.bottom}>
      <Text style={styles.text3}>ООО <Text>&laquo;</Text>{company}<Text>&raquo;</Text></Text>
      <Text style={styles.text4}>{price} <Text>&#8381;</Text></Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  view: {
    padding: 18,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(175, 177, 184, 0.8)",
    //boxSizing: "border-box",
    borderRadius: 10,
    marginBottom: 16
  },
  title: {
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 16
  },
  rowList: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 6
  },
  text1: {
    color: "#333333"
  },
  text2: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    marginLeft: 8,
    marginRight: 8,
    backgroundColor: "#BDBDBD"
  },
  text3: {
    fontSize: 14,
    lineHeight: 16,
    color: "#828282"
  },
  text4: {
    fontWeight: "bold",
    fontSize: 18,
    lineHeight: 21,
    color: "#333333"
  },
  bottom: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  image1: {
    marginRight: 15,
    width: 11,
    height: 20
  },
  image2: {
    marginLeft: 3,
    marginRight: 23,
    width: 5,
    height: 11
  }
});
