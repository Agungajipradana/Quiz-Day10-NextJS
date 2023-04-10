import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DelOrderDetailRequest, GetOrderDetailRequest } from "../../redux-saga/action/orderDetailAction";
import FormikOrderDetailEdit from "./OrderDetailFormikUpdate";
import FormikOrderDetailCreate from "./OrderDetailFormikCreate";
import Layout from "@/component/layout";

export default function OrderDetailSaga() {
  const dispatch = useDispatch();
  const { orderDetail } = useSelector((state: any) => state.orderDetailState);
  const [refresh, setRefresh] = useState(false);
  const [display, setDisplay] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [displayDelete, setDisplayDelete] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    dispatch(GetOrderDetailRequest());
  }, [refresh]);

  const onClick = (id: any) => {
    setDisplayEdit(true);
    setId(id);
  };

  const onDelete = (id: any) => {
    dispatch(DelOrderDetailRequest(id));
    setDisplayDelete(true);
    setId(id);
    setRefresh(true);
  };

  return (
    <div>
      {displayEdit ? (
        <FormikOrderDetailEdit setRefresh={setRefresh} setDisplay={setDisplayEdit} id={id} />
      ) : display ? (
        <FormikOrderDetailCreate setRefresh={setRefresh} setDisplay={setDisplay} />
      ) : (
        <div>
          <Layout>
            <>
              <div className="container max-w-7xl mx-auto mt-8">
                <div className="mb-4">
                  <h1 className="font-serif text-3xl font-bold underline decoration-gray-400">Order Detail List</h1>
                  <div className="flex justify-end">
                    <button className="px-4 py-2 rounded-md bg-sky-500 text-sky-100 hover:bg-sky-600" onClick={() => setDisplay(true)}>
                      Create Post
                    </button>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                    <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
                      <table className="min-w-full">
                        <thead>
                          <tr>
                            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Order Detail ID</th>
                            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Order ID</th>
                            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Product ID</th>
                            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Quantity</th>
                            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Created At</th>
                            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Updated At</th>
                            <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50" colSpan="3">
                              Action
                            </th>
                          </tr>
                        </thead>
                        {orderDetail &&
                          Array.isArray(orderDetail) &&
                          orderDetail.map((orderDetail: any) => {
                            return (
                              <tbody className="bg-white" key={orderDetail.orderdetailId}>
                                <tr>
                                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div className="flex items-center">{orderDetail.orderdetailId}</div>
                                  </td>

                                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div className="text-sm leading-5 text-gray-900">{orderDetail.orderId}</div>
                                  </td>

                                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <p>{orderDetail.productId}</p>
                                  </td>
                                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <p>{orderDetail.quantity}</p>
                                  </td>

                                  <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                    <span>{orderDetail.createdat}</span>
                                  </td>

                                  <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                    <span>{orderDetail.updatedat}</span>
                                  </td>

                                  <td className="d-flex">
                                    <td className="text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200 ">
                                      <button className="text-indigo-600 hover:text-indigo-900" onClick={() => onClick(orderDetail.orderdetailId)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                      </button>
                                    </td>

                                    <td className="text-sm font-medium leading-5 whitespace-no-wrap border-b border-gray-200 ">
                                      <button onClick={() => onDelete(orderDetail.orderdetailId)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-600 hover:text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                          />
                                        </svg>
                                      </button>
                                    </td>
                                  </td>
                                </tr>
                              </tbody>
                            );
                          })}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </>
          </Layout>
        </div>
      )}
    </div>
  );
}
