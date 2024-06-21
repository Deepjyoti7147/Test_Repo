import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { HotelListRelationFilter } from "../hotel/HotelListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type LocationWhereInput = {
  city?: StringNullableFilter;
  coordinates?: JsonFilter;
  country?: StringNullableFilter;
  hotels?: HotelListRelationFilter;
  id?: StringFilter;
  state?: StringNullableFilter;
};
