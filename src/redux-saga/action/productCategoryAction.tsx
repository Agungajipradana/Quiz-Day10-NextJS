import * as ActionType from "../constant/productCategoryConstant";

export const GetProductCategoryRequest = (payload: any) => ({
  type: ActionType.GET_PRODUCTCATEGORY_REQUEST,
  payload,
});

export const GetProductCategorySuccess = (payload: any) => ({
  type: ActionType.GET_PRODUCTCATEGORY_SUCCESS,
  payload,
});

export const GetProductCategoryFailed = (payload: any) => ({
  type: ActionType.GET_PRODUCTCATEGORY_FAILED,
  payload,
});

export const AddProductCategoryRequest = (payload: any) => ({
  type: ActionType.ADD_PRODUCTCATEGORY_REQUEST,
  payload,
});

export const AddProductCategorySuccess = (payload: any) => ({
  type: ActionType.ADD_PRODUCTCATEGORY_SUCCESS,
  payload,
});

export const AddProductCategoryFailed = (payload: any) => ({
  type: ActionType.ADD_PRODUCTCATEGORY_FAILED,
  payload,
});

export const EditProductCategoryRequest = (payload: any) => ({
  type: ActionType.EDIT_PRODUCTCATEGORY_REQUEST,
  payload,
});

export const EditProductCategorySuccess = (payload: any) => ({
  type: ActionType.EDIT_PRODUCTCATEGORY_SUCCESS,
  payload,
});

export const EditProductCategoryFailed = (payload: any) => ({
  type: ActionType.EDIT_PRODUCTCATEGORY_FAILED,
  payload,
});

export const DelProductCategoryRequest = (payload: any) => ({
  type: ActionType.DEL_PRODUCTCATEGORY_REQUEST,
  payload,
});

export const DelProductCategorySuccess = (payload: any) => ({
  type: ActionType.DEL_PRODUCTCATEGORY_SUCCESS,
  payload,
});

export const DelProductCategoryFailed = (payload: any) => ({
  type: ActionType.DEL_PRODUCTCATEGORY_FAILED,
  payload,
});

export const FindProductCategoryRequest = (payload: any) => ({
  type: ActionType.FIND_PRODUCTCATEGORY_REQUEST,
  payload,
});

export const FindProductCategorySuccess = (payload: any) => ({
  type: ActionType.FIND_PRODUCTCATEGORY_SUCCESS,
  payload,
});

export const FindProductCategoryFailed = (payload: any) => ({
  type: ActionType.FIND_PRODUCTCATEGORY_FAILED,
  payload,
});
