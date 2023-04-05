import React, { useEffect, useState } from "react";
import Region from "../api/Region";
import Layout from "@/component/layout";
import { useDispatch, useSelector } from "react-redux";
import { DelRegionRequest, GetRegionRequest } from "../redux-saga/action/regionAction";
import FormikRegionCreate from "./RegionFormixCreate";
import FormikRegionUpdate from "./RegionFormixUpdate";

export default function RegionRedux() {
  const dispatch = useDispatch();
  const { regions } = useSelector((state: any) => state.regionState);
  const [display, setDisplay] = useState<any>(false);
  const [refresh, setRefresh] = useState<any>(false);
  const [displayUpdate, setDisplayUpdate] = useState(false);
  const [displayDelete, setDisplayDelete] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    dispatch(GetRegionRequest());
  }, [refresh]);

  const onClick = (id: any) => {
    setDisplayUpdate(true);
    setId(id);
  };

  const onDelete = (id: any) => {
    dispatch(DelRegionRequest(id));
    setDisplayDelete(true);
    setId(id);
    setRefresh(true);
  };

  return (
    <div>
      <Layout>
        <>
          {displayUpdate ? (
            <FormikRegionUpdate setRefresh={setRefresh} setDisplay={setDisplayUpdate} id={id} />
          ) : display ? (
            <FormikRegionCreate setRefresh={setRefresh} setDisplay={setDisplay} />
          ) : (
            <>
              <h2>List Region</h2>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => setDisplay(true)}>
                {" "}
                Add Region{" "}
              </button>
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                        Region ID
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Region Name
                      </th>
                      <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                        Region Photo
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {regions &&
                      Array.isArray(regions) &&
                      regions.map((item: any) => {
                        return (
                          <>
                            <tr key={item.regionId} className="border-b border-gray-200 dark:border-gray-700">
                              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                {item.regionId}
                              </th>
                              <td className="px-6 py-4">{item.regionName}</td>
                              <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">{item.regionPhoto}</td>
                              <td className="px-6 py-4"></td>
                              <td className="d-flex">
                                <td className="text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200 ">
                                  <button className="text-indigo-600 hover:text-indigo-900" onClick={() => onClick(item.regionId)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                  </button>
                                </td>

                                <td className="text-sm font-medium leading-5 whitespace-no-wrap border-b border-gray-200 ">
                                  <button onClick={() => onDelete(item.regionId)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-600 hover:text-red-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                  </button>
                                </td>
                              </td>
                            </tr>
                          </>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </>
      </Layout>
    </div>
  );
}
