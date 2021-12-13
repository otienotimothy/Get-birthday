/** Get Akan Name */

function getAkanName(e) {
    e.preventDefault();

    //Get Date of Birth Value from Form
    let dateOfBirth = document.querySelector('.date').value;
    //Create a date object from the value
    let dateObj = new Date(dateOfBirth);
    //Return Day of the Week from the date object - Returns integers 0-6 with 0 being Sunday
    let dayOfWeek = dateObj.getDay();

    //Get User Gender
    let gender = document.querySelector('.gender').value;

    let maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
    let femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];

    //Assign Akan Name
    let userAkanName;

    gender === 'male' ? userAkanName = maleNames[dayOfWeek] : gender === 'female' ? userAkanName = femaleNames[dayOfWeek] : null;

    // Display Akan Name to the User
    let node = document.createElement('h1');
    let textNode = document.createTextNode(`Howdy, your Akan Name is ${userAkanName}`)
    node.appendChild(textNode);

    //Add Styling to the Displayed Name
    node.classList.add('akan-name');

    //Check if there is a Valid User Name and Display it for the User, Alert an Error if there isn't
    let mainSection = document.querySelector('main');
    if(userAkanName){
        mainSection.appendChild(node);
    }else {
        alert('Please fill all fields');
    }
    
}

let form = document.querySelector('.akan-form');

form.addEventListener('submit', (e) => getAkanName(e));