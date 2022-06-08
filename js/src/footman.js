"use strict";
document.addEventListener('click', function (e) {
    console.log(e.target.classList);
    e.target.classList.forEach(function (element) {
        switch (element) {
            case 'modalBtn':
                new Modal();
                break;
            case 'f-dropdown-btn':
                new DropDown();
                break;
        }
    });
});
var Modal = /** @class */ (function () {
    function Modal() {
        Modal.modalBtn.addEventListener('click', function () {
            Modal.modal.style.display = 'block';
        });
        Modal.modalClose.addEventListener('click', function () {
            Modal.modal.style.display = 'none';
        });
    }
    /**
     * زماینکه از سلکتور اسم کلاس استفاده میشود
     * حتما باید اندیس اول را انتخاب کنید وگرنه خطا میدهد
     */
    Modal.modalBtn = document.getElementsByClassName('modalBtn')[0];
    Modal.modal = document.getElementsByClassName('modal')[0];
    Modal.modalClose = document.getElementsByClassName('close')[0];
    return Modal;
}());
var DropDown = /** @class */ (function () {
    function DropDown() {
        DropDown.dropdownBtn.addEventListener('click', function () {
            if (DropDown.dropdownCtn.style.display === '') {
                DropDown.dropdownCtn.style.display = 'block';
            }
            else {
                DropDown.dropdownCtn.style.display = '';
            }
        });
    }
    DropDown.dropdownBtn = document.getElementsByClassName('f-dropdown-btn')[0];
    DropDown.dropdownCtn = document.getElementsByClassName("f-dropdown-content")[0];
    return DropDown;
}());
//# sourceMappingURL=footman.js.map