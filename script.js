var tablinks =document.getElementsByClassName("tab-links");
var tabcontains=document.getElementsByClassName("tab-contain");
var side=document.getElementById("side");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("Active-link");
    }
    for(tabcontain of tabcontains){
        tabcontain.classList.remove("tab-active");
    }
    event.currentTarget.classList.add("Active-link");
    document.getElementById(tabname).classList.add("tab-active")

}

function openmenu(){
    side.style.right="0"
}
function closemenu(){
    side.style.right="-200px"
}
const scriptURL = '<https://script.google.com/macros/s/AKfycbyqPBLwWNF5bB5LNnUcb5hajEIgowUwiVSs3qrUzMBGqdW86Ig1MrRRjYJWtxrw0bAsjw/exec>'
const form = document.forms['submit-to-google-sheet']
const msg= document.getElementById("msg");
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {

        msg.innerHTML="Message send Successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})