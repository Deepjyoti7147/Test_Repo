/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { BookingService } from "../booking.service";
import { BookingCreateInput } from "./BookingCreateInput";
import { Booking } from "./Booking";
import { BookingFindManyArgs } from "./BookingFindManyArgs";
import { BookingWhereUniqueInput } from "./BookingWhereUniqueInput";
import { BookingUpdateInput } from "./BookingUpdateInput";

export class BookingControllerBase {
  constructor(protected readonly service: BookingService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Booking })
  async createBooking(
    @common.Body() data: BookingCreateInput
  ): Promise<Booking> {
    return await this.service.createBooking({
      data: {
        ...data,

        customer: data.customer
          ? {
              connect: data.customer,
            }
          : undefined,

        room: data.room
          ? {
              connect: data.room,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        endDate: true,
        id: true,

        room: {
          select: {
            id: true,
          },
        },

        startDate: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Booking] })
  @ApiNestedQuery(BookingFindManyArgs)
  async bookings(@common.Req() request: Request): Promise<Booking[]> {
    const args = plainToClass(BookingFindManyArgs, request.query);
    return this.service.bookings({
      ...args,
      select: {
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        endDate: true,
        id: true,

        room: {
          select: {
            id: true,
          },
        },

        startDate: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Booking })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async booking(
    @common.Param() params: BookingWhereUniqueInput
  ): Promise<Booking | null> {
    const result = await this.service.booking({
      where: params,
      select: {
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        endDate: true,
        id: true,

        room: {
          select: {
            id: true,
          },
        },

        startDate: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Booking })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBooking(
    @common.Param() params: BookingWhereUniqueInput,
    @common.Body() data: BookingUpdateInput
  ): Promise<Booking | null> {
    try {
      return await this.service.updateBooking({
        where: params,
        data: {
          ...data,

          customer: data.customer
            ? {
                connect: data.customer,
              }
            : undefined,

          room: data.room
            ? {
                connect: data.room,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          customer: {
            select: {
              id: true,
            },
          },

          endDate: true,
          id: true,

          room: {
            select: {
              id: true,
            },
          },

          startDate: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Booking })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBooking(
    @common.Param() params: BookingWhereUniqueInput
  ): Promise<Booking | null> {
    try {
      return await this.service.deleteBooking({
        where: params,
        select: {
          createdAt: true,

          customer: {
            select: {
              id: true,
            },
          },

          endDate: true,
          id: true,

          room: {
            select: {
              id: true,
            },
          },

          startDate: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
