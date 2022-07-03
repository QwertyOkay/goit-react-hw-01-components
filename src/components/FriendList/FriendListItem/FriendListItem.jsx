import PropTypes from 'prop-types';

import styles from '../FriendList.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={styles['item']}>
      <span
        className={styles['status']}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>
      <img
        className={styles['avatar']}
        src={avatar}
        alt={'User avatar ' + { name }}
        width="48"
      />
      <p className={styles['name']}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;