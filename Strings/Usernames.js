function makeUsername(input){
    let spacer = "@";
    let user = "";
    let result = [];
    for(let i=0; i<input.length; i++){
        let users = input[i].split("@");
        user = users[0] + ".";
        let domain = users[1].split(".");
        domain.forEach(e => user+=e[0]);
        // for (let k=0; k<domain.length; k++){
        //     user += domain[k].substr(0, 1);
        // }
        result.push(user);
    }
    console.log(result.join(", "));
}
makeUsername(["peshoo@gmail.com", "todor_43@mail.dir.bg", "foo@bar.com"]);