export const handelPending = state => {
  state.isLoading = true;
  state.error = '';
};

export const handelRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload.message;
};

export const handelGetContactsFulfilled = (state, { payload }) => {
  state.items = payload;
  state.isLoading = false;
  state.error = '';
};

export const handlerDeleteContactFulfilled = (state, { payload }) => {
  state.items = state.items.filter(({ id }) => id !== payload);
  state.isLoading = false;
  state.error = '';
};


export const handelAddContact = (state, {payload}) => {
  state.items.unshift(payload);
  state.isLoading = false;
  state.error = '';
}
