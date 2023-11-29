import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DrawerModeState {
  isDetailDrawerEnabled: boolean;
  isDetailDrawerOpen: boolean;
}

const initialState: DrawerModeState = {
  isDetailDrawerEnabled: false,
  isDetailDrawerOpen: false,
};

const drawerModeSlice = createSlice({
  name: 'drawerMode',
  initialState,
  reducers: {
    setDetailDrawerEnabled: (state, action: PayloadAction<boolean>) => {
      state.isDetailDrawerEnabled = action.payload;
      localStorage.setItem('detailDrawerEnabled', `${action.payload}`);
    },
    setDetailDrawerOpen: (state, action: PayloadAction<boolean>) => {
      state.isDetailDrawerOpen = action.payload;
      localStorage.setItem('detailDrawerOpen', `${action.payload}`);
    },
  },
});

export const { setDetailDrawerEnabled, setDetailDrawerOpen } = drawerModeSlice.actions;
export default drawerModeSlice.reducer;
