import PropTypes from 'prop-types';
import styles from './Profile.module.css';

export default function Profile({ name, tag, location, avatar, stats }) {
    return (
        <div className={styles.container}>
            <div className={styles.profileInfo}>
                <img
                    src={avatar}
                    alt="User avatar"
                    className={styles.avatar}
                />
                <p className={styles.name}>{name}</p>
                <p className={styles.tag}>{`@${tag}`}</p>
                <p className={styles.location}>{location}</p>
            </div>

            <ul className={styles.statsList}>
                <li>
                    <span className={styles.statName}>Followers</span>
                    <span className={styles.statValue}>{stats.followers}</span>
                </li>
                <li>
                    <span className={styles.statName}>Views</span>
                    <span className={styles.statValue}>{stats.views}</span>
                </li>
                <li>
                    <span className={styles.statName}>Likes</span>
                    <span className={styles.statValue}>{stats.likes}</span>
                </li>
            </ul>
        </div>

    );
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number
    }).isRequired
};
