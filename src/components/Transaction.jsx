import PropTypes from 'prop-types';
import styles from './Transaction.module.css';

export default function Transaction({ type, amount, currency }) {
    return (
        <tr className={styles.row}>
            <td>{type.charAt(0).toUpperCase() + type.slice(1)}</td>
            <td>{amount}</td>
            <td>{currency}</td>
        </tr>
    );
}

Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
};
