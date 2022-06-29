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
                new Carousel();
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
    private static
}