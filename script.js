console.log('🟥 🟦 🟩 🟨');

function onRedClick() {
    document.getElementById('blocks');
    blocks.innerHTML += '<div onClick=deleteRedBlock(event) class="block red-fill"></div>';
    document.getElementById("red-count").textContent++;
    // let newValue += 1;
    // console.log();
    // console.log(newValue);
    // value = newValue;

}

function onBlueClick() {
    document.getElementById('blocks');
    blocks.innerHTML += '<div onClick=deleteBlueBlock(event) class="block blue-fill"></div>';
    document.getElementById("blue-count").textContent++;
}

function onGreenClick() {
    document.getElementById('blocks');
    blocks.innerHTML += '<div onClick=deleteGreenBlock(event) class="block green-fill"></div>';
    document.getElementById("green-count").textContent++;

}

function onYellowClick() {
    document.getElementById('blocks');
    blocks.innerHTML += '<div onClick=deleteYellowBlock(event) class="block yellow-fill"></div>';
    document.getElementById("yellow-count").textContent++;
}

function deleteRedBlock(event) {
    event.target.remove();
    document.getElementById("red-count").textContent--;

}

function deleteBlueBlock(event) {
    event.target.remove();
    document.getElementById("blue-count").textContent--;
}

function deleteGreenBlock(event) {
    event.target.remove();
    document.getElementById("green-count").textContent--;
}

function deleteYellowBlock(event) {
    event.target.remove();
    document.getElementById("yellow-count").textContent--;

}