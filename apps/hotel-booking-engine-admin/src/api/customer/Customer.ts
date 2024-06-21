import { Booking } from "../booking/Booking";

export type Customer = {
  bookings?: Array<Booking>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  updatedAt: Date;
};
