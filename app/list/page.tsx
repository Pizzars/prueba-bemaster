'use client'
import InfiniteScrollList from 'src/screens/artists/Desktop/ArtistList/InfiniteScrollList'
import BasePage from 'src/screens/components/general/base/BasePage'

function crearMatriz(numeroElementos: number) {
  const matriz: number[] = []

  for (let i = 0; i < numeroElementos; i++) {
    matriz.push(i)
  }

  return matriz
}

const list = crearMatriz(20)

const List = () => {
  return (
    <BasePage className='bg-artists' title='Artists'>
      <div className='w-[600px] mx-auto bg-red-400 max-w-full overflow-hidden h-[600px] max-h-full flex justify-center items-center'>
        <InfiniteScrollList>
          {list.map(n => {
            return (
              <div
                className='item my-2 rounded-lg h-20 w-full flex justify-center items-center text-6xl bg-green-400'
                key={n}
              >
                {n + 1}
              </div>
            )
          })}
        </InfiniteScrollList>
      </div>
    </BasePage>
  )
}

export default List
