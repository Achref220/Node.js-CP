array = process.argv;
let index = 2;
let sum = 0;

while (index < array.length) {
    sum += parseInt(array[index]);
    index += 1;
}

console.log(sum);