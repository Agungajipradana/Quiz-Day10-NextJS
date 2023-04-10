import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeRegion from "../constant/regionConstant";
import { handleGetRegion, handleAddRegion, handleFindRegion, handleEditRegion, handleDelRegion } from "./RegionSaga";
import * as ActionTypeUser from "../constant/userConstant";
import { handleSignin, handleSignout, handleSignup } from "./UserSaga";
import * as ActionTypeCustomer from "../constant/customerConstant";
import { handleCustomer, createCustomer, findCustomer, editCustomer, delCustomer } from "./CustomerSaga";
import * as ActionTypeOrder from "../constant/orderConstant";
import { handleOrder, createOrder, findOrder, editOrder, delOrder } from "./OrderSaga";
import * as ActionTypeProduct from "../constant/productConstant";
import { handleProduct, createProduct, findProduct, editProduct, delProduct } from "./ProductSaga";
import * as ActionTypeProductCategory from "../constant/productCategoryConstant";
import { handleProductCategory, createProductCategory, findProductCategory, editProductCategory, delProductCategory } from "./ProductCategorySaga";
import * as ActionTypeOrderDetail from "../constant/orderDetailConstant";
import { handleOrderDetail, createOrderDetail, findOrderDetail, editOrderDetail, delOrderDetail } from "./OrderDetailSaga";

function* watchAll() {
  yield all([
    takeEvery(ActionTypeRegion.GET_DATA_REQUEST, handleGetRegion),
    takeEvery(ActionTypeRegion.ADD_DATA_REQUEST, handleAddRegion),
    takeEvery(ActionTypeRegion.FIND_DATA_REQUEST, handleFindRegion),
    takeEvery(ActionTypeRegion.EDIT_DATA_REQUEST, handleEditRegion),
    takeEvery(ActionTypeRegion.DEL_DATA_REQUEST, handleDelRegion),
    takeEvery(ActionTypeUser.USER_SIGNIN_REQUEST, handleSignin),
    takeEvery(ActionTypeUser.USER_SIGNOUT_REQUEST, handleSignout),
    takeEvery(ActionTypeUser.USER_SIGNUP_REQUEST, handleSignup),
    takeEvery(ActionTypeCustomer.GET_CUSTOMER_REQUEST, handleCustomer),
    takeEvery(ActionTypeCustomer.ADD_CUSTOMER_REQUEST, createCustomer),
    takeEvery(ActionTypeCustomer.FIND_CUSTOMER_REQUEST, findCustomer),
    takeEvery(ActionTypeCustomer.EDIT_CUSTOMER_REQUEST, editCustomer),
    takeEvery(ActionTypeCustomer.DEL_CUSTOMER_REQUEST, delCustomer),
    takeEvery(ActionTypeOrder.GET_ORDER_REQUEST, handleOrder),
    takeEvery(ActionTypeOrder.ADD_ORDER_REQUEST, createOrder),
    takeEvery(ActionTypeOrder.FIND_ORDER_REQUEST, findOrder),
    takeEvery(ActionTypeOrder.EDIT_ORDER_REQUEST, editOrder),
    takeEvery(ActionTypeOrder.DEL_ORDER_REQUEST, delOrder),
    takeEvery(ActionTypeProduct.GET_PRODUCT_REQUEST, handleProduct),
    takeEvery(ActionTypeProduct.ADD_PRODUCT_REQUEST, createProduct),
    takeEvery(ActionTypeProduct.FIND_PRODUCT_REQUEST, findProduct),
    takeEvery(ActionTypeProduct.EDIT_PRODUCT_REQUEST, editProduct),
    takeEvery(ActionTypeProduct.DEL_PRODUCT_REQUEST, delProduct),
    takeEvery(ActionTypeProductCategory.GET_PRODUCTCATEGORY_REQUEST, handleProductCategory),
    takeEvery(ActionTypeProductCategory.ADD_PRODUCTCATEGORY_REQUEST, createProductCategory),
    takeEvery(ActionTypeProductCategory.FIND_PRODUCTCATEGORY_REQUEST, findProductCategory),
    takeEvery(ActionTypeProductCategory.EDIT_PRODUCTCATEGORY_REQUEST, editProductCategory),
    takeEvery(ActionTypeProductCategory.DEL_PRODUCTCATEGORY_REQUEST, delProductCategory),
    takeEvery(ActionTypeOrderDetail.GET_ORDERDETAIL_REQUEST, handleOrderDetail),
    takeEvery(ActionTypeOrderDetail.ADD_ORDERDETAIL_REQUEST, createOrderDetail),
    takeEvery(ActionTypeOrderDetail.FIND_ORDERDETAIL_REQUEST, findOrderDetail),
    takeEvery(ActionTypeOrderDetail.EDIT_ORDERDETAIL_REQUEST, editOrderDetail),
    takeEvery(ActionTypeOrderDetail.DEL_ORDERDETAIL_REQUEST, delOrderDetail),
  ]);
}

export default watchAll;
