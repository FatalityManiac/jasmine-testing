
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 100000,
    years: 15,
    rate: 5
  };
  expect(calculateMonthlyPayment(values)).toEqual('790.79');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 100026,
    years: 15,
    rate: 5
  };
  expect(calculateMonthlyPayment(values)).toEqual('791.00');
});

/// etc
