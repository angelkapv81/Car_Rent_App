import {
  configureStore,
  getDefaultMiddleware,
  createAction,
  createReducer,
} from '@reduxjs/toolkit';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];
export const createMake = createAction('make/create');

const makeReducer = createReducer('', {
  [createMake]: (state, action) => action.payload,
});

export const store = configureStore({
  reducer: {
    make: makeReducer,
    // maxRentalPrice: maxRentalPriceReducer,
    // minMileage: minMileageReducer,
    // maxMileage: maxMileageReduser,
  },
  middleware,
});

// export const persistor = persistStore(store);
