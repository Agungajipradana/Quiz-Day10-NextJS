import * as ActionType from "../constant/productConstant";

export const GetProductRequest = (payload: any) => ({
  type: ActionType.GET_PRODUCT_REQUEST,
  payload,
});

export const GetProductSuccess = (payload: any) => ({
  type: ActionType.GET_PRODUCT_SUCCESS,
  payload,
});

export const GetProductFailed = (payload: any) => ({
  type: ActionType.GET_PRODUCT_FAILED,
  payload,
});

export const AddProductRequest = (payload: any) => ({
  type: ActionType.ADD_PRODUCT_REQUEST,
  payload,
});

export const AddProductSuccess = (payload: any) => ({
  type: ActionType.ADD_PRODUCT_SUCCESS,
  payload,
});

export const AddProductFailed = (payload: any) => ({
  type: ActionType.ADD_PRODUCT_FAILED,
  payload,
});

export const EditProductRequest = (payload: any) => ({
  type: ActionType.EDIT_PRODUCT_REQUEST,
  payload,
});

export const EditProductSuccess = (payload: any) => ({
  type: ActionType.EDIT_PRODUCT_SUCCESS,
  payload,
});

export const EditProductFailed = (payload: any) => ({
  type: ActionType.EDIT_PRODUCT_FAILED,
  payload,
});

export const DelProductRequest = (payload: any) => ({
  type: ActionType.DEL_PRODUCT_REQUEST,
  payload,
});

export const DelProductSuccess = (payload: any) => ({
  type: ActionType.DEL_PRODUCT_SUCCESS,
  payload,
});

export const DelProductFailed = (payload: any) => ({
  type: ActionType.DEL_PRODUCT_FAILED,
  payload,
});

export const FindProductRequest = (payload: any) => ({
  type: ActionType.FIND_PRODUCT_REQUEST,
  payload,
});

export const FindProductSuccess = (payload: any) => ({
  type: ActionType.FIND_PRODUCT_SUCCESS,
  payload,
});

export const FindProductFailed = (payload: any) => ({
  type: ActionType.FIND_PRODUCT_FAILED,
  payload,
});
