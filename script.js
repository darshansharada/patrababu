const trollLines = [
    "ହାୟ ପାତ୍ର, କାହିଁ ବରାଳ? ତୁମ ହୃଦୟରେ ଲାଗିଲା ଝଡ଼! ଛଅ ମାସରେ ତୁମେ ହେଲ ଖାଲି, ବରାଳ ଗଲା, ତୁମେ ରହି ଆଲି!",
    "ପାତ୍ର ବାବୁ, ହେ ମୋ ସାଙ୍ଗ, ବରାଳ ତୁମେ ଦେଲା ତାଙ୍ଗ! ଛଅ ମାସ ତୁମକୁ ବ୍ୟବହାରି, ଛାଡ଼ି ଗଲା ବିନା ଆସ୍କାରି!",
];
const friendNameElement = document.getElementById('friendName');
const trollLineElement = document.getElementById('trollLine');
const generateWishButton = document.getElementById('generateWish');
const nameInput = document.getElementById('nameInput');
const setNameButton = document.getElementById('setName');

function getRandomTrollLine() {
    const randomIndex = Math.floor(Math.random() * trollLines.length);
    return trollLines[randomIndex];
}

function updateBirthdayWish() {
    trollLineElement.textContent = getRandomTrollLine();
}

generateWishButton.addEventListener('click', updateBirthdayWish);

setNameButton.addEventListener('click', () => {
    const friendName = nameInput.value.trim();
    if (friendName) {
        friendNameElement.textContent = friendName;
    } else {
        friendNameElement.textContent = "Friend";
    }
    nameInput.value = ""; // Clear the input field
});

// Initial load
updateBirthdayWish();
