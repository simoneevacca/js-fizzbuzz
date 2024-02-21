
const elementList = document.querySelector("ul#list");
const li = document.createElement('li')

let value = 0;
for (let i = 1; i <= 100; i++) {
    value++;
    li.append(value)
    elementList.append(li)
    if (value % 3 == 0 && value % 5 == 0) {
        console.log('FizzBuzz');
        // elementList.insertAdjacentHTML('beforeend', `<li>${'FizzBuzz'}</li>`);
        
    } else if (value % 3 == 0) {
        console.log('Fizz');
        // elementList.insertAdjacentHTML('beforeend', `<li>${'Fizz'}</li>`);
    } else if (value % 5 == 0) {
        console.log('Buzz');
        // elementList.insertAdjacentHTML('beforeend', `<li>${'Buzz'}</li>`);
    }
    console.log(value);
    // elementList.insertAdjacentHTML('beforeend', `<li>${value}</li>`);
}