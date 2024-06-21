import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { RoomUpdateManyWithoutHotelsInput } from "./RoomUpdateManyWithoutHotelsInput";

export type HotelUpdateInput = {
  address?: string | null;
  location?: LocationWhereUniqueInput | null;
  name?: string | null;
  rooms?: RoomUpdateManyWithoutHotelsInput;
};
