test("detects horizontal win", () => {
  const board = ["X", "X", "X", "", "", "", "", "", ""];
  expect(calculateWinner(board)).toBe("X");
});

test("returns null when no winner", () => {
  const board = ["X", "O", "X", "X", "O", "O", "O", "X", "X"];
  expect(calculateWinner(board)).toBe(null);
});