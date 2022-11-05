import calculate from './calculate';

describe('AC button', () => {
  test('AC button with no previous inputs', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    const expected = {
      total: null,
      next: null,
      operation: null,
    };
    const result = calculate(obj, 'AC');
    expect(result).toEqual(expected);
  });
  test('AC button with previous inputs', () => {
    const obj = {
      total: '15',
      next: '2',
      operation: '-',
    };
    const expected = {
      total: null,
      next: null,
      operation: null,
    };
    const result = calculate(obj, 'AC');
    expect(result).toEqual(expected);
  });
});

describe('When buttonName is a number', () => {
  test('press 0 number', () => {
    // Arrange
    const obj = {
      total: null,
      next: '0',
      operation: null,
    };
    const expected = {};
    // Act
    const result = calculate(obj, '0');
    // Assert
    expect(result).toEqual(expected);
  });

  test('Update next if an operation exist', () => {
    // Arrange
    const obj = {
      total: '1',
      next: null,
      operation: '+',
    };
    const expected = {
      total: '1',
      next: '3',
      operation: '+',
    };
    // Act
    const result = calculate(obj, '3');
    // Assert
    expect(result).toEqual(expected);
  });

  test('Update next if an operation does not exist', () => {
    // Arrange
    const obj = {
      total: null,
      next: '4',
    };
    const expected = {
      total: null,
      next: '43',
    };
    // Act
    const result = calculate(obj, '3');
    // Assert
    expect(result).toEqual(expected);
  });
});

describe("buttonName is '.'", () => {
  test("Case 01: next includes '.'", () => {
    // Arrange
    const obj = {
      total: null,
      next: '4.',
    };
    const expected = {
      total: null,
      next: '4.',
    };
    // Act
    const result = calculate(obj, '.');
    // Assert
    expect(result).toEqual(expected);
  });

  test("Case 02: next don't includes '.'", () => {
    // Arrange
    const obj = {
      total: null,
      next: null,
    };
    const expected = {
      total: null,
      next: '0.',
    };
    // Act
    const result = calculate(obj, '.');
    // Assert
    expect(result).toEqual(expected);
  });

  test("Case 03: total includes '.'", () => {
    // Arrange
    const obj = {
      total: '0.',
      next: null,
    };
    const expected = {};
    // Act
    const result = calculate(obj, '.');
    // Assert
    expect(result).toEqual(expected);
  });

  test("Case 04: total dont includes '.'", () => {
    // Arrange
    const obj = {
      total: '5',
      next: null,
      operation: '+',
    };
    const expected = {
      total: '5',
      next: '0.',
      operation: '+',
    };
    // Act
    const result = calculate(obj, '.');
    // Assert
    expect(result).toEqual(expected);
  });

  test("Case 05: obj is empty and '.' pressed", () => {
    // Arrange
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    const expected = {
      total: null,
      next: '0.',
      operation: null,
    };
    // Act
    const result = calculate(obj, '.');
    // Assert
    expect(result).toEqual(expected);
  });
});

describe('= button', () => {
  test('press = button with no previous inputs', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    const expected = {};
    const result = calculate(obj, '=');
    expect(result).toEqual(expected);
  });
  test('press = button with previous inputs', () => {
    const obj = {
      total: '1',
      next: '4',
      operation: '+',
    };
    const expected = {
      total: '5',
      next: null,
      operation: null,
    };
    const result = calculate(obj, '=');
    expect(result).toEqual(expected);
  });
});

describe('Buttons pressed', () => {
  test('Press a number with no previous inputs', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    const expected = {
      total: null,
      next: '2',
    };
    const result = calculate(obj, '2');
    expect(result).toEqual(expected);
  });
  test('Press a number with no previous operations', () => {
    const obj = {
      total: null,
      next: null,
      operation: '+',
    };
    const expected = {
      total: null,
      next: '2',
      operation: '+',
    };
    const result = calculate(obj, '2');
    expect(result).toEqual(expected);
  });
});

describe("User press '+/-' ", () => {
  test('case 01: next is not null', () => {
    // Arrange
    const obj = {
      total: null,
      next: '4',
    };
    const expected = {
      total: null,
      next: '-4',
    };
    // Act
    const result = calculate(obj, '+/-');
    // Assert
    expect(result).toEqual(expected);
  });

  test('case 02: next is null and total not', () => {
    // Arrange
    const obj = {
      total: '8',
      next: null,
    };
    const expected = {
      total: '-8',
      next: null,
    };
    // Act
    const result = calculate(obj, '+/-');
    // Assert
    expect(result).toEqual(expected);
  });

  test('case 03: obj is empty', () => {
    // Arrange
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    const expected = {};
    // Act
    const result = calculate(obj, '+/-');
    // Assert
    expect(result).toEqual(expected);
  });
});

describe("User pressed an operation after pressing '='", () => {
  test("Operation '+' should be saved", () => {
    // Arrange
    const obj = {
      total: '0',
      next: null,
      operation: null,
    };
    const expected = {
      total: '0',
      next: null,
      operation: '+',
    };
    // Act
    const result = calculate(obj, '+');
    // Assert
    expect(result).toEqual(expected);
  });
});

describe('User pressed an operation button and there is an existing operation', () => {
  test("User Press '+' operation then pressed 'x' the 'x' should be saved", () => {
    // Arrange
    const obj = {
      total: '5',
      next: null,
      operation: '+',
    };
    const expected = {
      total: '5',
      next: null,
      operation: 'x',
    };
    // Act
    const result = calculate(obj, 'x');
    // Assert
    expect(result).toEqual(expected);
  });

  test("total is null and User Press '+' operation then pressed 'x' the 'x' should be saved and total should be 0", () => {
    // Arrange
    const obj = {
      operation: '+',
    };
    const expected = {
      total: 0,
      operation: 'x',
    };
    // Act
    const result = calculate(obj, 'x');
    // Assert
    expect(result).toEqual(expected);
  });
});

describe("The user hasn't typed a number yet, just save the operation", () => {
  test("User pressed '+' operation", () => {
    // Arrange
    const obj = {
      total: null,
      next: null,
      operation: null,
    };
    const expected = {
      operation: '+',
    };
    // Act
    const result = calculate(obj, '+');
    // Assert
    expect(result).toEqual(expected);
  });
});
