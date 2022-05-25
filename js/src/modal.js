"use strict";
exports.__esModule = true;
exports.Modal = void 0;
var Modal = /** @class */ (function () {
    function Modal() {
        this.modal = document.getElementById("myModal");
    }
    Modal.prototype.modalOpen = function () {
        var btn = document.getElementById("myBtn");
        this.modal.style.display = "block";
    };
    Modal.prototype.modalClose = function () {
        var span = document.getElementsByClassName("close")[0];
        this.modal.style.display = "none";
    };
    return Modal;
}());
exports.Modal = Modal;
