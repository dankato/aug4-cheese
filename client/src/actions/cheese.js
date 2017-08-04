export const fetchCheeses = () => {
  return dispatch => {
    dispatch(fetchCheesesRequest());
    setTimeout(() => {
      fetch('/api/cheeses')
        .then(response => response.json())
        .then(cheeses => dispatch(fetchCheesesSuccess(cheeses)))
        .catch(err => console.log(err));
    }, 5000);
  };
};

const fetchCheesesRequest = () => ({
  type: 'FETCH_CHEESES_REQUEST'
});

const fetchCheesesSuccess = cheeses => ({
  type: 'FETCH_CHEESES_SUCCESS',
  cheeses
});

const fetchCheesesError = () => ({
  type: 'FETCH_CHEESES_ERROR',
  error
});

