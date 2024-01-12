import {
  View,
  Text,
  Pressable,
  ScrollView,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { styles } from "./PaymentStyle";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface Props {
  navigation: any;
}

const Payment = ({ navigation }: Props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedUPI, setSelectedUPI] = useState<string | null>(null);
  const [isSecondModalVisible, setSecondModalVisible] = useState(false);
  const [isCashModalVisible, setCashModalVisible] = useState(false);
  const [isCardModalVisible, setCardModalVisible] = useState(false);
  const [defaultSelection, setDefaultSelection] = useState<string | null>(null);

  const [cardNumber, setCardNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleSecondModal = () => {
    setSecondModalVisible(!isSecondModalVisible);
  };

  const toggleCashModal = () => {
    setCashModalVisible(!isCashModalVisible);
  };

  const toggleCardModal = () => {
    setCardModalVisible(!isCardModalVisible);
  };

  const handleUPISelection = (upiApp: string) => {
    setSelectedUPI(upiApp);
    setDefaultSelection(upiApp);
    toggleModal();
    toggleSecondModal();
  };

  const getUPIImage = () => {
    switch (selectedUPI) {
      case "Google Pay":
        return require("../../../assets/googlepay-logo.png");
      case "Phone Pe":
        return require("../../../assets/phonepe-logo.png");
      default:
        return "";
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <View style={styles.container}>
        <Pressable
          style={styles.backBtn}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Image
            style={{ width: 25, height: 25 }}
            source={require("../../../assets/back.png")}
          />
        </Pressable>
        <View style={styles.heading}>
          <Text style={styles.mainHeaderTitle}>Payment methods</Text>
        </View>
        <View style={styles.innerSec}>
          <Text style={styles.subHeading}>UPI</Text>
          <View style={[styles.innerSecWrap, styles.underlineText]}>
            <Image style={{ width: 30, height: 30 }} source={getUPIImage()} />
            <Text style={styles.innerText}>{selectedUPI || ""}</Text>
          </View>
        </View>
        <View style={styles.innerSec}>
          <Text style={styles.subHeading}>Cash</Text>
          <Pressable style={styles.innerRowWrap} onPress={toggleCashModal}>
            <View style={styles.innerContent}>
              <Image
                style={{ width: 30, height: 17 }}
                source={require("../../../assets/cash-logo.png")}
              />
              <Text style={styles.innerContentText}>Cash</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={16} color="#ccc" />
          </Pressable>
          <Modal
            visible={isCashModalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={() => setCashModalVisible(false)}
          >
            <TouchableWithoutFeedback
              onPress={() => setCashModalVisible(false)}
            >
              <View style={styles.cashMoldalContainer}>
                <View style={styles.cashModalContent}>
                  <Pressable
                    style={styles.backBtn}
                    onPress={() => setCashModalVisible(false)}
                  >
                    <Image
                      style={{ width: 25, height: 25 }}
                      source={require("../../../assets/back.png")}
                    />
                  </Pressable>
                  <Text style={styles.updatedModalHeading}>Cash</Text>
                  <Text style={styles.cashModalText}>
                    Please pay your driver in cash once your trip ends. The fare
                    will be displayed on your driver's device. You can also
                    check it on your app.
                  </Text>
                  <View></View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </View>
        <View style={styles.innerSec}>
          <Text style={styles.subHeading}>Add payment method</Text>
          <Pressable
            style={[styles.innerRowWrap, styles.innerRowLine]}
            onPress={toggleModal}
          >
            <View style={styles.innerContent}>
              <Image
                style={{ width: 40, height: 15 }}
                source={require("../../../assets/upi-logo.png")}
              />
              <Text style={styles.innerContentText}>Pay by any UPI app</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={16} color="#ccc" />
          </Pressable>
          <Modal
            visible={isModalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={toggleModal}
          >
            <TouchableWithoutFeedback onPress={toggleModal}>
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <View>
                    <Text style={styles.hereHeading}>Select UPI app</Text>
                  </View>
                  <View style={styles.modalTextWrap}>
                    <Pressable
                      style={styles.innerRowWithArrow}
                      onPress={() => handleUPISelection("Google Pay")}
                    >
                      <View style={styles.innerRow}>
                        <View style={styles.innerRowWithArrow}>
                          <Image
                            style={{ width: 45, height: 38 }}
                            source={require("../../../assets/googlepay-logo.png")}
                          />
                          <Text style={styles.modalText}>G PaY</Text>
                        </View>
                      </View>
                      <View style={styles.innerRowWithArrow}>
                        {selectedUPI === "Google Pay" && (
                          <Text style={styles.defaultText}>DEFAULT</Text>
                        )}

                        <MaterialIcons
                          name="arrow-forward-ios"
                          size={16}
                          color="#ccc"
                        />
                      </View>
                    </Pressable>
                    <Pressable
                      style={styles.innerRowWithArrow}
                      onPress={() => handleUPISelection("Phone Pe")}
                    >
                      <View style={styles.innerRow}>
                        <View style={styles.innerRowWithArrow}>
                          <Image
                            style={{ width: 38, height: 38 }}
                            source={require("../../../assets/phonepe-logo.png")}
                          />
                          <Text style={styles.modalText}>Phone Pe</Text>
                        </View>
                      </View>
                      <View style={styles.innerRowWithArrow}>
                        {selectedUPI === "Phone Pe" && (
                          <Text style={styles.defaultText}>DEFAULT</Text>
                        )}
                        <MaterialIcons
                          name="arrow-forward-ios"
                          size={16}
                          color="#ccc"
                        />
                      </View>
                    </Pressable>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>

          <Modal
            visible={isSecondModalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={() => setSecondModalVisible(false)}
          >
            <TouchableWithoutFeedback
              onPress={() => setSecondModalVisible(false)}
            >
              <View style={styles.modalContainer}>
                <View style={styles.secondModalContent}>
                  <Text style={styles.updatedModalHeading}>Payment mode</Text>
                  <Text style={styles.updatedModalHeading}>is updated</Text>
                  <Text style={styles.updatedModalText}>
                    {defaultSelection} is selected as your default payment mode
                    for your upcoming rides
                  </Text>
                  <View>
                    <Pressable
                      style={styles.modalButton}
                      onPress={toggleSecondModal}
                    >
                      <Text style={styles.btnText}>OK</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>

          <Pressable
            style={[styles.innerRowWrap, styles.innerRowLine]}
            onPress={toggleCardModal}
          >
            <View style={styles.innerContent}>
              <Image
                style={{ width: 30, height: 20 }}
                source={require("../../../assets/credit-card.png")}
              />
              <Text style={styles.innerContentText}>Add Credit/Debit Card</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={16} color="#ccc" />
          </Pressable>
          <Modal
            visible={isCardModalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={() => setCardModalVisible(false)}
          >
            <View style={styles.cashMoldalContainer}>
              <View style={styles.cardModalContent}>
                <Pressable style={styles.backBtn} onPress={() => setCardModalVisible(false)}>
                  <Image
                    style={{ width: 25, height: 25 }}
                    source={require("../../../assets/back.png")}
                  />
                </Pressable>
                <ScrollView>
                  <Text style={styles.cardModalHeading}>Enter card detail</Text>
                  <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={{ flex: 1 }}
                  >
                    <TextInput
                      style={styles.cardInput}
                      placeholder="Card Number"
                      placeholderTextColor="#bbb"
                      value={cardNumber}
                      keyboardType="numeric"
                      onChangeText={(text) => setCardNumber(text)}
                    />
                  </KeyboardAvoidingView>
                </ScrollView>
                <View style={styles.bottomContainer}>
                  <Text>Save card as per new RBI Guideline Know more</Text>
                  <Text>We will verify card with a nominal refundable fee</Text>
                  <View>
                    <Pressable
                      style={styles.modalButton}
                      onPress={toggleCardModal}
                    >
                      <Text style={styles.btnText}>Add card</Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </Modal>
          <View style={styles.innerRowWrap}>
            <View style={styles.innerContent}>
              <Image
                style={{ width: 40, height: 15 }}
                source={require("../../../assets/upi-logo.png")}
              />
              <Text style={styles.innerContentText}>Add Google Pay/UPI ID</Text>
            </View>
            <MaterialIcons name="arrow-forward-ios" size={16} color="#ccc" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Payment;
