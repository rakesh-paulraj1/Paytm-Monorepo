import { Card } from "@repo/ui/card"

export const P2Ptransactionssent = ({
    transactions
}: {
    transactions: {
        time: Date,
        amount: number,
        toUser : string | null,
        }[]
}) => {
    if (!transactions.length) {
        return <Card title="Sent Transactions">
            <div className="text-center pb-8 pt-8">
                No Recent transactions
            </div>
        </Card>
    }
    return <Card title="Sent Transactions">
        <div className="pt-2">
            {transactions.map(t => <div className="flex justify-between">
                <div>
                    <div className="text-sm">
                       From {t.toUser} 
                    </div>
                    <div className="text-slate-600 text-xs">
                        {t.time.toDateString()}
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    - Rs {t.amount / 100}
                </div>y

            </div>)}
        </div>
    </Card>
}