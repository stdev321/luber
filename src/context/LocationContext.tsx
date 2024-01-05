// LocationContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import * as Location from "expo-location";

interface LocationContextProps {
  location: Location.LocationObject | null;
  setGlobalLocation: (newLocation: Location.LocationObject) => void;
}

const LocationContext = createContext<LocationContextProps | undefined>(undefined);

interface LocationProviderProps {
  children: ReactNode;
}

export const LocationProvider: React.FC<LocationProviderProps> = ({ children }) => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);

  const setGlobalLocation = (newLocation: Location.LocationObject) => {
    setLocation(newLocation);
  };

  return (
    <LocationContext.Provider value={{ location, setGlobalLocation }}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = (): LocationContextProps => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
};
