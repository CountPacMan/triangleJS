describe('getTriangle', function() {
  it("returns 'not a triangle' for input of 0 0 0", function() {
    expect(getTriangle(0, 0, 0)).to.equal("not a triangle");
  });

});
