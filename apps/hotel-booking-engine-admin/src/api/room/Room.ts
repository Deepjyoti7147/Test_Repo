import { Booking } from "../booking/Booking";
import { Hotel } from "../hotel/Hotel";

export type Room = {
  availability: boolean | null;
  bookings?: Array<Booking>;
  createdAt: Date;
  hotel?: Hotel | null;
  id: string;
  price: number | null;
  roomType: string | null;
  updatedAt: Date;
};
