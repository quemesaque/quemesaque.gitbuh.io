function post(username,password, mail){
    var xhr = new XMLHttpRequest();
    xhr.open('POST', "http://matiasmiodosky.localhost.run/Portal_war_exploded/postUser/{\"username\":\""+ username.value + "\",\"password\":\"" +  password.value + "\",\"mail\":\"" +mail.value + "\",\"examenes\":[]}", false);
    xhr.send();
    console.log("get");
}