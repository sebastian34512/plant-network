import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { PlantEvent } from "../types/post-types";

export const Eventcard = (props: { event: PlantEvent }) => {
  return (
    <Card
      key={props.event.id}
      sx={{
        width: {
          xs: "90%",
          sm: 340,
          md: 345,
        },
        backgroundColor: "rgba(0, 40, 0, 0.1)",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={props.event.meta.image_url}
        alt={props.event.title.rendered}
      />

      <CardContent
        sx={{
          paddingTop: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            marginBottom: -1,
            marginTop: 2,
          }}
        >
          <Typography variant="caption" color="text.secondary">
            {props.event.meta.location}
          </Typography>
          <Typography variant="caption" color="text.secondary" paddingLeft={1}>
            {props.event.meta.date}
          </Typography>
        </Box>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            paddingBottom: 0,
            fontWeight: "bold",
            textAlign: "left",
          }}
        >
          {props.event.title.rendered}
        </Typography>
        <Typography variant="body2">{props.event.meta.description}</Typography>
      </CardContent>
    </Card>
  );
};
