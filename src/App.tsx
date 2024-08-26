import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { DataGrid, GridColDef, GridRowSelectionModel } from "@mui/x-data-grid";
import "leaflet/dist/leaflet.css";
import "./App.css";
import { Icon } from "leaflet";

interface Location {
  id: number;
  name: string;
  lat: number;
  lng: number;
}

const locations: Location[] = [
  { id: 1, name: "Berlin", lat: 52.52, lng: 13.405 },
  { id: 2, name: "Hamburg", lat: 53.551, lng: 9.993 },
  { id: 3, name: "Munich", lat: 48.137, lng: 11.576 },
  { id: 4, name: "Frankfurt", lat: 50.11, lng: 8.682 },
];

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "lat", headerName: "Latitude", width: 130 },
  { field: "lng", headerName: "Longitude", width: 130 },
];

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

const App: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

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

  const handleRowSelection = (newSelection: GridRowSelectionModel) => {
    setSelectedIds(newSelection as number[]);
  };

  return (
    <div className="app">
      <h1>Location Viewer</h1>
      <div className="map-container">
        <MapContainer
          center={[51.1657, 10.4515]}
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
      </div>
      <div className="datagrid-container">
        <DataGrid
          rows={locations}
          columns={columns}
          checkboxSelection
          onRowSelectionModelChange={handleRowSelection}
          rowSelectionModel={selectedIds}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </div>
    </div>
  );
};

export default App;
