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
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { LocationService } from "../location.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { LocationCreateInput } from "./LocationCreateInput";
import { Location } from "./Location";
import { LocationFindManyArgs } from "./LocationFindManyArgs";
import { LocationWhereUniqueInput } from "./LocationWhereUniqueInput";
import { LocationUpdateInput } from "./LocationUpdateInput";
import { HotelFindManyArgs } from "../../hotel/base/HotelFindManyArgs";
import { Hotel } from "../../hotel/base/Hotel";
import { HotelWhereUniqueInput } from "../../hotel/base/HotelWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class LocationControllerBase {
  constructor(
    protected readonly service: LocationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Location })
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createLocation(
    @common.Body() data: LocationCreateInput
  ): Promise<Location> {
    return await this.service.createLocation({
      data: data,
      select: {
        city: true,
        coordinates: true,
        country: true,
        createdAt: true,
        id: true,
        state: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Location] })
  @ApiNestedQuery(LocationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async locations(@common.Req() request: Request): Promise<Location[]> {
    const args = plainToClass(LocationFindManyArgs, request.query);
    return this.service.locations({
      ...args,
      select: {
        city: true,
        coordinates: true,
        country: true,
        createdAt: true,
        id: true,
        state: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Location })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async location(
    @common.Param() params: LocationWhereUniqueInput
  ): Promise<Location | null> {
    const result = await this.service.location({
      where: params,
      select: {
        city: true,
        coordinates: true,
        country: true,
        createdAt: true,
        id: true,
        state: true,
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

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Location })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateLocation(
    @common.Param() params: LocationWhereUniqueInput,
    @common.Body() data: LocationUpdateInput
  ): Promise<Location | null> {
    try {
      return await this.service.updateLocation({
        where: params,
        data: data,
        select: {
          city: true,
          coordinates: true,
          country: true,
          createdAt: true,
          id: true,
          state: true,
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
  @swagger.ApiOkResponse({ type: Location })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteLocation(
    @common.Param() params: LocationWhereUniqueInput
  ): Promise<Location | null> {
    try {
      return await this.service.deleteLocation({
        where: params,
        select: {
          city: true,
          coordinates: true,
          country: true,
          createdAt: true,
          id: true,
          state: true,
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/hotels")
  @ApiNestedQuery(HotelFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Hotel",
    action: "read",
    possession: "any",
  })
  async findHotels(
    @common.Req() request: Request,
    @common.Param() params: LocationWhereUniqueInput
  ): Promise<Hotel[]> {
    const query = plainToClass(HotelFindManyArgs, request.query);
    const results = await this.service.findHotels(params.id, {
      ...query,
      select: {
        address: true,
        createdAt: true,
        id: true,

        location: {
          select: {
            id: true,
          },
        },

        name: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/hotels")
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "update",
    possession: "any",
  })
  async connectHotels(
    @common.Param() params: LocationWhereUniqueInput,
    @common.Body() body: HotelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      hotels: {
        connect: body,
      },
    };
    await this.service.updateLocation({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/hotels")
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "update",
    possession: "any",
  })
  async updateHotels(
    @common.Param() params: LocationWhereUniqueInput,
    @common.Body() body: HotelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      hotels: {
        set: body,
      },
    };
    await this.service.updateLocation({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/hotels")
  @nestAccessControl.UseRoles({
    resource: "Location",
    action: "update",
    possession: "any",
  })
  async disconnectHotels(
    @common.Param() params: LocationWhereUniqueInput,
    @common.Body() body: HotelWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      hotels: {
        disconnect: body,
      },
    };
    await this.service.updateLocation({
      where: params,
      data,
      select: { id: true },
    });
  }
}
