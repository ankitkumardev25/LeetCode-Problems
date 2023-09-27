/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0,
    minPrice = 9999
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) minPrice = prices[i]
    else maxProfit = Math.max(maxProfit, prices[i] - minPrice)
  }
  return maxProfit
}
