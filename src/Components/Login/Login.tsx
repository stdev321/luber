import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from './LoginStyle';
import { View, TextInput, Image, Text, Pressable, ScrollView } from 'react-native';

interface Props{ 
    navigation: any
}

const Login = ({ navigation}: Props) => {
    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <View style={styles.subContainer}>
                    <Image
                        style={styles.shadowProps}
                        source={require('../../../assets/favicon.png')}
                    />
                    <Text style={styles.textLabel}>Welcome to Luber Ride</Text>
                    <TextInput
                        style={[styles.input, styles.shadowProps]}
                        onChangeText={() => { console.log("Demo"); }}
                        placeholder='Email'
                    />
                    <TextInput
                        style={[styles.input, styles.shadowProps]}
                        onChangeText={() => { console.log("Demo"); }}
                        placeholder="Password"
                    />
                    <Pressable style={styles.buttonStyle} onPress={() => { navigation.navigate("Home") }} >
                        <Text style={styles.buttonTextStyle}>Login</Text>
                    </Pressable>
                    <Pressable onPress={() => { navigation.navigate("Register") }}>
                        <Text style={styles.buttonTextStyle}>Create One</Text>
                    </Pressable>
                </View>
                <View style={styles.terms}>
                    <Text style={styles.terms}>
                        Privacy | Terms
                    </Text>
                </View>
            </ScrollView >
        </SafeAreaView>
    );
}

export default Login;
