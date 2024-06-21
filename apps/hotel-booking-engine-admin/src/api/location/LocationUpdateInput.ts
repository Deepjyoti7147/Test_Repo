import { InputJsonValue } from "../../types";
import { HotelUpdateManyWithoutLocationsInput } from "./HotelUpdateManyWithoutLocationsInput";

export type LocationUpdateInput = {
  city?: string | null;
  coordinates?: InputJsonValue;
  country?: string | null;
  hotels?: HotelUpdateManyWithoutLocationsInput;
  state?: string | null;
};
