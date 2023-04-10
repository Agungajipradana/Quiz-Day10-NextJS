import { call, put } from "redux-saga/effects";
import OrderDetail from "@/api/OrderDetail";
import {
  GetOrderDetailSuccess,
  GetOrderDetailFailed,
  AddOrderDetailFailed,
  AddOrderDetailSuccess,
  FindOrderDetailSuccess,
  FindOrderDetailFailed,
  EditOrderDetailSuccess,
  EditOrderDetailFailed,
  DelOrderDetailSuccess,
  DelOrderDetailFailed,
} from "../action/orderDetailAction";

function* handleOrderDetail() {
  try {
    const result = yield call(OrderDetail.list);
    yield put(GetOrderDetailSuccess(result));
  } catch (error) {
    yield put(GetOrderDetailFailed(error));
  }
}
function* createOrderDetail(action: any) {
  const { payload } = action;
  try {
    const result = yield call(OrderDetail.create, payload);
    yield put(AddOrderDetailSuccess(result.data));
  } catch (error) {
    yield put(AddOrderDetailFailed(error));
  }
}
function* findOrderDetail(action: any) {
  const { payload } = action;
  try {
    const result = yield call(OrderDetail.findOne, payload);
    yield put(FindOrderDetailSuccess(result));
  } catch (error) {
    yield put(FindOrderDetailFailed(error));
  }
}
function* editOrderDetail(action: any) {
  const { payload } = action;
  try {
    const result = yield call(OrderDetail.update, payload);
    yield put(EditOrderDetailSuccess(result.data));
  } catch (error) {
    yield put(EditOrderDetailFailed(error));
  }
}

function* delOrderDetail(action: any) {
  const { payload } = action;
  try {
    const result = yield call(OrderDetail.deleted, payload);
    yield put(DelOrderDetailSuccess(result.data));
  } catch (error) {
    yield put(DelOrderDetailFailed(error));
  }
}

export { handleOrderDetail, createOrderDetail, findOrderDetail, editOrderDetail, delOrderDetail };
