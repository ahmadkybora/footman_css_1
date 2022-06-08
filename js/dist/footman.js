"use strict";
/**
 * زماینکه از سلکتور اسم کلاس استفاده میشود
 * حتما باید اندیس اول را انتخاب کنید وگرنه خطا میدهد
 */
let modalBtn = document.getElementsByClassName('modalBtn')[0];
let modal = document.getElementsByClassName('modal')[0];
let modalClose = document.getElementsByClassName('close')[0];
// modalBtn.addEventListener('click', () => {
//     modal.style.display = 'block';
// });
// modalClose.addEventListener('click', () => {
//     modal.style.display = 'none';
// });
class Modal {
    constructor() {
        modalBtn.addEventListener('click', () => {
            modal.style.display = 'block';
        });
        modalClose.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
}
//# sourceMappingURL=footman.js.map