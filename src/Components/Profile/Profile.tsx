import {
  Text,
  View,
  Button,
  Pressable,
  FlatList,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./ProfileStyle";
import ButtonPrimary from "./../../Atoms/Button/ButtonPrimary";
import TextField from "./../../Atoms/TextInput/TextField";

interface Props {
  navigation: any; // Type for navigation prop
}

type ItemProps = { label: string; value: string };

const Item = ({ label, value }: ItemProps) => (
  <Pressable onPress={() => console.log("clicked")}>
    <View style={styles.item}>
      <View style={styles.itemContent}>
        {value && <Text>{value}</Text>}
        <Text>{label}</Text>
      </View>
      <Icon name="chevron-forward-outline" size={22} />
    </View>
  </Pressable>
);

const Profile = ({ navigation }: Props) => {
  const [showEdit, setShowEdit] = useState(false);
  const [userData, setUserData] = useState([
    {
      id: 1,
      label: "Name",
      value: "John wick",
    },
    {
      id: 2,
      label: "Phone",
      value: "+91 9459644358",
    },
    {
      id: 3,
      label: "Email",
      value: "demo@yopmail.com",
    },
    {
      id: 4,
      label: "Password",
      value: "",
    },
  ]);

  const handleLogout = () => {
    navigation.goBack();
  };

  const handleChange = (text: string) => {
    console.log({ text });
  };

  return (
    <SafeAreaView>
      <View style={styles.profileWrapper}>
        <Pressable>
          <Icon
            name="arrow-back"
            onPress={() =>
              showEdit ? setShowEdit(false) : navigation.navigate("Home")
            }
            size={22}
          />
        </Pressable>
        <View style={styles.header}>
          <Text style={styles.userName}>Your account details</Text>
          {!showEdit && (
            <Icon
              size={24}
              name="create-outline"
              onPress={() => setShowEdit(true)}
            />
          )}
        </View>
        {showEdit ? (
          <View>
            {userData.map((data) => (
              <View key={data.id} style={styles.inputWrap}>
                <Text style={styles.label}>{data.label}:</Text>
                <TextField
                  onChange={(text) => handleChange(text)}
                  value={data.value}
                  placeholder={`Enter your ${data.label}`}
                />
              </View>
            ))}
            <ButtonPrimary title="Update" onPress={() => setShowEdit(false)} />
          </View>
        ) : (
          <View>
            <FlatList
              data={userData}
              renderItem={({ item }) => (
                <Item label={item.label} value={item.value} />
              )}
              keyExtractor={(item: any) => item.id}
            />
            <ButtonPrimary title="Logout" onPress={() => navigation.goBack()} />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Profile;
