import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type BookingWhereInput = {
  customer?: CustomerWhereUniqueInput;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  room?: RoomWhereUniqueInput;
  startDate?: DateTimeNullableFilter;
};
