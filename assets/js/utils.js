// Function to retrieve user data from the landing page
function retrieveUserData() {
    let userData = {
        name: document.getElementById('userName').value,
        zodiac: document.getElementById('userZodiac').value
    };
    return userData;
}

// Function to create a table element underneath the zodiac cards
function createTable() {
    let table = document.createElement('table');
    table.id = 'userDataTable';
    table.className = 'table table-bordered table-striped'; 

    let header = table.createTHead();
    let headerRow = header.insertRow(0);

    let nameHeader = document.createElement('th');
    nameHeader.innerHTML = 'Name';
    headerRow.appendChild(nameHeader);

    let zodiacHeader = document.createElement('th');
    zodiacHeader.innerHTML = 'Zodiac';
    headerRow.appendChild(zodiacHeader);

    document.getElementById('zodiacCardsContainer').appendChild(table);
}

// Function to append user data to the table
function appendUserDataToTable(userData) {
    let table = document.getElementById('userDataTable');

    if (!table) {
        createTable();
        table = document.getElementById('userDataTable');
    }

    let newRow = table.insertRow(-1);

    let nameCell = newRow.insertCell(0);
    nameCell.innerHTML = userData.name;

    let zodiacCell = newRow.insertCell(1);
    zodiacCell.innerHTML = userData.zodiac;
}
