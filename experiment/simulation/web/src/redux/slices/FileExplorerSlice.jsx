import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navType: "file",
  showSideNav: true,
  fileName: "",
  structure: [
    {
      key: 1,
      lable: "Contracts",
      childs: [],
    },
  ],
  fileNameArray: [],
  methodDemo: "",
  showCodeEditor: true,
};
const fileExpoReducer = createSlice({
  name: "explorer",
  initialState,
  reducers: {
    updateNavType: (state, action) => {
      state.navType = action.payload;
    },
    updateSideNavDrawer: (state, action) => {
      state.showSideNav = action.payload;
    },
    updateStructure: (state, action) => {
      state.structure.map((item) => {
        item.childs = action.payload;
      });
    },
    updateFileName: (state, action) => {
      state.fileName = action.payload;
    },
    updateFileNameArray: (state, action) => {
      state.fileNameArray = action.payload;
    },
    updateMethodDemo: (state, action) => {
      state.methodDemo = action.payload;
    },
    UpdateshowCodeEdtior: (state, action) => {
      state.showCodeEditor = action.payload;
    },
  },
});

export const {
  updateNavType,
  updateSideNavDrawer,
  updateStructure,
  updateFileName,
  updateFileNameArray,
  updateMethodDemo,
  UpdateshowCodeEdtior,
} = fileExpoReducer.actions;
export const navType = (state) => state.fileExpoReducer.navType;
export default fileExpoReducer.reducer;
