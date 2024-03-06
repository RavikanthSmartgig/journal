import { API_END_POINTS } from "../constants";
import { ApiInstance } from "./apiInstansce";

export const getJournal = async () => {
  const res = await ApiInstance.get(API_END_POINTS.journal);
  if (res.status == 200) {
    return res.data;
  }
  return [];
};

export const addJournal = async (reqData) => {
  const res = await ApiInstance.post(API_END_POINTS.journal, reqData);
  return getJournal();
};

export const updateJournal = async (reqData, id) => {
  console.log("updateJournal req", id, reqData);
  const res = await ApiInstance.patch(
    API_END_POINTS.journal + "/" + id,
    reqData
  );
  console.log("updated", res);
  return res;
};

export const deleteJournal = async (id) => {
  console.log("deleteJournal id", id);
  const res = await ApiInstance.delete(API_END_POINTS.journal + "/" + id);
  console.log("deleteJournal", res);
  return res;
};
