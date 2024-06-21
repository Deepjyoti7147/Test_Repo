import { BookingCreateNestedManyWithoutCustomersInput } from "./BookingCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  bookings?: BookingCreateNestedManyWithoutCustomersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
};
