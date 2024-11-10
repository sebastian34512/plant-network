import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { PlantHighlight } from "../types/post-types";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import SpaIcon from "@mui/icons-material/Spa";
import SpeedIcon from "@mui/icons-material/Speed";

export const Highlightcard = (props: { plant: PlantHighlight }) => {
  return (
    <Card
      key={props.plant.id}
      sx={{
        width: {
          xs: "90%",
          sm: 300,
          md: 345,
        },
        backgroundColor: "rgba(0, 40, 0, 0.1)",
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={props.plant.meta.image_url}
        alt={props.plant.title.rendered}
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
            {props.plant.meta.name}
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
          {props.plant.title.rendered}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 1,
            marginTop: 1,
          }}
        >
          {/* Region */}
          <Box display="flex" alignItems="center" maxWidth={"30%"}>
            <LocationOnIcon fontSize="small" color="action" />
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ lineHeight: 1.1, ml: 0.5 }}
            >
              {props.plant.meta.region}
            </Typography>
          </Box>

          {/* Difficulty */}
          <Box display="flex" alignItems="center">
            <SpeedIcon fontSize="small" color="action" />
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ lineHeight: 1.1, ml: 0.5 }}
            >
              {props.plant.meta.difficulty}
            </Typography>
          </Box>

          {/* Poisonous */}
          <Box display="flex" alignItems="center">
            <SpaIcon fontSize="small" color="action" />
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ lineHeight: 1.1, ml: 0.5 }}
            >
              {props.plant.meta.poisonous ? "giftig" : "nicht giftig"}
            </Typography>
          </Box>

          {/* Light Level */}
          <Box display="flex" alignItems="center">
            <WbSunnyIcon fontSize="small" color="action" />
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ lineHeight: 1.1, ml: 0.5 }}
            >
              {props.plant.meta.light_level}
            </Typography>
          </Box>
        </Box>
        <Typography variant="body2">{props.plant.meta.description}</Typography>
      </CardContent>
    </Card>
  );
};
