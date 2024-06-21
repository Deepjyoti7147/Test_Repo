import { BookingUpdateManyWithoutRoomsInput } from "./BookingUpdateManyWithoutRoomsInput";
import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";

export type RoomUpdateInput = {
  availability?: boolean | null;
  bookings?: BookingUpdateManyWithoutRoomsInput;
  hotel?: HotelWhereUniqueInput | null;
  price?: number | null;
  roomType?: string | null;
};
