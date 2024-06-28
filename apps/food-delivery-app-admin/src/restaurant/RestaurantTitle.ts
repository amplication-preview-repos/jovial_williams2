import { Restaurant as TRestaurant } from "../api/restaurant/Restaurant";

export const RESTAURANT_TITLE_FIELD = "id";

export const RestaurantTitle = (record: TRestaurant): string => {
  return record.id?.toString() || String(record.id);
};
