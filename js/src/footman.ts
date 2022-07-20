const carouselDots: (any) = document.getElementsByClassName("f-dot");
for(let i=0; i<carouselDots.length; i++) {
    // console.log(Carousel.carouselDots[i])
    carouselDots[i].addEventListener('click', (event: any)=> {
        event.target.getAttribute('f-data-slide-to').style.display = "none";
    });
}

document.addEventListener('click', (e) => {
    const target = e.target as HTMLTextAreaElement;
    target?.classList?.forEach((element: any) => {
        switch(element) {
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
    /**
     * زماینکه از سلکتور اسم کلاس استفاده میشود
     * حتما باید اندیس اول را انتخاب کنید وگرنه خطا میدهد
     */
    private static modal: (any) = document.getElementsByClassName('modal')[0];

    public static btnModal() {
        Modal.modal.style.display = 'block';
    }

    public static closeModal() {
        Modal.modal.style.display = 'none';
    }
}

class DropDown{
    private static dropdownCtn: (any) = document.getElementsByClassName("f-dropdown-content")[0];

    constructor() {
        if(DropDown.dropdownCtn.style.display === '') {
            DropDown.dropdownCtn.style.display = 'block';
        } else {
            DropDown.dropdownCtn.style.display = '';
        }
    }
}

class Accordion{
    private static accordionPanel: (any) = document.getElementsByClassName("f-accordion-panel")[0];

    constructor() {
        if(Accordion.accordionPanel.style.display === '') {
            Accordion.accordionPanel.style.display = 'block';
        } else {
            Accordion.accordionPanel.style.display = '';
        }
    }
}

class Carousel{
    private static slideIndex = 1;
    private static carouselPrev: (any) = document.getElementsByClassName("f-prev")[0];
    private static carouselNext: (any) = document.getElementsByClassName("f-next")[0];
    private static carouselSlides: (any) = document.getElementsByClassName("f-my-slides");
    private static carouselDots: (any) = document.getElementsByClassName("f-dot");

    public static prev() {
        console.log(Carousel.carouselSlides.length);
        for(let i = 0; i < Carousel.carouselDots.length; i++) {
            console.log(Carousel.carouselDots[i].clicked() == true);
            Carousel.carouselDots[i].getAttribute("f-data-slide-to");
        }
    }

    public static next() {}

    public static dot() {
        // console.log(Carousel.carouselDots)
        for(let i=0; i<Carousel.carouselDots.length; i++) {
            // console.log(Carousel.carouselDots[i])
            Carousel.carouselDots[i].addEventListener('click', (event: any)=> {
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
    }
}