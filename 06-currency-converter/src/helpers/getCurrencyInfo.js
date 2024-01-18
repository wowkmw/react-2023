function getCurrencyInfo(currency) {
  return fetch(
    `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
  )
    .then((r) => r.json())
    .then((d) => {
      return d[currency];
    });
}

export default getCurrencyInfo;
