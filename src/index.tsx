import React, { useMemo } from 'react'
import { ReactDeclinerProps } from './interfaces'

export * from './interfaces'

const ReactDecliner: React.FC<ReactDeclinerProps> = ({
  num,
  one,
  two,
  many,
}) => {
  const absNum = Math.abs(num)

  return useMemo(() => {
    const cases = [2, 0, 1, 1, 1, 2]
    const words = [one, two, many]

    return (
      <>
        {
          words[
            absNum % 1 !== 0
              ? 1
              : absNum % 100 > 4 && absNum % 100 < 20
              ? 2
              : cases[absNum % 10 < 5 ? absNum % 10 : 5]
          ]
        }
      </>
    )
  }, [absNum, many, one, two])
}

export default ReactDecliner
