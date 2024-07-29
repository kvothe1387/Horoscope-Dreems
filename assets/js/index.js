document.getElementById('zodiac-form').addEventListener('submit', function (event) {
    event.preventDefault()
    handleUserData()
})


// Main function to handle user data
function handleUserData() {
    let userData = retrieveUserData();
    appendUserDataToTable(userData);
    saveUserDataToLocal(userData);
}




// Load and display existing data from localStorage on page load
document.addEventListener('DOMContentLoaded', () => {
    const storedData = loadUserDataFromLocal();
    storedData.forEach(userData => appendUserDataToTable(userData));
});

document.getElementById("goToCards").addEventListener("click", function () {
    location.assign("cards.html")
})


