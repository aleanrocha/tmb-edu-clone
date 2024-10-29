import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import tmbInfluencerAndressa from '../../assets/tmb-img-andressa.jpg'
import tmbInfluencerHolzer from '../../assets/tmb-img-holzer.jpg'
import tmbInfluencerRenata from '../../assets/tmb-img-renata.jpg'
import tmbInfluencerRodolfo from '../../assets/tmb-img-rodolfo.jpg'
import tmbInfluencerWeldell from '../../assets/tmb-img-wendell.jpg'
import { useEffect, useState } from 'react'

const responsive = {
  all: {
    breakpoint: { max: 4000, min: 0 },
    items: 5,
  },
}

export const InfluencersCarousel = () => {
  const [winSize, setWinSIze] = useState({
    width: window.innerWidth,
  })

  useEffect(() => {
    const handleSize = () => {
      setWinSIze({
        width: window.innerWidth,
      })
    }
    window.addEventListener('resize', handleSize)
    return () => window.removeEventListener('resize', handleSize)
  }, [])
  return (
    <div className="max-w-screen-xl mx-auto">
      <h2 className="text-center text-3xl max-w-80 p-8 mx-auto lg:max-w-none md:text-4xl">
        Quem tem TMB vai mais longe
      </h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        partialVisbile={false}
        autoPlay={true}
        arrows={winSize.width > 768 ? false : true}
      >
        <div className="relative">
          <img
            src={tmbInfluencerHolzer}
            alt="Felipe Holzer"
            className="h-full object-cover"
          />
          <p className="absolute inset-0 flex items-center justify-center text-2xl tracking-wider opacity-0 hover:bg-tmb-dark-overlay hover:opacity-100">
            Felipe Holzer
          </p>
        </div>
        <div className="relative">
          <img
            src={tmbInfluencerWeldell}
            alt="Weldell Carvalho"
            className="h-full object-cover"
          />
          <p className="absolute inset-0 flex items-center justify-center text-2xl tracking-wider opacity-0 hover:bg-tmb-dark-overlay hover:opacity-100">
            Weldell Carvalho
          </p>
        </div>
        <div className="relative">
          <img
            src={tmbInfluencerRenata}
            alt="Renata Jardim"
            className="h-full object-cover"
          />
          <p className="absolute inset-0 flex items-center justify-center text-2xl tracking-wider opacity-0 hover:bg-tmb-dark-overlay hover:opacity-100">
            Renata Jardim
          </p>
        </div>
        <div className="relative">
          <img
            src={tmbInfluencerRodolfo}
            alt="Rodolfo mori"
            className="h-full object-cover"
          />
          <p className="absolute inset-0 flex items-center justify-center text-2xl tracking-wide opacity-0 hover:bg-tmb-dark-overlay hover:opacity-100">
            Rodolfo mori
          </p>
        </div>
        <div className="relative">
          <img
            src={tmbInfluencerAndressa}
            alt="Andressa Malinsk"
            className="h-full object-cover"
          />
          <p className="absolute inset-0 flex items-center justify-center text-2xl tracking-wide opacity-0 hover:bg-tmb-dark-overlay hover:opacity-100">
            Andressa Malinsk
          </p>
        </div>
      </Carousel>
    </div>
  )
}
