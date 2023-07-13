


function getCookie(cookiName) {
    let cookiArry = document.cookie.split(";");
    let mainCooki = null;
    cookiArry.some((cooki) => {
      if (cooki.includes(cookiName)) {
        mainCooki = cooki.substring(cooki.indexOf("=") + 1);
        return true;
      }
    });
    return mainCooki;
  }

  window.addEventListener('load',()=>{

    let isLogin=getCookie('login-token')
    if (!isLogin) {
        location.href='http://127.0.0.1:5501/login.html'
    }

  })