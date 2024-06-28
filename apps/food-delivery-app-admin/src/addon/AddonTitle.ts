import { Addon as TAddon } from "../api/addon/Addon";

export const ADDON_TITLE_FIELD = "id";

export const AddonTitle = (record: TAddon): string => {
  return record.id?.toString() || String(record.id);
};
