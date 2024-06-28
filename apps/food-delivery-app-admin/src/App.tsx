import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DishList } from "./dish/DishList";
import { DishCreate } from "./dish/DishCreate";
import { DishEdit } from "./dish/DishEdit";
import { DishShow } from "./dish/DishShow";
import { RestaurantList } from "./restaurant/RestaurantList";
import { RestaurantCreate } from "./restaurant/RestaurantCreate";
import { RestaurantEdit } from "./restaurant/RestaurantEdit";
import { RestaurantShow } from "./restaurant/RestaurantShow";
import { OptionList } from "./option/OptionList";
import { OptionCreate } from "./option/OptionCreate";
import { OptionEdit } from "./option/OptionEdit";
import { OptionShow } from "./option/OptionShow";
import { OfferList } from "./offer/OfferList";
import { OfferCreate } from "./offer/OfferCreate";
import { OfferEdit } from "./offer/OfferEdit";
import { OfferShow } from "./offer/OfferShow";
import { CartList } from "./cart/CartList";
import { CartCreate } from "./cart/CartCreate";
import { CartEdit } from "./cart/CartEdit";
import { CartShow } from "./cart/CartShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { AddonList } from "./addon/AddonList";
import { AddonCreate } from "./addon/AddonCreate";
import { AddonEdit } from "./addon/AddonEdit";
import { AddonShow } from "./addon/AddonShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"FoodDeliveryApp"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Dish"
          list={DishList}
          edit={DishEdit}
          create={DishCreate}
          show={DishShow}
        />
        <Resource
          name="Restaurant"
          list={RestaurantList}
          edit={RestaurantEdit}
          create={RestaurantCreate}
          show={RestaurantShow}
        />
        <Resource
          name="Option"
          list={OptionList}
          edit={OptionEdit}
          create={OptionCreate}
          show={OptionShow}
        />
        <Resource
          name="Offer"
          list={OfferList}
          edit={OfferEdit}
          create={OfferCreate}
          show={OfferShow}
        />
        <Resource
          name="Cart"
          list={CartList}
          edit={CartEdit}
          create={CartCreate}
          show={CartShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="Addon"
          list={AddonList}
          edit={AddonEdit}
          create={AddonCreate}
          show={AddonShow}
        />
      </Admin>
    </div>
  );
};

export default App;
