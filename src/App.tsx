import { useEffect, useState } from "react";
import "./App.css";
import { fetchEvents, fetchPlantHighlights } from "./services/post-service";
import { PlantEvent, PlantHighlight, PlantItem } from "./types/post-types";
import { Box, SelectChangeEvent } from "@mui/material";
import { Navbar } from "./components/Navbar";
import { Cardgrid } from "./components/Cardgrid";
import { Gridfilter } from "./components/Gridfilter";

function App() {
  const [events, setEvents] = useState<PlantEvent[]>([]);
  const [highlights, setHighlights] = useState<PlantHighlight[]>([]);
  const [filteredItems, setFilteredItems] = useState<PlantItem[]>([]);
  const [filter, setFilter] = useState("");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [category, setCategory] = useState<"all" | "highlight" | "event">(
    "all",
  );

  const handleSortToggle = () => {
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as "all" | "highlight" | "event");
  };

  useEffect(() => {
    const applyFilterAndSort = () => {
      const filterAndSort = (items: PlantItem[]) =>
        items
          // Filter by title
          .filter((item) =>
            item.title.rendered.toLowerCase().includes(filter.toLowerCase()),
          )
          // Filter by category
          .filter((item) => {
            if (category === "all") return true;
            if (category === "highlight") return item.type === "highlight";
            if (category === "event") return item.type === "event";
            return true;
          })
          // Sort by date
          .sort((a, b) =>
            sortOrder === "asc"
              ? a.date.getTime() - b.date.getTime()
              : b.date.getTime() - a.date.getTime(),
          );

      setFilteredItems(filterAndSort([...events, ...highlights]));
    };

    applyFilterAndSort();
  }, [events, highlights, filter, sortOrder, category]);

  useEffect(() => {
    fetchEvents().then(setEvents);
    fetchPlantHighlights().then(setHighlights);
  }, []);

  return (
    <div
      className="App"
      style={{
        backgroundColor: "rgba(0, 200, 0, 0.1)",
        height: "100vh",
      }}
    >
      <Navbar />
      <Box display="flex" justifyContent="center" mt={3}>
        <Box
          borderRadius={2}
          boxShadow={2}
          p={3}
          sx={{
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            width: { xs: "90%", sm: "80%", md: "78%", lg: "60%", xl: "50%" },
          }}
        >
          <Gridfilter
            sortOrder={sortOrder}
            category={category}
            handleSortToggle={handleSortToggle}
            handleCategoryChange={handleCategoryChange}
            setFilter={setFilter}
          />
          <Cardgrid plantItems={filteredItems} />
        </Box>
      </Box>
    </div>
  );
}

export default App;
