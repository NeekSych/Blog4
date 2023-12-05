import { configureStore } from '@reduxjs/toolkit';

import blog from './reducer';

const store = configureStore({
  reducer: blog,
});

export default store;
