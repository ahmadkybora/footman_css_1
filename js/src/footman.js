"use strict";
var carouselDots = document.getElementsByClassName("f-dot");
for (var i = 0; i < carouselDots.length; i++) {
    // console.log(Carousel.carouselDots[i])
    carouselDots[i].addEventListener('click', function (event) {
        event.target.getAttribute('f-data-slide-to').style.display = "none";
    });
}
document.addEventListener('click', function (e) {
    var _a;
    var target = e.target;
    (_a = target === null || target === void 0 ? void 0 : target.classList) === null || _a === void 0 ? void 0 : _a.forEach(function (element) {
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
var Modal = /** @class */ (function () {
    function Modal() {
    }
    Modal.btnModal = function () {
        Modal.modal.style.display = 'block';
    };
    Modal.closeModal = function () {
        Modal.modal.style.display = 'none';
    };
    /**
     * زماینکه از سلکتور اسم کلاس استفاده میشود
     * حتما باید اندیس اول را انتخاب کنید وگرنه خطا میدهد
     */
    Modal.modal = document.getElementsByClassName('modal')[0];
    return Modal;
}());
var DropDown = /** @class */ (function () {
    function DropDown() {
        if (DropDown.dropdownCtn.style.display === '') {
            DropDown.dropdownCtn.style.display = 'block';
        }
        else {
            DropDown.dropdownCtn.style.display = '';
        }
    }
    DropDown.dropdownCtn = document.getElementsByClassName("f-dropdown-content")[0];
    return DropDown;
}());
var Accordion = /** @class */ (function () {
    function Accordion() {
        if (Accordion.accordionPanel.style.display === '') {
            Accordion.accordionPanel.style.display = 'block';
        }
        else {
            Accordion.accordionPanel.style.display = '';
        }
    }
    Accordion.accordionPanel = document.getElementsByClassName("f-accordion-panel")[0];
    return Accordion;
}());
var Carousel = /** @class */ (function () {
    function Carousel() {
    }
    Carousel.prev = function () {
        console.log(Carousel.carouselSlides.length);
        for (var i = 0; i < Carousel.carouselDots.length; i++) {
            console.log(Carousel.carouselDots[i].clicked() == true);
            Carousel.carouselDots[i].getAttribute("f-data-slide-to");
        }
    };
    Carousel.next = function () { };
    Carousel.dot = function () {
        // console.log(Carousel.carouselDots)
        for (var i = 0; i < Carousel.carouselDots.length; i++) {
            // console.log(Carousel.carouselDots[i])
            Carousel.carouselDots[i].addEventListener('click', function (event) {
                // console.log(event.target.getAttribute('f-data-slide-to'));
            });
        }
        //         Object.entries(Carousel.carouselDots).forEach((element: any ) => {
        // // console.log(element)
        //             element.addEventListener('click', (event: any)=> {
        //                 console.log(event);
        //             });
        //         });
        // Carousel.carouselDots.addEventListener("click", () => {
        //     console.log(Carousel.carouselDots);
        // });
        // Object.keys(Carousel.carouselDots).map(b => {
        //     console.log(b);
        // })
        // for(let i = 0; i < Carousel.carouselDots.length; i++) {
        //     console.log(Carousel.carouselDots[i].getAttribute("f-data-slide-to"));
        // }
        // Carousel.carouselDots.getAttribute("f-data-slide-to")[0].forEach((element: any ) => {
        //     console.log(element)
        // });
    };
    Carousel.slideIndex = 1;
    Carousel.carouselPrev = document.getElementsByClassName("f-prev")[0];
    Carousel.carouselNext = document.getElementsByClassName("f-next")[0];
    Carousel.carouselSlides = document.getElementsByClassName("f-my-slides");
    Carousel.carouselDots = document.getElementsByClassName("f-dot");
    return Carousel;
}());
//# sourceMappingURL=footman.js.map