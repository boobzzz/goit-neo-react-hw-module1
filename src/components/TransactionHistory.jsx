import PropTypes from 'prop-types';
import Transaction from './Transaction.jsx';
import styles from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
    return (
        <table className={styles.table}>
            <thead className={styles.header}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody className={styles.body}>
                {items.map(({ id, type, amount, currency }) => (
                    <Transaction
                        key={id}
                        type={type}
                        amount={amount}
                        currency={currency}
                    />
                ))}
            </tbody>
        </table>
    );
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
};
