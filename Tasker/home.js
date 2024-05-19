function signin() {
    var email = document.getElementById("mailid").value;
    var password = document.getElementById("passwordid").value;
   
    const existingUsersJSON = localStorage.getItem('user'); 
    const existingUsers = existingUsersJSON ? JSON.parse(existingUsersJSON) : [];

    const user = existingUsers.find(user => user.email === email && user.pass === password); 

    if (user) {
        alert('Sign in successful!');
        window.location.href = './todo.html';
    } else {
        alert('Invalid email or password');
    }
}

function SignUp(){
    var firstname=document.getElementById("firstid").value
    var lastname=document.getElementById("lastid").value
    var emailaddress=document.getElementById("emailid").value
    var pass=document.getElementById("passid").value
    
    if(!firstname||!lastname||!emailaddress||!pass){
        alert("Enter all the informations")
        return ;
    }
    const emailreg=/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if(!emailreg.test(emailaddress)){
        alert("Please enter a valid email address")
        return;
    }
    const existingusers=localStorage.getItem('user');
    const existing = existingusers ? JSON.parse(existingusers) : [];
    
    const newUsers={firstname,lastname,email: emailaddress, pass}; 
    existing.push(newUsers);

    localStorage.setItem('user',JSON.stringify(existing));

    alert('Sign up successfully!');
    window.location.href='./home.html';
}




