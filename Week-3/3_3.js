function createIncrement() {
    let count=0;
    function increment() {
        count++;
    };
    let message=`Count is ${count}`;
    function log() {
        console.log(message);
    };
    return[increment,log];
};

const[increment,log] = createIncrement();
increment();
increment();
increment();
log();// What is logged?

// output: Count is 0
// The output of the given code will be "Count is 0".
// This is because the `log` function logs the initial value of the `count` variable, which is 0,
// and it doesn't update when `count` is incremented by the `increment` function.