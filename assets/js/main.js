
const elementList = document.querySelector("ul#list");

let value = 0;
for (let i = 1; i <= 100; i++) {
    value++;
    const li = document.createElement('li')
    
    if (value % 3 == 0 && value % 5 == 0) {
        console.log('FizzBuzz');
        li.append('FizzBuzz');
        elementList.append(li);
        li.style.backgroundColor = "green";

    } else if (value % 3 == 0) {
        console.log('Fizz');
        li.append('Fizz');
        elementList.append(li);
        li.style.backgroundColor = "pink";

    } else if (value % 5 == 0) {
        console.log('Buzz');
        li.append('Buzz')
        elementList.append(li)
        li.style.backgroundColor = "grey";

    } else {
        li.append(value)
        elementList.append(li)
    }
    console.log(value);
    
}