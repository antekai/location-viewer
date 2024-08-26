import { Marker, Popup, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import { Location } from "../../data";

const createIcon = (color: string) =>
  new Icon({
    iconUrl: `https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${color}.png`,
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

const unselectedIcon = createIcon("red");
const selectedIcon = createIcon("green");

interface MapMarkersProps {
  locations: Location[];
  selectedIds: number[];
  onMarkerClick: (id: number) => void;
}

const MapMarkers = ({
  locations,
  selectedIds,
  onMarkerClick,
}: MapMarkersProps) => {
  const map = useMap();

  return locations.map((location) => (
    <Marker
      key={location.id}
      alt={`marker-${location.id}`}
      position={[location.lat, location.lng]}
      icon={selectedIds.includes(location.id) ? selectedIcon : unselectedIcon}
      eventHandlers={{
        click: (e) => {
          e.originalEvent.stopPropagation();
          onMarkerClick(location.id);
          map.setView([location.lat, location.lng], map.getZoom());
        },
      }}
    >
      <Popup>{location.name}</Popup>
    </Marker>
  ));
};

export default MapMarkers;
