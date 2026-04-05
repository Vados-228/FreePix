body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
}

.cell {
    height: 50px;
    width: 50px;
    border: 3px solid pink;
}

.container {
    display: grid;
    grid-template-columns: repeat(8, 55px);
    padding: 0px 10px;
    height: 50px;
    width: 50px;
    cursor: pointer;
}

.color-palette {
    display: grid;
    grid-template-columns: repeat(9, 55px);
    padding: 10px;
    /* background-color: #f0f0f0; |задник для палитры */
    border-radius: 3px;
}

.color-option {
    height: 50px;
    width: 50px;
    border: 3px solid pink;
    cursor: pointer;
    transition: transform 0.2s, border-color 0.2s;
}

.color-option:hover {
    transform: scale(1.25);
}

.color-option.active {
    transform: scale(1.15);
}
