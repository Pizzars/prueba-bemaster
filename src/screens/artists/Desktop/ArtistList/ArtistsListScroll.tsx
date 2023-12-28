import { useEffect, useRef } from 'react'
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
  const scrollRef = useRef<HTMLInputElement | null>(null)
  const contaierRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    const scrollContainer = document.querySelector('.scroll-container') as any
    const container = document.querySelector('.scroll-elemente')

    if (!scrollContainer || !container) return

    const clone = container.cloneNode(true)
    const parent = container.parentElement
    if (!parent) return

    parent.appendChild(clone)
    parent.scrollTo(0, 2)
  }, [])

  if (list.length === 0) return <></>

  const listToShow = list.length >= 50 ? list : updateList(list)
  return (
    <div className=''>
      <div className='main-container flex justify-center items-center h-screen w-full'>
        <div
          ref={scrollRef}
          className='scroll-container h-full w-full overflow-scroll'
          onScroll={() => {
            const scrollContainer = scrollRef.current
            if (!scrollContainer) return
            // const container = document.querySelector('.scroll-elemente')
            const container = contaierRef.current
            if (!container) return
            if (
              scrollContainer.offsetHeight + scrollContainer.scrollTop >=
              scrollContainer.scrollHeight
            ) {
              const clone = container.cloneNode(true)
              const parent = container.parentElement
              if (!parent) return
              parent.appendChild(clone)
              parent.children[0].remove()
            }

            if (scrollContainer.scrollTop == 0) {
              console.log('TOP')
              const clone = container.cloneNode(true)
              const parent = container.parentElement as any
              if (!parent) return
              parent.insertBefore(clone, parent.firstChild)
              parent.scrollTo(0, container.scrollHeight)
              parent.lastElementChild.remove()
            }
            const list = container.querySelectorAll('.item-list')
            list.forEach(item => {
              // if (i === 5) {
              const size = scrollContainer.offsetHeight
              const pos = (item as any).offsetTop - scrollContainer.scrollTop
              const limit = size / 2

              const per = (100 / limit) * (limit - pos)
              const deg =
                pos < (item as any).offsetHeight * -1
                  ? 0
                  : pos > size
                  ? 0
                  : (60 / 100) * (per > 100 ? 100 : per)
              ;(item as any).style.transform = `rotateX(${deg}deg)`
            })
          }}
        >
          <div className='scroll-elemente' ref={contaierRef}>
            {listToShow.map((artist, i) => {
              return (
                <div
                  key={`artists-${i}`}
                  className={`item-list text-start py-2 px-8 cursor-pointer ${
                    selected && selected.id === artist.id ? 'opacity-100' : 'opacity-50'
                  } hover:opacity-100 `}
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
        </div>
      </div>
      {/* <div className='bg-blue-400 h-4 w-full absolute top-1/2'></div> */}
    </div>
  )
}

export default ArtistsListScroll
