import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface InputState {
  id: number;
  name: string;
  value?: string;
  options?: string[];
}
export interface FormState {
  inputs: InputState[];
  data: InputState[];
}

const initialState: FormState = {
  inputs: [],
  data: [],
};

export const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addInput: (state, action) => {
      state.inputs.push({
        id: state.inputs.length,
        ...action.payload,
      });
    },
    removeInput: (state, action) => {
      state.inputs = state.inputs.filter(
        (item) => item.id !== action.payload.id
      );
    },
    setValue: (state, action) => {
      state.inputs.map((item) => {
        if (item.id === action.payload.id) {
          item.value = action.payload.value;
        }
        return item;
      });
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { addInput, removeInput, setValue, setData } = formSlice.actions;

export const selectInputs = (state: RootState) => state.form.inputs;
export const selectData = (state: RootState) => state.form.data;

export default formSlice.reducer;
