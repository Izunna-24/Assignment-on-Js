let prompt =  require('prompt-sync')()

function phoneMenu(){
    return `
            1. Phone Book
            2. Messages
            3. Chat
            4. Call register
            5. Tones
            6. Settings
            7. Call divert
            8. Games
            9. Calculator
            10. Reminders
            11. Clock
            12. Profiles
            13. SIM services`
}
function simServices(){
    return `
        sim services...`
}

function showPhoneBook(){
    return `
            1.Search
            2. Service Nos
            3. Add name
            4. Erase
            5. Edit
            6. Assign tone
            7. Send b'card
            8. Options
            9. Speed dials
            10. Voice tags`
}
function search(){
    return `
            search
            `
}

function showOptions(){
    return `
            1. Type of view
            2. Memory status`
}

function showMessages(){
    return `1. Write messages
            2. Inbox
            3. Outbox
            4. Picture messages
            5. Templates
            6. Smileys
            7. Message settings
            8. Info service
            9. Voice mailbox number
            10. Service command editor`
}

function messageSettings(){
return `    1.Set
            2. Common
`
}

function set1(){
    return `1. Message centre number
            2. Message sent as
            3. Message validity`
}

function common(){
    return` 1. Delivery reports
            2. Reply via same centre
            3. Character support
    `
}

function showChat(){
    return`);` 
     
}

function showCallReg(){
    return `1. Missed call
            2. Received calls
            3. Dialled numbers
            4. Erase recent call lists
            5. Show call duration
            6. Show call cost
            7. Call cost settings
            8. Prepaid credit`
}

function displayCallDurationList(){
    return `1. Last call duration
            2. All calls' duration
            3. Recieved calls' duration
            4. Dialled calls's duration
            5. Clear timers
`
}

function showCallCost(){
    return`1. Last call cost
    2. All calls' cost
    3. Clear counters
    `
}

function showCallCostSetting(){
    return `1. Call cost limit
            2. Show cost in
    `
}

function showTonesList(){
   return `1. Ringing Tone
           2. Ringine Volume 
           3. Incoming call alert
           4. Composer
           5. Message alert tone
           6. Keypad tones
           7. Warning and game tones
           8. Vibrating alert
           9. Screen saver 
           `
}

function showSettingsList(){
    return `1. Call settings
            2. Phone settings
            3. Security settings
            4. Restore factory setting
            
    `
}

function showCallSettingList(){
    return `1. Automatic redial
            2. Speed dialing
            3. Call waiting
            4. Own number sending
            5. Phone line in use
            6. Automatic answer`
}

function showPhoneSettingList(){
    return `1. Language
            2. Cell info display
            3. Welcome note
            4. Network selection
            5. Lights
            6. Confirm SIM service actions`
}

function showSecuritySettingList(){
    return `1. PIN code request
            2. Call barring service
            3. Fixed dialing
            4. Closed user group
            5. Phone security
            6. Change access codes`
}

function showCallDivert(){
    return `
         Diverting call ...
         `
}

function showGames(){
    return `
         snake...
         `
}
function showCalculator(){
    return `
          Calculating...
          `
}

function showReminders(){
    return `
        Setting reminder ...
        `
}
function showProfiles(){
    return `
        1. Private
        2. Public
        3. Defualt
        `
}
function showClockList(){
    return `1. Alarm clock 
            2. Clock settings
            3. Date setting
            4. Stopwatch
            5. Countdown timer
            6. Auto update of date and time`
}
function serviceNos(){
    return `
    Service numbers`
}
function addName(){
    return " adding name..."
}
function erase(){
    return "erasing..."
}
function edit(){
    return "editing..."
}

function assignTone(){
    return "assigning tone ..."
}

function sendCard(){
    return " seding b card ..."
}

console.log(phoneMenu())
let userChoice = prompt("Select: ")

function input(userChoice) {
    switch (userChoice) {
        case '1':
            console.log(showPhoneBook());
            let choice = prompt("Select: ")
            function inputTwo(choice) {
                switch (choice) {
                    case '1':
                        console.log(search());
                        break;
                    case '2':
                        console.log(serviceNos());
                        break;
                    case '3':
                         console.log(addName());
                         break;
                    case '4':
                         console.log(erase());
                         break;
                    case '5':
                         console.log(edit());
                         break;                                           
                    case '6':
                          console.log(assignTone());
                            break;
                    case '7':
                          console.log(sendCard());
                            break;
                    case '8':
                          console.log(showOptions());
                          break;
                }}
                inputTwo(choice)

            break;
        case '2':
            console.log(showMessages());
            break;
        case '3':
            console.log(showChat());
            break;
        case '4':
            console.log(showCallReg());
            break;
        case '4':
            console.log(showCallReg());
            break;
        case '5':
            console.log(showTonesList());
            break;
    
        case '6':
            console.log(showSettingsList());
            break;
        
        case '7':
            console.log(showCallDivert());
            break;
        
        case '8':
            console.log(showGames());
            break;
        
        case '9':
            console.log(showCalculator());
            break;
        
        case '10':
            console.log(showReminders());
            break;
        
        case '11':
            console.log(showClockList());
            break;
        
        case '12':
            console.log(showProfiles());
            break;
        
        case '13':
            console.log(simServices());
            break;
        default:
            console.log("Invalid option")
    }   

}

input(userChoice)