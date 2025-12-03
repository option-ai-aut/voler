export interface ProductSpec {
  category: string;
  details: {
    label: string;
    value: string;
    description?: string;
  }[];
}

export interface RoadmapItem {
  date: string;
  title: string;
  description: string;
  status: 'completed' | 'current' | 'future';
}
