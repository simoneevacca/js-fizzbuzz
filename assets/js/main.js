
let elementList = document.getElementById('list');

let value = 0;
for (let i = 1; i <= 100; i++) {
    value ++;
    
    if (value % 3 == 0 && value % 5 == 0) {
        console.log('FizzBuzz');
        
    } else if (value % 3 == 0) {
        console.log('Fizz');
        
    } else if (value % 5 == 0) {
        console.log('Buzz');
        
    } else {
        console.log(value);
        

    }

    // console.log(i);

    // elementList.insertAdjacentHTML('beforebegin', `<li>${i}</li>`);
}