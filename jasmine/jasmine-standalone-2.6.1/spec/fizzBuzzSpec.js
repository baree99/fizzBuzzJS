describe("fizzOrBuzz", function() {

  it("should print 'Fizz' instead of the multiples of 3", function()
  {expect(fizzOrBuzz(3)).toEqual('Fizz');});

  it("should print 'Buzz' instead of the multiples of 5", function()
  {expect(fizzOrBuzz(5)).toEqual('Buzz');});

  it("should print 'Buzz' instead of the multiples of 15", function()
  {expect(fizzOrBuzz(15)).toEqual('FizzBuzz');});

});

describe("fizzBuzz", function() {

  it("should print the numbers to 100 with fizz or buzz", function()
  {expect(fizzBuzz).toContain('Fizz');});

});
