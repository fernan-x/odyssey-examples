import { PaymentGateway } from "../gateways/payment-gateway"

export class InMemoryPaymentGateway implements PaymentGateway {
    private balance: number = 0

    getBalance(): Promise<number> {
        return Promise.resolve(this.balance)
    }

    processPayment(amount: number): Promise<void> {
        this.balance -= amount
        return Promise.resolve()
    }
}