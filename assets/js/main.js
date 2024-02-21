
const elementList = document.querySelector("ul#list");

let value = 0;
for (let i = 1; i <= 100; i++) {
    value++;
    const li = document.createElement('li')
    
    if (value % 3 == 0 && value % 5 == 0) {
        console.log('FizzBuzz');
        // elementList.insertAdjacentHTML('beforeend', `<li>${'FizzBuzz'}</li>`);
        li.append('FizzBuzz')
        elementList.append(li)
    } else if (value % 3 == 0) {
        console.log('Fizz');
        // elementList.insertAdjacentHTML('beforeend', `<li>${'Fizz'}</li>`);
        li.append('Fizz')
        elementList.append(li)
    } else if (value % 5 == 0) {
        console.log('Buzz');
        // elementList.insertAdjacentHTML('beforeend', `<li>${'Buzz'}</li>`);
        li.append('Buzz')
        elementList.append(li)
    } else {
        li.append(value)
        elementList.append(li)
    }
    console.log(value);
    // elementList.insertAdjacentHTML('beforeend', `<li>${value}</li>`);
    
}