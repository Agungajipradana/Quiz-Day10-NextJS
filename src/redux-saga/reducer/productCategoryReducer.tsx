import * as ActionType from "../constant/productCategoryConstant";

const INIT_STATE = {
  productCategory: [],
};

const ProductCategoryReduce = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case ActionType.GET_PRODUCTCATEGORY_REQUEST:
      return { ...state };
    case ActionType.GET_PRODUCTCATEGORY_SUCCESS:
      return GetProductCategorySuccessfully(state, action);
    case ActionType.ADD_PRODUCTCATEGORY_REQUEST:
      return { ...state };
    case ActionType.ADD_PRODUCTCATEGORY_SUCCESS:
      return AddProductCategorySuccessfully(state, action);
    case ActionType.FIND_PRODUCTCATEGORY_REQUEST:
      return { ...state };
    case ActionType.FIND_PRODUCTCATEGORY_SUCCESS:
      return FindProductCategorySuccessfully(state, action);
    case ActionType.EDIT_PRODUCTCATEGORY_REQUEST:
      return { ...state };
    case ActionType.EDIT_PRODUCTCATEGORY_SUCCESS:
      return EditProductCategorySuccessfully(state, action);
    case ActionType.DEL_PRODUCTCATEGORY_REQUEST:
      return { ...state };
    case ActionType.DEL_PRODUCTCATEGORY_SUCCESS:
      return DelProductCategorySuccessfully(state, action);
    default:
      return { ...state };
  }
};

const GetProductCategorySuccessfully = (state: any, action: any) => {
  return {
    ...state,
    productCategory: action.payload,
  };
};

const AddProductCategorySuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    productCategory: [...state.PRODUCT, payload],
  };
};

const FindProductCategorySuccessfully = (state: any, action: any) => {
  const { payload } = action;
  return {
    ...state,
    productCategory: payload,
  };
};

const EditProductCategorySuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

const DelProductCategorySuccessfully = (state: any, action: any) => {
  return {
    ...state,
  };
};

export default ProductCategoryReduce;
