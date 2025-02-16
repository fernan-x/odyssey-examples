import { useCallback, useEffect, useState } from "react";
import { useDependencies } from "../contexts/dependencies";

const Checkout = () => {
    const { paymentGateway } = useDependencies();
    const [balance, setBalance] = useState(0);

    const onPaymentClick = useCallback(() => {
        paymentGateway.processPayment(100);
    }, [paymentGateway]);

    const getBalance = useCallback(async () => {
        const balance = await paymentGateway.getBalance()
        setBalance(balance)
    }, [paymentGateway]);

    useEffect(() => {
        getBalance();
    }, [getBalance])

    return (
        <div>
            <h2>Checkout component</h2>
            <span>Balance: {balance}$</span>
            <br />
            <button onClick={getBalance}>Refresh balance</button>
            <br />
            <button onClick={onPaymentClick}>Pay 100$</button>
        </div>
    )
}

export default Checkout;