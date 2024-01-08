import React, { useState } from "react";
import {
  Pressable,
  ScrollView,
  View,
  Image,
  Text,
  KeyboardAvoidingView,
  Platform,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import IconI from "react-native-vector-icons/Ionicons";
import { styles } from "./InviteFriendStyle";
import { StatusBar } from "expo-status-bar";
import TextField from "../../Atoms/TextInput/TextField";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { MaterialIcons } from "@expo/vector-icons";
// import ModalContent from "./ModalContent";

interface Props {
  navigation: any;
  route: any;
}

const InviteFriend = ({ navigation, route }: Props) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
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
                    style={{ color: "green", fontWeight: "800", fontSize: 18, marginTop:10 }}
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
                    style={{ color: "green", fontWeight: "800", fontSize: 18, marginTop:10 }}
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
        <Text style={{ fontSize: 15, color: "#a1a1a1" }}>
          Please try a different address or locate on map
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.referralWrap}>
          <View>
            <Text style={styles.referText}>Your referral code</Text>
          </View>
          <View>
            <Text style={styles.code}>
              GGG7GWU{" "}
              <MaterialIcons
                name="content-copy"
                size={17}
                style={{ color: "#919191" }}
              />
            </Text>
          </View>
        </View>
        <View>
          <Pressable style={styles.bottomButton}>
            <Text style={styles.btnText}>Share Code</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default InviteFriend;
