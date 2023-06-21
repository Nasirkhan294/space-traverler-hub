import { styled } from 'styled-components';
import PropTypes from 'prop-types';

const Mission = ({
  title, description, status, action,
}) => (
  <DIV>
    <span className="title">{title}</span>
    <span className="description">{description}</span>
    <span className="status">{status}</span>
    <span className="action">{action}</span>
  </DIV>
);

Mission.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
};

export default Mission;

const DIV = styled.div`
  diplay: grid;
  grid-template-column: repeat(50px 1fr 50px 50px);
  gap: 1rem;
`;
