function* generatorFunction() {
    yield 'This is my first statement';
    return 'That\'s it';
}

let results1 = generatorFunction();
let results2 = generatorFunction();

let result;

do {
    result = results1.next();
    console.log(result.value);
} while(!result.done);

for (const iterable of results2) {
    console.log(iterable);
}