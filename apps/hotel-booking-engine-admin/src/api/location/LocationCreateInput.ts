import { InputJsonValue } from "../../types";
import { HotelCreateNestedManyWithoutLocationsInput } from "./HotelCreateNestedManyWithoutLocationsInput";

export type LocationCreateInput = {
  city?: string | null;
  coordinates?: InputJsonValue;
  country?: string | null;
  hotels?: HotelCreateNestedManyWithoutLocationsInput;
  state?: string | null;
};
