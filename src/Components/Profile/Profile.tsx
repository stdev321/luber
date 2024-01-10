import React, { useState, useCallback } from "react";
import {
  Text,
  View,
  Pressable,
  FlatList,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./ProfileStyle";
import ButtonPrimary from "./../../Atoms/Button/ButtonPrimary";
import TextField from "./../../Atoms/TextInput/TextField";
import { StatusBar } from "expo-status-bar";

interface Props {
  navigation: any; // Type for navigation prop
}

type ItemProps = { label: string; value: string };

const Item = ({ label, value }: ItemProps) => (
  <Pressable onPress={() => console.log("clicked")}>
    <View style={styles.item}>
      <View style={styles.itemContent}>
        <Text style={styles.placeHolderText}>{label}</Text>
        {value && <Text style={styles.text}>{value}</Text>}
      </View>
    </View>
  </Pressable>
);

const Profile = ({ navigation }: Props) => {
  const [showEdit, setShowEdit] = useState(false);
  const [loading, setLoading] = useState(false); // Added loading state
  const [updateLoading, setUpdateLoading] = useState(false);

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

  const handleLogout = useCallback(() => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Logout",
          onPress: async () => {
            setLoading(true); // Show loading spinner
            setTimeout(() => {
              navigation.navigate("Front");
              setLoading(false);
            }, 2000);
          },
        },
      ],
      { cancelable: true }
    );
  }, [navigation]);


  const handleUpdate = () => {
    setUpdateLoading(true);
    setTimeout(() => {
      setShowEdit(false);
      setUpdateLoading(false);
    }, 1000); // Change the delay as needed
  };

  const handleChange = (text: string) => {
    console.log({ text });
  };

  return (
    <View>
      <StatusBar />
      <View style={styles.profileWrapper}>
        <Pressable
          style={{ paddingVertical: 20 }}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Image
            style={{ width: 25, height: 25 }}
            source={require("../../../assets/back.png")}
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
                style={styles.text}
                  onChange={(text) => handleChange(text)}
                  value={data.value}
                  placeholder={`Enter your ${data.label}`}
                />
              </View>
            ))}
            {/* <ButtonPrimary title="Update" onPress={() => setShowEdit(false)} /> */}
            <Pressable
            style={styles.logoutButton}
            onPress={handleUpdate}
            disabled={updateLoading} // Disable button during loading
          >
            {updateLoading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <Text style={styles.logoutButtonText}>Update</Text>
            )}
          </Pressable>
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
            <Pressable
              style={styles.logoutButton}
              onPress={handleLogout}
              disabled={loading} // Disable button during loading
            >
              {loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={styles.logoutButtonText}>Logout</Text>
              )}
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
};

export default Profile;
