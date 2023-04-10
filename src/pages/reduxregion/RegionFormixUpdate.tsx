import React, { useEffect, useState } from "react";
import Region from "@/api/Region";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { EditRegionRequest } from "@/redux-saga/action/regionAction";

export default function FormikRegionUpdate(props: any) {
  const dispatch = useDispatch();
  const { regions } = useSelector((state: any) => state.regionState);

  useEffect(() => {
    Region.findData(props.id);
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: props.id,
      regionName: regions.regionName,
    },
    onSubmit: async (values) => {
      dispatch(EditRegionRequest(values));
      props.setDisplay(false);
      window.alert("Data Successfully Insert");
      props.setRefresh(true);
    },
  });

  return (
    <>
      <h2>Edit Customer</h2>
      <div>
        <label>Region Name : </label>
        <input type="text" name="regionName" id="regionName" value={formik.values.regionName} onChange={formik.handleChange}></input>
      </div>
      <div>
        <button type="submit" onClick={formik.handleSubmit}>
          Simpan
        </button>
        <button onClick={() => props.setDisplay(false)}>Cancel</button>
      </div>
    </>
  );
}
