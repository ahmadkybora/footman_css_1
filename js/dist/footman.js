"use strict";
document.addEventListener('click', (e) => {
    var _a;
    const target = e.target;
    (_a = target === null || target === void 0 ? void 0 : target.classList) === null || _a === void 0 ? void 0 : _a.forEach((element) => {
        switch (element) {
            case 'modalBtn':
                Modal.btnModal();
                break;
            case 'close':
                Modal.closeModal();
                break;
            case 'f-dropdown-content':
                new DropDown();
                break;
            case 'f-dropdown-btn':
                new DropDown();
                break;
            case 'f-accordion':
                new Accordion();
                break;
            case 'f-prev':
                Carousel.prev();
                break;
            case 'f-next':
                Carousel.next();
                break;
            case 'f-dot':
                Carousel.dot();
                break;
        }
    });
});
class Modal {
    static btnModal() {
        Modal.modal.style.display = 'block';
    }
    static closeModal() {
        Modal.modal.style.display = 'none';
    }
}
/**
 * زماینکه از سلکتور اسم کلاس استفاده میشود
 * حتما باید اندیس اول را انتخاب کنید وگرنه خطا میدهد
 */
Modal.modal = document.getElementsByClassName('modal')[0];
class DropDown {
    constructor() {
        if (DropDown.dropdownCtn.style.display === '') {
            DropDown.dropdownCtn.style.display = 'block';
        }
        else {
            DropDown.dropdownCtn.style.display = '';
        }
    }
}
DropDown.dropdownCtn = document.getElementsByClassName("f-dropdown-content")[0];
class Accordion {
    constructor() {
        if (Accordion.accordionPanel.style.display === '') {
            Accordion.accordionPanel.style.display = 'block';
        }
        else {
            Accordion.accordionPanel.style.display = '';
        }
    }
}
Accordion.accordionPanel = document.getElementsByClassName("f-accordion-panel")[0];
class Carousel {
    static prev() {
        // console.log(Carousel.carouselDots.getAttribute("f-data-slide-to")[0]);
    }
    static next() { }
    static dot() {
        // console.log(Carousel.carouselDots.getAttribute("f-data-slide-to")[0]);
        // Carousel.carouselDots.getAttribute("f-data-slide-to")[0].forEach((element: any ) => {
        //     console.log(element)
        // });
    }
}
Carousel.slideIndex = 1;
Carousel.carouselPrev = document.getElementsByClassName("f-prev")[0];
Carousel.carouselNext = document.getElementsByClassName("f-next")[0];
Carousel.carouselSlides = document.getElementsByClassName("mySlides");
Carousel.carouselDots = document.getElementsByClassName("f-dot");
//# sourceMappingURL=footman.js.map