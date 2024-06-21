import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type BookingUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  endDate?: Date | null;
  room?: RoomWhereUniqueInput | null;
  startDate?: Date | null;
};
