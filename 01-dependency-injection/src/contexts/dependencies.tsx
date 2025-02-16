import { createContext, useContext, useMemo } from "react";
import { PaymentGateway } from "../gateways/payment-gateway";
import { InMemoryPaymentGateway } from "../gateways-infra/in-memory-payment-gateway";

export type Dependencies = {
    paymentGateway: PaymentGateway;
}

const DependenciesContext = createContext<Dependencies | null>(null)

export const DependenciesProvider = ({ children }: { children: React.ReactNode }) => {
    const dependencies = useMemo(() => {
        const paymentGateway = new InMemoryPaymentGateway()
        return {
            paymentGateway,
        }
    }, [])

    return (
        <DependenciesContext.Provider value={dependencies}>
            {children}
        </DependenciesContext.Provider>
    )
}

export const useDependencies = (): Dependencies => {
    const dependencies = useContext(DependenciesContext)
    if (!dependencies) {
        throw new Error('Dependencies not found')
    }
    return dependencies
}