'use client'
import Artists from 'src/screens/artists/Artists'
import BasePage from 'src/screens/components/general/base/BasePage'

const List = () => {
  return (
    <BasePage className='bg-artists' title='Artists'>
      <Artists />
    </BasePage>
  )
}

export default List
