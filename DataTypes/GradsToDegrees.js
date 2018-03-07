function gradConverter(num){
    const ratio = 360/400;
    let degree = (Number(num) * ratio);
    let result = degree>=0 ? degree % 360 : (degree % 360) + 360;
    console.log(result);
}

gradConverter(-1023);