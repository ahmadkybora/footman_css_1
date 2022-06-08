document.addEventListener('click', (e) => {
    console.log(e.target.classList);
    e.target.classList.forEach(element => {
        switch(element) {
            case 'modalBtn':
                new Modal();
            break;

            case 'f-dropdown-btn':
                new DropDown();
            break;
    });
});

class Modal{
    /**
     * زماینکه از سلکتور اسم کلاس استفاده میشود
     * حتما باید اندیس اول را انتخاب کنید وگرنه خطا میدهد
     */
    private static modalBtn: (any) = document.getElementsByClassName('modalBtn')[0];
    private static modal: (any) = document.getElementsByClassName('modal')[0];
    private static modalClose: (any) = document.getElementsByClassName('close')[0];

    constructor() {
        Modal.modalBtn.addEventListener('click', () => {
            Modal.modal.style.display = 'block';
        });
        
        Modal.modalClose.addEventListener('click', () => {
            Modal.modal.style.display = 'none';
        });
    }
}

class DropDown{
    private static dropdownBtn: (any) = document.getElementsByClassName('f-dropdown-btn')[0];
    private static dropdownCtn: (any) = document.getElementsByClassName("f-dropdown-content")[0];

    constructor() {
        DropDown.dropdownBtn.addEventListener('click', () => {
            if(DropDown.dropdownCtn.style.display === '') {
                DropDown.dropdownCtn.style.display = 'block';
            } else {
                DropDown.dropdownCtn.style.display = '';
            }
        })
    }
}