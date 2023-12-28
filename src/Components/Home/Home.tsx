import React, { useState, useEffect } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, Text, View, TextInput, Pressable, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { mapStyle } from '../../GlobalStyle/MapStyle';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import { styles } from './HomeStyle';

interface Props{ 
    navigation: any
}

const {width, height} = Dimensions.get('window')

const Home = ({ navigation }: Props) => {
    const [location, setLocation] = useState<any>(null);
    const [errorMsg, setErrorMsg] = useState<any>(null);
    const [lati, setLati] = useState(null);
    const [longi, setLongi] = useState(null);
    const [heading, setHeading] = useState(1)

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            // Get the initial location
            let initialLocation = await Location.getCurrentPositionAsync({});
            setLocation(initialLocation);

            // Subscribe to location updates
            const locationSubscription = await Location.watchPositionAsync(
                { accuracy: Location.Accuracy.High, timeInterval: 1000 },
                (newLocation: any) => {
                    console.log(newLocation);
                    setLocation(newLocation);
                    setLati(newLocation.coords.latitude);
                    setLongi(newLocation.coords.longitude);
                    setHeading(newLocation.coords.heading)
                }
            );

            return () => {
                // Unsubscribe from location updates when the component unmounts
                if (locationSubscription) {
                    locationSubscription.remove();
                }
            };
        })();
    }, []);

    return (
        <SafeAreaView>
            <ScrollView >
                <View style={styles.container}>
                    <View style={styles.topSearchBox}>
                        <Pressable onPress={() => { navigation.toggleDrawer() }} style={styles.searchDrawerMenu}>
                            <Image
                                source={require('../../../assets/menu.png')}
                            />
                        </Pressable>
                        <TextInput
                            style={styles.searchInputBox}
                            onChangeText={() => { console.log("Demo"); }}
                            placeholder='Search Pickup Location'
                        />
                        <Pressable style={styles.searchProfilebutton}>
                            <Image
                                style={{ width: "100%", height: "100%" }}
                                source={require('../../../assets/user.png')}
                            />
                        </Pressable>
                    </View>
                    <View style={styles.MapViewContainer}>
                        {lati !== null && longi !== null ?
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
                                    icon={require('../../../assets/carpin1.png')}
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
                            : <Text>Loading</Text>}
                    </View>
                    <View>
                        <FlatList data={[1, 2, 3, 4]} horizontal renderItem={() => {
                            return (
                                <View style={{width:width, height: "20%"}}>
                                    <TouchableOpacity style={{ width: "90%", height: "90%", backgroundColor: "#fff" }}>
                                    <Text>Hello</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        }} />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;
