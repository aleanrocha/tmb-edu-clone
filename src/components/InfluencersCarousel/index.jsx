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

  const imagesData = [
    { src: tmbInfluencerHolzer, alt: 'Felipe Holzer' },
    { src: tmbInfluencerWeldell, alt: 'Weldell Carvalho' },
    { src: tmbInfluencerRenata, alt: 'Renata Jardim' },
    { src: tmbInfluencerRodolfo, alt: 'Rodolfo Mori' },
    { src: tmbInfluencerAndressa, alt: 'Andressa Malinsk' },
  ]
  return (
    <div className="max-w-screen-xl mx-auto">
      <h2 className="text-center text-3xl max-w-80 p-8 mx-auto lg:max-w-none md:text-4xl">
        Quem tem TMB vai mais longe
      </h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        partialVisibile={false}
        autoPlay={true}
        arrows={winSize.width > 768 ? false : true}
      >
        {imagesData &&
          imagesData.map((image, index) => (
            <div key={index} className="relative h-full w-full">
              <img
                src={image.src}
                alt={image.alt}
                className="h-full object-cover"
              />
              <p className="absolute inset-0 flex items-center justify-center text-2xl tracking-wider opacity-0 hover:bg-tmb-dark-overlay hover:opacity-100">
                {image.alt}
              </p>
            </div>
          ))}
      </Carousel>
    </div>
  )
}
