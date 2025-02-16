export interface PaymentGateway {
    getBalance(): Promise<number>
    processPayment(amount: number): Promise<void>
}