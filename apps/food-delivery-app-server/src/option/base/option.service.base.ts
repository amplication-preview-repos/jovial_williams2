/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Option as PrismaOption } from "@prisma/client";

export class OptionServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.OptionCountArgs, "select">): Promise<number> {
    return this.prisma.option.count(args);
  }

  async options(args: Prisma.OptionFindManyArgs): Promise<PrismaOption[]> {
    return this.prisma.option.findMany(args);
  }
  async option(
    args: Prisma.OptionFindUniqueArgs
  ): Promise<PrismaOption | null> {
    return this.prisma.option.findUnique(args);
  }
  async createOption(args: Prisma.OptionCreateArgs): Promise<PrismaOption> {
    return this.prisma.option.create(args);
  }
  async updateOption(args: Prisma.OptionUpdateArgs): Promise<PrismaOption> {
    return this.prisma.option.update(args);
  }
  async deleteOption(args: Prisma.OptionDeleteArgs): Promise<PrismaOption> {
    return this.prisma.option.delete(args);
  }
}