import { BookingCreateNestedManyWithoutRoomsInput } from "./BookingCreateNestedManyWithoutRoomsInput";
import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";

export type RoomCreateInput = {
  availability?: boolean | null;
  bookings?: BookingCreateNestedManyWithoutRoomsInput;
  hotel?: HotelWhereUniqueInput | null;
  price?: number | null;
  roomType?: string | null;
};
