const circleCursor = document.querySelector(".cursor-circle");                      // circle which is a cursor

const nav = document.querySelector('nav');                                          // all navigation
const navVertical = nav.getElementsByClassName('nav__vertical')[0];                 // vertical navigation 
const navVerticalItems = nav.querySelectorAll('.nav__vertical__item');              // vertical navigation buttons
const navHorizontalItems = nav.querySelectorAll('.nav__horizontal__item');          // horizontal navigation buttons

const burgerBtn = document.querySelector('.burger-btn');                            // burger button
const burgerBtnBars = burgerBtn.querySelectorAll('.burger-btn__bars');              // burger button bars

const bubbles = document.querySelectorAll('.bubbles');                              // three bubbles on title page
const titlePage = document.querySelector('.title-page');                            // first page with bubbles

const aboutMeSection = document.querySelector('.about-me');                         // secon section with information about me
const circleBorder = aboutMeSection.querySelector('.about-me__circle');             // white circle on aboutMe page
const circleTextButtons = aboutMeSection.querySelectorAll('.about-me__circle__text');//text around white circle
const aboutMeDescriptions = aboutMeSection.querySelectorAll('.about-me__description');// descriptions with infomrmation about me
const CVDownloadButton = aboutMeSection.querySelector('.aboutme__download');         // button to download CV in about Me section
