// Typ für PlantHighlight
export interface PlantHighlight {
  id: number;
  title: { rendered: string };
  date: Date;
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
export interface PlantEvent {
  id: number;
  title: { rendered: string };
  date: Date;
  meta: {
    name?: string;
    location?: string;
    date?: string;
    description?: string;
    image_url?: string;
  };
}
