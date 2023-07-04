function shuffle(arr: number[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function getRandomCoords(size: number, countRandomElem: number) {
  const arr = [];
  const randomCoords = [];
  const max = size * size;

  for (let i = 0; i < max; i++) {
    arr.push(i);
  }

  shuffle(arr);

  for (let i = 0; i < countRandomElem; i++) {
    const y = Math.floor(arr[i] / size);
    const x = arr[i] % size;
    randomCoords.push([x, y]);
  }

  return randomCoords;
}

export function CreateGrid(size: number, mineCount: number) {
  const MINE = -1;
  const grid = new Array(size * size).fill(0);
  const mineCoords = getRandomCoords(size, mineCount);

  function inc(x: number, y: number) {
    if (x >= 0 && x < size && y >= 0 && y < size) {
      if (grid[y * size + x] === MINE) return;
      grid[y * size + x] += 1;
    }
  }

  //заполнение поля бомбами

  for (let i = 0; i < mineCoords.length; i++) {
    const x = mineCoords[i][0];
    const y = mineCoords[i][1];

    grid[y * size + x] = MINE;

    inc(x - 1, y - 1);
    inc(x + 1, y + 1);
    inc(x + 1, y - 1);
    inc(x - 1, y + 1);
    inc(x, y + 1);
    inc(x, y - 1);
    inc(x + 1, y);
    inc(x - 1, y);
  }

  return grid;
}
