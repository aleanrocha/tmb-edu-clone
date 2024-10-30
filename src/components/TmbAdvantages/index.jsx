import PropTypes from 'prop-types'

import { Paragraph } from '../Paragraph'

export const TmbAdvantages = ({ img, alt, title, content }) => {
  console.log(img)
  return (
    <div className="flex flex-col gap-4 items-start">
      <img src={img} alt={alt} className="mb-6 lg:mx-auto" />
      <h3 className="text-3xl tracking-wider">{title}</h3>
      <Paragraph content={content} />
    </div>
  )
}

TmbAdvantages.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
}
