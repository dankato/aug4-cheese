export const fetchCheeses = () => {
  return dispatch => {
    dispatch(fetchCheeseRequest());
    setTimeout(() => {
      fetch('/api/cheeses')
        .then(response => response.json())
        .then(cheeses => dispatch(fetchCheesesSuccess(cheeses)))
        .catch(err => console.log(err));
    }, 5000);
  };
};

const fetchCheeseRequest = () => ({
  type: 'FETCH_CHEESES_REQUEST'
});

const fetchCheesesSuccess = cheeses => ({
  type: 'FETCH_CHEESES_SUCCESS',
  cheeses
});

const fetchCheeseError = () => ({
  type: 'FETCH_CHEESES_ERROR',
  error
});

