import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { mapStyle } from "../../GlobalStyle/MapStyle";
import { styles } from "./MapViewStyle";
import { StatusBar } from "expo-status-bar";
import ButtonPrimary from "../../Atoms/Button/ButtonPrimary";

interface Props {
  navigation: any;
}

const FullMapView = ({ navigation }: Props) => {
  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<any>(null);
  const [lati, setLati] = useState(null);
  const [longi, setLongi] = useState(null);
  const [markerLati, setMarkerLati] = useState(null);
  const [markerLongi, setMarkerLongi] = useState(null);
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
      // setLocation(initialLocation);

      // Subscribe to location updates
      const locationSubscription = await Location.watchPositionAsync(
        { accuracy: Location.Accuracy.High, timeInterval: 1000 },
        (newLocation: any) => {
          setLocation(newLocation);
          setLati(newLocation.coords.latitude);
          setLongi(newLocation.coords.longitude);
          setHeading(newLocation.coords.heading);
          setMarkerLati(newLocation.coords.latitude);
          setMarkerLongi(newLocation.coords.longitude);
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
      <StatusBar style="light" backgroundColor="#000" />
      <View style={styles.container}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          region={{
            latitude: lati !== null ? lati : 30.742162,
            longitude: longi !== null ? longi : 76.778599,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            // latitudeDelta:
            //   Math.abs(lati !== null ? lati : 30.742162) + 0.05,
            // longitudeDelta:
            //   Math.abs(longi !== null ? longi : 76.778599) + 0.05,
          }}
          customMapStyle={mapStyle}
          maxZoomLevel={15}
          minZoomLevel={10}
          maxDelta={0.08}
          showsUserLocation
          onRegionChange={(region: any) => {
            setMarkerLati(region.latitude);
            setMarkerLongi(region.longitude);
          }}
          // onRegionChangeComplete={(region: any) => {
          //   setLati(region.latitude);
          //   setLongi(region.longitude);
          // }}
        >
          <Marker
            key={1}
            coordinate={{
              latitude: markerLati !== null ? markerLati : 30.742162,
              longitude: markerLongi !== null ? markerLongi : 76.778599,
            }}
            title={"Demo"}
            description={"Demo For Testing"}
            // image={require("../../../assets/locationpin.png")}
            icon={require("../../../assets/locationpin.png")}
            // rotation={heading}
          />
        </MapView>
        <View style={styles.bottomContainer}>
          <View style={styles.bottomButtonContainer}>
            <View style={{ width: 150 }}>
              <ButtonPrimary title="Select" />
            </View>
            <View style={{ width: 150 }}>
              <ButtonPrimary
                title="Cancel"
                onPress={() => {
                  navigation.navigate("Home");
                }}
              />
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
    </View>
  );
};

export default FullMapView;
