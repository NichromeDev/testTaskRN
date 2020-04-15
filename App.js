import React, { Fragment } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import Constants from "expo-constants";

import { AppText as Text, Card, Tab } from "./components";

const array = [
  {
    title: "сегодня до 14:00",
    address: ["Пушкинская 182", "Пушкинская 185"],
    distance: ["500м", "600м"],
    quantity: "+ еще 3 адреса",
    company: "Фармакон",
    price: "500"
  },
  {
    title: "сегодня до 14:00",
    address: ["Пушкинская 145", "Пушкинская 674"],
    distance: ["716м", "1250м"],
    quantity: "+ еще 3 адреса",
    company: "Фармакон",
    price: "980"
  }
];

const CardArray = array.map((item, i) => (
  <Card
    key={i}
    title={item.title}
    address={item.address}
    distance={item.distance}
    quantity={item.quantity}
    company={item.company}
    price={item.price}
  />
));

export default () => (
  <Fragment>
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Свободные заявки</Text>
      <View style={styles.buttonList}>
        <View style={styles.buttonTextActive}>
          <Text style={styles.textActive}>Все</Text>
          <Text style={styles.number}>9</Text>
        </View>
        <View style={styles.buttonText}>
          <Text style={styles.text}>На сегодня</Text>
          <Text style={styles.number}>6</Text>
        </View>
        <View style={styles.buttonText}>
          <Text style={styles.text}>На завтра</Text>
          <Text style={styles.number}>2</Text>
        </View>
      </View>
      {CardArray}
    </ScrollView>
    <Tab />
  </Fragment>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 40,
    flexDirection: "column",
    backgroundColor: "#fff"
  },
  title: {
    width: "100%",
    textAlign: "center",
    marginTop: 40,
    marginBottom: 40,
    letterSpacing: 0.5
  },
  buttonList: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    height: 32,
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 25
  },
  buttonText: {
    padding: 5,
    height: "100%",
    borderRadius: 16,
    borderWidth: 0,
    borderColor: "rgba(189, 189, 189, 0.15)",
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.5,
    color: "#2270B3",
    backgroundColor: "rgba(189, 189, 189, 0.15)",
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonTextActive: {
    padding: 5,
    height: "100%",
    borderRadius: 16,
    borderWidth: 0,
    borderColor: "#2270B3",
    fontSize: 14,
    lineHeight: 16,
    letterSpacing: 0.5,
    color: "white",
    backgroundColor: "#2270B3",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden"
  },
  textActive: {
    color: "white"
  },
  text: {
    color: "#2270B3"
  },
  number: {
    paddingTop: 1,
    textAlign: "center",
    color: "#437787",
    width: 16,
    height: 16,
    borderWidth: 0,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    marginLeft: 3,
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 0.5,
  }
});
