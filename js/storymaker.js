// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Constants for main button query selectors
const noun1Button = document.querySelector('#noun1');
const verbButton = document.querySelector('#verb');
const adjectiveButton = document.querySelector('#adjective');
const noun2Button = document.querySelector('#noun2');
const settingButton = document.querySelector('#setting');

// Constants for p tag to display query selectors
const noun1Para = document.querySelector('#choosenNoun1');
const verbPara = document.querySelector('#choosenVerb');
const adjectivePara = document.querySelector('#choosenAdjective');
const noun2Para = document.querySelector('#choosenNoun2');
const settingPara = document.querySelector('#choosenSetting');

// Constants for final buttons and p tags
const playbackButton = document.querySelector('#playback');
const randomButton = document.querySelector('#random');
const resetButton = document.querySelector('#reset');
const storyPara = document.querySelector('#story');

// Variables for pre-defined arrays
let noun1Array = ['Inder', 'Mary', 'The cat', 'A horse', 'A tortoise'];
let verbArray = ['ran', 'sat', 'jumped', 'climbed', 'ate'];
let adjectiveArray = ['slow', 'fast', 'good', 'calm', 'gracefully'];
let noun2Array = ['the ocean', 'a tall tree', 'a majestic mountain', 'a winding road', 'a comfortable chair'];
let settingArray = [
  'on a sunny day at the beach',
  'during a quiet night with a full moon',
  'in the bustling city center',
  'deep in the heart of a lush forest',
  'underneath a starry sky beside a bonfire'
];


// Variables for count to grab array elements
let noun1Count = 0;
let verbCount = 0;
let adjectiveCount = 0;
let noun2Count = 0;
let settingCount = 0;

/* Functions
-------------------------------------------------- */
function noun1_on_click() {
    // variable to get array element and displaying it
    let chosenNoun1 = noun1Array[noun1Count];
    // if-else to change count setting
    if (noun1Count < noun1Array.length - 1) {
        noun1Count++;
    }
    noun1Para.textContent = chosenNoun1;
}

function verb_on_click() {
    let chosenVerb = verbArray[verbCount];
    if (verbCount < verbArray.length - 1) {
        verbCount++;
    }
    verbPara.textContent = chosenVerb;
}

function adjective_on_click() {
    let chosenAdjective = adjectiveArray[adjectiveCount];
    if (adjectiveCount < adjectiveArray.length - 1) {
        adjectiveCount++;
    }
    adjectivePara.textContent = chosenAdjective;
}

function noun2_on_click() {
    let chosenNoun2 = noun2Array[noun2Count];
    if (noun2Count < noun2Array.length - 1) {
        noun2Count++;
    }
    noun2Para.textContent = chosenNoun2;
}

function setting_on_click() {
    let chosenSetting = settingArray[settingCount];
    if (settingCount < settingArray.length - 1) {
        settingCount++;
    }
    settingPara.textContent = chosenSetting;
}

// concatenate the user story and display
function playback_on_click() {
    storyPara.textContent = `${noun1Para.textContent}   ${verbPara.textContent}  ${adjectivePara.textContent} ${noun2Para.textContent} ${settingPara.textContent}`;
}

// grabbing random element from arrays, concatenate and display
function random_on_click() {
    // Randomly select an element from each array
    let randomNoun1 = noun1Array[Math.floor(Math.random() * noun1Array.length)];
    let randomVerb = verbArray[Math.floor(Math.random() * verbArray.length)];
    let randomAdjective = adjectiveArray[Math.floor(Math.random() * adjectiveArray.length)];
    let randomNoun2 = noun2Array[Math.floor(Math.random() * noun2Array.length)];
    let randomSetting = settingArray[Math.floor(Math.random() * settingArray.length)];

    // Display the randomly selected elements
    noun1Para.textContent = randomNoun1;
    verbPara.textContent = randomVerb;
    adjectivePara.textContent = randomAdjective;
    noun2Para.textContent = randomNoun2;
    settingPara.textContent = randomSetting;

    // Update the story paragraph
    storyPara.textContent = noun1Para.textContent +' '+ verbPara.textContent +' '+ adjectivePara.textContent + ' '+ noun2Para.textContent + ' '+settingPara.textContent;
}
function reset_on_click(){
    // Reset all variables and paragraphs
    noun1Count = 0;
    verbCount = 0;
    adjectiveCount = 0;
    noun2Count = 0;
    settingCount = 0;

    noun1Para.textContent = '';
    verbPara.textContent = '';
    adjectivePara.textContent = '';
    noun2Para.textContent = '';
    settingPara.textContent = '';
    storyPara.textContent = '';
}
/* Event Listeners
-------------------------------------------------- */
noun1Button.addEventListener('click', noun1_on_click);
verbButton.addEventListener('click', verb_on_click);
adjectiveButton.addEventListener('click', adjective_on_click);
noun2Button.addEventListener('click', noun2_on_click);
settingButton.addEventListener('click', setting_on_click);
playbackButton.addEventListener('click', playback_on_click);
randomButton.addEventListener('click', random_on_click);
resetButton.addEventListener('click', reset_on_click);