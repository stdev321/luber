import { View, Text, Pressable, ScrollView, FlatList } from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./HistoryStyles";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";

type IRideHistory = {
  id: number;
  dataTime: string;
  vehicalType: string;
  location: string;
};

interface ItemProps {
  data: IRideHistory;
}

const Item = ({ data: { dataTime, vehicalType, location } }: ItemProps) => (
  <View style={styles.historyWrapper}>
    <View>
      <View style={styles.dateTimeContainer}>
        <Text style={styles.dateTimeText}>{dataTime}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.vehicleTypeText}>{vehicalType}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.addressText}>{location}</Text>
      </View>
    </View>
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Text>$45</Text>
      <View>
        <Icon size={34} name="person-circle-outline" />
      </View>
    </View>
    {/* {<Text style={styles.cancelledBadge}>Cancelled</Text>} */}
  </View>
);

interface Props {
  navigation: any;
}

const History = ({ navigation }: Props) => {
  const [rideHistory] = useState([
    {
      id: 1,
      dataTime: "Sat, Apr 08, 11:03",
      vehicalType: "Mini to",
      location: "Bhawani nagar",
    },
    {
      id: 2,
      dataTime: "Sat, Apr 08, 11:03",
      vehicalType: "Mini to",
      location: "Bhawani nagar",
    },
    {
      id: 3,
      dataTime: "Sat, Apr 08, 11:03",
      vehicalType: "Mini to",
      location: "Bhawani nagar",
    },
    {
      id: 4,
      dataTime: "Sat, Apr 08, 11:03",
      vehicalType: "Mini to",
      location: "Bhawani nagar",
    },
    {
      id: 5,
      dataTime: "Sat, Apr 08, 11:03",
      vehicalType: "Mini to",
      location: "Bhawani nagar",
    },
    {
      id: 6,
      dataTime: "Sat, Apr 08, 11:03",
      vehicalType: "Mini to",
      location: "Bhawani nagar",
    },
    {
      id: 7,
      dataTime: "Sat, Apr 08, 11:03",
      vehicalType: "Mini to",
      location: "Bhawani nagar",
    },
    {
      id: 8,
      dataTime: "Sat, Apr 08, 11:03",
      vehicalType: "Mini to",
      location: "Bhawani nagar",
    },
  ]);

  return (
    <View style={{flex:1}}>
      <StatusBar />
      <View style={styles.container}>
        <Pressable
          style={styles.backBtn}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Image
            style={{ width: 25, height: 25 }}
            source={require("../../../assets/back.png")}
          />
        </Pressable>
        <View style={styles.heading}>
          <Text style={styles.mainHeaderTitle}>History</Text>
        </View>
      </View>
        <FlatList
          style={{ paddingHorizontal: 20 }}
          data={rideHistory}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }: { item: IRideHistory }) => (
            <Item data={item} />
          )}
          keyExtractor={(item: any) => item.id.toString()}
        />
      
    </View>
  );
};

export default History;
