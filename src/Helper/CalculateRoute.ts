import polyline from '@mapbox/polyline';

type Props = {
  origin: any;
  destination: any;
};

export const getRoutCoordinate = async ({ origin, destination }: Props) => {
        try {
            const apiKey = 'AIzaSyAUrZdfSdHFZbz-kAhi9sj2erP1dQvZD5E';
            const response = await fetch(
                `https://maps.googleapis.com/maps/api/directions/json?origin=${origin.latitude},${origin.longitude}&destination=${destination.latitude},${destination.longitude}&key=${apiKey}`
            );

            const result = await response.json();
            if (result.status === 'OK' && result.routes.length > 0) {
                const coordinates = result.routes[0].overview_polyline.points;
                // console.log({coordinates});
                
                const decodedCoordinates = decodePolyline(coordinates);
                // console.log({decodedCoordinates});  
                // setRouteCoordinates(decodedCoordinates);
                return decodedCoordinates
            } else {
                console.warn('Error fetching route:', result.status);
                return { msg: `Error fetching route: ${result.status}` }
            }
        } catch (error) {
            console.error('Error: ', error);
            return { msg: `Error:  ${error}` }
        }
    };

const decodePolyline = (polylineString : any) => {
    const points = polyline.decode(polylineString);
    return points.map((point: any) => ({
      latitude: point[0],
      longitude: point[1],
    }));
  };