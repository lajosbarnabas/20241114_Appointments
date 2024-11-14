import { Person } from "./person.model";

export interface Service {
  id: number;
  name: string;
  description: string;
  availableTimes: string[];
  person: Person;
}
