import { JsonValue } from "type-fest";
import { Hotel } from "../hotel/Hotel";

export type Location = {
  city: string | null;
  coordinates: JsonValue;
  country: string | null;
  createdAt: Date;
  hotels?: Array<Hotel>;
  id: string;
  state: string | null;
  updatedAt: Date;
};
