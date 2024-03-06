import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import {
  getJournal,
  addJournal,
  updateJournal,
  deleteJournal,
} from "../service";

const home = () => {
  const [isDisplay, setDisplay] = useState(false);
  const [isEdit, setSetEdit] = useState(false);
  const [editData, setEditData] = useState({});
  const [list, setList] = useState([]);

  useEffect(() => {
    getJournal().then((res) => {
      setList(res);
    });
  }, []);

  useEffect(() => {
    console.log("list is updated", list);
  }, [list]);

  const setModalVisible = () => setDisplay(!isDisplay);

  const onSave = (state) => {
    if (isEdit) {
      //api
      updateJournal(
        {
          title: state.Title,
          description: state.Description,
        },
        editData._id
      );
      //new copy list
      const newList = [...list];
      //finding index of
      const indexOf = list.findIndex((item) => item._id == editData._id);
      if (indexOf > -1) {
        newList[indexOf] = {
          ...newList[indexOf],
          title: state.Title,
          description: state.Description,
        };
        setList(newList);
      }
    } else {
      //api
      addJournal({
        title: state.Title,
        description: state.Description,
      });

      //updating the state
      let newList = [...list];
      newList.push({
        title: state.Title,
        description: state.Description,
      });
      setList(newList);
    }
    setModalVisible();
  };

  const onDelete = (id) => {
    let newList = [...list];
    newList = newList.filter((item) => item._id != id);
    console.log("newList", newList);
    setList(newList);
    deleteJournal(id)

  };

  const onEdit = (item) => {
    console.log("item", item);
    setEditData(item);
    setSetEdit(!isEdit);
    setModalVisible();
  };
  return {
    onSave,
    setModalVisible,
    isDisplay,
    list,
    onEdit,
    isEdit,
    editData,
    deleteJournal,
    onDelete
  };
};

export default home;
