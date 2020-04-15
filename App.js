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
        <Text style={styles.buttonTextActive}>
          Все<Text style={styles.buttonNumberActive}>9</Text>
        </Text>
        <Text style={styles.buttonText}>
          На сегодня<Text style={styles.buttonNumber}>6</Text>
        </Text>
        <Text style={styles.buttonText}>
          На завтра<Text style={styles.buttonNumber}>2</Text>
        </Text>
      </View>
      {CardArray}
    </ScrollView>
    <Tab/>
  </Fragment>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingBottom: "400px",
    flexDirection: "column",
    backgroundColor: "#fff"
  },
  title: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "40px",
    marginBottom: "40px",
    letterSpacing: "0.5px"
  },
  buttonList: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    height: "32px",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: "25px"
  },
  buttonText: {
    padding: "9px",
    height: "100%",
    borderRadius: "16px",
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "0.5px",
    color: "#2270B3",
    backgroundColor: "rgba(189, 189, 189, 0.15)",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonNumber: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "8px",
    height: "16px",
    minWidth: "16px",
    borderRadius: "50%",
    backgroundColor: "white",
    fontSize: "12px",
    lineHeight: "14px",
    letterSpacing: "0.5px",
    color: "#437787"
  },
  buttonTextActive: {
    padding: "9px",
    height: "100%",
    borderRadius: "16px",
    fontSize: "14px",
    lineHeight: "16px",
    letterSpacing: "0.5px",
    color: "white",
    backgroundColor: "#2270B3",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonNumberActive: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "8px",
    height: "16px",
    minWidth: "16px",
    borderRadius: "50%",
    backgroundColor: "white",
    fontSize: "12px",
    lineHeight: "14px",
    letterSpacing: "0.5px",
    color: "#437787"
  }
});
