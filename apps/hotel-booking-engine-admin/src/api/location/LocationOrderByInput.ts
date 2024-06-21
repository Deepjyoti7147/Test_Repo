import { SortOrder } from "../../util/SortOrder";

export type LocationOrderByInput = {
  city?: SortOrder;
  coordinates?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  state?: SortOrder;
  updatedAt?: SortOrder;
};
