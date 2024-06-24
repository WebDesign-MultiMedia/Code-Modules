/**
 * PART THREE Deferred Execution
 * from "Practice Use of The Event Loop"
 *  */ 



const n = prompt("Enter a Range Number");

let output = document.getElementById('text');

let titlePrime = document.getElementById('title');
setTimeout(() => {
    
    titlePrime.textContent = "Finding Prime Numbers betwwen 1 and" + " " + n;
},2000);

titlePrime.style.textAlign = 'center';

export default function primeNum(){
    let flag; 
    for(let i = 0; i <= n; i++){
        flag = true;
        for(let j = 2; j<= i - 1; j++){
            if(i % j == 0){

                flag =  false;
                break
            }
        }
        if(flag){
        const me = document.createElement('li');
        let anwwer = (i + " " + 'prime');
        me.append(anwwer);

        setTimeout(() => {
            output.appendChild(me);
        },8000);

        me.style.color = 'red';
        me.style.textAlign = 'center';
        me.style.listStyle = 'none';
    }

    }

    setTimeout(() => {
        alert("Calculation Completed")
    }, 7000);
}
primeNum(n)