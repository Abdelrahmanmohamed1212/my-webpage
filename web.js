const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["SERVICES", "SOLUTIONS."];
let textArrayIndex = 0; 
let charIndex = 0; 

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } 
    else {
    cursorSpan.classList.remove("typing");
        setTimeout(erase, 500);
    }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, 50);
    } 
    else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    typedTextSpan.classList.add("styling");
        if (textArrayIndex >= textArray.length) {
            textArrayIndex = 0;
            typedTextSpan.classList.remove("styling");
        }    
    setTimeout(type, 1300);
    }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
    if(textArray.length) setTimeout(type, 550);
});
//fade header
const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            document.querySelectorAll('.header-fade')[0].classList.add('fadeInTop');
            document.querySelectorAll('.header-fade')[1].classList.add('fadeInTop');
            document.querySelectorAll('.header-fade')[2].classList.add('fadeInTop');
        }
    });
});
observer.observe(document.querySelector('.hd-body'));



//validation form
let send_btn = document.getElementById('send-btn');

send_btn.onclick = function (event) {
    let nameValid = false;
    let emailValid = false;
    let phoneValid = false;
    let companyValid = false;
    let msgValid = false;
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone-number');
    let company = document.getElementById('company');
    let msg = document.getElementById('message');
    let popup_1 = document.getElementById('popup-1');
    let popup_2 = document.getElementById('popup-2');
    let popup_3 = document.getElementById('popup-3');
    let popup_4 = document.getElementById('popup-4');
    let popup_5 = document.getElementById('popup-5');
    let nameText = name.value.trim();
    let emailText = email.value.trim();
    let phoneText = phone.value.trim();
    let companyText = company.value.trim();
    let msgText = msg.value.trim();
    

    if (nameText !=="" && nameText.length > 3) {
        nameValid = true;
    } else if (nameText === "") {
        popup_1.textContent = 'Name Is Required';
    } else if (nameText.length <= 3) {
        popup_1.textContent = 'Name Must Be More Than 3 Characters';
    }

    if (emailText !=="" && emailText.includes('@') && emailText.includes('.') ) {
        emailValid = true;
    } else if (emailText === "") {
        popup_2.textContent = 'Email Is Required';
    } else if (!emailText.includes('@')) {
        popup_2.textContent = 'Email Address Must Include @';
    } else if (!emailText.includes('.')) {
        popup_2.textContent = 'Email Address Must Include dot .';
    }

    if (phoneText !== "" && !isNaN(parseInt(phoneText))) {
        phoneValid = true;
    } else if (phoneText === "") {
        popup_3.textContent = 'Phone Number Is Required';
    } else if (isNaN(parseInt(phoneText))) {
        popup_3.textContent = 'You Must Enter Numbers Only';
    }

    if (companyText !=="" && companyText.length > 3) {
        companyValid = true;
    } else if (companyText === "") {
        popup_4.textContent = 'Company Name Is Required';
    } else if (companyText.length <= 3) {
        popup_4.textContent = 'Company Name Must Be More Than 3 Characters';
    }

    if (msgText !=="" && msgText.length > 10) {
        msgValid = true;
    } else if (msgText === "") {
        popup_5.textContent = 'Message Text Is Required';
    } else if (msgText.length <= 10) {
        popup_5.textContent = 'Message text Must Be More Than 10 Characters';
    }

    if (nameValid === false || emailValid === false || phoneValid === false || companyValid === false || msgValid === false) {
        event.preventDefault();
    }
};