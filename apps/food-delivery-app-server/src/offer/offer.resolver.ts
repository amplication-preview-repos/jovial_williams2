import * as graphql from "@nestjs/graphql";
import { OfferResolverBase } from "./base/offer.resolver.base";
import { Offer } from "./base/Offer";
import { OfferService } from "./offer.service";

@graphql.Resolver(() => Offer)
export class OfferResolver extends OfferResolverBase {
  constructor(protected readonly service: OfferService) {
    super(service);
  }
}
