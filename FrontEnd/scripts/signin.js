const form=document.querySelector('.sign-in-form');

form.addEventListener('submit',function(e){
    e.preventDefault();
    const email=document.querySelector('.email');
    const password=document.querySelector('.password');
    const msg=document.querySelector('.msg');
    if(!email.value=='' && !password.value=='')
    {
        msg.style.color = 'green';
        msg.textContent = `Welcome back,${email.value}`;
    }
});