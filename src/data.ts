export interface Location {
  id: number;
  name: string;
  lat: number;
  lng: number;
}

export const locations: Location[] = [
  { id: 1, name: "Berlin", lat: 52.52, lng: 13.405 },
  { id: 2, name: "Hamburg", lat: 53.551, lng: 9.993 },
  { id: 3, name: "Munich", lat: 48.137, lng: 11.576 },
  { id: 4, name: "Frankfurt", lat: 50.11, lng: 8.682 },
];
