// Task.
// Calculate area of given triangle. Create a
// function t_area that will take a string which will
// represent triangle, find area of the triangle, one
// space will be equal to one length unit. The smallest
// triangle will have one length unit.
// Hints
// Ignore dots.
// Example:
// .
// .  .
// .  .   .  ---> should return 2.0

const tArea = (tStr) => {
  const side = tStr.split("\n").length - 3
  return (side * side) / 2
}
