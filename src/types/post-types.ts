// Typ für PlantHighlight
export interface PlantHighlight {
  id: number;
  title: { rendered: string };
  meta: {
    name: string;
    description: string;
    difficulty: string;
    region: string;
    poisonous: string;
    light_level: string;
  };
}

// Typ für Event
export interface PlantEvent {
  id: number;
  title: { rendered: string };
  meta: {
    name: string;
    location: string;
    date: string;
    description: string;
  };
}
