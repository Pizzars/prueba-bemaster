'use client'
import { useRef } from 'react'

interface Params {
  children: any
}

const InfiniteScrollList = ({ children }: Params) => {
  const ref = useRef<HTMLDivElement | null>(null)

  return (
    <div
      ref={ref}
      onScroll={() => {
        const scrollContainer = ref.current
        if (!scrollContainer) return
        if (
          (scrollContainer as any).offsetHeight + scrollContainer.scrollTop >=
          scrollContainer.scrollHeight
        ) {
          const containers = scrollContainer.querySelectorAll('.scroll-elemente')
          const container = containers[0]
          if (!container) return

          scrollContainer.appendChild(container)
        }

        if (scrollContainer.scrollTop == 0) {
          console.log('TOP')
          const containers = scrollContainer.querySelectorAll('.scroll-elemente')
          const container = containers[containers.length - 1]
          if (!container) return

          if (!parent) return
          scrollContainer.insertBefore(container, containers[0])
          scrollContainer.scrollTo(0, container.scrollHeight)
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
      }}
      className='scroll-container h-screen max-h-[100vh] w-full overflow-scroll p-4 rounded-lg text-center'
    >
      <div className='scroll-elemente'>{children}</div>
      <div className='scroll-elemente'>{children}</div>
    </div>
  )
}

export default InfiniteScrollList
