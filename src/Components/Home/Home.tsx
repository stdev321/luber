import React, { useState, useEffect } from "react";
import {
  ScrollView,
  Text,
  View,
  Pressable,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { mapStyle } from "../../GlobalStyle/MapStyle";
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import Icon from "react-native-vector-icons/Entypo";
import * as Location from "expo-location";
import { styles } from "./HomeStyle";
import { StatusBar } from "expo-status-bar";
import { Modal } from "react-native";

interface Props {
  navigation: any;
}

const Home = ({ navigation }: Props) => {
  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<any>(null);
  const [lati, setLati] = useState(null);
  const [longi, setLongi] = useState(null);
  const [heading, setHeading] = useState(1);
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      // Get the initial location
      let initialLocation = await Location.getCurrentPositionAsync({});
      setLocation(initialLocation);

      // Subscribe to location updates
      const locationSubscription = await Location.watchPositionAsync(
        { accuracy: Location.Accuracy.High, timeInterval: 1000 },
        (newLocation: any) => {
          setLocation(newLocation);
          setLati(newLocation.coords.latitude);
          setLongi(newLocation.coords.longitude);
          setHeading(newLocation.coords.heading);
        }
      );

      return () => {
        if (locationSubscription) {
          locationSubscription.remove();
        }
      };
    })();
  }, []);

  const sliderData = [
    {
      title: "Daily",
      icon: require("../../../assets/car.png"),
    },
    {
      title: "Bike",
      icon: require("../../../assets/bike.png"),
    },
    {
      title: "Three Wheeler",
      icon: require("../../../assets/rickshaw.png"),
    },
    {
      title: "Four Wheeler",
      icon: require("../../../assets/car.png"),
    },
    {
      title: "Four Wheeler",
      icon: require("../../../assets/car.png"),
    },
  ];
  
  const recentLocationsData = [
    { id: 1, location: "Patiala Bus Stand Sheran Wala Gate, Patiala" },
    { id: 2, location: "Bus Stand Sector 43 ISBT Rd, Sector 43 B" },
  ];

  const renderSliderItem = ({ item, index }: { item: any; index: number }) => {
    const isActive = index === activeItemIndex; // Check if it's the active item

    return (
      <View style={styles.sliderbar}>
        <Pressable
          style={[
            styles.sliderBarTouchable,
            isActive && styles.activeItem, // Apply the activeItem style
          ]}
          onPress={() => setActiveItemIndex(index)} // Set the active item on press
        >
          <Image style={{ width: 32, height: 32 }} source={item.icon} />
          <Text style={[styles.sliderText, isActive && styles.activeText]}>
            {item.title}
          </Text>
          {isActive && <View style={styles.activeTextUnderline} />}
        </Pressable>
      </View>
    );
  };

  return (
    <View>
      <StatusBar style="light" backgroundColor="#000" />
      <View style={styles.container}>
        <View style={styles.topSearchBox}>
          <Pressable
            onPress={() => {
              navigation.toggleDrawer();
            }}
            style={styles.searchDrawerMenu}
          >
            <Image source={require("../../../assets/menu.png")} />
          </Pressable>
          <Pressable
            style={styles.searchInputBox}
            onPress={() => {
              navigation.navigate("SelectPickLocation");
            }}
          >
            <Image
              style={styles.greenDot}
              source={require("../../../assets/green-dot.png")}
            />
            <Text style={{ fontSize: 15, marginStart: 10, color: "#424242" }}>
              Search Pickup
            </Text>
          </Pressable>
          <Pressable
            style={styles.searchProfilebutton}
            onPress={() => {
              navigation.navigate("Profile");
            }}
          >
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../../../assets/user.png")}
            />
          </Pressable>
        </View>
        <View style={styles.MapViewContainer}>
          <MapView
            provider={PROVIDER_GOOGLE}
              style={styles.map}
              region={{
                latitude: lati !== null ? (lati + 30.742162) / 2 : 30.742162,
                longitude: longi !== null ? (longi + 76.778599) / 2 : 76.778599,
                latitudeDelta: Math.abs( lati !== null ? lati - 30.742162 : 30.742162) + 0.05,
                longitudeDelta: Math.abs(longi !== null ? longi - 76.778599 : 76.778599) + 0.05,
              }}
              customMapStyle={mapStyle}
              // maxZoomLevel={15}
              minZoomLevel={10}
              maxDelta={0.08}
            >
              <Polyline
                coordinates={[
                  {
                    latitude: lati !== null ? lati : 30.742162,
                    longitude: longi !== null ? longi : 76.778599,
                  },
                  { latitude: 30.742162, longitude: 76.778599 },
                ]}
                strokeWidth={3}
                strokeColor="white"
              />

              <Marker
                key={1}
                coordinate={{ latitude: lati !== null ? lati : 30.742162,
                  longitude: longi !== null ? longi : 76.778599, }}
                title={"Demo"}
                description={"Demo For Testing"}
                icon={require("../../../assets/carpin1.png")}
                rotation={heading}
              />
              <Marker
                key={2}
                coordinate={{ latitude: 30.742162, longitude: 76.778599 }}
                title={"Demo"}
                description={"Demo For Testing"}
                // image={require('../../../assets/carpin1.png')}
                // rotation={heading}
              />
            </MapView>
        </View>
        
        <View style={styles.sliderBox}>
          <FlatList
            data={sliderData}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
              renderSliderItem({ item, index }) // Assuming renderSliderItem is your rendering function
            )}
          />
        </View>

        <View style={styles.bottomView}>
          <View style={{ height: 50, margin: 5 }}>
            <Pressable
              style={styles.bottomViewInput}
              onPress={() => {
                navigation.navigate("SelectDestLocation");
              }}
            >
              <Image
                style={{ width: 15, height: 15 }}
                source={require("../../../assets/search.png")}
              />
              <Text
                style={{ fontSize: 19, marginStart: 20, fontWeight: "500" }}
              >
                Search Destination
              </Text>
            </Pressable>
          </View>
          {recentLocationsData && recentLocationsData.length ? recentLocationsData.map((item: any, index : number) => { 
            return (
              <View key={index} style={{ height: 40 }}>
              <Pressable
                style={[
                  styles.recentLocation,
                  index === recentLocationsData.length - 1 && {
                    borderBottomWidth: 0,
                  },
                ]}
              >
                <Image
                  style={{ width: 16, height: 22 }}
                  source={require("../../../assets/location.png")}
                />
                <Text style={{ fontSize: 14, marginStart: 20 }}>
                  {item.location}
                </Text>
              </Pressable>
              </View>
            )
          }) : ("Loading...")}
        </View>
        
        <View style={styles.inviteWrap}>
          <View>
            <Text style={styles.inviteHeading}>invite your friends to </Text>
            <Text style={styles.inviteHeading}>try Luber.</Text>
            <View>
              <Text style={styles.inviteCode}>GGG7GWU</Text>
            </View>
            {/* <Text style={styles.shareCode}>Share invite code</Text> */}
            <Pressable onPress={() => setIsModalVisible(true)}>
              <Text style={styles.shareCode}>Share invite code</Text>
            </Pressable>
          </View>
          <Modal
            animationType="fade"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={() => setIsModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text>Your invite code: GGG7GWU</Text>
                <Text style={styles.notAvailableText}>
                  Sorry, this functionality is not available at the moment.
                </Text>
                <Pressable
                  style={styles.closeModalBtn}
                  onPress={() => setIsModalVisible(false)}
                >
                  <Text style={styles.closeBtnTxt}>Close</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <View>
            <Image
              style={styles.inviteImg}
              source={require("../../../assets/invite-friends.jpg")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Home;
