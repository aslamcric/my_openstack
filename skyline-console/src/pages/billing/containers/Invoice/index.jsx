import React from 'react';
import styles from './index.less';

const Invoice = () => {
    return (
        <div className={styles.invoice_wrapper}>
            <h1 className={styles.header_invoice}>Billing Invoices</h1>
            <h4 className={styles.content_invoice}>This is a simple billing invoices page.</h4>
        </div>
    );
};

export default Invoice;
