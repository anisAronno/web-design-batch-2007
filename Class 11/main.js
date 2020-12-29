$('#btn').click(function () {
    $('#para').css('color','red')
})


$('#loginForm').submit(function (event) {
    event.preventDefault();
  var uname= $('#uName').val()
  var password= $('#password').val()
  var conPassword= $('#conPassword').val()

   if(uname.length==0){
    $('#uName').focus()
   }else if(password.length==0){
    $('#password').css('border','2px solid red')
    $('#pass').text("Password Required")
    $('#pass').css('color','red')
   }else{
        if(uname=='admin' && password==12345){
            if (password!==conPassword) {
                alert("Password does not match")
            }else{
                
                alert('login Success')
            }
        }else{
          alert("user name or password incorrect")  
        }
   }
})

