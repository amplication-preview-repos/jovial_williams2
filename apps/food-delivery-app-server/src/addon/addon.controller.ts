import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AddonService } from "./addon.service";
import { AddonControllerBase } from "./base/addon.controller.base";

@swagger.ApiTags("addons")
@common.Controller("addons")
export class AddonController extends AddonControllerBase {
  constructor(protected readonly service: AddonService) {
    super(service);
  }
}
