function lastMonth(inputInfo){
    //o day will give last day from prev month
    let day = 0;

    let date = new Date(inputInfo[2], inputInfo[1]-1, 0);
    console.log(date.getDate());
}

lastMonth([13, 12, 2004]);