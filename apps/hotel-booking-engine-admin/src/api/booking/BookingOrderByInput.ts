import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  roomId?: SortOrder;
  startDate?: SortOrder;
  updatedAt?: SortOrder;
};
