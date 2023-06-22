import PropTypes from 'prop-types';

const Mission = ({ title, description }) => (
  <>
    <td>{title}</td>
    <td>{description}</td>
    <td><span>NOT A MEMBER</span></td>
    <td>
      <button
        type="button"
        style={{
          border: '2px solid #6D757E',
          padding: '1rem 1.5rem',
          backgroundColor: '#fff',
          color: '#000000',
          fontSize: '1.2rem',
        }}
      >
        Join mission
      </button>
    </td>
  </>
);

Mission.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Mission;
