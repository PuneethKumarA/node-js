const speak = () => {
    console.log('hello, ninjas');
}
speak();

const int = setInterval(() => {
    console.log('in the interval');
}, 1000);

setTimeout(() => {
    console.log('in the timeout');
    clearInterval(int);
}, 3000);

console.log(__dirname);
console.log(__filename);

