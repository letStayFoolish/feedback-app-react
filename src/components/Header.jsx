import PropTypes from "prop-types";
const Header = ({ text }) => {
  return (
    <header className=''>
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