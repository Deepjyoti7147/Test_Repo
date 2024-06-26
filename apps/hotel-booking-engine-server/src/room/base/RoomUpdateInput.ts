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
import {
  IsBoolean,
  IsOptional,
  ValidateNested,
  IsNumber,
  IsString,
} from "class-validator";
import { BookingUpdateManyWithoutRoomsInput } from "./BookingUpdateManyWithoutRoomsInput";
import { Type } from "class-transformer";
import { HotelWhereUniqueInput } from "../../hotel/base/HotelWhereUniqueInput";

@InputType()
class RoomUpdateInput {
  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  availability?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => BookingUpdateManyWithoutRoomsInput,
  })
  @ValidateNested()
  @Type(() => BookingUpdateManyWithoutRoomsInput)
  @IsOptional()
  @Field(() => BookingUpdateManyWithoutRoomsInput, {
    nullable: true,
  })
  bookings?: BookingUpdateManyWithoutRoomsInput;

  @ApiProperty({
    required: false,
    type: () => HotelWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HotelWhereUniqueInput)
  @IsOptional()
  @Field(() => HotelWhereUniqueInput, {
    nullable: true,
  })
  hotel?: HotelWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  roomType?: string | null;
}

export { RoomUpdateInput as RoomUpdateInput };
