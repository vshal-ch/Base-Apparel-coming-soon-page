let image=document.querySelector('.image-container>img');
let w=window.outerWidth;
let emailField=document.querySelector('#email');
let errorMessage=document.querySelector('.error');

if(w>=700){
    image.setAttribute('src','./images/hero-desktop.jpg');
}

function changeImage(){
    let w=window.outerWidth;
    if(w>=700){
        image.setAttribute('src','./images/hero-desktop.jpg');
    }
    else{
        image.setAttribute('src','./images/hero-mobile.jpg');
    }
}

function checkEmail(){
    let email=emailField.value;
    let flag=ValidateEmail(email);

    if(!(flag)){
        emailField.style.backgroundImage="url('./images/icon-error.svg')";
        emailField.style.backgroundRepeat='no-repeat';
        emailField.style.backgroundSize='20px';
        emailField.style.backgroundPosition='80% center';

        errorMessage.style.display='flex';
    }
    else if(flag){
        emailField.style.backgroundImage='none';
        errorMessage.style.display='none';
    }
}

function ValidateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
    return (true)
  }
    return (false)
}