import { AddonWhereInput } from "./AddonWhereInput";
import { AddonOrderByInput } from "./AddonOrderByInput";

export type AddonFindManyArgs = {
  where?: AddonWhereInput;
  orderBy?: Array<AddonOrderByInput>;
  skip?: number;
  take?: number;
};
