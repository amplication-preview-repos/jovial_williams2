import { Dish as TDish } from "../api/dish/Dish";

export const DISH_TITLE_FIELD = "id";

export const DishTitle = (record: TDish): string => {
  return record.id?.toString() || String(record.id);
};
