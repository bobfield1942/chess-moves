export const columns = ["a", "b", "c", "d", "e", "f", "g", "h"];

export function convertCoordinates(name) {
  return [
    parseInt(name.substring(1, 2)),
    columns.indexOf(name.substring(0, 1)),
  ];
}
