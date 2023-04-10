import { call, put } from "redux-saga/effects";
import Order from "../../api/Order";
import { GetOrderSuccess, GetOrderFailed, AddOrderFailed, AddOrderSuccess, FindOrderSuccess, FindOrderFailed, EditOrderSuccess, EditOrderFailed, DelOrderSuccess, DelOrderFailed } from "../action/orderAction";

function* handleOrder() {
  try {
    const result = yield call(Order.list);
    yield put(GetOrderSuccess(result));
  } catch (error) {
    yield put(GetOrderFailed(error));
  }
}
function* createOrder(action: any) {
  const { payload } = action;
  try {
    const result = yield call(Order.create, payload);
    yield put(AddOrderSuccess(result.data));
  } catch (error) {
    yield put(AddOrderFailed(error));
  }
}
function* findOrder(action: any) {
  const { payload } = action;
  try {
    const result = yield call(Order.findOne, payload);
    yield put(FindOrderSuccess(result));
  } catch (error) {
    yield put(FindOrderFailed(error));
  }
}
function* editOrder(action: any) {
  const { payload } = action;
  try {
    const result = yield call(Order.update, payload);
    yield put(EditOrderSuccess(result.data));
  } catch (error) {
    yield put(EditOrderFailed(error));
  }
}

function* delOrder(action: any) {
  const { payload } = action;
  try {
    const result = yield call(Order.deleted, payload);
    yield put(DelOrderSuccess(result.data));
  } catch (error) {
    yield put(DelOrderFailed(error));
  }
}

export { handleOrder, createOrder, findOrder, editOrder, delOrder };
