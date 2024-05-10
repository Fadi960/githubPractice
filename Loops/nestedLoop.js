// nestedloop
//  Multiplication Table
for (let i = 1; i <= 5; i++) {
    // Outer loop: controls rows
    for (let j = 1; j <= 10; j++) {
      // Inner loop: controls columns
      console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log('---'); // Separate each multiplication table
  }
  