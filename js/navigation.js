'use strict'
class Navigation {
    constructor(burgerBtn, navHorizontalItems, navVerticalItems, navVertical) {
        this.burgerBtn = burgerBtn;
        this.navHorizontalItems = navHorizontalItems;
        this.navVerticalItems = navVerticalItems;
        this.navVertical = navVertical;
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
        navBackground.classList.toggle('nav__vertical__background--active');
        navVerticalItems.forEach(item => { item.classList.toggle('nav__vertical__item--active');})

        navVerticalItems.forEach(item => {
            item.addEventListener('click', () => {
                navBackground.classList.remove('nav__vertical__background--active');
                navVerticalItems.forEach(item => { item.classList.remove('nav__vertical__item--active');})
            })
        })
    }

    setRightMenuType = () => {
        if (window.innerWidth > 992 && window.scrollY < 50 && !navVerticalItems[0].classList.contains('nav__vertical__item--active')) {
            this.showHorizontalMenu();
            burgerBtn.classList.remove('burger-btn--active')
        } else {
            burgerBtn.classList.add('burger-btn--active')
            this.closeHorizontalMenu();
        }
    }
}

const navigation = new Navigation(burgerBtn, navHorizontalItems, navVerticalItems, navVerticalItems);
navigation.setRightMenuType();
window.addEventListener('resize', navigation.setRightMenuType);
window.addEventListener('scroll', navigation.setRightMenuType);

burgerBtn.addEventListener('click', navigation.showVerticalMenu);