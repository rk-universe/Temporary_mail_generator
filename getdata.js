

const getdata=()=>{
    
   const mail= localStorage.getItem('generatedMail')
    console.log(mail)
   const myarray= mail.split("@")

const url="https://www.1secmail.com/api/v1/?action=getMessages&login="+myarray[0]+"&domain="+myarray[1];

console.log(url)
fetch(url).then(response => {
    return response.json()
} ).then(data =>{
    var mail="";
    for(var i=0;i<data.length;i++)
       {
        mail+=`<div class="msg" const="${data[i].id}">
        <div class="comclass"><p>${data[i].from}</p> </div>
        <div class="comclass" id="subject">${data[i].subject}</div>
        <div class="comclass" id="arraw"><p><a href="./single_message.html?id=${data[i].id}&login=${myarray[0]}&domain=${myarray[1]}" id="arrowa" target="_blank">></a> </p></div>
        </div>`
    }
    document.getElementById('allmails').innerHTML=mail
  
});
}

getdata()
