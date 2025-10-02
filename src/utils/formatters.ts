export const Formatters = {
    currency() {
        return new Intl.NumberFormat('pt-BR', { currency: "BRL", style: "currency" })
    }
}