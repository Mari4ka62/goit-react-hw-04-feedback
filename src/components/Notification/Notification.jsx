import PropTypes from 'prop-types';
import css from './Notification.module.css';
export default function Notification({ message }) {
  return <div className={css.notification}>{message}</div>;
}
Notification.propTypes = {
  message: PropTypes.string,
};
