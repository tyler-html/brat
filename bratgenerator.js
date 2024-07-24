document.addEventListener("DOMContentLoaded", function() {
    const colorPicker = document.getElementById('colorPicker');
    const colorSquare = document.getElementById('colorSquare');

    colorPicker.addEventListener('input', function() {
        colorSquare.style.backgroundColor = colorPicker.value;
    });
});
