// Code your solution in this file!
let companyName = 'Scuber';
let companyCeo = "Susan Smith";
const expect = require('chai').expect;
const mostProfitableNeighborhood = "Chelsea";

module.exports = {
    companyName,
    companyCeo,
    mostProfitableNeighborhood
};

describe('mostProfitableNeighborhood', function () {
  it('is declared as equal to Chelsea', function () {
    expect(mostProfitableNeighborhood).to.equal('Chelsea');
  });

  it('is defined using let', function () {
    expect(js).to.match(/let mostProfitableNeighborhood/, "Expected mostProfitableNeighborhood to be defined using let");
  });
});

describe('mostProfitableNeighborhood', function() {
  it('is declared as equal to Chelsea', function() {
    expect(mostProfitableNeighborhood).to.equal('Chelsea');
  });

it('is defined using let', function() {
    expect(typeof mostProfitableNeighborhood).to.equal('string');
  });
});

describe('mostProfitableNeighborhood', function () {
  it('is declared as equal to Chelsea', function () {
    expect(mostProfitableNeighborhood).to.equal('Chelsea');
  });

  it('is defined using let', function () {
    expect(js).to.match(/let mostProfitableNeighborhood/, "Expected mostProfitableNeighborhood to be defined using let");
  });
});
it('is defined as a const', function () {
  expect(js).to.match(/const companyName/, "Expected companyName to be a const");
});
describe('companyCeo', function () {
  it('is declared as equal to Susan Smith', function () {
    expect(companyCeo).to.equal('Susan Smith');
  });

  it('is defined using let', function () {
    expect(js).to.match(/let companyCeo/, "Expected companyCeo to be defined using let");
  });
});
