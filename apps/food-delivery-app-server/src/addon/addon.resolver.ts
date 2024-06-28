import * as graphql from "@nestjs/graphql";
import { AddonResolverBase } from "./base/addon.resolver.base";
import { Addon } from "./base/Addon";
import { AddonService } from "./addon.service";

@graphql.Resolver(() => Addon)
export class AddonResolver extends AddonResolverBase {
  constructor(protected readonly service: AddonService) {
    super(service);
  }
}
