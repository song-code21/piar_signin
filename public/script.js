let userId = document.querySelector('#id');
let userPassword = document.querySelector('#password');
let passwordCheck = document.querySelector('#password-check');
let success = document.querySelector('.success-message');
let failure = document.querySelector('.failure-message');
let misMatch = document.querySelector('.mismatch-message');
let match = document.querySelector('.match-message');
let pwSuccess = document.querySelector('.pw-success-message');
let pwFailure = document.querySelector('.pw-failure-message');
let signIn = document.querySelector('.sign-in');
let notReady = document.querySelector('.not-ready');
let checkPage = document.querySelector('.check-page');
let yesBtn = document.querySelector('.yes-btn');
let noBtn = document.querySelector('.no-btn');

userId.onkeyup = function() {
    if (isMoreThan4Length(userId.value)) {
        success.classList.remove('hide')
        failure.classList.add('hide')
    } else {
        success.classList.add('hide')
        failure.classList.remove('hide')
    }
}
function isMoreThan4Length(value) {
    return value.length >= 4
}

userPassword.onkeyup = function() {
    if(isIncludeSpecial(userPassword.value)) {
        pwSuccess.classList.remove('hide');
        pwFailure.classList.add('hide');
    } else {
        pwSuccess.classList.add('hide');
        pwFailure.classList.remove('hide')
    }
}

function isIncludeSpecial(value) {
    for(let i = 0; i < value.length; i++) {
        if(value[i] === '!' || value[i] === '@' || value[i] === '#' || value[i] === '$' || value[i] === '%' || value[i] === '^' || value[i] === '&' || value[i] === '*') {
            return true
        } else {
            console.log('nochange')
        }
    }
    return false
}

passwordCheck.onkeyup = function() {
    if(isCorrect(userPassword.value, passwordCheck.value) && passwordCheck.value !== '') {
        misMatch.classList.add('hide')
        match.classList.remove('hide')
        document.querySelector('.section-right').removeChild(notReady);
        signIn.classList.remove('hide')
    } else {
        misMatch.classList.remove('hide')
        match.classList.add('hide')
    }
};

function isCorrect(value1, value2) {
    return value1 === value2
}

signIn.onclick = function() {
    checkPage.classList.remove('hide');
}

yesBtn.onclick = function() {
    alert('회원가입이 완료되었습니다.')
    checkPage.classList.add('hide');
    location.reload();
}
noBtn.onclick = function() {
    checkPage.classList.add('hide');
}


