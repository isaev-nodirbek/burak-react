import { Member } from "./member";
import { Product } from "./product";

/** REACT APP STATE **/
/****.  type inegration for whole app.  ****/
export interface AppRootState {
  homePage: HomePageState;
}

/** HOMEPAGE **/
export interface HomePageState {
  popularDishes: Product[];
  newDishes: Product[];
  topUsers: Member[];
}

/** PRODUCTS **/

/** ORDERS PAGE **/
