const query=window.location.search;
console.log(query)
var b = query.substring(query.indexOf("?")+1);
console.log(b);
const myarray= b.split("&")
console.log(myarray)

const url="https://www.1secmail.com/api/v1/?action=readMessage&"+myarray[1]+"&"+myarray[2]+"&"+myarray[0]
fetch(url).then(response => {
    return response.json()
} ).then(data =>{
    console.log(data)
    const senderMail=data.from
    document.getElementById('circleEle').innerText= senderMail.charAt(0).toUpperCase();
    document.getElementById('mailtodisplay').innerText=data.from
    document.getElementById('actualdate').innerText=data.date
    document.getElementById('actualsub').innerText=data.subject
    document.getElementById('maincontent').innerText=data.textBody
    
});

