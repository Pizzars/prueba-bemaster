import React from 'react'
import { useAppSelector } from 'src/redux/hooks'
import ContentDetails from './ContentDetails'
import { DataModel } from 'src/proxy/queries/data/dataModel'

interface Params {
  item?: DataModel
}

const ContentData = ({ item }: Params) => {
  const itemRedux = useAppSelector(state => state.dataReducer.selectedItem)
  const selected = item ?? itemRedux
  // Estilos de animación para la expansión

  return (
    <div className='flex-grow flex flex-col desk:flex-row h-full w-full overflow-hidden'>
      <div className='h-full overflow-hidden flex-1 pt-4 desk:pt-0'>
        <div className='w-full desk:h-full h-[20rem]'>
          <img
            src={selected?.image ?? ''}
            alt={selected?.name ?? ''}
            className='w-full h-full object-cover'
          />
        </div>
      </div>
      <div className='h-full overflow-hidden desk:flex-1'>
        <ContentDetails item={item} />
      </div>
    </div>
  )
}

export default ContentData
