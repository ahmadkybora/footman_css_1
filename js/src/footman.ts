/**
 * زماینکه از سلکتور اسم کلاس استفاده میشود
 * حتما باید اندیس اول را انتخاب کنید وگرنه خطا میدهد
 */
let modalBtn: (any) = document.getElementsByClassName('modalBtn')[0];
let modal: (any) = document.getElementsByClassName('modal')[0];
let modalClose: (any) = document.getElementsByClassName('close')[0];

modalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});
