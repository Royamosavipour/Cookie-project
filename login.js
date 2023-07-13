const username = document.querySelector("#username");
const password = document.querySelector("#password");
const rememberCheckBox = document.querySelector(".ck");
const btnLogin = document.querySelector("button");

function setcookie(cookiName, cookiValue, cookiExpair) {
  const now = new Date();
  now.setTime(now.getTime() + cookiExpair * 24 * 60 * 60 * 1000);

  document.cookie = `${cookiName}=${cookiValue};path=/;exDay=${now}`;
}




function clearInputValue(){
  username.value=''
  password.value=''
}

btnLogin.addEventListener('click',event=>{
  event.preventDefault()
if (rememberCheckBox.checked) {
  setcookie('login-token',username.value,10)

}
clearInputValue()


})
