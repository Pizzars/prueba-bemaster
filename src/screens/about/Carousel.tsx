import { useAppSelector } from 'src/redux/hooks'
import { useSpring, animated } from 'react-spring'

const Carousel = () => {
  const state = useAppSelector(state => state.aboutReducer.data)

  const fade = useSpring({
    from: {
      x: '0rem'
    },
    to: {
      x: `${(state?.logos?.length ?? 0) * -8}rem`
    },
    loop: true,
    config: {
      duration: (state?.logos?.length ?? 0) * 1000
    }
  })

  return (
    <div className='my-8 w-full overflow-hidden'>
      {state && state.logos && (
        <div className='w-full overflow-hidden'>
          <animated.div style={fade} className='flex '>
            <div
              className='flex'
              style={{
                width: `${state.logos.length * 16}rem`
              }}
            >
              {state.logos.map((logo, i) => {
                return (
                  <div className='w-24 h-10 mx-4' key={`logo-${i}`}>
                    <img
                      className='w-full h-full object-contain '
                      src={`http://localhost:1337${logo.url}`}
                      alt={logo.alternativeText ?? 'logo'}
                    />
                  </div>
                )
              })}
              {state.logos.map((logo, i) => {
                // "/uploads/exhale_1_93b82676ed.png"
                return (
                  <div className='w-24 h-10 mx-4' key={`logo2-${i}`}>
                    <img
                      className='w-full h-full object-contain '
                      src={`http://localhost:1337${logo.url}`}
                      alt=''
                    />
                  </div>
                )
              })}
            </div>
          </animated.div>
        </div>
      )}
    </div>
  )
}

export default Carousel
