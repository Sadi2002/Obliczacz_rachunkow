const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const error = document.querySelector('.error')
const btn = document.querySelector('.count')
const p = document.querySelector('.cost-info')
const cost = document.querySelector('.cost')

const checkForm = () => {
    if(price.value == '' || people.value == '' || tip.value == 0){
        error.textContent = 'Uzupełnij wszystkie pola!'
        p.style.display = 'none'
    } else {
        error.textContent = ''
        checkBill();
    }
};
const checkBill = () => {
    const newPrice = parseFloat(price.value);
    const newPeople = parseInt(people.value);
    const newTip = parseFloat(tip.value);

    const sum = (newPrice + (newPrice * newTip)) / newPeople;
    p.style.display = 'block';

    cost.textContent = sum.toFixed(2)
}

btn.addEventListener('click', checkForm)