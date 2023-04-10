import * as ActionType from "../constant/orderConstant";

export const GetOrderRequest = (payload: any) => ({
  type: ActionType.GET_ORDER_REQUEST,
  payload,
});

export const GetOrderSuccess = (payload: any) => ({
  type: ActionType.GET_ORDER_SUCCESS,
  payload,
});

export const GetOrderFailed = (payload: any) => ({
  type: ActionType.GET_ORDER_FAILED,
  payload,
});

export const AddOrderRequest = (payload: any) => ({
  type: ActionType.ADD_ORDER_REQUEST,
  payload,
});

export const AddOrderSuccess = (payload: any) => ({
  type: ActionType.ADD_ORDER_SUCCESS,
  payload,
});

export const AddOrderFailed = (payload: any) => ({
  type: ActionType.ADD_ORDER_FAILED,
  payload,
});

export const EditOrderRequest = (payload: any) => ({
  type: ActionType.EDIT_ORDER_REQUEST,
  payload,
});

export const EditOrderSuccess = (payload: any) => ({
  type: ActionType.EDIT_ORDER_SUCCESS,
  payload,
});

export const EditOrderFailed = (payload: any) => ({
  type: ActionType.EDIT_ORDER_FAILED,
  payload,
});

export const DelOrderRequest = (payload: any) => ({
  type: ActionType.DEL_ORDER_REQUEST,
  payload,
});

export const DelOrderSuccess = (payload: any) => ({
  type: ActionType.DEL_ORDER_SUCCESS,
  payload,
});

export const DelOrderFailed = (payload: any) => ({
  type: ActionType.DEL_ORDER_FAILED,
  payload,
});

export const FindOrderRequest = (payload: any) => ({
  type: ActionType.FIND_ORDER_REQUEST,
  payload,
});

export const FindOrderSuccess = (payload: any) => ({
  type: ActionType.FIND_ORDER_SUCCESS,
  payload,
});

export const FindOrderFailed = (payload: any) => ({
  type: ActionType.FIND_ORDER_FAILED,
  payload,
});
