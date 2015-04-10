describe('getTriangle', function() {
  it("returns 'not a triangle' for input of 0 0 0", function() {
    expect(getTriangle(0, 0, 0)).to.equal("not a triangle");
  });

  it("returns 'not a triangle' for if ANY sides are 0", function() {
    expect(getTriangle(1, 2, 0)).to.equal("not a triangle");
  });

  it("returns 'not a triangle' for if ANY one side is longer than the other two combined", function() {
    expect(getTriangle(1, 7, 2)).to.equal("not a triangle");
  });

});
