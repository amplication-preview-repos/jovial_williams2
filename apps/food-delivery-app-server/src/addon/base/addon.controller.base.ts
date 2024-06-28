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
import { AddonService } from "../addon.service";
import { AddonCreateInput } from "./AddonCreateInput";
import { Addon } from "./Addon";
import { AddonFindManyArgs } from "./AddonFindManyArgs";
import { AddonWhereUniqueInput } from "./AddonWhereUniqueInput";
import { AddonUpdateInput } from "./AddonUpdateInput";

export class AddonControllerBase {
  constructor(protected readonly service: AddonService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Addon })
  async createAddon(@common.Body() data: AddonCreateInput): Promise<Addon> {
    return await this.service.createAddon({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Addon] })
  @ApiNestedQuery(AddonFindManyArgs)
  async addons(@common.Req() request: Request): Promise<Addon[]> {
    const args = plainToClass(AddonFindManyArgs, request.query);
    return this.service.addons({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Addon })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async addon(
    @common.Param() params: AddonWhereUniqueInput
  ): Promise<Addon | null> {
    const result = await this.service.addon({
      where: params,
      select: {
        createdAt: true,
        id: true,
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
  @swagger.ApiOkResponse({ type: Addon })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAddon(
    @common.Param() params: AddonWhereUniqueInput,
    @common.Body() data: AddonUpdateInput
  ): Promise<Addon | null> {
    try {
      return await this.service.updateAddon({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
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
  @swagger.ApiOkResponse({ type: Addon })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAddon(
    @common.Param() params: AddonWhereUniqueInput
  ): Promise<Addon | null> {
    try {
      return await this.service.deleteAddon({
        where: params,
        select: {
          createdAt: true,
          id: true,
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