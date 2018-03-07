function createObject(inputInfo) {
    let person = {};
    person[inputInfo[0]] = inputInfo[1];
    person[inputInfo[2]] = inputInfo[3];
    person[inputInfo[4]] = inputInfo[5];

    return person;
}

console.log(createObject(['name', 'Pesho', 'age', '23', 'gender', 'male']));
