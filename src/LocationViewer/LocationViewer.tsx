import { useState } from "react";
import "leaflet/dist/leaflet.css";
import { Typography } from "@mui/material";
import Map from "../components/Map/Map";
import LocationsTable from "../components/LocationsTable/LocationsTable";
import { StyledLocationViewer } from "./styles";
import { locations } from "../data";

const LocationViewer = () => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  return (
    <StyledLocationViewer>
      <Typography sx={{ typography: { xs: "h4", sm: "h4", md: "h3" } }}>
        Location Viewer
      </Typography>
      <Map
        locations={locations}
        selectedIds={selectedIds}
        setSelectedIds={setSelectedIds}
      />
      <LocationsTable
        rows={locations}
        setSelectedIds={setSelectedIds}
        selectedIds={selectedIds}
      />
    </StyledLocationViewer>
  );
};

export default LocationViewer;
