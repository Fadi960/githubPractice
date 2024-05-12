try {
    // Code that may throw an error
    console.log("Inside try block");
    throw new Error("Something went wrong");
  } catch (error) {
    // Handle the error
    console.error("An error occurred:", error.message);
  } finally {
    // Code to be executed regardless of whether there was an error or not
    console.log("Inside finally block");
  }
  