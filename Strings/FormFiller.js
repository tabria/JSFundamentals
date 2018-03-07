function filler(username, email, phoneNumber, info){
    for(let i= 0; i<info.length; i++){
        info[i] = info[i].replace(/<![a-zA-Z]+!>/g,username );
        info[i] = info[i].replace(/<@[a-zA-Z]+@>/g,email );
        info[i] = info[i].replace(/<\+[a-zA-Z]+\+>/g,phoneNumber );
        console.log(info[i]);
    }
}

filler('pit', 'pit@pit.com', '032746', ['I am <!user!>, my email is <@email@>, my phone is <+p+>.']);