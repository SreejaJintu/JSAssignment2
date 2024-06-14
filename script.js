//1. Write a function calculateFactorial (n) that takes a non-negative integer n and returns the factorial of n.(factorial of 5= 5*4*3*2*1=120)
function calculateFactorial (n){
    let fact=1
    for(i=1;i<=n;i++)

        {
           fact*=i


        }
        console.log('factorial ='+fact)

}
calculateFactorial(5)
//2.Write a function isPrime(num) that takes a positive integer num and returns true if the number is prime, and false otherwise  
function isPrime(num){

   
        let i, flag = true;
        for (i = 2; i <= num - 1; i++) {
            if (num % i == 0) {
                flag = false;
                break;
            }
        }
        if (flag == true)
            console.log(num + " is prime");
        else
            console.log(num + " is not prime");
    }
    isPrime(4);
    isPrime(5);
//3.Write a function sumEvenNumbers(start, end) that takes two integers start and end, and returns the sum of all even numbers in the inclusive range from start to end.
function sumEvenNumbers(start, end){
    let sum=0
   const evenArray=[]
    for(let i=start;i<=end;i++)
        {
            if(i%2==0)
                {
                   evenArray.push(i)
                }

        }
        console.log(evenArray)
        
        for(let j=0;j<5;j++)
            {
                sum=sum+evenArray[j]
                
            }
            
            console.log(sum)

}
sumEvenNumbers(1,5)



//4. Write a JavaScript program to remove items(clicking on a button) from a drop-down list.

function myFunction1() {
    var x = document.getElementById("colorSelect");
    x.remove(x.selectedIndex);
};


//5. Write a JavaScript program to change the  color given text in p tag  

function myFunction2() {
    var x=document.getElementById("colorSelect").selectedIndex
    if(x==0)
        {
            document.getElementById("p").style.color="red"
        }
        else if(x==1)
            {
                document.getElementById("p").style.color="green"
            }
            else if(x==2)
                {
                    document.getElementById("p").style.color="blue"
                }
                else if(x==3)
                    {
                        document.getElementById("p").style.color="orange"
                    }
}
//6. Write a JavaScript function to get the values of First and Last names of the following form.
function myFunction3(){
    let x=document.getElementById("FN").value

    alert(x)
    console.log(x)
}

//7. Write a JavaScript program to display a random image (clicking on a button) from the following list.