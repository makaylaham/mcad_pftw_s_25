//select empty div and assign it a variable
const myEmptyDiv = document.querySelector('#myEmptyDiv');

// put h1 inside of it

//create new element

const heading = document.createElement('h1');
heading.innerHTML = 'Llamas are cool';
heading.style.cursor = 'pointer';
heading.addEventListener('click', handLeadingClick);
myEmptyDiv.appendChild(heading);
function handLeadingClick() {
    console.log('Heading has been clicked');
    document.body.style.backgroundColor = '#336699';
    myEmptyDiv.style.color = 'pink';
}