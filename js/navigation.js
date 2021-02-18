'use strict'
class Navigation {
    constructor() {
    }

    showHorizontalMenu() {
        navHorizontalItems[0].style.animation = 'slideInDown .8s forwards ';
        navHorizontalItems[1].style.animation = 'slideInDown .8s .3s forwards ';
        navHorizontalItems[2].style.animation = 'slideInDown .8s .6s forwards ';
        navHorizontalItems[3].style.animation = 'slideInDown .8s .9s forwards ';
    }

    closeHorizontalMenu() {
        navHorizontalItems[0].style.animation = 'slideInUp .8s forwards ';
        navHorizontalItems[1].style.animation = 'slideInUp 1.2s forwards ';
        navHorizontalItems[3].style.animation = 'slideInUp 1.9s forwards ';
        navHorizontalItems[2].style.animation = 'slideInUp 1.5s forwards ';
    }

    showVerticalMenu() {
        burgerBtnBars[0].classList.toggle('burger-btn__bars--active');
        burgerBtnBars[1].classList.toggle('burger-btn__bars--active');
        navVertical.classList.toggle('nav__vertical--active');
        navVerticalItems.forEach(item => {
            item.classList.toggle('nav__vertical__item--active');
        })

        navVerticalItems.forEach(item => {
            item.addEventListener('click', () => {
                burgerBtnBars[0].classList.remove('burger-btn__bars--active');
                burgerBtnBars[1].classList.remove('burger-btn__bars--active');
                navVertical.classList.remove('nav__vertical--active');
                navVerticalItems.forEach(item => {
                    item.classList.remove('nav__vertical__item--active');
                })
            })
        })
    }

    setRightMenuType = () => {
        if (window.innerWidth > 992 && window.scrollY < 50 && !navVerticalItems[0].classList.contains('nav__vertical__item--active')) {
            this.showHorizontalMenu();
            burgerBtn.classList.remove('burger-btn--show')
        } else {
            burgerBtn.classList.add('burger-btn--show')
            this.closeHorizontalMenu();
        }
    }
}

const navigation = new Navigation();
navigation.setRightMenuType();
window.addEventListener('resize', navigation.setRightMenuType);
window.addEventListener('scroll', navigation.setRightMenuType);

burgerBtn.addEventListener('click', navigation.showVerticalMenu);