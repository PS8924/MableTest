const maxProfit = (prices: number[]): number => {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (const price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else {
            const profit = price - minPrice;
            maxProfit = Math.max(maxProfit, profit);
        }
    }
    return maxProfit;
}

console.log(maxProfit([4, 7, 2, 6, 1]));
console.log(maxProfit([5, 4, 3, 2, 1]));