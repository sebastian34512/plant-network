import { useEffect, useState } from "react";
import "./App.css";
import { fetchEvents, fetchPlantHighlights } from "./services/post-service";
import { PlantEvent, PlantHighlight } from "./types/post-types";
import { Box, Grid2, TextField } from "@mui/material";
import { Eventcard } from "./components/Eventcard";
import { Highlightcard } from "./components/Highlightcard";
import { Navbar } from "./components/Navbar";
import { Cardgrid } from "./components/Cardgrid";

function App() {
  const [events, setEvents] = useState<PlantEvent[]>([]);
  const [highlights, setHighlights] = useState<PlantHighlight[]>([]);
  const [filter, setFilter] = useState("");

  const filteredEvents = events.filter((event) =>
    event.title.rendered.toLowerCase().includes(filter.toLowerCase()),
  );

  const filteredHighlights = highlights.filter((highlight) =>
    highlight.title.rendered.toLowerCase().includes(filter.toLowerCase()),
  );

  useEffect(() => {
    fetchEvents().then((events) => {
      console.log(events);
      setEvents(events);
    });
    fetchPlantHighlights().then((highlights) => {
      console.log(highlights);
      setHighlights(highlights);
    });
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
            width: { xs: "90%", sm: "80%", md: "75%", lg: "60%", xl: "50%" },
          }}
        >
          <Box display="flex" justifyContent="center" mb={2}>
            <TextField
              label="Filter events"
              variant="outlined"
              size="small"
              onChange={(e) => setFilter(e.target.value)}
              sx={{ width: { xs: "100%", sm: "50%" } }}
            />
          </Box>
          <Cardgrid
            plantEvents={filteredEvents}
            highlights={filteredHighlights}
          />
        </Box>
      </Box>
    </div>
  );
}

export default App;
