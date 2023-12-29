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
                    <Text style={styles.text}>Enter your Email for verification</Text>
                    <Text style={styles.subText}>This number will be used for all ride-related communication. You shall recive an SMS with code for verification.</Text>
                    <TextInput
                        style={[styles.input, styles.shadowProps]}
                        onChangeText={() => { console.log("Demo"); }}
                        placeholder='Email'
                    />
                    <Pressable style={styles.buttonStyle} onPress={() => { navigation.navigate("Home") }} >
                        <Text style={styles.buttonTextStyle}>Next</Text>
                    </Pressable>
                </View>
            </ScrollView >
        </SafeAreaView>
    );
}

export default Login;
