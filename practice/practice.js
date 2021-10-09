function calc (a){
    return function(b){
        return function(c) {
            return a + b * c;
        };
    };
}

console.log(calc(2)(3)(4));