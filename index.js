let buttons = document.querySelectorAll(".click")
let leftCol = document.querySelector('.left-col');
let rightCol = document.querySelector('.right-col');
let catImg = document.getElementById('cat');
let dogImg = document.getElementById('dog');


buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (button.id === "left") {
            showLeftColumn();
        } else if (button.id === "right") {
            showRightColumn();
        } else if (button.id === "common") {
            showBothColumns();
        }
    });
});

function showLeftColumn() {
    leftCol.style.width = "92%";
    rightCol.style.width = "8%";
    catImg.style.display = "block";
    dogImg.style.display = "none";
    catImg.style.width = "600px";
}

function showRightColumn() {
    leftCol.style.width = "8%";
    rightCol.style.width = "92%";
    dogImg.style.display = "block";
    catImg.style.display = "none";
    dogImg.style.width = "600px";
}

function showBothColumns() {
    catImg.style.display = "block";
    dogImg.style.display = "block";
    catImg.style.width = "85%";
    dogImg.style.width = "85%";
    leftCol.style.width = "50%";
    rightCol.style.width = "50%";
};
