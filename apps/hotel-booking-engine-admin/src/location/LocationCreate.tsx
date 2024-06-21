import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { HotelTitle } from "../hotel/HotelTitle";

export const LocationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="city" source="city" />
        <div />
        <TextInput label="country" source="country" />
        <ReferenceArrayInput
          source="hotels"
          reference="Hotel"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={HotelTitle} />
        </ReferenceArrayInput>
        <TextInput label="state" source="state" />
      </SimpleForm>
    </Create>
  );
};
