const addCheesesRequest = () => ({
  type: 'ADD_CHEESE_REQUEST'
});

const addCheesesSuccess = addedCheese => ({
  type: 'ADD_CHEESE_SUCCESS',
  cheeses
});

const addCheesesError = error => ({
  type: 'ADD_CHEESE_ERROR',
  error
});

const addCheese = () => {
  return dispatch => {
    dispatch(addCheese());
    setTimeout(() => {
      fetch('api/fetch-cheeses')
        .then(response => response.json())
        .then(cheeses => dispatch(addCheesesSuccess(cheeses)))
        .catch(error => console.log(error));
    }, 5000);
  };
};

export default { addCheese };
