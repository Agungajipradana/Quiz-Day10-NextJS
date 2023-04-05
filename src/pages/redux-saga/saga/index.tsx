import { takeEvery, all } from "redux-saga/effects";
import * as ActionTypeRegion from "../constant/regionConstant";
import { handleGetRegion, handleAddRegion, handleFindRegion, handleEditRegion, handleDelRegion } from "./RegionSaga";

function* watchAll() {
  yield all([
    takeEvery(ActionTypeRegion.GET_DATA_REQUEST, handleGetRegion),
    takeEvery(ActionTypeRegion.ADD_DATA_REQUEST, handleAddRegion),
    takeEvery(ActionTypeRegion.FIND_DATA_REQUEST, handleFindRegion),
    takeEvery(ActionTypeRegion.EDIT_DATA_REQUEST, handleEditRegion),
    takeEvery(ActionTypeRegion.DEL_DATA_REQUEST, handleDelRegion),
  ]);
}

export default watchAll;
