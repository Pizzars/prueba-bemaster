import { useRef } from 'react'
import { ArtistModel } from 'src/proxy/queries/artists/artistModel'
import TitleSmall from 'src/screens/components/texts/TitleSmall'
import { TextColors } from 'src/utils/Colors'

interface Params {
  list: ArtistModel[]
  selected: ArtistModel | null
  onSelect: (artist: ArtistModel) => void
}

const updateList = (list: ArtistModel[]) => {
  const targetLength = 50

  while (list.length < targetLength) {
    // Duplica los elementos de la lista original
    list.push(...list.map(item => ({ ...item })))
  }
  return list
}

const ArtistsListScroll = ({ list, selected, onSelect }: Params) => {
  const containerRef = useRef(null)

  let scrollPos = 0
  let scrollingUp = false

  if (list.length === 0) return <></>

  const listToShow = list.length >= 50 ? list : updateList(list)

  return (
    <div
      className='h-full overflow-y-scroll'
      id='items-container'
      ref={containerRef}
      onWheel={e => {
        const container = containerRef.current as any
        if (!container) return
        const item = container.children[0]
        const lastItem = container.children[container.children.length - 1]

        const pos = item.offsetTop - container.scrollTop
        const pos2 = lastItem.offsetTop - container.scrollTop
        // console.log(pos, pos2)
        // console.log(container.scrollTop, pos2)
        // console.log(window.innerHeight, pos2)
        const posBottom = pos2 - lastItem.offsetHeight - window.innerHeight
        const newScrollPos = container.scrollTop

        if (newScrollPos > scrollPos) {
          // Scroll hacia abajo
          scrollingUp = false
        } else {
          // Scroll hacia arriba
          scrollingUp = true
        }

        // Actualiza la posición de scroll
        scrollPos = newScrollPos
        // window.scrollTo({
        //   top: container.offsetTop,
        //   behavior: 'smooth'
        // })
        // Puedes utilizar la variable 'scrollingUp' para determinar la dirección del scroll
        if (scrollingUp) {
          // console.log('Scroll arriba', pos)
          if (pos > -30 && pos < 5) {
            container.removeChild(lastItem)
            container.insertBefore(lastItem, item)
            e.preventDefault()
            return
          }
        } else {
          // console.log('Scroll Abajo', pos)
          // console.log('Scroll Abajo', posBottom)
          if (posBottom < -10) {
            container.removeChild(item)
            container.appendChild(item)
            e.preventDefault()
            return
          }
        }
      }}
    >
      {listToShow.map((artist, i) => {
        return (
          <div
            key={`artists-${i}`}
            className={`item-list text-start py-2 px-8 cursor-pointer ${
              selected && selected.id === artist.id ? 'opacity-100' : 'opacity-50'
            }   hover:opacity-100`}
            onClick={() => onSelect(artist)}
          >
            <TitleSmall
              text={artist.name}
              color={TextColors.white}
              className='uppercase text-start hover:text-yellow-app'
            />
          </div>
        )
      })}
    </div>
  )
}

export default ArtistsListScroll
