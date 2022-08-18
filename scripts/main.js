const myHeading = document.querySelector('h1');
let myButton = document.querySelector('button');
const myImage = document.querySelector('img');

function on_h1_click () {
    alert('Ouch! Stop poking me!');
}
function setUserName() {
    const myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
}


myHeading.onclick = on_h1_click;

myImage.onclick = () => {
    const mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
      myImage.setAttribute('src','images/sneak-peak.png');
    } else {
      myImage.setAttribute('src','images/firefox-icon.png');
    }
}


if (!localStorage.getItem('name')) {
    setUserName();
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}


myButton.onclick = () => {
    setUserName();
}

