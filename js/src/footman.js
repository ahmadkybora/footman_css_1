"use strict";
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
//# sourceMappingURL=footman.js.map