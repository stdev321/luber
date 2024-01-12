import React, { useState, useEffect } from "react";
import {
  TextInput,
  View,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { styles } from "./GoogleSearchStyles";

interface GooglePlacesSelectProps {
  value?: string;
  onChange: (value: string) => void;
  onPredictions?: (predictions: string[]) => void;
  showPredictions?: boolean;
}

const GooglePlacesSelect: React.FC<GooglePlacesSelectProps> = ({
  value,
  onChange,
  onPredictions,
  showPredictions = true,
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [predictions, setPredictions] = useState<string[]>([]);
  const [showMenu, setShowMenu] = useState(false);

  const handleInputChange = async (newValue: string) => {
    setInputValue(newValue);

    // Fetch predictions from Google Places API
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${newValue}&key=${process.env.EXPO_PUBLIC_GOOGLE_API_KEY}`
      );

      if (response.ok) {
        const data = await response.json();
        const newPredictions = data.predictions.map(
          (prediction: any) => prediction.description
        );
        setPredictions(newPredictions);
        setShowMenu(true);

        // Notify the parent component of the predictions
        if (onPredictions) {
          onPredictions(newPredictions);
        }
      } else {
        console.error("Error fetching predictions:", response.statusText);
        setPredictions([]);
        setShowMenu(false);
      }
    } catch (error) {
      console.error("Error fetching predictions:", error);
      setPredictions([]);
      setShowMenu(false);
    }
  };

  const handlePredictionClick = (selectedPrediction: string) => {
    setInputValue(selectedPrediction);
    onChange(selectedPrediction);
    setPredictions([]);
    setShowMenu(false);
  };

  const clearInput = () => {
    setInputValue("");
    setPredictions([]);
    setShowMenu(false);
  };

  useEffect(() => {
    if (inputValue === "") {
      setPredictions([]);
      setShowMenu(false);
    }
  }, [inputValue]);

  return (
    <View>
      <View style={styles.searchInput}>
        <TextInput
            style={{ flex: 1, height: 40 }}
          value={inputValue}
          onChangeText={handleInputChange}
          placeholder="Search for a place..."
        />
        {inputValue !== "" && (
          <TouchableOpacity onPress={clearInput}>
            <Icon name="clear" size={20} color="gray" style={{ marginRight: 5 }} />
          </TouchableOpacity>
        )}
      </View>
      <View style={{ padding: 20 }}>
      {showMenu && showPredictions && predictions.length > 0 ? (
        <FlatList
          data={predictions}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={{ marginHorizontal: 10 }}>
            <TouchableOpacity onPress={() => handlePredictionClick(item)} >
              <Text style={{ paddingVertical: 10, fontSize:14 }}>{item}</Text>
            </TouchableOpacity>
            </View>
          )}
          keyboardShouldPersistTaps="handled"
        />
      ) : (
        <View>
          <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 10 }}>
            Location not found
          </Text>
          <Text style={{ fontSize: 15, color: "#a1a1a1" }}>
            Please try a different address or locate on map
          </Text>
        </View>
      )}
      </View>
    </View>
  );
};

export default GooglePlacesSelect;
