import { useEffect, useRef } from 'react'
import { ArtistModel } from 'src/proxy/queries/artists/artistModel'
import ArtistItem from './ArtistItem'
// import TitleSmall from 'src/screens/components/texts/TitleSmall'
// import { TextColors } from 'src/utils/Colors'
// import { useSpring } from 'react-spring'

interface Params {
  list: ArtistModel[]
}

const updateList = (list: ArtistModel[]) => {
  const targetLength = 50

  while (list.length < targetLength) {
    // Duplica los elementos de la lista original
    list.push(...list.map(item => ({ ...item })))
  }
  return list
}

const ArtistsListScrollMobile = ({ list }: Params) => {
  const scrollRef = useRef<HTMLInputElement | null>(null)
  const contaierRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    // const scrollContainer = scrollRef.current
    // const container = contaierRef.current

    const scrollContainer = document.querySelector('.scroll-container')
    if (!scrollContainer) return
    const container = document.querySelector('.scroll-elemente')
    if (!container) return

    const clone = container.cloneNode(true)

    const parent = container.parentElement
    if (!parent) return
    parent.appendChild(clone)
    parent.scrollTo(0, 2)

    scrollContainer.addEventListener('scroll', () => {
      if (
        (scrollContainer as any).offsetHeight + scrollContainer.scrollTop >=
        scrollContainer.scrollHeight
      ) {
        const container = document.querySelector('.scroll-elemente')
        if (!container) return
        const clone = container.cloneNode(true)
        const parent = container.parentElement
        if (!parent) return
        parent.appendChild(clone)
        parent.children[0].remove()
      }

      if (scrollContainer.scrollTop == 0) {
        console.log('TOP')
        const container = document.querySelector('.scroll-elemente')
        if (!container) return
        const clone = container.cloneNode(true)
        const parent = container.parentElement
        if (!parent) return
        parent.insertBefore(clone, parent.firstChild)
        parent.scrollTo(0, container.scrollHeight)
        parent.lastElementChild?.remove()
      }

      // const container = document.querySelector('.scroll-elemente')
      // if (!container) return
      // const list = container.querySelectorAll('.item-list')
      // list.forEach(item => {
      //   // if (i === 5) {
      //   const size = (scrollContainer as any).offsetHeight
      //   const pos = (item as any).offsetTop - scrollContainer.scrollTop
      //   const limit = size / 2

      //   const per = (100 / limit) * (limit - pos)
      //   const deg =
      //     pos < (item as any).offsetHeight * -1
      //       ? 90
      //       : pos > size
      //       ? -90
      //       : (80 / 100) * (per > 100 ? 100 : per)
      //   ;(item as any).style.transform = `rotateX(${deg}deg)`
      // })
    })
  }, [])

  if (list.length === 0) return <></>

  const listToShow = list.length >= 50 ? list : updateList(list)
  return (
    <div className='main-container flex justify-center items-center h-full w-full relative'>
      <div ref={scrollRef} className='scroll-container h-full w-full overflow-scroll relative'>
        <div className='scroll-elemente' ref={contaierRef}>
          {listToShow.map((artist, i) => {
            return <ArtistItem key={`artists-${i}`} artist={artist} />
          })}
        </div>
      </div>
      <div className='bg-gradient-to-b from-white-app from-5% to-transparent h-[15vh] w-full absolute left-0 top-0'></div>
      <div className='bg-gradient-to-t from-white-app from-5% to-transparent h-[15vh] w-full absolute left-0 bottom-0'></div>
    </div>
  )
}

export default ArtistsListScrollMobile
