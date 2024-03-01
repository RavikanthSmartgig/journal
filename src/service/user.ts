import { API_END_POINTS } from "../constants";
import { IUserInput } from "../types";
import { ApiInstance } from "./apiInstansce";

export const getAllUser = async () => {
  //   ApiInstance.get(API_END_POINTS.getUsers).then((res) => {
  //     console.log("user");
  //   });

  const response = await ApiInstance.get(API_END_POINTS.getUsers);
  console.log("getAllUser function", response.data);
};

export const createUser = async (userInput: IUserInput) => {
  const res = await ApiInstance.post(API_END_POINTS.getUsers, userInput);
  console.log("res", res);
};
