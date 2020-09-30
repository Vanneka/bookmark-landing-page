// collect variables
let btns = document.querySelectorAll('.acc-heading')

// functions for accordion
btns.forEach(function (btn) {
    btn.addEventListener('click', () => {
        let g = btn.nextElementSibling;
        if (g.classList.contains('hide')) {
            g.classList.remove('hide')
            g.classList.add('show')
        }
        else {
            g.classList.add('hide')
            g.classList.remove('show')
        }
    })
})

// function for tabs
//tabs is the list of tab titles
let tabs = document.querySelectorAll('[data-tab-target]');

//tabContents is a lst of all the tab contents
let tabContents = document.querySelectorAll('[data-tab-contents]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        let target = document.querySelector(tab.dataset.tabTarget);
        // add the hide to all others apart from the one i will click on next
        tabContents.forEach(tabContent => { tabContent.classList.add('hide') });

        tabs.forEach(tab => { tab.classList.remove('active-tab') });
        // 
        target.classList.remove('hide')
        tab.classList.add('active-tab')

    })
});

// function for navigation active 
let allNavs = document.querySelectorAll('.nav-links')
allNavs.forEach(nav => {
    nav.addEventListener('click', () => {
        allNavs.forEach(nav => {
            nav.classList.remove('active')
        });
        nav.classList.add('active')
    })
});


// function for mobile navigation
let openBtn = document.getElementById('open')
let closeBtn = document.getElementById('close')
let sideBar = document.querySelector('.side-bar-items')

openBtn.addEventListener('click', () => {
    openBtn.style.visibility = 'hidden';
    sideBar.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    sideBar.style.display = 'none';
    openBtn.style.visibility = 'visible';
})


// function for form validation
let theForm = document.querySelector('.the-form');

theForm.addEventListener('submit', checkForm);

function checkForm(e) {
    let userInput = document.getElementById('input-area').value;
    // let errorEmail = document.querySelector('.error-email')
    let errorInput = document.querySelector('.error-input');

    e.preventDefault()

    if (userInput === "") {
        errorInput.style.display = "block"
    } else {
        errorInput.style.display = "none"
        validateEmail(userInput)
    }
    theForm.reset()
}

function validateEmail(val) {
    let regCheck = /\S+@\S+\.\S+/;
    regCheck.test(val)
    let errorEmail = document.querySelector('.error-email')
    let success = document.querySelector('.success');

    if (regCheck.test(val) == false) {
        errorEmail.style.display = "block";
    }
    else {
        errorEmail.style.display = "none"
        success.style.display= "block";
    }
}