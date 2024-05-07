import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type activity = {
  id: string;
  toDo: string;
  isDone: boolean;
};

const activitiesState: activity[] = [];
const kuadran1: activity[] = [];
const kuadran2: activity[] = [];
const kuadran3: activity[] = [];
const kuadran4: activity[] = [];

const activities = createSlice({
  name: "activitiesState",
  initialState: {
    activities: activitiesState,
    kuadran1: kuadran1,
    kuadran2: kuadran2,
    kuadran3: kuadran3,
    kuadran4: kuadran4,
  },
  reducers: {
    addActivity: (state, action: PayloadAction<activity>) => {
      state.activities = [...state.activities, action.payload];
    },
    removeActivity: (state, action: PayloadAction<number>) => {
      state.activities.splice(action.payload, 1);
    },
    addKuadran1: (state, action: PayloadAction<activity>) => {
      state.kuadran1 = [...state.kuadran1, action.payload];
    },
    addKuadran2: (state, action: PayloadAction<activity>) => {
      state.kuadran2 = [...state.kuadran2, action.payload];
    },
    addKuadran3: (state, action: PayloadAction<activity>) => {
      state.kuadran3 = [...state.kuadran3, action.payload];
    },
    addKuadran4: (state, action: PayloadAction<activity>) => {
      state.kuadran4 = [...state.kuadran4, action.payload];
    },
    removeKuadran1: (state, action: PayloadAction<number>) => {
      state.kuadran1.splice(action.payload, 1);
    },
    removeKuadran2: (state, action: PayloadAction<number>) => {
      state.kuadran2.splice(action.payload, 1);
    },
    removeKuadran3: (state, action: PayloadAction<number>) => {
      state.kuadran3.splice(action.payload, 1);
    },
    removeKuadran4: (state, action: PayloadAction<number>) => {
      state.kuadran4.splice(action.payload, 1);
    },
    toggleDoneKuadran1: (state, action: PayloadAction<number>) => {
      state.kuadran1[action.payload].isDone =
        !state.kuadran1[action.payload].isDone;
    },
    toggleDoneKuadran2: (state, action: PayloadAction<number>) => {
      state.kuadran2[action.payload].isDone =
        !state.kuadran2[action.payload].isDone;
    },
    toggleDoneKuadran3: (state, action: PayloadAction<number>) => {
      state.kuadran3[action.payload].isDone =
        !state.kuadran3[action.payload].isDone;
    },
    toggleDoneKuadran4: (state, action: PayloadAction<number>) => {
      state.kuadran4[action.payload].isDone =
        !state.kuadran4[action.payload].isDone;
    },
  },
});

export const {
  addActivity,
  removeActivity,
  addKuadran1,
  addKuadran2,
  addKuadran3,
  addKuadran4,
  removeKuadran1,
  removeKuadran2,
  removeKuadran3,
  removeKuadran4,
  toggleDoneKuadran1,
  toggleDoneKuadran2,
  toggleDoneKuadran3,
  toggleDoneKuadran4,
} = activities.actions;
export default activities.reducer;
