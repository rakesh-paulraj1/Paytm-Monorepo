import { Card } from "@repo/ui/card"

export const P2Ptransactionsrecived = ({
    transactions
}: {
    transactions: {
        time: Date,
        amount: number,
        fromuser : string | null,
        }[]
}) => {
    if (!transactions.length) {
        return <Card title="Recieved Transactions">
            <div className="text-center pb-8 pt-8">
                No Recent transactions
            </div>
        </Card>
    }
    return <Card title="Recieved Transactions">
        <div className="pt-2">
            {transactions.map(t => <div className="flex justify-between">
                <div>
                    <div className="text-sm">
                       From {t.fromuser} 
                    </div>
                    <div className="text-slate-600 text-xs">
                        {t.time.toDateString()}
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    + Rs {t.amount / 100}
                </div>

            </div>)}
        </div>
    </Card>
}