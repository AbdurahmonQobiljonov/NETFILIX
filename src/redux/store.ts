import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import reducer from './redusers/redusers';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: {reducer},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
});
export type RootState = ReturnType<typeof store.getState>;

export default store;