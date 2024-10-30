import PropTypes from 'prop-types'

export const InputGlobal = ({ inputType, inputPlaceholder }) => {
  return (
    <input
      type={inputType}
      placeholder={inputPlaceholder}
      required
      className="py-3 px-4 border-none outline-2 outline-zinc-200 rounded-md outline-none focus:outline-4 focus:outline-tmb-highlight focus:opacity-60"
    />
  )
}

export const InputSubmit = ({ inputType, inputValue }) => {
  return (
    <input
      type={inputType}
      value={inputValue}
      className="bg-tmb-gradient-btn text-tmb-white p-4 border-none border-2 border-zinc-200 rounded-full outline-none cursor-pointer"
    />
  )
}

InputGlobal.propTypes = {
  inputType: PropTypes.string,
  inputPlaceholder: PropTypes.string,
}

InputSubmit.propTypes = {
  inputType: PropTypes.string,
  inputValue: PropTypes.string,
}
