

//auto close menu
const navLinks = document.querySelectorAll('nav a');
for (let index = 0; index < navLinks.length; index++) {
    var element = navLinks[index];
    element.addEventListener('click', () => {
        document.getElementById('nav-menu').className = 'inactive';
    })
}

//inactive elements toggle
function activateElement(inactiveElementId) {
    var inactiveElement = document.getElementById(inactiveElementId);
    if (inactiveElement.className == 'inactive') {
        inactiveElement.className = '';
    }
    else {
        inactiveElement.className = 'inactive';
    }
}




