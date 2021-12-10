const http = require('http');

const links = [2, 3, 4];

let buffer = [];

(function render(index) {

http.get(process.argv[links[index]], (res) => {

    res.setEncoding('utf8');

    res.on('data', function(chunk){
        if(buffer[index] === undefined) {
            buffer[index] = '';
        }
        buffer[index] += chunk;
    });
    res.on('end',  () => {
        const newIndex = index+1;
        if(links[newIndex] !== undefined) {
            render(newIndex);
        } else {
            return renderOutput();
        }
    });
    res.on('error', console.error);

}).on('error', console.error);
})(0);

function renderOutput() {

buffer.forEach( (elem) => {

console.log(elem);

});
}