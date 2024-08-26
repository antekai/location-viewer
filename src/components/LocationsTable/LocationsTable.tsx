import {
  DataGrid,
  GridColDef,
  GridRowSelectionModel,
  GridValidRowModel,
} from "@mui/x-data-grid";

interface DataTableProps {
  rows: GridValidRowModel[];
  setSelectedIds: React.Dispatch<React.SetStateAction<number[]>>;
  selectedIds: number[];
}

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "lat", headerName: "Latitude", width: 130 },
  { field: "lng", headerName: "Longitude", width: 130 },
];

const LocationsTable = ({
  rows,
  setSelectedIds,
  selectedIds,
}: DataTableProps) => {
  const handleRowSelection = (newSelection: GridRowSelectionModel) => {
    setSelectedIds(newSelection as number[]);
  };

  return (
    <DataGrid
      rows={rows}
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
  );
};

export default LocationsTable;
