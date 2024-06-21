import { Customer } from "../customer/Customer";
import { Room } from "../room/Room";

export type Booking = {
  createdAt: Date;
  customer?: Customer | null;
  endDate: Date | null;
  id: string;
  room?: Room | null;
  startDate: Date | null;
  updatedAt: Date;
};
