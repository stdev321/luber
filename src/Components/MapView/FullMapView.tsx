import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import * as Location from "expo-location";
import { mapStyle } from "../../GlobalStyle/MapStyle";
import { styles } from "./MapViewStyle";
import { StatusBar } from "expo-status-bar";
import ButtonPrimary from "../../Atoms/Button/ButtonPrimary";

interface Props {
  navigation: any;
}

const FullMapView = ({ navigation } : Props) => {
  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<any>(null);
  const [lati, setLati] = useState(null);
  const [longi, setLongi] = useState(null);
  const [heading, setHeading] = useState(1);

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
  return (
    <View style={styles.container}>
      <StatusBar />
      {lati !== null && longi !== null ? (
        <View style={styles.container}>
          <MapView
            style={styles.map}
            region={{
              latitude: lati,
              longitude: longi,
              latitudeDelta: Math.abs(lati - 30.742162) + 0.05,
              longitudeDelta: Math.abs(longi - 76.778599) + 0.05,
            }}
            customMapStyle={mapStyle}
            maxZoomLevel={15}
            minZoomLevel={10}
            maxDelta={0.08}
          >
            <Marker
              key={1}
              coordinate={{ latitude: lati, longitude: longi }}
              title={"Demo"}
              description={"Demo For Testing"}
              image={require("../../../assets/locationpin.png")}
              icon={require("../../../assets/locationpin.png")}
              rotation={heading}
            />
          </MapView>
          <View style={styles.bottomContainer}>
            <View style={styles.bottomButtonContainer}>
              <View style={{ width: 150 }}>
                <ButtonPrimary title="Select" />
              </View>
              <View style={{ width: 150 }}>
                <ButtonPrimary title="Cancel" onPress={() => {navigation.navigate("Home")}} />
              </View>
            </View>
            <View style={styles.suggestLocation}>
              <Image
                style={{ width: 30, height: 30 }}
                source={require("../../../assets/locationpin.png")}
              />
              <Text style={{ fontSize: 20, marginStart: 20 }}>
                Mohali Railway Station
              </Text>
            </View>
          </View>
        </View>
      ) : (
        <Text>Loading</Text>
      )}
    </View>
  );
};

export default FullMapView;
