enum directions {
  Up = 'up',
  Down = 'down',
  Left = 'left',
  Right = 'right'
}

const changeDirection: (direction: directions) => void = (direction) => {
  console.log(direction);
}

changeDirection(directions.Up);

export {}