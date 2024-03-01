import { API_END_POINTS } from "../constants";
import { ApiInstance } from "./apiInstansce";

export const getAllProducts = async () => {
  try {
    const res = await ApiInstance.get(API_END_POINTS.productEndPoint);
    console.log("res", res);
    if (res.status == 200) {
      return res.data;
    }
    return null;
  } catch (e) {
    console.log("error", e);
    return null;
  }
};

export const createProduct = async () => {
  try {
    const newProduct = {
      pname: "Iphone",
      price: 80000,
    };
    const res = await ApiInstance.post(
      API_END_POINTS.productEndPoint,
      newProduct
    );

    console.log("createProduct", res.data);
  } catch (e) {
    console.log("error", e);
  }
};
