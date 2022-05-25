export default class Dropdown
{
    dropdown = document.getElementById("myDropdown");

    dropdownOpen() {
        var display = dropdown.style.display;
        (display === "block") ? (dropdown.style.display = "none") : (dropdown.style.display = "block");
    }
}