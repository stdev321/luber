import { View, Text, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./HistoryStyles";


interface Props {
  navigation: any;
}

const History = ({ navigation }: Props) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Pressable>
          <Icon
            name="arrow-back"
            onPress={() => navigation.navigate("Home")}
            size={22}
          />
        </Pressable>
        <View>
            <Text style={styles.mainHeader}>History</Text>
        </View>
        <View>
        <View style={styles.dateTimeContainer}>
            <Text style={styles.dateTimeText}>Sat, Apr 08, 11:03</Text>
        </View>
        <View style={styles.detailsContainer}>
            <Text style={styles.vehicleTypeText}>Mini to</Text>
            <Text style={styles.addressText}>Bhawani nagar </Text>
        </View>
        {/* {<Text style={styles.cancelledBadge}>Cancelled</Text>} */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default History;
