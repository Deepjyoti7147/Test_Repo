import { Location } from "../location/Location";
import { Room } from "../room/Room";

export type Hotel = {
  address: string | null;
  createdAt: Date;
  id: string;
  location?: Location | null;
  name: string | null;
  rooms?: Array<Room>;
  updatedAt: Date;
};
