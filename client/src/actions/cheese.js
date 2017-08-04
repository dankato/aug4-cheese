const fetchCheesesRequest = () => ({
  type: 'FETCH_CHEESES_REQUEST'
});

const fetchCheesesSuccess = cheeses => ({
  type: 'FETCH_CHEESES_SUCCESS',
  cheeses
});

const fetchCheesesError = (error) => ({
  type: 'FETCH_CHEESES_ERROR',
  error
});

const fetchCheeses = () => {
  return dispatch => {
    dispatch(fetchCheesesRequest());
    setTimeout(() => {
      fetch('/api/cheeses',
      {method: "POST",
        cheeses: types
      })
        .then(response => response.json())
        .then(cheeses => dispatch(fetchCheesesSuccess(cheeses)))
        .catch(error => console.log(error));
    }, 5000);
  };
};

export default {fetchCheeses, fetchCheesesRequest, fetchCheesesSuccess, fetchCheesesError}