import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LocationWhereUniqueInput } from "../location/LocationWhereUniqueInput";
import { RoomListRelationFilter } from "../room/RoomListRelationFilter";

export type HotelWhereInput = {
  address?: StringNullableFilter;
  id?: StringFilter;
  location?: LocationWhereUniqueInput;
  name?: StringNullableFilter;
  rooms?: RoomListRelationFilter;
};
