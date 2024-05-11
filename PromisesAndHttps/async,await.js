// async , await
/* JS asynchronous language h but uska default behaviour synchronous hota h.
 Us behavior ko hame forcefully bta kr async bnana pdta h.
 Sbse easy example h aapke settimeout or setinterval methods*/

 // Function that returns a promise
const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data fetched successfully!");
      }, 2000);
    });
  };
  
  // Using async/await to handle asynchronous code
  const fetchDataAsync = async () => {
    try {
      // Await the result of the fetchData function
      const data = await fetchData();
      console.log(data); // Output: Data fetched successfully!
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  // Calling the async function
  fetchDataAsync();
  