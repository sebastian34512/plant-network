import { Box, TextField, Grid2 } from "@mui/material";
import { PlantEvent, PlantHighlight } from "../types/post-types";
import { Eventcard } from "./Eventcard";
import { Highlightcard } from "./Highlightcard";

export const Cardgrid = (props: {
  plantEvents: PlantEvent[];
  highlights: PlantHighlight[];
}) => {
  // Kombiniere und sortiere nach Datum
  const combinedItems = [
    ...props.plantEvents.map((item) => ({ ...item, type: "event" })),
    ...props.highlights.map((item) => ({ ...item, type: "highlight" })),
  ];

  combinedItems.sort((a, b) => b.date.getTime() - a.date.getTime());
  return (
    <Grid2 container spacing={2}>
      {combinedItems.map((item) => (
        <Grid2
          key={item.id}
          size={{ xs: 12, sm: 12, md: 6 }}
          justifyContent={"center"}
          justifyItems={"center"}
        >
          {item.type === "event" ? (
            <Eventcard event={item} />
          ) : (
            <Highlightcard plant={item} />
          )}
        </Grid2>
      ))}
    </Grid2>
  );
};
