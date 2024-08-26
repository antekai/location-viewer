import { MapContainer, TileLayer } from "react-leaflet";
import MapMarkers from "./MapMarkers";
import { Box } from "@mui/material";
import { MAP_CENTER } from "../../../map-config";
import { Location } from "../../data";

interface MapProps {
  locations: Location[];
  selectedIds: number[];
  setSelectedIds: React.Dispatch<React.SetStateAction<number[]>>;
}

const Map = ({ locations, selectedIds, setSelectedIds }: MapProps) => {
  const handleMarkerClick = (id: number) => {
    setSelectedIds((prevSelectedIds) => {
      if (prevSelectedIds.includes(id)) {
        // If the id is already selected, remove it (deselect)
        return prevSelectedIds.filter((selectedId) => selectedId !== id);
      } else {
        // If the id is not selected, add it to the selection
        return [...prevSelectedIds, id];
      }
    });
  };

  return (
    <Box data-testid="map" sx={{ marginBottom: "20px" }}>
      <MapContainer
        center={MAP_CENTER}
        zoom={6}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MapMarkers
          locations={locations}
          selectedIds={selectedIds}
          onMarkerClick={handleMarkerClick}
        />
      </MapContainer>
    </Box>
  );
};

export default Map;
