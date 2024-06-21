import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { HOTEL_TITLE_FIELD } from "./HotelTitle";
import { LOCATION_TITLE_FIELD } from "../location/LocationTitle";

export const HotelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address" source="address" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="Location"
          source="location.id"
          reference="Location"
        >
          <TextField source={LOCATION_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Room" target="hotelId" label="Rooms">
          <Datagrid rowClick="show">
            <BooleanField label="availability" source="availability" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Hotel" source="hotel.id" reference="Hotel">
              <TextField source={HOTEL_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="price" source="price" />
            <TextField label="roomType" source="roomType" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
