import data from './data.json';

// Get saved data saved in localStorage in here 
// console.log(localStorage.getItem('zone'))
let savedData = localStorage.getItem('savedData') 

if (!savedData) {
    // If no save that exists store the first zone in localstorage.
    localStorage.setItem('savedData', Object.keys(data.zones)[0])
    savedData = localStorage.getItem('savedData') 
}

export const savedGameData = savedData as string;
export const GameData = data;