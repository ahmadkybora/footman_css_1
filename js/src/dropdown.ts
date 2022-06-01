export default class Dropdown
{
    private dropdown: (any) = document.getElementById("myDropdown");

    dropdownOpen() {
        var display = this.dropdown.style.display;
        (display === "block") ? (this.dropdown.style.display = "none") : (this.dropdown.style.display = "block");
    }
}