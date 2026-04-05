const CELL_AMOUNT = 64;
let current_color = "green";

let container = document.querySelector('.container');
let palette = document.querySelector('.color-palette');

for (let i = 0; i < CELL_AMOUNT; i += 1) {
    let newElement = document.createElement('div');
    newElement.classList.add('cell');

    newElement.addEventListener("click", function(event) {
        event.target.style.backgroundColor = current_color;
    });

    container.appendChild(newElement);
}

let colorOptions = palette.querySelectorAll('.color-option');

colorOptions.forEach(option => {
    if (option.dataset.color === current_color) {
        option.classList.add('active');
    }

    option.addEventListener('click', function() {
        colorOptions.forEach(opt => opt.classList.remove('active'));
        current_color = this.dataset.color;
        this.classList.add('active');
    });

Function
