import { SortOrder } from "../../util/SortOrder";

export type HotelOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  locationId?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
