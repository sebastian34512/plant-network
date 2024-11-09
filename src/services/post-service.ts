import axios from "axios";
import { PlantHighlight, PlantEvent } from "../types/post-types";

export async function fetchPlantHighlights(): Promise<PlantHighlight[]> {
  const response = await axios.get<PlantHighlight[]>(
    "https://plant-network.sebastiankoller.at/wp-json/wp/v2/plant-highlight",
  );
  return response.data;
}

export async function fetchEvents(): Promise<PlantEvent[]> {
  const response = await axios.get<PlantEvent[]>(
    "https://plant-network.sebastiankoller.at/wp-json/wp/v2/event",
  );
  return response.data;
}
