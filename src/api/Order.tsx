import axios from "axios";

const list = async () => {
  try {
    const result = await axios.get("http://localhost:3002/order/");
    return result.data;
  } catch (error) {
    return error;
  }
};
const deleted = async (id: any) => {
  try {
    const result = await axios.delete("http://localhost:3002/order/" + id);
    return result;
  } catch (error) {
    return error;
  }
};

const create = async (payload: any) => {
  try {
    const result = await axios.post("http://localhost:3002/order/", payload);
    return result;
  } catch (error) {
    return error;
  }
};

const update = async (data: any) => {
  try {
    const result = await axios.put("http://localhost:3002/order/" + data.id, data);
    return result;
  } catch (error) {
    return error;
  }
};

const findOne = async (id: any) => {
  try {
    const result = await axios.get("http://localhost:3002/order/" + id);
    return result.data;
  } catch (error) {
    return error;
  }
};

export default { list, deleted, create, update, findOne };
