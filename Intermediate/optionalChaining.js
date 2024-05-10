const user = {
    name: "John",
    address: null,
      city: "New York",
      zipCode: 12345
    
  };
  
  // Without optional chaining
  const city = user.address ? user.address.city : "Unknown";
  
  console.log(city); // Output: unknown

  // With optional chaining
  const user2 = {
    name: "John",
    address2: {
      city2: "New York",
      zipCode2: 12345
    }
  };
  
  const city2 = user2.address2?.city2 ?? "Unknown";
  
  console.log(city2); // Output: New York


