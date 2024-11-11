import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import FilterListIcon from "@mui/icons-material/FilterList";

interface GridfilterProps {
  category: "all" | "highlight" | "event";
  sortOrder: "asc" | "desc";
  handleSortToggle: () => void;
  handleCategoryChange: (event: SelectChangeEvent) => void;
  setFilter: (filter: string) => void;
}

export const Gridfilter = (props: GridfilterProps) => {
  return (
    <Box display="flex" justifyContent="space-around" mb={2}>
      <Button
        variant="outlined"
        size="small"
        onClick={props.handleSortToggle}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          borderColor: "rgba(0, 0, 0, 0.23)",
          height: "40px",
          color: "gray",
          "& .MuiButton-startIcon": {
            color: "gray",
          },
        }}
        startIcon={
          props.sortOrder === "asc" ? (
            <ArrowUpwardIcon />
          ) : (
            <ArrowDownwardIcon />
          )
        }
      >
        {props.sortOrder === "asc" ? "Datum aufsteigend" : "Datum absteigend"}
      </Button>
      <FormControl
        variant="outlined"
        size="small"
        sx={{
          minWidth: 120,
          display: "flex",
          alignItems: "center",
          borderColor: "rgba(0, 0, 0, 0.23)",
        }}
      >
        <InputLabel id="category-select-label">Kategorie</InputLabel>
        <Select
          labelId="category-select-label"
          label="Kategorie"
          value={props.category}
          onChange={props.handleCategoryChange}
          sx={{ color: "gray" }}
          startAdornment={<FilterListIcon sx={{ mr: 1, color: "gray" }} />}
        >
          <MenuItem value="all">Alle</MenuItem>
          <MenuItem value="highlight">Pflanzen Highlights</MenuItem>
          <MenuItem value="event">Pflanzen Events</MenuItem>
        </Select>
      </FormControl>
      <TextField
        label="Filter events"
        variant="outlined"
        size="small"
        onChange={(e) => props.setFilter(e.target.value)}
        sx={{ width: { xs: "100%", sm: "50%" } }}
      />
    </Box>
  );
};
