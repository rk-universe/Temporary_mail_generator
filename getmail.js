

const getmail=()=>{
    console.log("btn click")
const url="https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1";
fetch(url).then(response => {
    return response.json()
} ).then(data =>{
    document.getElementById("mail").innerText=data[0]
    console.log(data[0]);
    localStorage.setItem("generatedMail",data[0])
});
}
document.getElementById('btn').addEventListener('click',getmail)
// var data =  document.getElementById('getDataA').textContent
// console.log(data)

document.getElementById('btncp').addEventListener('click',()=>{
    var copyText=document.getElementById('mail').innerText  
    navigator.clipboard.writeText(copyText);

})

document.getElementById('inboxBox').addEventListener('click',()=>{
    window.open("./all_mail.html")
})
