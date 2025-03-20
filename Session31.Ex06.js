document.getElementById("login").addEventListener("submit",function(event){
    event.preventDefault();
    const validUserName="huanrose@gmail.com"
    const validPassword="123456"
    let userNameInput=document.getElementById("user").value
    let passwordInput=document.getElementById("password").value
    if(userNameInput === validUserName && passwordInput === validPassword){
        console.log("đăng nhập thành công")
    }
    else{
        console.log("Tài khoản hoặc mật khẩu không hợp lệ")
    }
})