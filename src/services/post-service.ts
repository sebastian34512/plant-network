import axios from "axios";
import { PlantHighlight, PlantEvent } from "../types/post-types";

export async function fetchPlantHighlights(): Promise<PlantHighlight[]> {
  const response = await axios.get<PlantHighlight[]>(
    "https://plant-network.sebastiankoller.at/wp-json/wp/v2/plant-highlight",
  );
  response.data.forEach((highlight) => {
    highlight.date = new Date(highlight.date);
  });
  return response.data;
}

export async function fetchEvents(): Promise<PlantEvent[]> {
  const response = await axios.get<PlantEvent[]>(
    "https://plant-network.sebastiankoller.at/wp-json/wp/v2/event",
  );
  response.data.forEach((event) => {
    event.date = new Date(event.date);
  });
  return response.data;
}
