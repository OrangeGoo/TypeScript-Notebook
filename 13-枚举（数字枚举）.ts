enum directions {
  Up = 2,
  Down = 4,
  Left = 8,
  Right = 16
}

const changeDirection: (direction: directions) => void = (direction) => {
  console.log(direction);
}

console.log(directions.Up);

export{}