function fizzOrBuzz(n) {
  if ( n % 15 == 0 ) { return 'FizzBuzz' }
  if ( n % 3 == 0 ) { return 'Fizz' }
  if ( n % 5 == 0 ) { return 'Buzz' }
  else { return n }
}

var fizzBuzz = []
for (var i = 1; i <= 100; i++) {
    fizzBuzz.push(fizzOrBuzz(i))
}
