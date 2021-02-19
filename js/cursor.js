'use strict'

function cursorPosition(event) {
    circleCursor.style.left = event.pageX + 'px';
    circleCursor.style.top = event.pageY + 'px';

};


function cursorOnNavigation() {
    navHorizontalItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            console.log('jestem nad');
            circleCursor.classList.add('cursor-circle--active-nav');
            circleCursor.innerText = item.innerHTML;
            item.style.color = '#ffffff00';
        })
        item.addEventListener('mouseleave', function () {
            console.log('nie jestem nad');
            circleCursor.classList.remove('cursor-circle--active-nav');
            circleCursor.innerText = '';
            item.style.color = '#ffffff';
        })
    })

    burgerBtn.addEventListener('mouseenter', function () {
        circleCursor.classList.add('cursor-circle--active-burgerbtn');
    });

    burgerBtn.addEventListener('mouseleave', function () {
        circleCursor.classList.remove('cursor-circle--active-burgerbtn');
    });
}

document.addEventListener('mousemove', cursorPosition);
cursorOnNavigation();
