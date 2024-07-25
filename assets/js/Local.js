const STORAGE_KEY = 'userData';

// Function to save user data to localStorage
export function saveUserDataToLocal(userData) {
    let existingData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    existingData.push(userData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(existingData));
}

// Function to load user data from localStorage
export function loadUserDataFromLocal() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}
