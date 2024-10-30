import PropTypes from 'prop-types'

export const Paragraph = ({ content }) => {
  return <p className="opacity-50 leading-7">{content}</p>
}

Paragraph.propTypes = {
  content: PropTypes.string
}