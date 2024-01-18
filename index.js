/* Loop through all numbers from 1 to 100.
If a number is divisible by 3, log “Fizz.”
If a number is divisible by 5, log “Buzz.”
If a number is divisible by both 3 and 5, log “Fizz Buzz.”
If a number is not divisible by either 3 or 5, log the number. */

/*  for (let i = 1; i < 100; i++) {
	

    if(i%3==0)
   
	console.log(i+"fizz");

    if(i%5==0)
   
	console.log(i+"BUzz");
    if((i%3==0)&& (i%5==0))
    console.log(i+"Fuzz Buzz");
    if((i%3!=0)&& (i%5!=0))
    console.log(i);
} 
   */


/* Declare an arbitrary number, n.
Create a loop that searches for the next prime number, starting at n and incrementing from there.
As soon as you find the prime number, log that number and exit the loop.
 */
  let prime=0;
  for(let n=1;n<=20;n++)
  {
if(n==1)n++;
    if ((n==2)||(n==3)||((n%3!==0)&&(n%2!==0)))
    {
console.log(`${n} is prime`);
prime+=n;
break;
  }
}
// As soon as you find the prime number, log that number and exit the loop.
console.log(`${prime} is the prime number`);

  
 
 