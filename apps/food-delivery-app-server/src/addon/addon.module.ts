import { Module } from "@nestjs/common";
import { AddonModuleBase } from "./base/addon.module.base";
import { AddonService } from "./addon.service";
import { AddonController } from "./addon.controller";
import { AddonResolver } from "./addon.resolver";

@Module({
  imports: [AddonModuleBase],
  controllers: [AddonController],
  providers: [AddonService, AddonResolver],
  exports: [AddonService],
})
export class AddonModule {}
