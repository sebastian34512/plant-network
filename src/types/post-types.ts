// Typ für PlantHighlight
export interface PlantHighlight extends PlantItem {
  meta: {
    name?: string;
    description?: string;
    difficulty?: string;
    region?: string;
    poisonous?: string;
    light_level?: string;
    image_url?: string;
  };
}

// Typ für Event
export interface PlantEvent extends PlantItem {
  meta: {
    name?: string;
    location?: string;
    date?: string;
    description?: string;
    image_url?: string;
  };
}

export interface PlantItem {
  id: number;
  title: { rendered: string };
  date: Date;
  type: "event" | "highlight";
  meta: {};
}
