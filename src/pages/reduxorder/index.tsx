import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DelOrderRequest, GetOrderRequest } from "../../redux-saga/action/orderAction";
import FormikOrderEdit from "./OrderFormikUpdate";
import FormikOrderCreate from "./OrderFormikCreate";
import Layout from "@/component/layout";

export default function OrderSaga() {
  const dispatch = useDispatch();
  const { order } = useSelector((state: any) => state.orderState);
  const [refresh, setRefresh] = useState(false);
  const [display, setDisplay] = useState(false);
  const [displayEdit, setDisplayEdit] = useState(false);
  const [displayDelete, setDisplayDelete] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    dispatch(GetOrderRequest());
  }, [refresh]);

  const onClick = (id: any) => {
    setDisplayEdit(true);
    setId(id);
  };

  const onDelete = (id: any) => {
    dispatch(DelOrderRequest(id));
    setDisplayDelete(true);
    setId(id);
    setRefresh(true);
  };

  return (
    <div>
      {displayEdit ? (
        <FormikOrderEdit setRefresh={setRefresh} setDisplay={setDisplayEdit} id={id} />
      ) : display ? (
        <FormikOrderCreate setRefresh={setRefresh} setDisplay={setDisplay} />
      ) : (
        <div>
          <Layout>
            <>
              <div className="container max-w-7xl mx-auto mt-8">
                <div className="mb-4">
                  <h1 className="font-serif text-3xl font-bold underline decoration-gray-400">Order List</h1>
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
                            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">User ID</th>
                            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Order ID</th>
                            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Total Product</th>
                            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Total Price</th>
                            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Created At</th>
                            <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Update At</th>
                            <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50" colSpan="3">
                              Action
                            </th>
                          </tr>
                        </thead>
                        {order &&
                          Array.isArray(order) &&
                          order.map((order: any) => {
                            return (
                              <tbody className="bg-white" key={order.orderId}>
                                <tr>
                                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div className="flex items-center">{order.userId}</div>
                                  </td>

                                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div className="text-sm leading-5 text-gray-900">{order.orderId}</div>
                                  </td>

                                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <p>{order.totalproduct}</p>
                                  </td>

                                  <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                    <span>{order.totalprice}</span>
                                  </td>

                                  <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                    <span>{order.createdat}</span>
                                  </td>

                                  <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                                    <span>{order.updatedat}</span>
                                  </td>

                                  <td className="d-flex">
                                    <td className="text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200 ">
                                      <button className="text-indigo-600 hover:text-indigo-900" onClick={() => onClick(order.orderId)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                      </button>
                                    </td>

                                    <td className="text-sm font-medium leading-5 whitespace-no-wrap border-b border-gray-200 ">
                                      <button onClick={() => onDelete(order.orderId)}>
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
