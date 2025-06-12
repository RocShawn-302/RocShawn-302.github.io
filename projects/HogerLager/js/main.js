console.log('Main loaded');

// credits
let creditsSpeler = 0
let creditsComputer = 0
const creditsSpelerShower = document.querySelector('.creditsSpeler')
const creditsComputerShower = document.querySelector('.creditsComputer')
let totalcredits = creditsComputer + creditsSpeler

// audio
let bg1 = document.querySelector('.Hod1')
let bg2 = document.querySelector('.Hod2')
let bg3 = document.querySelector('.Hod3')
const snap = document.querySelector('.Snap')
const snap2 = document.querySelector('.Snap2')
let mutecheck = false

// EGO
// EGOS Added: The Black Silence, The Red Mist, Angela, Bad Time

let EGOonP1 = false
let EGOonCOM = false
const EGOP1 = document.querySelector('.EGOPLAYER')
const EGOCOM = document.querySelector('.EGOCOM')
let EGOEquippedP1 = 'Angela'
let EGOEquippedCOM = 'Angela'
let EGOMusic = document.querySelector ('.EGO')
let EGOMusicCOM = document.querySelector ('.EGO')
let goldensix = false
let blacksix = false

//Angela EGO

function baseEGO(){
    if (EGOonP1 = true){
        let numberRoll = Math.floor(Math.random() * 6) + 2;
        rolled = numberRoll
        if (gameStart == true) {
            
            console.log(numberRoll);
            document.querySelector('.DicePlayerValue').src = 'img/DiceRoll.gif';
            switch(numberRoll){
                case 1:
                    document.querySelector('.DicePlayerValue').src = 'img/1.png';
                    break;
                case 2:
                    document.querySelector('.DicePlayerValue').src = 'img/2.png';
                    break;
                case 3:
                    document.querySelector('.DicePlayerValue').src = 'img/3.png';
                    break;
                case 4:
                    document.querySelector('.DicePlayerValue').src = 'img/4.png';
                    break;
                case 5:
                    document.querySelector('.DicePlayerValue').src = 'img/5.png';
                    break;
                case 6:
                    document.querySelector('.DicePlayerValue').src = 'img/6.png';
                    break;
                case 7:
                    document.querySelector('.DicePlayerValue').src = 'img/7.png';
                    break;
                default:
                    document.querySelector('.DicePlayerValue').src = 'img/0.png';
            }
        }
        if (buttonhogerpressed == true){
            resultCheckerHoger()
    } else {
            resultCheckerLager()
}}}
function baseEGOcom(){
    numberRollcom = Math.floor(Math.random() * 6) + 2;
    
        document.querySelector('.DicePlayerValue').src = 'img/Nothing.png';
        console.log(numberRollcom);
        document.querySelector('.DiceComputerValue').src = 'img/DiceRoll.gif';
        switch(numberRollcom){
            case 1:
                document.querySelector('.DiceComputerValue').src = 'img/1.png';
                break;
            case 2:
                document.querySelector('.DiceComputerValue').src = 'img/2.png';
                break;
            case 3:
                document.querySelector('.DiceComputerValue').src = 'img/3.png';
                break;
            case 4:
                document.querySelector('.DiceComputerValue').src = 'img/4.png';
                break;
            case 5:
                document.querySelector('.DiceComputerValue').src = 'img/5.png';
                break;
            case 6:
                document.querySelector('.DiceComputerValue').src = 'img/6.png';
                break;
            case 7:
                document.querySelector('.DiceComputerValue').src = 'img/7.png';
                break;
            default:
                document.querySelector('.DiceComputerValue').src = 'img/0.png';
        } 
        numberDiv.innerHTML = numberRollcom
        resultOutcome = ''
        resultDiv.innerHTML = resultOutcome
        egoTimerCOM--
}

// The Black Silence EGO

function TheBlackSilenceEGO(){
    if (EGOonP1 = true){
        
        let numberRoll = Math.floor(Math.random() * 2) + 1;
        rolled = numberRoll
        if (gameStart == true) {
            
            console.log(numberRoll);
            document.querySelector('.DicePlayerValue').src = 'img/DiceRoll.gif';
            switch(numberRoll){
                case 1:
                    document.querySelector('.DicePlayerValue').src = 'img/1.png';
                    numberRoll = 1
                    break;
                case 2:
                    document.querySelector('.DicePlayerValue').src = 'img/6.png';
                    blacksix = true
                    numberRoll = 6
                    console.log('Black six activated')
                    break;
                default:
                    document.querySelector('.DicePlayerValue').src = 'img/0.png';
            }
            console.log(numberRoll)
            if (buttonhogerpressed == true){
                resultCheckerHoger()
            } else if (buttonlagerpressed == true){
                resultCheckerLager()
    }}}}
function TheBlackSilenceEGOcom(){
    numberRollcom = Math.floor(Math.random() * 2) + 1;
        
            document.querySelector('.DicePlayerValue').src = 'img/Nothing.png';
            console.log(numberRollcom);
            document.querySelector('.DiceComputerValue').src = 'img/DiceRoll.gif';
            switch(numberRollcom){
                case 1:
                    document.querySelector('.DiceComputerValue').src = 'img/1.png';
                    numberRollcom = 1
                    break;
                case 2:
                    document.querySelector('.DiceComputerValue').src = 'img/6.png';
                    numberRollcom = 6
                    blacksix = true
                    console.log('Black six activated')
                    break;
                default:
                    document.querySelector('.DiceComputerValue').src = 'img/0.png';
            } 
            console.log(numberRollcom)
            numberDiv.innerHTML = numberRollcom
            resultOutcome = ''
            resultDiv.innerHTML = resultOutcome
            blacksix = false
            egoTimerCOM--
}

//The Red Mist EGO

function TheRedMistEGO(){
    if (EGOonP1 == true) {
        
        let numberRoll = Math.floor(Math.random() * 6) + 4;
        rolled = numberRoll
        if (gameStart == true) {
            
            console.log(numberRoll);
            document.querySelector('.DicePlayerValue').src = 'img/DiceRoll.gif';
            switch(numberRoll){
                case 1:
                    document.querySelector('.DicePlayerValue').src = 'img/1.png';
                    break;
                case 2:
                    document.querySelector('.DiceCPlayerValue').src = 'img/2.png';
                    break;
                case 3:
                    document.querySelector('.DicePlayerValue').src = 'img/3.png';
                    break;
                case 4:
                    document.querySelector('.DicePlayerValue').src = 'img/4.png';
                    break;
                case 5:
                    document.querySelector('.DicePlayerValue').src = 'img/5.png';
                    break;
                case 6:
                    document.querySelector('.DicePlayerValue').src = 'img/6.png';
                    break;
                case 7:
                    document.querySelector('.DicePlayerValue').src = 'img/7.png';
                    break;
                case 8:
                    document.querySelector('.DicePlayerValue').src = 'img/8.png';
                    break;
                case 9:
                    document.querySelector('.DicePlayerValue').src = 'img/9.png';
                    break;
                default:
                    document.querySelector('.DicePlayerValue').src = 'img/0.png';
            }
            if (buttonhogerpressed == true){
                resultCheckerHoger()
        } else {
                resultCheckerLager()
    }}}}
function TheRedMistEGOcom(){
    numberRollcom = Math.floor(Math.random() * 6) + 4;
        
            document.querySelector('.DicePlayerValue').src = 'img/Nothing.png';
            console.log(numberRollcom);
            document.querySelector('.DiceComputerValue').src = 'img/DiceRoll.gif';
            switch(numberRollcom){
                case 1:
                    document.querySelector('.DiceComputerValue').src = 'img/1.png';
                    break;
                case 2:
                    document.querySelector('.DiceComputerValue').src = 'img/2.png';
                    break;
                case 3:
                    document.querySelector('.DiceComputerValue').src = 'img/3.png';
                    break;
                case 4:
                    document.querySelector('.DiceComputerValue').src = 'img/4.png';
                    break;
                case 5:
                    document.querySelector('.DiceComputerValue').src = 'img/5.png';
                    break;
                case 6:
                    document.querySelector('.DiceComputerValue').src = 'img/6.png';
                    break;
                case 7:
                    document.querySelector('.DiceComputerValue').src = 'img/7.png';
                    break;
                case 8:
                    document.querySelector('.DiceComputerValue').src = 'img/8.png';
                    break;
                case 9:
                    document.querySelector('.DiceComputerValue').src = 'img/9.png';
                    break;
                default:
                    document.querySelector('.DiceComputerValue').src = 'img/0.png';
            } 
            numberDiv.innerHTML = numberRollcom
            resultOutcome = ''
            resultDiv.innerHTML = resultOutcome
            egoTimerCOM--
}

// Bad Time EGO

function BadTime(){
    if (EGOonP1 = true){
        let numberRoll = Math.floor(Math.random() * 6) + 1;
        rolled = numberRoll
        console.log('Sans ego started')
        if (gameStart == true){
            
            console.log(numberRoll);
            document.querySelector('.DicePlayerValue').src = 'img/DiceRoll.gif';
            switch(numberRoll){
                case 1:
                    document.querySelector('.DicePlayerValue').src = 'img/1.png';
                    break;
                case 2:
                    document.querySelector('.DicePlayerValue').src = 'img/2.png';
                    break;
                case 3:
                    document.querySelector('.DicePlayerValue').src = 'img/3.png';
                    break;
                case 4:
                    document.querySelector('.DicePlayerValue').src = 'img/4.png';
                    break;
                case 5:
                    document.querySelector('.DicePlayerValue').src = 'img/5.png';
                    break;
                case 6:
                    document.querySelector('.DicePlayerValue').src = 'img/6.png';
                    break;
                default:
                    document.querySelector('.DicePlayerValue').src = 'img/0.png';
            }
        numberRollcom = numberRollcom - 3
        console.log(numberRollcom);
        document.querySelector('.DiceComputerValue').src = 'img/DiceRoll.gif';
        switch(numberRollcom){
            case 1:
                document.querySelector('.DiceComputerValue').src = 'img/1.png';
                break;
            case 2:
                document.querySelector('.DiceComputerValue').src = 'img/2.png';
                break;
            case 3:
                document.querySelector('.DiceComputerValue').src = 'img/3.png';
                break;
            case 4:
                document.querySelector('.DiceComputerValue').src = 'img/4.png';
                break;
            case 5:
                document.querySelector('.DiceComputerValue').src = 'img/5.png';
                break;
            case 6:
                document.querySelector('.DiceComputerValue').src = 'img/6.png';
                break;
            case 0:
                document.querySelector('.DiceComputerValue').src = 'img/0.png';
                break;
            case -1:
                document.querySelector('.DiceComputerValue').src = 'img/6.png';
                break;
            case -2:
                document.querySelector('.DiceComputerValue').src = 'img/6.png';
                break;
            default:
                document.querySelector('.DiceComputerValue').src = 'img/0.png';
        } 
        numberDiv.innerHTML = numberRollcom
        resultOutcome = ''
        resultDiv.innerHTML = resultOutcome
        if (buttonhogerpressed == true){
            resultCheckerHoger()
    } else {
            resultCheckerLager()
}}}}

function BadTimecom(){
    numberRollcom = Math.floor(Math.random() * 6) + 1;
    document.querySelector('.DicePlayerValue').src = 'img/Nothing.png';
    console.log(numberRollcom);
    document.querySelector('.DiceComputerValue').src = 'img/DiceRoll.gif';
    switch(numberRollcom){
        case 1:
            document.querySelector('.DiceComputerValue').src = 'img/1.png';
            break;
        case 2:
            document.querySelector('.DiceComputerValue').src = 'img/2.png';
            break;
        case 3:
            document.querySelector('.DiceComputerValue').src = 'img/3.png';
            break;
        case 4:
            document.querySelector('.DiceComputerValue').src = 'img/4.png';
            break;
        case 5:
            document.querySelector('.DiceComputerValue').src = 'img/5.png';
            break;
        case 6:
            document.querySelector('.DiceComputerValue').src = 'img/6.png';
            break;
        default:
            document.querySelector('.DiceComputerValue').src = 'img/0.png';
    } 
    resultOutcome = ''
    numberDiv.innerHTML = numberRollcom
    resultDiv.innerHTML = resultOutcome
}


// character stuff
// Characters added: Roland, Gebura/Kali, A1isb/Milk
const characterPlayer = prompt('Choose Your Name')
const UsernamePlayer = document.querySelector('.usernameP')
const characterComputer = prompt('Choose Their Name')
const UsernameComputer = document.querySelector('.usernameCOM')
const characterQuotePlayer = document.querySelector(".quotePlayer")
const characterQuoteComputer = document.querySelector(".quoteComputer")
let QuotePlayer = ''
let QuoteComputer = ''
let startingQuote = 'Let’s Do it!'
let winQuote = 'Haha geek!'
let loseQuote = 'Aw what?!'
let tieQuote = 'Ohhhh ur hacking'

let startingQuoteCom = 'Let’s Do it!'
let winQuoteCom = 'Haha geek!'
let loseQuoteCom = 'Aw what?!'
let tieQuoteCom = 'Ohhhh ur hacking'

const drawQuote = 'TIE BREAKER! Roll again!'
let quotechecker = false

// Character: Roland
if (characterPlayer  == 'Roland' | characterPlayer == 'roland' | characterPlayer == 'ROLAND') {
    startingQuote = 'Alright, alright. Stay calm, and cooool your head.'
    winQuote = 'Well, that was simple… It’s no problem at all for me!'
    loseQuote = 'Whoops, that caught me off-guard… That was lame, me, too lame…'
    tieQuote = 'That’s that, and this is this.'
    bg1 = document.querySelector('.Kether1')
    bg2 = document.querySelector('.Kether2')
    bg3 = document.querySelector('.Kether3')
    EGOMusic = document.querySelector ('.EGORoland')
    EGOEquippedP1 = 'The Black Silence'
    EGOP1.innerHTML = 'Manifest The Black Silence [10 credits needed] <br> <br> "Roll only MAX or MIN for 5 rounds and increase Credit gain by 3"'
}

if (characterComputer  == 'Roland' | characterComputer == 'roland' | characterComputer == 'ROLAND') {
    startingQuoteCom = 'Alright, alright. Stay calm, and cooool your head.'
    winQuoteCom = 'Well, that was simple… It’s no problem at all for me!'
    loseQuoteCom = 'Whoops, that caught me off-guard… That was lame, me, too lame…'
    tieQuoteCom = 'That’s that, and this is this.'
    EGOMusicCOM = document.querySelector ('.EGORoland')
    EGOEquippedCOM = 'The Black Silence'
    EGOCOM.innerHTML = 'Manifest The Black Silence [10 credits needed] <br> <br> "Roll only MAX or MIN for 5 rounds and increase Credit gain by 3"'
}

// Character: Gebura / Kali
if (characterPlayer  == 'Gebura' | characterPlayer == 'gebura' | characterPlayer == 'GEBURA' |
    characterPlayer  == 'Kali' | characterPlayer == 'kali' | characterPlayer == 'KALI') {
    startingQuote = 'Everyone ready? Let’s beat those guys to submission.'
    winQuote = 'I’m starting to grow accustomed to this new body.'
    loseQuote = 'Damn it, I wasn’t hoping to retire this way…'
    tieQuote = 'Thought you could get me with that? Not a chance.'
    bg1 = document.querySelector('.Gebura1')
    bg2 = document.querySelector('.Gebura2')    
    bg3 = document.querySelector('.Gebura3')
    EGOMusic = document.querySelector ('.EGOGebura')
    EGOEquippedP1 = 'The Red Mist'
    EGOP1.innerHTML = 'Manifest The Red Mist [10 credits needed] <br> <br> "Increase dice power by 3 for 5 rounds and Credit gain by 2"'
}

if (characterComputer  == 'Gebura' | characterComputer == 'gebura' | characterComputer == 'GEBURA' |
    characterComputer  == 'Kali' | characterComputer == 'kali' | characterComputer == 'KALI') {
    startingQuoteCom = 'Everyone ready? Let’s beat those guys to submission.'
    winQuoteCom = 'I’m starting to grow accustomed to this new body.'
    loseQuoteCom = 'Damn it, I wasn’t hoping to retire this way…'
    tieQuoteCom = 'Thought you could get me with that? Not a chance.'
    EGOMusicCOM = document.querySelector ('.EGOGebura')
    EGOEquippedCOM = 'The Red Mist'
    EGOCOM.innerHTML = 'Manifest The Red Mist [10 credits needed] <br> <br> "Increase dice power by 3 for 5 rounds and Credit gain by 2"'
}

// Character: A1isb / Milk
if (characterPlayer  == 'A1isb' | characterPlayer == 'a1isb' | characterPlayer == 'A1ISB' |
    characterPlayer  == 'Milk' | characterPlayer == 'milk' | characterPlayer == 'MILK') {
    startingQuote = 'i have arrived from my esculator with a sense of purpose.'
    winQuote = 'guess im just too sigma.'
    loseQuote = 'i let you win'
    tieQuote = 'LLJ🕊️LLR🕊️LLE🕊️LLT🕊️'
    bg1 = document.querySelector('.Milk1')
    bg2 = document.querySelector('.Milk1')    
    bg3 = document.querySelector('.Milk1')
    EGOMusic = document.querySelector ('.Milk2')
    EGOEquippedP1 = 'The Red Mist'
    EGOP1.innerHTML = 'Manifest The Red Mist [10 credits needed] <br> <br> "Increase dice power by 3 for 5 rounds and Credit gain by 2"'
}

if (characterComputer  == 'A1isb' | characterComputer == 'a1isb' | characterComputer == 'A1ISB' |
    characterComputer  == 'Milk' | characterComputer == 'milk' | characterComputer == 'MILK') {
    startingQuoteCom = 'i have arrived from my esculator with a sense of purpose.'
    winQuoteCom = 'guess im just too sigma.'
    loseQuoteCom = 'i let you win'
    tieQuoteCom = 'LLJ🕊️LLR🕊️LLE🕊️LLT🕊️'
    EGOMusicCOM = document.querySelector ('.Milk2')
    EGOEquippedCOM = 'The Red Mist'
    EGOCOM.innerHTML = 'Manifest The Red Mist [10 credits needed] <br> <br> "Increase dice power by 3 for 5 rounds and Credit gain by 2"'
}

// Character: Sans
if (characterPlayer  == 'Sans' | characterPlayer == 'sans' | characterPlayer == 'SANS') {
    startingQuote = 'it’s a beautiful day outside.'
    winQuote = 'guess i’m pretty good at my job, huh?'
    loseQuote = 'heh heh heh heh...'
    tieQuote = 'you look frustrated about something.'
    bg1 = document.querySelector('.Sans1')
    bg2 = document.querySelector('.Sans2')
    bg3 = document.querySelector('.Sans2')
    EGOMusic = document.querySelector ('.EGOBadtime')
    EGOEquippedP1 = 'Bad Time'
    EGOP1.innerHTML = 'Manifest Bad Time Mode [10 credits needed] <br> <br> "Roll only MAX or MIN for 5 rounds and increase Credit gain by 3'
}

if (characterComputer  == 'Sans' | characterComputer == 'sans' | characterComputer == 'SANS') {
    startingQuoteCom = 'it’s a beautiful day outside.'
    winQuoteCom = 'guess i’m pretty good at my job, huh?'
    loseQuoteCom = 'heh heh heh heh...'
    tieQuoteCom = 'you look frustrated about something.'
    EGOMusicCOM = document.querySelector ('.EGOBadtime')
    EGOEquippedCOM = 'Bad Time'
    EGOCOM.innerHTML = 'Manifest Bad Time Mode [10 credits needed] <br> <br> "Roll only MAX or MIN for 5 rounds and increase Credit gain by 3'
}

// Character: Sashly
if (characterPlayer  == 'Sashly' | characterPlayer == 'sashly' | characterPlayer == 'SASHLY' |
    characterPlayer  == 'The Green Shade' | characterPlayer == 'the green shade' | characterPlayer == 'THE GREEN SHADE') {
    startingQuote = 'Alright, Come at me.'
    winQuote = 'That’s just embarrassing, you slow fighting idiot.'
    loseQuote = '...'
    tieQuote = 'Now that’s more like it!'
    bg1 = document.querySelector('.Tiph1')
    bg2 = document.querySelector('.Tiph2')    
    bg3 = document.querySelector('.Tiph3')
    EGOMusic = document.querySelector ('.EGO2')
    EGOEquippedP1 = 'The Red Mist'
    EGOP1.innerHTML = 'Manifest The Green Shade (The Red Mist) [10 credits needed] <br> <br> "Increase dice power by 3 for 5 rounds and Credit gain by 2'
}

if (characterComputer  == 'Sashly' | characterComputer == 'sashly' | characterComputer == 'SASHLY' |
    characterComputer  == 'The Green Shade' | characterComputer == 'the green shade' | characterComputer == 'THE GREEN SHADE') {
    startingQuoteCom = 'Alright, Come at me.'
    winQuoteCom = 'That’s just embarrassing, you slow fighting idiot.'
    loseQuoteCom = '...'
    tieQuoteCom = 'Now that’s more like it!'
    EGOMusicCOM = document.querySelector ('.EGO2')
    EGOEquippedCOM = 'The Red Mist'
    EGOCOM.innerHTML = 'Manifest The Green Shade (The Red Mist) [10 credits needed] <br> <br> "Increase dice power by 3 for 5 rounds and Credit gain by 2'
}

// Character: Alyssa
if (characterPlayer  == 'Alyssa' | characterPlayer == 'alyssa' | characterPlayer == 'ALYSSA') {
    startingQuote = 'Okay! Focus up! This could be over before we notice...'
    winQuote = 'Aha! How’s that?'
    loseQuote = 'Shoot! Sashly was right... I’m too predictable...'
    tieQuote = 'This is what a Persco can do!'
    bg1 = document.querySelector('.Tiph1')
    bg2 = document.querySelector('.Tiph2')    
    bg3 = document.querySelector('.Tiph3')
    EGOMusic = document.querySelector ('.EGO1')
    EGOEquippedP1 = 'Angela'
}

if (characterComputer  == 'Alyssa' | characterComputer == 'alyssa' | characterComputer == 'ALYSSA') {
    startingQuoteCom = 'Okay! Focus up! This could be over before we notice...'
    winQuoteCom = 'Aha! How’s that?'
    loseQuoteCom = 'Shoot! Sashly was right... I’m too predictable...'
    tieQuoteCom = 'This is what a Persco can do!'
    EGOMusicCOM = document.querySelector ('.EGO1')
    EGOEquippedCOM = 'Angela'
}

// Character: Cassandra
if (characterPlayer  == 'Cassandra' | characterPlayer == 'cassandra' | characterPlayer == 'CASSANDRA') {
    startingQuote = 'You better be ready, I’m coming straight for your head.'
    winQuote = 'BAHAHA! Too easy!'
    loseQuote = 'Shit, I made a mistake now of all times?!'
    tieQuote = 'Quit your yapping.'
    bg1 = document.querySelector('.Tiph1')
    bg2 = document.querySelector('.Tiph2')    
    bg3 = document.querySelector('.Tiph3')
    EGOMusic = document.querySelector ('.EGO')
    EGOEquippedP1 = 'Angela'
}

if (characterComputer  == 'Cassandra' | characterComputer == 'cassandra' | characterComputer == 'CASSANDRA') {
    startingQuoteCom = 'You better be ready, I’m coming straight for your head.'
    winQuoteCom = 'BAHAHA! Too easy!'
    loseQuoteCom = 'Shit, I made a mistake now of all times?!'
    tieQuoteCom = 'Quit your yapping.'
    EGOMusicCOM = document.querySelector ('.EGO')
    EGOEquippedCOM = 'Angela'
}

// Character: Luca
if (characterPlayer  == 'Luca' | characterPlayer == 'luca' | characterPlayer == 'LUCA') {
    startingQuote = 'Don’t waste your breath, a battle is a test of mind aswell.'
    winQuote = 'Simply outplayed.'
    loseQuote = 'Ah...'
    tieQuote = 'You best keep your guard up, dear opponent.'
    bg1 = document.querySelector('.Tiph1')
    bg2 = document.querySelector('.Tiph2')    
    bg3 = document.querySelector('.Tiph3')
    EGOMusic = document.querySelector ('.EGORolandOld')
    EGOEquippedP1 = 'Angela'
}

if (characterComputer  == 'Luca' | characterComputer == 'luca' | characterComputer == 'LUCA') {
    startingQuoteCom = 'Don’t waste your breath, a battle is a test of mind aswell.'
    winQuoteCom = 'Simply outplayed.'
    loseQuoteCom = 'Ah...'
    tieQuoteCom = 'You best keep your guard up, dear opponent.'
    EGOMusicCOM = document.querySelector ('.EGORolandOld')
    EGOEquippedCOM = 'Angela'
}

// Dice
const dicePlayer = document.querySelector('.DicePlayer').src;
const diceCom = document.querySelector('.DiceComputer').src;

// buttons
// const buttonOpnieuw = document.querySelector('button.opnieuw'); //
const buttonHoger = document.querySelector('button.hoger');
const buttonLager = document.querySelector('button.lager');
const buttonGo = document.querySelector('button.go')
const mute = document.querySelector('button.mute')
const buttonEGOP1 = document.querySelector('button.EGOPLAYER')
const buttonEGOCOM = document.querySelector('button.EGOCOM')
let buttonlagerpressed = false
let buttonhogerpressed = false
let playerroll = false
let computerroll = false


// numbers
const numberDiv = document.querySelector('.computer-number')
const resultDiv = document.querySelector('.result')
let numberRollcom = ''
let numberRoll = ''

// basics
const title = document.querySelector(".title")
title.innerHTML = characterPlayer + ' Vs ' + characterComputer
let resultOutcome = ''
let gameStart = false
let egoTimerP1 = -1
let egoTimerCOM = -1

resultDiv.innerHTML = resultOutcome

//Functions

// function Opnieuw() {
//    numberRollcom = Math.floor(Math.random() * 6) + 1;   
//   numberDiv.innerHTML = 'Random number is  ' + numberRollcom;
//    creditsComputerShower.innerHTML = 'Evil Credits: ' + creditsComputer
//     creditsSpelerShower.innerHTML = 'Your Credits: ' + creditsSpeler
// }


function GameStart(){
    if (gameStart == false){
    console.log('Game Started');
    if (egoTimerP1 <= 1){
        EGOonP1 = false
        EGOMusic.pause()
        if (EGOEquippedP1 == 'The Red Mist'){
            EGOP1.innerHTML = 'Manifest The Red Mist [10 credits needed] <br> <br> "Increase dice power by 3 for 10 rounds and Credit gain by 2"'
        } else if (EGOEquippedP1 == 'The Black Silence'){
            EGOP1.innerHTML = 'Manifest The Black Silence [10 credits needed] <br> <br> "Roll only MAX or MIN for 10 rounds and increase Credit gain by 2"'
        } else if (EGOEquippedP1 == 'Angela'){
            EGOP1.innerHTML = 'Manifest EGO [10 credits needed] <br> <br> "Increase dice power by 1 for 5 rounds and Credit gain by 4"'
        } else if (EGOEquippedP1 == 'Bad Time'){
            EGOP1.innerHTML = 'Manifest Bad Time Mode [10 credits needed] <br> <br> "Roll only MAX or MIN for 5 rounds and increase Credit gain by 3'
    }} else {
        egoTimerP1--
        console.log('ego time left: ' + egoTimerP1)
    }
    if (egoTimerCOM <= 1){
        EGOonCOM = false
        EGOMusic.pause()
        if (EGOEquippedCOM == 'The Red Mist'){
            EGOCOM.innerHTML = 'Manifest The Red Mist [10 credits needed] <br> <br> "Increase dice power by 3 for 10 rounds and Credit gain by 2"'
        } else if (EGOEquippedCOM == 'The Black Silence'){
            EGOCOM.innerHTML = 'Manifest The Black Silence [10 credits needed] <br> <br> "Roll only MAX or MIN for 10 rounds and increase Credit gain by 3"'
        } else if (EGOEquippedCOM == 'Bad Time'){
            EGOCOM.innerHTML = 'Manifest Bad Time Mode [10 credits needed] <br> <br> "Roll only MAX or MIN for 5 rounds and increase Credit gain by 3'
        } else {
            EGOCOM.innerHTML = 'Manifest EGO [10 credits needed] <br> <br> "Increase dice power by 1 for 5 rounds and Credit gain by 4"'
        }
    } else {
        console.log('ego time left: ' + egoTimerCOM)
    }
    if (EGOonP1 == true && EGOEquippedP1 == 'Angela'){
        EGOP1.innerHTML = 'Manifested Your EGO! <br> "Dice power increased by 1 and x4 Credit gain"'+ ' <br> Rounds Left: ' + egoTimerP1
    } else if (EGOonP1 == true && EGOEquippedP1 == 'The Black Silence'){
        EGOP1.innerHTML = 'Manifested The Black Silence <br> "Dice will only roll MAX or MIN and x3 Credit gain"'+ ' <br> Rounds Left: ' + egoTimerP1
    } else if (EGOonP1 == true && EGOEquippedP1 == 'The Red Mist'){
        EGOP1.innerHTML = 'Manifested The Red Mist <br> "Dice power Increased by 3 and x2 Credit gain"'+ ' <br> Rounds Left: ' + egoTimerP1
    } else if (EGOonP1 == true && EGOEquippedP1 == 'Bad Time'){
        EGOP1.innerHTML = 'Manifested Bad Time Mode <br> "Opponents Dice power decreased by 3 and x2 Credit gain"'+ ' <br> Rounds Left: ' + egoTimerP1
    } else {
        console.log('EgoP1 off')
    }
    if (EGOonCOM == true && EGOEquippedCOM == 'Angela'){
        EGOCOM.innerHTML = 'Manifested Your EGO! <br> "Dice power increased by 1 and x4 Credit gain"'+ ' <br> Rounds Left: ' + egoTimerCOM
    } else if (EGOonCOM == true && EGOEquippedCOM == 'The Black Silence'){
        EGOCOM.innerHTML = 'Manifested The Black Silence <br> "Dice will only roll MAX or MIN and x3 Credit gain"'+ ' <br> Rounds Left: ' + egoTimerCOM
    } else if (EGOonCOM == true && EGOEquippedCOM == 'The Red Mist'){
        EGOCOM.innerHTML = 'Manifested The Red Mist <br> "Dice power Increased by 3 and x2 Credit gain"'+ ' <br> Rounds Left: ' + egoTimerCOM
    } else if (EGOonCOM == true && EGOEquippedCOM == 'Bad Time'){
        EGOCOM.innerHTML = 'Manifested Bad Time Mode <br> "Opponents Dice power decreased by 3 and x2 Credit gain"'+ ' <br> Rounds Left: ' + egoTimerCOM
    } else {
        console.log('EgoCOM off')
    }
    gameStart = true
    characterQuotePlayer.innerHTML = '"' + startingQuote + '"'
    characterQuoteComputer.innerHTML = '"' + startingQuoteCom + '"'
    totalcredits = creditsSpeler + creditsComputer
    buttonhogerpressed = false
    buttonlagerpressed = false
    if (mutecheck == false){
            snap.play()
        if (EGOonP1 == true | EGOonCOM == true){
                bg1.pause()
                bg2.pause()
                bg3.pause()
            if (EGOonP1 == true && EGOonCOM == false){
                    EGOMusicCOM.pause()
                    EGOMusic.play()
            } else if (EGOonP1 == false && EGOonCOM == true){
                    EGOMusic.pause()
                    EGOMusicCOM.play()
            } else if (EGOonP1 == true && EGOonCOM == true){
                if (creditsSpeler >= creditsComputer){
                        EGOMusicCOM.pause()
                        EGOMusic.play()
                } else if (creditsComputer > creditsSpeler){
                        EGOMusic.pause()
                        EGOMusicCOM.play()
                    }
            }
            } else if (totalcredits >= 10){
                bg1.pause()
                bg2.pause()
                EGOMusic.pause()
                EGOMusicCOM.pause()
                bg3.play()
                console.log('BGM 3 playing')   
            } else if (totalcredits >= 5) {
                bg3.pause()
                bg1.pause() 
                EGOMusic.pause()
                EGOMusicCOM.pause()
                bg2.play()
                console.log('BGM 2 playing')
            } else {
                bg3.pause()
                bg2.pause()
                EGOMusic.pause()
                EGOMusicCOM.pause()
                bg1.play()
                console.log('BGM 1 playing')
            }
        }
    if (EGOonCOM == true && EGOEquippedCOM == 'The Red Mist'){
            TheRedMistEGOcom()
    } else if (EGOonCOM == true && EGOEquippedCOM == 'The Black Silence'){
            TheBlackSilenceEGOcom()
    } else if (EGOonCOM == true && EGOEquippedCOM == 'Angela'){
            baseEGOcom()
    } else if (EGOonCOM == true && EGOEquippedCOM == 'Bad Time'){
            BadTimecom()
    } else {
        numberRollcom = Math.floor(Math.random() * 6) + 1;
            document.querySelector('.DicePlayerValue').src = 'img/Nothing.png';
            console.log(numberRollcom);
            document.querySelector('.DiceComputerValue').src = 'img/DiceRoll.gif';
            switch(numberRollcom){
                case 1:
                    document.querySelector('.DiceComputerValue').src = 'img/1.png';
                    break;
                case 2:
                    document.querySelector('.DiceComputerValue').src = 'img/2.png';
                    break;
                case 3:
                    document.querySelector('.DiceComputerValue').src = 'img/3.png';
                    break;
                case 4:
                    document.querySelector('.DiceComputerValue').src = 'img/4.png';
                    break;
                case 5:
                    document.querySelector('.DiceComputerValue').src = 'img/5.png';
                    break;
                case 6:
                    document.querySelector('.DiceComputerValue').src = 'img/6.png';
                    break;
                default:
                    document.querySelector('.DiceComputerValue').src = 'img/0.png';
            } 
            resultOutcome = ''
            numberDiv.innerHTML = numberRollcom
            resultDiv.innerHTML = resultOutcome
}}}

function resultCheckerHoger(){
    numberRoll = rolled
    if(numberRoll > numberRollcom){
        console.log('Je hebt gewonnen. Je number is ' + numberRoll);
        const winningQuote = 'Je hebt gewonnen.  Je number is ' + numberRoll
        resultOutcome = winningQuote
        QuotePlayer = winQuote
        QuoteComputer = loseQuoteCom
        creditsSpeler++
        if (EGOonP1 == true && EGOEquippedP1 == 'The Red Mist'){
            creditsSpeler++
        } else if (EGOonP1 == true && EGOEquippedP1 == 'Bad Time'){
            creditsSpeler++
        } else if (EGOonP1 == true && EGOEquippedP1 == 'The Black Silence'){
            creditsSpeler++
            creditsSpeler++
        } else if (EGOonP1 == true && EGOEquippedP1 == 'Angela'){
            creditsSpeler++
            creditsSpeler++
            creditsSpeler++
        }
    } else if (numberRoll < numberRollcom){
        console.log('Helaas je hebt verloren');
        const losingQuote = 'Helaas je hebt verloren.  Je number is ' + numberRoll
        resultOutcome = losingQuote
        QuotePlayer = loseQuote
        QuoteComputer = winQuoteCom
        creditsComputer++
        if (EGOonCOM == true && EGOEquippedCOM == 'The Red Mist'){
            creditsComputer++
        } else if (EGOonCOM == true && EGOEquippedCOM == 'Bad Time'){
            creditsComputer++
        } else if (EGOonCOM == true && EGOEquippedCOM == 'The Black Silence'){
            creditsComputer++
            creditsComputer++
        } else if (EGOonCOM == true && EGOEquippedCOM == 'Angela'){
            creditsComputer++
            creditsComputer++
            creditsComputer++
        }
    } else {
        console.log('Ha! Fool! you are right and wrong!')
        resultOutcome = drawQuote
        QuotePlayer = tieQuote
        QuoteComputer = tieQuoteCom
    }
    if (mutecheck == false){
        snap2.play()
    }
    document.querySelector('.DiceComputerValue').src = 'img/Nothing.png';
    resultDiv.innerHTML = resultOutcome
    characterQuotePlayer.innerHTML = QuotePlayer
    characterQuoteComputer.innerHTML = QuoteComputer
    quotechecker = true
    Restart();
}

function resultCheckerLager(){
    numberRoll = rolled
    if(numberRoll < numberRollcom){
        console.log('Je hebt gewonnen. Je number is ' + numberRoll);
        const winningQuote = 'Je hebt gewonnen.  Je number is ' + numberRoll
        resultOutcome = winningQuote
        QuotePlayer = winQuote
        QuoteComputer = loseQuoteCom
        creditsSpeler++
        if (EGOonP1 == true && EGOEquippedP1 == 'The Red Mist'){
            creditsSpeler++
        } else if (EGOonP1 == true && EGOEquippedP1 == 'Bad Time'){
            creditsSpeler++
        } else if (EGOonP1 == true && EGOEquippedP1 == 'The Black Silence'){
            creditsSpeler++
            creditsSpeler++
        } else if (EGOonP1 == true && EGOEquippedP1 == 'Angela'){
            creditsSpeler++
            creditsSpeler++
            creditsSpeler++
        }
    } else if (numberRoll > numberRollcom){
        console.log('Helaas je hebt verloren');
        const losingQuote = 'Helaas je hebt verloren.  Je number is ' + numberRoll
        resultOutcome = losingQuote
        QuotePlayer = loseQuote
        QuoteComputer = winQuoteCom
        creditsComputer++
        if (EGOonCOM == true && EGOEquippedCOM == 'The Red Mist'){
            creditsComputer++
        } else if (EGOonCOM == true && EGOEquippedCOM == 'Bad Time'){
            creditsComputer++
        } else if (EGOonCOM == true && EGOEquippedCOM == 'The Black Silence'){
            creditsComputer++
            creditsComputer++
        } else if (EGOonCOM == true && EGOEquippedCOM == 'Angela'){
            creditsComputer++
            creditsComputer++
            creditsComputer++
        }
    } else {
        console.log('Ha! Fool! you are right and wrong!')
        resultOutcome = drawQuote
        QuotePlayer = tieQuote
        QuoteComputer = tieQuoteCom
    }
    if (mutecheck == false){
        snap2.play()
    }
    document.querySelector('.DiceComputerValue').src = 'img/Nothing.png';
    resultDiv.innerHTML = resultOutcome
    characterQuotePlayer.innerHTML = QuotePlayer
    characterQuoteComputer.innerHTML = QuoteComputer
    quotechecker = true
    Restart();
}

function Restart() {
    numberRollcom = Math.floor(Math.random() * 6) + 1; 
    gameStart = false 
    if (quotechecker = false) {
        characterQuoteComputer.innerHTML = ''
        characterQuotePlayer.innerHTML = ''
        creditsComputer = 0
        creditsSpeler = 0
        resultOutcome = ''
        document.querySelector('.DiceComputer').src = 'img/DiceRoll.gif';
    } else {
        quotechecker = false
    }
    creditsComputerShower.innerHTML = 'Credits: ' + creditsComputer
    creditsSpelerShower.innerHTML = 'Credits: ' + creditsSpeler
    resultDiv.innerHTML = resultOutcome

   
}
// buttonOpnieuw.addEventListener('click', function(){
//    Restart();
// });

// addEventListeners

buttonEGOP1.addEventListener('click', function(){
    if (creditsSpeler >= 10){
        if (gameStart == false){
            creditsSpeler--
            creditsSpeler--
            creditsSpeler--
            creditsSpeler--
            creditsSpeler--
            creditsSpeler--
            creditsSpeler--
            creditsSpeler--
            creditsSpeler--
            creditsSpeler--
            creditsSpelerShower.innerHTML = 'Credits: ' + creditsSpeler
            EGOonP1 = true
            if (mutecheck == false){
                snap.play()
                if (EGOonP1 == true | EGOonCOM == true){
                    bg1.pause()
                    bg2.pause()
                    bg3.pause()
                    if (EGOonP1 == true && EGOonCOM == false){
                        EGOMusic.play()
                        EGOMusicCOM.pause()
                    } else if (EGOonP1 == false && EGOonCOM == true){
                        EGOMusicCOM.play()
                        EGOMusic.pause()
                    } else if (EGOonP1 == true && EGOonCOM == true){
                        if (creditsSpeler >= creditsComputer){
                            EGOMusic.play()
                            EGOMusicCOM.pause()
                        } else if (creditsComputer > creditsSpeler){
                            EGOMusicCOM.play()
                            EGOMusic.pause()
                        }
                    }
            console.log('EGO Manifested')
            if (EGOEquippedP1 == 'The Black Silence'){
                egoTimerP1 = 10
                EGOP1.innerHTML = 'Manifested The Black Silence <br> "Dice will only roll MAX or MIN and x3 Credit gain"'+ ' <br> Rounds Left: ' + egoTimerP1
            } else if (EGOEquippedP1 == 'The Red Mist'){
                egoTimerP1 = 10
                EGOP1.innerHTML = 'Manifested The Red Mist <br> "Dice power Increased by 3 and x2 Credit gain"'+ ' <br> Rounds Left: ' + egoTimerP1
            } else if (EGOEquippedP1 == 'Angela'){
                egoTimerP1 = 5
                EGOP1.innerHTML = 'Manifested Your EGO! <br> "Dice power increased by 1 and x4 Credit gain"'+ ' <br> Rounds Left: ' + egoTimerP1
            } else if (EGOEquippedP1 == 'Bad Time'){
                egoTimerP1 = 20
                EGOP1.innerHTML = 'Manifested Bad Time Mode <br> "Opponents Dice power decreased by 3 and x2 Credit gain"'+ ' <br> Rounds Left: ' + egoTimerP1
        }
    }
}}}})
buttonEGOCOM.addEventListener('click', function(){
    if (creditsComputer >= 10){
        if (gameStart == false){
            creditsComputer--
            creditsComputer--
            creditsComputer--
            creditsComputer-- 
            creditsComputer--
            creditsComputer--
            creditsComputer--
            creditsComputer--
            creditsComputer--
            creditsComputer--
            creditsComputerShower.innerHTML = 'Credits: ' + creditsComputer
            EGOonCOM = true
            if (mutecheck == false){
                snap.play()
                if (EGOonP1 == true | EGOonCOM == true){
                    bg1.pause()
                    bg2.pause()
                    bg3.pause()
                    if (EGOonP1 == true && EGOonCOM == false){
                        EGOMusic.play()
                        EGOMusicCOM.pause()
                    } else if (EGOonP1 == false && EGOonCOM == true){
                        EGOMusicCOM.play()
                        EGOMusic.pause()
                    } else if (EGOonP1 == true && EGOonCOM == true){
                        if (creditsSpeler >= creditsComputer){
                            EGOMusic.play()
                            EGOMusicCOM.pause()
                        } else if (creditsComputer > creditsSpeler){
                            EGOMusicCOM.play()
                            EGOMusic.pause()
                        }
                    }
            console.log('EGO Manifested')
            
            if (EGOEquippedCOM == 'The Black Silence'){
                egoTimerCOM = 10
                EGOCOM.innerHTML = 'Manifested The Black Silence <br> "Dice will only roll MAX or MIN and x3 Credit gain"' + ' <br> Rounds Left: ' + egoTimerCOM 
            } else if (EGOEquippedCOM == 'The Red Mist'){
                egoTimerCOM = 10
                EGOCOM.innerHTML = 'Manifested The Red Mist <br> "Dice power Increased by 3 and x2 Credit gain"' + ' <br> Rounds Left: ' + egoTimerCOM 
            } else if (EGOEquippedCOM == 'Angela'){
                egoTimerCOM = 5
                EGOCOM.innerHTML = 'Manifested Your EGO! <br> "Dice power increased by 1 and x4 Credit gain"' + ' <br> Rounds Left: ' + egoTimerCOM 
            } else if (EGOEquippedCOM == 'Bad Time'){
                egoTimerCOM = 20
                EGOCOM.innerHTML = 'Manifested Bad Time Mode <br> "Opponents Dice power decreased by 3 and x2 Credit gain"'+ ' <br> Rounds Left: ' + egoTimerCOM
        }
    }
}}}})

buttonGo.addEventListener('click', function(){
    if (gameStart == false){
        GameStart()
    }
});

mute.addEventListener('click', function(){
    if (mutecheck == false){
        mutecheck = true
        bg1.pause()
        bg2.pause()
        bg3.pause()
        EGOMusic.pause()
        EGOMusicCOM.pause()
    } else {
        snap.play()
        mutecheck = false
        if (EGOonP1 == true | EGOonCOM == true){
            bg1.pause()
            bg2.pause()
            bg3.pause()
            if (EGOonP1 == true && EGOonCOM == false){
                EGOMusicCOM.pause()
                EGOMusic.play()
            } else if (EGOonP1 == false && EGOonCOM == true){
                EGOMusic.pause()
                EGOMusicCOM.play()
            } else if (EGOonP1 == true && EGOonCOM == true){
                if (creditsSpeler >= creditsComputer){
                    EGOMusicCOM.pause()
                    EGOMusic.play()
                } else if (creditsComputer > creditsSpeler){
                    EGOMusic.pause()
                    EGOMusicCOM.play()
                }
            }
        } else if (totalcredits >= 10){
            bg2.pause()
            EGOMusic.pause()
            EGOMusicCOM.pause()
            bg3.play()
            console.log('BGM 3 playing')   
        } else if (totalcredits >= 5) {
            bg1.pause() 
            EGOMusic.pause()
            EGOMusicCOM.pause()
            bg2.play()
            console.log('BGM 2 playing')
        } else {
            bg1.play()
            EGOMusic.pause()
            EGOMusicCOM.pause()
            console.log('BGM 1 playing')
        }
    }
})

buttonHoger.addEventListener('click', function(){
    if (gameStart == true){
    if (EGOonP1 == true && EGOEquippedP1 == 'The Black Silence'){
        buttonhogerpressed = true
        TheBlackSilenceEGO()
    } else if (EGOonP1 == true && EGOEquippedP1 == 'The Red Mist'){
        buttonhogerpressed = true
        TheRedMistEGO()
    } else if (EGOonP1 == true && EGOEquippedP1 == 'Angela'){
        buttonhogerpressed = true
        baseEGO()
    } else if (EGOonP1 == true && EGOEquippedP1 == 'Bad Time'){
        buttonhogerpressed = true
        BadTime()
    } else {
        let numberRoll = Math.floor(Math.random() * 6) + 1;
        rolled = numberRoll
        if (gameStart == true){   
            document.querySelector('.DicePlayerValue').src = 'img/DiceRoll.gif';
            switch(numberRoll){
                case 1:
                    document.querySelector('.DicePlayerValue').src = 'img/1.png';
                    break;
                case 2:
                    document.querySelector('.DicePlayerValue').src = 'img/2.png';
                    break;
                case 3:
                    document.querySelector('.DicePlayerValue').src = 'img/3.png';
                    break;
                case 4:
                    document.querySelector('.DicePlayerValue').src = 'img/4.png';
                    break;
                case 5:
                    document.querySelector('.DicePlayerValue').src = 'img/5.png';
                    break;
                case 6:
                    document.querySelector('.DicePlayerValue').src = 'img/6.png';
                    break;
                default:
                    document.querySelector('.DicePlayerValue').src = 'img/0.png';
            }
            resultCheckerHoger(numberRoll)
}}}})


buttonLager.addEventListener('click', function(){
    if (gameStart == true){
    if (EGOonP1 == true && EGOEquippedP1 == 'The Black Silence'){
        buttonlagerpressed = true
        TheBlackSilenceEGO()
    } else if (EGOonP1 == true && EGOEquippedP1 == 'The Red Mist'){
        buttonlagerpressed = true
        TheRedMistEGO()
    } else if (EGOonP1 == true && EGOEquippedP1 == 'Angela'){
        buttonlagerpressed = true 
        baseEGO()
    } else if (EGOonP1 == true && EGOEquippedP1 == 'Bad Time'){
        buttonlagerpressed = true
        BadTime()
    } else {
        let numberRoll = Math.floor(Math.random() * 6) + 1;
        rolled = numberRoll
        if (gameStart == true){   
            document.querySelector('.DicePlayerValue').src = 'img/DiceRoll.gif';
            switch(numberRoll){
                case 1:
                    document.querySelector('.DicePlayerValue').src = 'img/1.png';
                    break;
                case 2:
                    document.querySelector('.DicePlayerValue').src = 'img/2.png';
                    break;
                case 3:
                    document.querySelector('.DicePlayerValue').src = 'img/3.png';
                    break;
                case 4:
                    document.querySelector('.DicePlayerValue').src = 'img/4.png';
                    break;
                case 5:
                    document.querySelector('.DicePlayerValue').src = 'img/5.png';
                    break;
                case 6:
                    document.querySelector('.DicePlayerValue').src = 'img/6.png';
                    break;
                default:
                    document.querySelector('.DicePlayerValue').src = 'img/0.png';
            } 
           resultCheckerLager(numberRoll)
}}}})