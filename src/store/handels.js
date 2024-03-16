export const handelPending = state => {
  state.isLoading = true;
  state.error = '';
};

export const handelRejected = (state, { error }) => {
  state.isLoading = false;
  state.error = error.message;
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
