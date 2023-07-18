import PropTypes from "prop-types";
const Header = ({ text }) => {
  return (
    <header className='container bg-transparent border-bottom mb-4 shadow-sm'>
      <div className="">
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
}

Header.propTypes = {
  text: PropTypes.string,
}

export default Header