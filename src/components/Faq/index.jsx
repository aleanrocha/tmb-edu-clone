import { useState } from 'react'
import PropTypes from 'prop-types'
import { FaPlus, FaMinus } from 'react-icons/fa'

export const Faq = ({ title, description }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="flex flex-col gap-4 lg:gap-8 lg:mb-8">
      <div
        className="flex gap-4 items-center justify-between cursor-pointer"
        onClick={() => toggleExpanded()}
      >
        <h3 className="font-bold cursor-pointer text-base mt-6 lg:w-[65%] lg:mt-0 lg:text-xl lg:font-normal">
          {title}
        </h3>
        <div className="lg:w-[35%] lg:flex justify-between items-center gap-4">
          <span className="hidden w-full h-[0.1rem] bg-tmb-black opacity-30 mt-2 lg:mt-0 lg:block"></span>
          <span
            className={`text-4xl font-bold transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
          >
            {isExpanded ? <FaMinus size={20} /> : <FaPlus size={20} />}
          </span>
        </div>
      </div>
      <p
        className={`transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-96' : 'max-h-0'} text-base opacity-50 leading-7>`}
      >
        {description}
      </p>
      <span className="w-full h-[0.1rem] bg-tmb-black opacity-30 mt-2 lg:hidden"></span>
    </div>
  )
}

Faq.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
}
