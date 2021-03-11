function oddOrEven(number) {
    number = Number(number);
    if(number % 1 == 0) {
        if(number % 2 == 0) {
            console.log("even");
        } else {
            console.log("odd");
        }
    } else {
        console.log("invalid");
    }
}
oddOrEven('14');
oddOrEven('15');
oddOrEven('1.78');
oddOrEven('18000000.51');