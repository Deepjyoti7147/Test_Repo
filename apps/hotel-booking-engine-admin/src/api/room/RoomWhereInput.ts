import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { BookingListRelationFilter } from "../booking/BookingListRelationFilter";
import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type RoomWhereInput = {
  availability?: BooleanNullableFilter;
  bookings?: BookingListRelationFilter;
  hotel?: HotelWhereUniqueInput;
  id?: StringFilter;
  price?: FloatNullableFilter;
  roomType?: StringNullableFilter;
};
