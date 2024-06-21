import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { RoomCreateNestedManyWithoutHotelsInput } from "./RoomCreateNestedManyWithoutHotelsInput";

export type HotelCreateInput = {
  address?: string | null;
  location?: LocationWhereUniqueInput | null;
  name?: string | null;
  rooms?: RoomCreateNestedManyWithoutHotelsInput;
};
