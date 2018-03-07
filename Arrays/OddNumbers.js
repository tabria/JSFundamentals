function oddDoubler(input){

    let arr = (input.filter((e, i) => i % 2 !== 0).map(e => 2 * e).reverse());
    console.log(arr.join(" "));
}

oddDoubler([3, 0, 10, 4, 7, 3]);