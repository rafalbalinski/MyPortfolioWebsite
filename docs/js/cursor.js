// ================ DOM ================
// circleCursor - circle which is a cursor
// navHorizontalItems - horizontal navigation buttons
// burgerBtn - burger button
// circleTextButtons - text around white circle

'use strict'
function cursorPosition(event) {
    circleCursor.style.left = event.pageX + 'px';
    circleCursor.style.top = event.pageY + 'px';

};

function cursorOnNavigation() {
    navHorizontalItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            circleCursor.classList.add('cursor-circle--active-nav');
            circleCursor.innerText = item.innerHTML;
            item.style.color = '#ffffff00';
        })
        item.addEventListener('mouseleave', function () {
            circleCursor.classList.remove('cursor-circle--active-nav');
            circleCursor.innerText = '';
            item.style.color = '#ffffff';
        })
    })
};

function cursorOnBurgerBtn() {
    burgerBtn.addEventListener('mouseenter', function () {
        circleCursor.classList.add('cursor-circle--active');
    });

    burgerBtn.addEventListener('mouseleave', function () {
        circleCursor.classList.remove('cursor-circle--active');
    });
};

function cursorOnAboutMeRoundText(){
    circleTextButtons.forEach(item => {
        item.addEventListener('mouseenter', function () {
            circleCursor.classList.add('cursor-circle--active');
        })
        item.addEventListener('mouseleave', function () {
            circleCursor.classList.remove('cursor-circle--active');
        })
    })
};

function cursorOnCVDownloadButton(){
    CVDownloadButton.addEventListener('mouseenter', function () {
        circleCursor.classList.add('cursor-circle--active');
    })
    CVDownloadButton.addEventListener('mouseleave', function () {
        circleCursor.classList.remove('cursor-circle--active');
    })

};

document.addEventListener('mousemove', cursorPosition);
cursorOnNavigation();
cursorOnBurgerBtn();
cursorOnAboutMeRoundText();
cursorOnCVDownloadButton();