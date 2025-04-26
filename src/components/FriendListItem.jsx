import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

export default function FriendListItem({ name, status, avatar }) {
    return (
        <li className={styles.listItem}>
            <img
                src={avatar}
                alt="Avatar"
                width="48"
            />
            <p className={styles.name}>
                {name}
            </p>
            <p className={clsx(
                styles.status,
                status && styles.online
            )}>
                {status ? 'Online' : 'Offline'}
            </p>
        </li>
    );
}

FriendListItem.propTypes = {
    name: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
};
