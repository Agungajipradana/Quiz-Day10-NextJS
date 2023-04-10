import { combineReducers } from "redux";
import RegionReduce from "./regionReducer";
import UserReduce from "./userReducer";
import CustomerReduce from "./customerReducer";
import OrderReduce from "./orderReducer";
import ProductReduce from "./productReducer";
import ProductCategoryReduce from "./productCategoryReducer";
import OrderDetailReduce from "./orderDetailReducer";

const rootReducer = combineReducers({
  regionState: RegionReduce,
  userState: UserReduce,
  customerState: CustomerReduce,
  orderState: OrderReduce,
  productState: ProductReduce,
  productCategoryState: ProductCategoryReduce,
  orderDetailState: OrderDetailReduce,
});

export default rootReducer;
