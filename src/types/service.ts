export interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  category: ServiceCategory;
  area: string;
  provider: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
}

export type ServiceCategory =
  | "Städning"
  | "Trädgård"
  | "Renovering"
  | "Flytt"
  | "IT & Teknik"
  | "Undervisning"
  | "Skönhet"
  | "Hälsa"
  | "Djur"
  | "Övrigt";

export const CATEGORIES: ServiceCategory[] = [
  "Städning",
  "Trädgård",
  "Renovering",
  "Flytt",
  "IT & Teknik",
  "Undervisning",
  "Skönhet",
  "Hälsa",
  "Djur",
  "Övrigt",
];

export const AREAS = [
  "Stockholm",
  "Göteborg",
  "Malmö",
  "Uppsala",
  "Linköping",
  "Örebro",
  "Västerås",
  "Helsingborg",
  "Norrköping",
  "Umeå",
];

export const CATEGORY_ICONS: Record<ServiceCategory, string> = {
  "Städning": "🧹",
  "Trädgård": "🌿",
  "Renovering": "🔨",
  "Flytt": "📦",
  "IT & Teknik": "💻",
  "Undervisning": "📚",
  "Skönhet": "💅",
  "Hälsa": "🏥",
  "Djur": "🐾",
  "Övrigt": "✨",
};
