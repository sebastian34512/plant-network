import axios from "axios";
import { PlantHighlight, PlantEvent } from "../types/post-types";

const API_URL = "https://plant-network.sebastiankoller.at/wp-json";

export async function fetchToken(): Promise<string> {
  const username = process.env.REACT_APP_API_USERNAME;
  const password = process.env.REACT_APP_API_PASSWORD;

  console.log(username, password);

  const response = await axios.post<{ token: string }>(
    `${API_URL}/jwt-auth/v1/token`,
    {
      username: process.env.REACT_APP_API_USERNAME,
      password: process.env.REACT_APP_API_PASSWORD,
    },
  );
  return response.data.token;
}

export async function fetchPlantHighlights(): Promise<PlantHighlight[]> {
  const response = await axios.get<PlantHighlight[]>(
    `${API_URL}/wp/v2/plant-highlight`,
  );
  response.data.forEach((highlight) => {
    highlight.date = new Date(highlight.date);
    highlight.type = "highlight";
  });
  return response.data;
}

export async function fetchEvents(): Promise<PlantEvent[]> {
  const response = await axios.get<PlantEvent[]>(`${API_URL}/wp/v2/event`);
  response.data.forEach((event) => {
    event.date = new Date(event.date);
    event.type = "event";
  });
  return response.data;
}

export async function createPlantHighlight(
  token: string,
  data: Omit<PlantHighlight, "id" | "date" | "type">,
): Promise<PlantHighlight> {
  const response = await axios.post<PlantHighlight>(
    `${API_URL}/wp/v2/plant-highlight`,
    {
      ...data,
      title: data.title.rendered,
      status: "publish",
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.data;
}

// Event erstellen
export async function createPlantEvent(
  token: string,
  data: Omit<PlantEvent, "id" | "date" | "type">,
): Promise<PlantEvent> {
  const response = await axios.post<PlantEvent>(
    `${API_URL}/wp/v2/event`,
    {
      ...data,
      title: data.title.rendered,
      status: "publish",
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.data;
}
