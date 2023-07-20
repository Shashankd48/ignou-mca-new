const printValue = (value) => {
   console.log("VALUE: ", value);
};

const testFun = (cb) => {
   let sum = 0;
   for (let i = 1; i <= 100; i++) {
      sum += i;
   }

   cb(sum);
};

testFun(printValue);
