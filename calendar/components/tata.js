//The program uses a data structure with an array that can contain items and other arrays. Write a function numberOfItems that recursively passes through all arrays and counts the number of occurrences of a given item. Keep in mind that arrays can be nested within each other.
//For example, numberOfItems(arr, 25) and numberOfItems(arr, "apple") for the array below should both return 2.
// Implement the `runSequentially` function.
// - It receives an array of functions named `functions`, each of which returns a promise
// - It evaluates the functions sequentially in the order they appear in the array
// - It returns their resolved values.
// It's important that the promises be resolved sequentially. The first element in the result array should be the result of the first function from the array, the second element should be the result of the second function from the array, and so on.
// If any of the functions throw an exception, the "runSequentially" function should throw an error with the "Something went wrong" message.
// For example, the following code should print "[2, 3]":
const runSequentially = (functions) => {
  return functions.reduce((promise, func) => {
    return promise.then((result) => {
      return func().then((res) => [...result, res]);
    });
  }, Promise.resolve([]));
};

//The front end interface of a stock trading web application has the trading data for the day in JSON format. To paginate the user trade report for the day, implement the function `getPageData`, which:

// - Accepts a string in JSON format, the page size, and the page number.
// - Sums up the stocks each user has traded for that day.
// - Sorts user data in descending order by total stocks per user. If more than one user has the same stock total, they can be in any order.
// - Returns a string in JSON format that has the trading data for the given page number depending on page size. Page numbers start from 1.
function getPageData(dayTrade, pageSize, pageNumber) {
  const data = JSON.parse(dayTrade);
  const sortedData = data.sort((a, b) => b.total - a.total);
  const start = (pageNumber - 1) * pageSize;
  const end = start + pageSize;
  return JSON.stringify(sortedData.slice(start, end));
}
