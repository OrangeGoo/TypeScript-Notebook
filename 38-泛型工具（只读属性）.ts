interface Props {
  id: string
  children: number[]
}

type ReadonlyProps = Readonly<Props>

let p1: ReadonlyProps = {
  id: '1',
  children: [1, 2, 3]
}

// p1.id = '2'

export {}