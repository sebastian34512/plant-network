import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { PlantEvent, PlantHighlight } from "../types/post-types";
import {
  createPlantEvent,
  createPlantHighlight,
} from "../services/post-service";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const AdminPanel = (props: { token: string }) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box display="flex" justifyContent="center" mt={3}>
      <Box
        borderRadius={2}
        boxShadow={2}
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          width: { xs: "99%", sm: "86%", md: "83%", lg: "64%", xl: "53%" },
        }}
      >
        <Accordion>
          <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
            <Typography color="rgba(0, 100, 0, 0.8)" fontWeight="bold">
              Admin Panel
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ paddingTop: 0 }}>
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    TabIndicatorProps={{
                      sx: { backgroundColor: "rgba(0, 40, 0, 0.6)" },
                    }}
                  >
                    <Tab
                      label="Event erstellen"
                      value="1"
                      sx={{
                        textTransform: "none",
                        "&.Mui-selected": {
                          color: "rgba(0, 40, 0, 0.6)",
                        },
                      }}
                    />
                    <Tab
                      label="Highlight erstellen"
                      value="2"
                      sx={{
                        textTransform: "none",
                        "&.Mui-selected": {
                          color: "rgba(0, 40, 0, 0.6)",
                        },
                      }}
                    />
                  </TabList>
                </Box>
                <TabPanel value="1">
                  <EventForm token={props.token} />
                </TabPanel>
                <TabPanel value="2">
                  <HighlighForm token={props.token} />
                </TabPanel>
              </TabContext>
            </Box>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

const EventForm = (props: { token: string }) => {
  const [eventData, setEventData] = React.useState<
    Omit<PlantEvent, "id" | "date" | "type">
  >({
    title: { rendered: "" },
    meta: {
      location: "",
      date: "",
      description: "",
      image_url: "",
    },
  });

  const handleEventSubmit = async () => {
    try {
      const response = await createPlantEvent(props.token, eventData);
      console.log("Event erstellt:", response);
      setEventData({
        title: { rendered: "" },
        meta: {
          location: "",
          date: "",
          description: "",
          image_url: "",
        },
      });
    } catch (error) {
      console.error("Fehler beim Erstellen des Events:", error);
    }
  };

  return (
    <>
      <TextField
        label="Titel"
        fullWidth
        size="small"
        value={eventData.title.rendered}
        onChange={(e) =>
          setEventData({
            ...eventData,
            title: { rendered: e.target.value },
          })
        }
        margin="dense"
      />
      <TextField
        label="Ort"
        fullWidth
        size="small"
        value={eventData.meta.location}
        onChange={(e) =>
          setEventData({
            ...eventData,
            meta: { ...eventData.meta, location: e.target.value },
          })
        }
        margin="dense"
      />
      <TextField
        label="Datum"
        fullWidth
        size="small"
        type="date"
        value={eventData.meta.date}
        onChange={(e) =>
          setEventData({
            ...eventData,
            meta: { ...eventData.meta, date: e.target.value },
          })
        }
        margin="dense"
        slotProps={{ inputLabel: { shrink: true } }}
      />
      <TextField
        label="Beschreibung"
        fullWidth
        size="small"
        value={eventData.meta.description}
        onChange={(e) =>
          setEventData({
            ...eventData,
            meta: { ...eventData.meta, description: e.target.value },
          })
        }
        margin="dense"
      />
      <TextField
        label="Bild URL"
        fullWidth
        size="small"
        value={eventData.meta.image_url}
        onChange={(e) =>
          setEventData({
            ...eventData,
            meta: { ...eventData.meta, image_url: e.target.value },
          })
        }
        margin="dense"
      />
      <Button
        variant="contained"
        sx={{ backgroundColor: "rgba(0, 100, 0, 0.8)", mt: 2 }}
        onClick={handleEventSubmit}
      >
        Event erstellen
      </Button>
    </>
  );
};

const HighlighForm = (props: { token: string }) => {
  const [highlightData, setHighlightData] = React.useState<
    Omit<PlantHighlight, "id" | "date" | "type">
  >({
    title: { rendered: "" },
    meta: {
      name: "",
      description: "",
      difficulty: "",
      region: "",
      poisonous: "",
      light_level: "",
      image_url: "",
    },
  });

  const handleHighlightSubmit = async () => {
    try {
      const response = await createPlantHighlight(props.token, highlightData);
      console.log("Highlight erstellt:", response);
      setHighlightData({
        title: { rendered: "" },
        meta: {
          name: "",
          description: "",
          difficulty: "",
          region: "",
          poisonous: "",
          light_level: "",
          image_url: "",
        },
      });
    } catch (error) {
      console.error("Fehler beim Erstellen des Highlights:", error);
    }
  };

  return (
    <>
      <TextField
        label="Titel"
        fullWidth
        size="small"
        value={highlightData.title.rendered}
        onChange={(e) =>
          setHighlightData({
            ...highlightData,
            title: { rendered: e.target.value },
          })
        }
        margin="dense"
      />
      <TextField
        label="Name"
        fullWidth
        size="small"
        value={highlightData.meta.name}
        onChange={(e) =>
          setHighlightData({
            ...highlightData,
            meta: { ...highlightData.meta, name: e.target.value },
          })
        }
        margin="dense"
      />
      <TextField
        label="Beschreibung"
        fullWidth
        size="small"
        value={highlightData.meta.description}
        onChange={(e) =>
          setHighlightData({
            ...highlightData,
            meta: {
              ...highlightData.meta,
              description: e.target.value,
            },
          })
        }
        margin="dense"
      />
      <TextField
        label="Schwierigkeit"
        fullWidth
        size="small"
        value={highlightData.meta.difficulty}
        onChange={(e) =>
          setHighlightData({
            ...highlightData,
            meta: { ...highlightData.meta, difficulty: e.target.value },
          })
        }
        margin="dense"
      />
      <TextField
        label="Region"
        fullWidth
        size="small"
        value={highlightData.meta.region}
        onChange={(e) =>
          setHighlightData({
            ...highlightData,
            meta: { ...highlightData.meta, region: e.target.value },
          })
        }
        margin="dense"
      />
      <TextField
        label="Giftig"
        fullWidth
        size="small"
        value={highlightData.meta.poisonous}
        onChange={(e) =>
          setHighlightData({
            ...highlightData,
            meta: { ...highlightData.meta, poisonous: e.target.value },
          })
        }
        margin="dense"
      />
      <TextField
        label="Licht Level"
        fullWidth
        size="small"
        value={highlightData.meta.light_level}
        onChange={(e) =>
          setHighlightData({
            ...highlightData,
            meta: {
              ...highlightData.meta,
              light_level: e.target.value,
            },
          })
        }
        margin="dense"
      />
      <TextField
        label="Bild URL"
        fullWidth
        size="small"
        value={highlightData.meta.image_url}
        onChange={(e) =>
          setHighlightData({
            ...highlightData,
            meta: { ...highlightData.meta, image_url: e.target.value },
          })
        }
        margin="dense"
      />
      <Button
        variant="contained"
        sx={{ backgroundColor: "rgba(0, 100, 0, 0.8)", mt: 2 }}
        onClick={handleHighlightSubmit}
      >
        Highlight erstellen
      </Button>
    </>
  );
};
