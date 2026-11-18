import { Member } from "./member";
import { Product } from "./product";

/** REACT APP STATE **/
/****.  type inegration for whole app.  ****/
export interface AppRootState {
  homePage: HomePageState;
  productsPage: ProductsPageState;
}

/** HOMEPAGE **/
export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}

/** PRODUCTS **/

export interface ProductsPageState {
  restaurant: Member | null;
  chosenProduct: Product | null;
  products: Product[];
}

/** ORDERS PAGE **/
