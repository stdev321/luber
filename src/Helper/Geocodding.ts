import Geocoder from 'react-native-geocoding';

Geocoder.init('AIzaSyAUrZdfSdHFZbz-kAhi9sj2erP1dQvZD5E');

export const reverseGeocode = async (region: any) => {
    try {
      const result = await Geocoder.from(region.latitude, region.longitude);
      const address = result.results[0].formatted_address;
      return address
    } catch (error) {
      console.error('Error fetching address:', error);
    }
};

// Search by address
export const getGeocodeData = async (address: string) => {
  try {
    const response = await Geocoder.from(address);
    return response.results[0].geometry.location
  } catch (error: any) {
    console.log('Error fetching coordinates: ', error.message);
  }
}

