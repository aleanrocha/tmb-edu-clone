import PropTypes from 'prop-types'
import { FaCheck } from 'react-icons/fa6'

export const TmbCheck = ({ text }) => {
  return (
    <div className="py-3 px-4 flex items-center gap-2 border border-tmb-white rounded-full">
      <FaCheck className="text-tmb-highlight text-2xl" />
      <p>{text}</p>
    </div>
  )
}

TmbCheck.propTypes = {
  text: PropTypes.string,
}
