import { Grid2 } from "@mui/material";
import { PlantEvent, PlantHighlight, PlantItem } from "../types/post-types";
import { Eventcard } from "./Eventcard";
import { Highlightcard } from "./Highlightcard";

export const Cardgrid = (props: { plantItems: PlantItem[] }) => {
  return (
    <Grid2 container spacing={2}>
      {props.plantItems.map((item) => (
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
