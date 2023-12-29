import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from './LoginStyle';
import { View, TextInput, Image, Text, Pressable, ScrollView } from 'react-native';

interface Props {
    navigation: any;
}

const Login = ({ navigation }: Props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const isNextButtonDisabled = !email || !password;

    const handleEmailChange = (text: string) => {
        setEmail(text);
    };

    const handlePasswordChange = (text: string) => {
        setPassword(text);
    };

    const handleNextPress = () => {
        navigation.navigate("Home");
    };

    return (
        <SafeAreaView>
            <Pressable style={styles.backBtn} onPress={() => { navigation.goBack() }}>
                <Image
                    style={{ width: 25, height: 25 }}
                    source={require("../../../assets/back.png")}
                />
            </Pressable>
            <ScrollView style={styles.container}>
                <Text style={styles.text}>Enter your Email for verification</Text>
                <Text style={styles.subText}>This email will be used for all ride-related communication. You shall receive an SMS with a code for verification.</Text>
                <TextInput
                    style={[styles.input]}
                    onChangeText={handleEmailChange}
                    placeholder='Email'
                    keyboardType='email-address'
                />
                <TextInput
                    style={[styles.input]}
                    onChangeText={handlePasswordChange}
                    placeholder='Password'
                    secureTextEntry
                />
                <Pressable
                    style={[styles.buttonStyle, { opacity: isNextButtonDisabled ? 0.5 : 1 }]}
                    onPress={handleNextPress}
                    disabled={isNextButtonDisabled}
                >
                    <Text style={styles.buttonTextStyle}>Next</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Login;
