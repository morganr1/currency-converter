export const fetchLatestCurrencies = async () => {
  try {
    let response = await fetch('https://api.exchangeratesapi.io/latest');
    let { rates } = await response.json();
    return rates;
  } catch (error) {
    console.log(
      'An error occurred trying to fetch data from the rates API',
      error
    );
  }
};
