var dropdown = document.getElementById("myDropdown");

function dropdownOpen() {
    var display = dropdown.style.display;
    (display === "block") ? (dropdown.style.display = "none") : (dropdown.style.display = "block");
}