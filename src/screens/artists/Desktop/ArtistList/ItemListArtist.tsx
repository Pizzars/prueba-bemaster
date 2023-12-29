import React from 'react'
import { useDispatch } from 'react-redux'
import { ArtistModel } from 'src/proxy/queries/artists/artistModel'
import { selectArtist } from 'src/redux/features/artistsSlice'
import { useAppSelector } from 'src/redux/hooks'
import TitleSmall from 'src/screens/components/texts/TitleSmall'
import { TextColors } from 'src/utils/Colors'

interface Params {
  artist: ArtistModel
}

const ItemListArtist = ({ artist }: Params) => {
  const selected = useAppSelector(state => state.artistsReducer.artist)
  const dispatch = useDispatch()
  return (
    <div
      className={`item-list text-start py-2 px-8 cursor-pointer ${
        selected && selected.id === artist.id ? 'opacity-100' : 'opacity-50'
      } hover:opacity-100`}
      onClick={() => dispatch(selectArtist(artist))}
    >
      <TitleSmall
        text={artist.name}
        color={TextColors.white}
        className='uppercase text-start hover:text-yellow-app'
      />
    </div>
  )
}

export default ItemListArtist
