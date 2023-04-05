import React, { useState } from "react";
import Region from "../api/Region";

export default function RegionCreate(props: any) {
  const [value, setValue] = useState<any>({
    regionName: undefined,
  });
  const HandleChange = (name: any) => (event: any) => {
    setValue({ ...value, [name]: event.target.value });
  };
  const onSubmit = async () => {
    const payload = {
      regionName: value.regionName,
    };
    await Region.Create(payload).then(() => {
      props.setRefresh(true);
      window.alert("Data Successfull Insert");
    });
  };
  return (
    <div>
      <h2>Add Region</h2>

      <form onSubmit={onSubmit}>
        <div>
          <label>Region Name:</label>
          <input type="text" placeholder="region name" onChange={HandleChange("regionName")} />
        </div>
        <div>
          <button type="submit">Simpan</button>
          <button onClick={() => props.setDisplay(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
