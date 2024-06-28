/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Addon as PrismaAddon } from "@prisma/client";

export class AddonServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.AddonCountArgs, "select">): Promise<number> {
    return this.prisma.addon.count(args);
  }

  async addons(args: Prisma.AddonFindManyArgs): Promise<PrismaAddon[]> {
    return this.prisma.addon.findMany(args);
  }
  async addon(args: Prisma.AddonFindUniqueArgs): Promise<PrismaAddon | null> {
    return this.prisma.addon.findUnique(args);
  }
  async createAddon(args: Prisma.AddonCreateArgs): Promise<PrismaAddon> {
    return this.prisma.addon.create(args);
  }
  async updateAddon(args: Prisma.AddonUpdateArgs): Promise<PrismaAddon> {
    return this.prisma.addon.update(args);
  }
  async deleteAddon(args: Prisma.AddonDeleteArgs): Promise<PrismaAddon> {
    return this.prisma.addon.delete(args);
  }
}