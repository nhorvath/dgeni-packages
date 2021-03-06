var tagDefFactory = require('./propertyof');

describe("propertyof tagDef", function() {
  it("should add the injected transforms to the transforms property", function() {
    var extractTypeTransform = function() {};
    var wholeTagTransform = function() {};

    var tagDef = tagDefFactory(extractTypeTransform, wholeTagTransform);
    expect(tagDef.transforms).toEqual([extractTypeTransform, wholeTagTransform]);
  });
});
