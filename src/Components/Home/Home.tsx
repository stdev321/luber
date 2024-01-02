import React, { useState, useEffect } from "react";
import { ScrollView, Text, View, Pressable, Image, FlatList, TouchableOpacity } from "react-native";
import { mapStyle } from "../../GlobalStyle/MapStyle";
import MapView, { Marker, Polyline } from "react-native-maps";
import Icon from "react-native-vector-icons/Entypo";
import * as Location from "expo-location";
import { styles } from "./HomeStyle";
import { StatusBar } from "expo-status-bar";

interface Props {
  navigation: any;
}

const Home = ({ navigation }: Props) => {
  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<any>(null);
  const [lati, setLati] = useState(null);
  const [longi, setLongi] = useState(null);
  const [heading, setHeading] = useState(1);
  const [activeItemIndex, setActiveItemIndex] = useState(0); // State to track active item

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

  const renderSliderItem = ({ item, index }: { item: any; index: number }) => {
    const isActive = index === activeItemIndex; // Check if it's the active item

    return (
      <View style={styles.sliderbar}>
        <TouchableOpacity
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
        </TouchableOpacity>
      </View>
    );
  };


  return (
    <ScrollView>
      <StatusBar />
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
          {lati !== null && longi !== null ? (
            <MapView
              style={styles.map}
              region={{
                latitude: (lati + 30.742162) / 2,
                longitude: (longi + 76.778599) / 2,
                latitudeDelta: Math.abs(lati - 30.742162) + 0.05,
                longitudeDelta: Math.abs(longi - 76.778599) + 0.05,
              }}
              customMapStyle={mapStyle}
              maxZoomLevel={15}
              minZoomLevel={10}
              maxDelta={0.08}
            >
              <Polyline
                coordinates={[
                  { latitude: lati, longitude: longi },
                  { latitude: 30.742162, longitude: 76.778599 },
                ]}
                strokeWidth={3}
                strokeColor="white"
              />

              <Marker
                key={1}
                coordinate={{ latitude: lati, longitude: longi }}
                title={"Demo"}
                description={"Demo For Testing"}
                image={require("../../../assets/carpin1.png")}
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
          ) : (
            <Text>Loading</Text>
          )}
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
          <View style={{ height: 40 }}>
            <Pressable style={styles.recentLocation}>
              <Image
                style={{ width: 16, height: 22 }}
                source={require("../../../assets/location.png")}
              />
              <Text style={{ fontSize: 14, marginStart: 20 }}>
                Patiala Bus Stand Sheran Wala Gate,Patiala,
              </Text>
            </Pressable>
          </View>
          <View style={{ height: 40 }}>
            <Pressable style={styles.recentLocation}>
              <Image
                style={{ width: 16, height: 22 }}
                source={require("../../../assets/location.png")}
              />
              <Text style={{ fontSize: 14, marginStart: 20 }}>
                Bus Stand Sector 43 ISBT Rd, Sector 43 B,
              </Text>
            </Pressable>
          </View>
          <View style={{ height: 50 }}>
            <Pressable style={styles.recentLocation}>
              <Image
                style={{ width: 16, height: 22 }}
                source={require("../../../assets/location.png")}
              />
              <Text style={{ fontSize: 14, marginStart: 20 }}>Phase 9</Text>
            </Pressable>
          </View>
        </View>

        {/* <Image
          style={styles.bannerImage}
          source={require("../../../assets/loginbanner.png")}
        /> */}
      </View>
    </ScrollView>
  );
};

export default Home;
