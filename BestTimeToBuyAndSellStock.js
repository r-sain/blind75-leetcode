var maxProfit = function (prices) {
  let maxProfit = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    // 1.update the min price encountered so far

    if (prices[i] < minPrice) minPrice = prices[i];

    // 2.calculate profit if stock was sold on current day

    let profit = prices[i] - minPrice;

    // 3.update max profit if current profit is greater

    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
};
