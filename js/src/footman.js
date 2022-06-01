"use strict";
/**
 * زماینکه از سلکتور اسم کلاس استفاده میشود
 * حتما باید اندیس اول را انتخاب کنید وگرنه خطا میدهد
 */
var modalBtn = document.getElementsByClassName('modalBtn')[0];
var modal = document.getElementsByClassName('modal')[0];
var modalClose = document.getElementsByClassName('close')[0];
modalBtn.addEventListener('click', function () {
    modal.style.display = 'block';
});
modalClose.addEventListener('click', function () {
    modal.style.display = 'none';
});
//# sourceMappingURL=footman.js.map