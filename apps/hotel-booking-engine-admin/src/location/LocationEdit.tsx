import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { HotelTitle } from "../hotel/HotelTitle";

export const LocationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
