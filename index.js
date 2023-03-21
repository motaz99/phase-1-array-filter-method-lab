// Code your solution here

const findMatching = (drivers, str) =>
  drivers.filter((driver) => driver.toUpperCase() === str.toUpperCase());

const fuzzyMatch = (drivers, str) =>
  drivers.filter((driver) => driver.slice(0, str.length) === str);

const matchName = (drivers, str) =>
  drivers.filter((driver) => driver.name === str);
