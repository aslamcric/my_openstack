import React, { useState } from 'react';
import {
    Card,
    Button,
    Input,
    Radio,
    message,
    Typography,
    Divider,
} from 'antd';
import {
    DollarOutlined,
    MobileOutlined,
    CreditCardOutlined,
    SafetyCertificateOutlined,
} from '@ant-design/icons';
import styles from './index.less';

const { Title, Text } = Typography;

const PayBill = (props) => {
    const [amount, setAmount] = useState('');
    const [method, setMethod] = useState('bkash');
    const [loading, setLoading] = useState(false);

    const { rootStore, history } = props;

    const handlePay = () => {
        if (!amount) {
            message.error('Please enter payment amount');
            return;
        }

        setLoading(true);

        setTimeout(() => {
            // simulate payment success
            localStorage.setItem('paymentExpired', 'false');

            if (rootStore && rootStore.setPaymentSuccess) {
                rootStore.setPaymentSuccess();
            }

            message.success(
                `Payment successful via ${method.toUpperCase()}! Full access unlocked 🎉`
            );

            setLoading(false);

            window.location.href = '/base/overview';
        }, 1500);
    };

    return (
        <div className={styles.page}>
            <Card className={styles.card}>
                <Title level={3} className={styles.title}>
                    Pay Your Outstanding Bill
                </Title>

                <Text className={styles.subTitle}>
                    Secure payment powered by trusted gateways
                </Text>

                <Divider />

                {/* Amount */}
                <div className={styles.section}>
                    <Text strong>Amount (BDT)</Text>
                    <Input
                        size="large"
                        prefix={<DollarOutlined />}
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </div>

                {/* Payment Method */}
                <div className={styles.section}>
                    <Text strong>Select Payment Method</Text>
                    <Radio.Group
                        className={styles.methods}
                        value={method}
                        onChange={(e) => setMethod(e.target.value)}
                    >
                        <Radio.Button value="bkash">
                            <MobileOutlined /> bKash
                        </Radio.Button>
                        <Radio.Button value="rocket">
                            <MobileOutlined /> Rocket
                        </Radio.Button>
                        <Radio.Button value="nagad">
                            <MobileOutlined /> Nagad
                        </Radio.Button>
                        <Radio.Button value="ssl">
                            <CreditCardOutlined /> SSLCommerz
                        </Radio.Button>
                    </Radio.Group>
                </div>

                <Button
                    type="primary"
                    size="large"
                    block
                    icon={<SafetyCertificateOutlined />}
                    loading={loading}
                    onClick={handlePay}
                    className={styles.payBtn}
                >
                    Pay Now
                </Button>

                <Text type="secondary" className={styles.footerText}>
                    🔒 100% Secure Payment • SSL Encrypted
                </Text>
            </Card>
        </div>
    );

};

export default PayBill;
