import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OfferService } from "./offer.service";
import { OfferControllerBase } from "./base/offer.controller.base";

@swagger.ApiTags("offers")
@common.Controller("offers")
export class OfferController extends OfferControllerBase {
  constructor(protected readonly service: OfferService) {
    super(service);
  }
}
