import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AddonServiceBase } from "./base/addon.service.base";

@Injectable()
export class AddonService extends AddonServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
