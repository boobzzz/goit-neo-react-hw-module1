import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem.jsx";
import styles from "./FriendList.module.css";

export default function FriendList({ friends }) {
    return (
        <ul className={styles.list}>
            {friends.map(({ id, name, isOnline, avatar }) => (
                <FriendListItem
                    key={id}
                    name={name}
                    status={isOnline}
                    avatar={avatar}
                />
            ))}
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        avatar: PropTypes.string.isRequired,
    }))
}
