jest.unmock('../signal');

describe('signal', () => {
  it('Converts any integer between 0 and 1000 included to a grammatical correct sentence.', () => {
    const convert = require('../signal');

    expect(convert(12)).toBe("twelve");
    expect(convert(22)).toBe("twenty-two");
    expect(convert(111)).toBe("one hundred and eleven");
    expect(convert(0)).toBe("zero");
    expect(convert(1000)).toBe("one thousand");
    expect(convert(100)).toBe("one hundred");
    expect(convert(200)).toBe("two hundred");
    expect(convert(235)).toBe("two hundred and thirty-five");
    expect(convert(546)).toBe("five hundred and forty-six");
    expect(convert(23.34)).toBe("None integers are not allowed => 23.34");
    expect(convert(1.23)).toBe("None integers are not allowed => 1.23");
    expect(convert(200.23)).toBe("None integers are not allowed => 200.23");
    expect(convert(-1.23)).toBe("None integers are not allowed => -1.23");
    expect(convert(1209.34)).toBe("None integers are not allowed => 1209.34");
    expect(convert(-1345.23)).toBe("None integers are not allowed => -1345.23");
    expect(convert(-20)).toBe("-20 not allowed");
    expect(convert(1250)).toBe("1250 not allowed");
    expect(convert(874)).toBe("eight hundred and seventy-four");
    expect(convert("世界餐福事工餐廳員工沒精打采")).toBe("None integers are not allowed => 世界餐福事工餐廳員工沒精打采");
    expect(convert("�������")).toBe("None integers are not allowed => �������");
    expect(convert("eleven")).toBe("None integers are not allowed => eleven");
    expect(convert(769)).toBe("seven hundred and sixty-nine");
    expect(convert(9)).toBe("nine");
    expect(convert(4)).toBe("four");
    expect(convert(999)).toBe("nine hundred and ninety-nine");
    expect(convert(180)).toBe("one hundred and eighty");
    expect(convert(89)).toBe("eighty-nine");
    expect(convert(17)).toBe("seventeen");
    expect(convert(2)).toBe("two");
    expect(convert(1)).toBe("one");
  });
});
