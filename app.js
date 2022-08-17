function animatedForm(){
    const arrows = document.querySelectorAll('.fa-arrow-down');
    arrows.forEach(arrows => {
        arrows.addEventListener("click" , () => {
            const input = arrows.previousElementSibling;
            const parent = arrows.parentElement;
            const nextForm = parent.nextElementSibling;
            
            
            if (input.type === "text" && validateUser(input)){
                  nextSlide(parent ,nextForm);
            } else if (input.type === 'email' && validationEmail(input)) {
                  nextSlide(parent , nextForm);
            } else if (input.type === 'password' && validatePassword(input)){
                  nextSlide(parent, nextForm);
            } else {
                parent.style.animation = " shake 0.5s ease";
            }
            parent.addEventListener("animationend", () => {
               parent.style.animation = " " ;
            });
        });
    });
}

function validateUser(user){
    if(user.value.length < 6){
       console.log('Not Enough Characters');
        error('rgb(189 ,87 ,87)');
    }
    else{
        error('rgb(87, 189, 130)');
        return true;

    }
}

function validationEmail(email){
    const validation = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (validation.test(email.value)){
        error('rgb(87, 189, 130)');
        return true;
    } else {
        error('rgb(189 ,87 ,87)');
    }
}

function validatePassword(password){
    const validatePass = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (validatePass.test(password.value)){
        error('rgb(87, 189, 130)');
        return true;
    } else {
        error('rgb(189 ,87 ,87)');
    }
}


function nextSlide(parent ,nextForm){
    parent.classList.add("innactive");
    parent.classList.remove("active");
    nextForm.classList.add("active");

}

function error(color){
    document.body.style.backgroundColor= color;
}

animatedForm();