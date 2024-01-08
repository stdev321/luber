// LocationContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import * as Location from "expo-location";

export interface ILocation {
  address?: string;
  location: Location.LocationObject
}

interface LocationContextProps {
  location: Location.LocationObject | null;
  pickLocation: ILocation | undefined;
  destinationLocation: ILocation | undefined;
  setGlobalLocation: (newLocation: Location.LocationObject) => void;
  setGlobalPickLocation: (newLocation: ILocation) => void;
  setGlobalDestLocation: (newLocation: ILocation) => void;
}

const LocationContext = createContext<LocationContextProps | undefined>(
  undefined
);

interface LocationProviderProps {
  children: ReactNode;
}

export const LocationProvider: React.FC<LocationProviderProps> = ({
  children,
}) => {
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [pickLocation, setPickLocation] = useState<ILocation>();
  const [destinationLocation, setDestLocation] = useState<ILocation>();

  const setGlobalLocation = (newLocation: Location.LocationObject) => {
    setLocation(newLocation);
  };

  const setGlobalPickLocation = (newLocation: ILocation) => {
    setPickLocation(newLocation);
  };

  const setGlobalDestLocation = (newLocation: ILocation) => {
    setDestLocation(newLocation);
  };

  return (
    <LocationContext.Provider
      value={{
        location,
        pickLocation,
        destinationLocation,
        setGlobalLocation,
        setGlobalPickLocation,
        setGlobalDestLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = (): LocationContextProps => {
  const context = useContext(LocationContext);
  if (!context) {
    throw new Error("useLocation must be used within a LocationProvider");
  }
  return context;
};
