enum directions {
  Up,
  Down,
  Left,
  Right
}

const changeDirection: (direction: directions) => void = (direction) => {
  console.log(direction);
}

console.log(directions.Up);

export {}