import { Option as TOption } from "../api/option/Option";

export const OPTION_TITLE_FIELD = "id";

export const OptionTitle = (record: TOption): string => {
  return record.id?.toString() || String(record.id);
};
