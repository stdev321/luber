import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from './RegisterStyle';
import { View, TextInput, Image, Text, Pressable, ScrollView } from 'react-native';

interface Props{ 
    navigation: any
}

const Register = ({navigation}: Props) => {
  return (
      <SafeAreaView>
          <ScrollView style={styles.container}>
          <View style={styles.subContainer}>
                <Image
                    style={styles.shadowProps}
                    source={require('../../../assets/favicon.png')}
                />
                <Text style={styles.textLabel}>Create account to Luber Ride</Text>
                <TextInput
                    style={[styles.input, styles.shadowProps]}
                    onChangeText={() => { console.log("Demo"); }}
                    placeholder='Name'
                />
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
                <TextInput
                    style={[styles.input, styles.shadowProps]}
                    onChangeText={() => { console.log("Demo"); }}
                    placeholder="Confirm Password"
                />
                <Pressable style={styles.buttonStyle} onPress={() => { navigation.navigate("Home") }} >
                    <Text style={styles.buttonTextStyle}>Create Account</Text>
                </Pressable>
                <Pressable onPress={() => { navigation.navigate("Login") }}>
                    <Text style={styles.buttonTextStyle}>Login</Text>
                </Pressable>
            </View>
            <View style={styles.terms}>
                <Text style={styles.terms}>
                    Privacy | Terms
                </Text>
            </View>
          </ScrollView>
    </SafeAreaView>
  );
}

export default Register;
