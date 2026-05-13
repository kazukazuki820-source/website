function isPrime(n) {
 
  for (let i = 2; i < n; i++)
    if (n % i == 0)
      return false;
 
  return true;
}
 
// Driver Code
console.log(isPrime(11))