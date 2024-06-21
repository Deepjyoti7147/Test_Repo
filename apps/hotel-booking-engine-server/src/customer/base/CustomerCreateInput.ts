/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BookingCreateNestedManyWithoutCustomersInput } from "./BookingCreateNestedManyWithoutCustomersInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CustomerCreateInput {
  @ApiProperty({
    required: false,
    type: () => BookingCreateNestedManyWithoutCustomersInput,
  })
  @ValidateNested()
  @Type(() => BookingCreateNestedManyWithoutCustomersInput)
  @IsOptional()
  @Field(() => BookingCreateNestedManyWithoutCustomersInput, {
    nullable: true,
  })
  bookings?: BookingCreateNestedManyWithoutCustomersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;
}

export { CustomerCreateInput as CustomerCreateInput };
