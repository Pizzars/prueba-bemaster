'use client'
import { useEffect } from 'react'

interface Params {
  children: any
}

const InfiniteScrollList = ({ children }: Params) => {
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

      const container = document.querySelector('.scroll-elemente')
      if (!container) return
      const list = container.querySelectorAll('.item-list')
      list.forEach(item => {
        // if (i === 5) {
        const size = (scrollContainer as any).offsetHeight
        const pos = (item as any).offsetTop - scrollContainer.scrollTop
        const limit = size / 2

        const per = (100 / limit) * (limit - pos)
        const deg =
          pos < (item as any).offsetHeight * -1
            ? 90
            : pos > size
            ? -90
            : (80 / 100) * (per > 100 ? 100 : per)
        ;(item as any).style.transform = `rotateX(${deg}deg)`
      })
    })
  }, [])

  return (
    <div className='scroll-container h-screen max-h-[100vh] w-full overflow-scroll p-4 rounded-lg text-center'>
      <div className='scroll-elemente'>{children}</div>
    </div>
  )
}

export default InfiniteScrollList
