import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum HeadlampEventType {
  ERROR_BOUNDARY = 'error-boundary',
  DELETE_RESOURCE = 'delete-resource',
  EDIT_RESOURCE = 'edit-resource',
  SCALE_RESOURCE = 'scale-resource',
  RESTART_RESOURCE = 'restart-resource',
  POD_LOGS = 'pod-logs',
  POD_TERMINAL = 'pod-terminal',
  POD_ATTACH = 'pod-attach',
  CREATE_BUTTON = 'create-button',
  PLUGIN_LOADING_ERROR = 'plugin-loading-error',
  PLUGINS_LOADED = 'plugins-loaded',
}

export type HeadlampEvent = {
  type: HeadlampEventType | string;
  data?: any;
};

export type HeadlampEventCallback = (data: HeadlampEvent) => void;

const initialState: {
  trackerFuncs: HeadlampEventCallback[];
} = {
  trackerFuncs: [],
};

export const eventCallbackSlice = createSlice({
  name: 'headlampEventCallbacks',
  initialState,
  reducers: {
    addEventCallback(state, action: PayloadAction<HeadlampEventCallback>) {
      state.trackerFuncs.push(action.payload);
    },
  },
});

export const { addEventCallback } = eventCallbackSlice.actions;

export default eventCallbackSlice.reducer;
