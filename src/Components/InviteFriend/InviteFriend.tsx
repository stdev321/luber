import React, { useState } from "react";
import {
  Pressable,
  View,
  Image,
  Text,
  Modal,
  TouchableWithoutFeedback,
  Share,
} from "react-native";
import { styles } from "./InviteFriendStyle";
import { StatusBar } from "expo-status-bar";
import TextField from "../../Atoms/TextInput/TextField";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { MaterialIcons } from "@expo/vector-icons";
// import Clipboard from "@react-native-clipboard/clipboard";
import { Clipboard } from "react-native";
import Toast from "react-native-toast-message";

interface Props {
  navigation: any;
  route: any;
}

const InviteFriend = ({ navigation, route }: Props) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const copyToClipboard = () => {
    const referralCode = "GGG7GWU";
    Clipboard.setString(referralCode);
    showSuccessMessage();
  };

  const showSuccessMessage = () => {
    Toast.show({
      type: "success",
      text1: "Referral Code Copied!",
      position: "bottom",
      visibilityTime: 2000,
    });
  };

  const shareCode = () => {
    const referralCode = "GGG7GWU"; // Replace with your actual referral code

    Share.share({
      message: `Use my referral code ${referralCode} to sign up on Luber and get amazing discounts!`,
    })
      .then((result) => {
        if (result.action === Share.sharedAction) {
          // Code shared successfully
          console.log("Shared successfully");
        } else if (result.action === Share.dismissedAction) {
          // Share was dismissed
          console.log("Share dismissed");
        }
      })
      .catch((error) => console.error("Error sharing:", error));
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.inviteWrap}>
        <Pressable
          //   style={{ paddingVertical: 20 }}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Image
            style={{ width: 20, height: 20 }}
            source={require("../../../assets/back.png")}
          />
        </Pressable>
        <View style={styles.inviteTextWrap}>
          <View>
            <Text style={styles.pickUpText}>Invite your friends</Text>
            <Text style={styles.pickUpText}>to Luber</Text>
            <Text style={styles.knowMoreText} onPress={toggleModal}>
              Know More
            </Text>
          </View>
          <View>
            <Image
              style={styles.inviteImg}
              source={require("../../../assets/invite-friends.jpg")}
            />
          </View>
        </View>
      </View>

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleModal}
      >
        <TouchableWithoutFeedback onPress={toggleModal}>
          <View style={styles.modalContainer}>
            <View style={styles.overlay} />
            <View style={styles.modalContent}>
              <View>
                <Text style={styles.hereHeading}>Here's how to invite</Text>
                <Text style={styles.hereHeading}>and earn</Text>
              </View>
              <View style={styles.modalTextWrap}>
                <View style={styles.textCheck}>
                  <MaterialIcons
                    name="check"
                    size={17}
                    style={{
                      color: "green",
                      fontWeight: "800",
                      fontSize: 18,
                      marginTop: 10,
                    }}
                  />
                  <Text style={styles.modalText}>
                    Share the code below or ask them to enter it after they sign
                    up.Your coupon will appear after their first ride
                  </Text>
                </View>
                <View style={styles.textCheck}>
                  <MaterialIcons
                    name="check"
                    size={17}
                    style={{
                      color: "green",
                      fontWeight: "800",
                      fontSize: 18,
                      marginTop: 10,
                    }}
                  />
                  <Text style={styles.modalText}>
                    For your friend to reveive their coupon, ensure that they
                    use your referral before their first ride & within 10 days
                    of signup
                  </Text>
                </View>
              </View>
              <View>
                <Pressable style={styles.modalButton} onPress={toggleModal}>
                  <Text style={styles.btnText}>Got it</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <View style={styles.mainContainer}>
        <Text style={{ fontSize: 17, fontWeight: "500", marginBottom: 20 }}>
          Your Invites
        </Text>
        <View style={styles.inviteInnerWrap}>
          <View style={styles.inviteInnerContent}>
            <Text style={styles.inviteNumber}>₹0</Text>
            <Text style={styles.inviteInnerText}>Earned</Text>
          </View>
          <View style={styles.innerBorder}>
          </View>
          <View style={styles.inviteInnerContent}>
            <Text style={styles.inviteNumber}>₹0</Text>
            <Text style={styles.inviteInnerText}>Pending</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.referralWrap}>
          <View>
            <Text style={styles.referText}>Your referral code</Text>
          </View>
          <View>
            <Pressable
              // style={styles.codeContainer}
              onPress={() => copyToClipboard()}
            >
              <Text style={styles.code}>
                GGG7GWU{" "}
                <MaterialIcons
                  name="content-copy"
                  size={17}
                  style={{ color: "#919191" }}
                />
              </Text>
            </Pressable>
          </View>
        </View>
        <View>
          <Pressable style={styles.bottomButton} onPress={() => shareCode()}>
            <Text style={styles.btnText}>Share Code</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default InviteFriend;
