import { JsonRpcProvider, Contract, formatUnits } from "ethers"

import { db } from "@/lib/db.ts"
import { CONTRACTS } from "@/lib/contracts.ts"
import { priceEngineAbi } from "@/lib/abis/priceEngineAbi.ts"


const provider = new JsonRpcProvider(
"https://bsc-dataseed.binance.org/"
)

export async function collect(){

const contract = new Contract(
CONTRACTS.PRICE_ENGINE,
priceEngineAbi,
provider
)

const raw = await contract.ecoinPriceUSDT()

const price = Number(formatUnits(raw,18))

await db.price.create({
 data:{ price }
})

console.log("Saved price:",price)

}

collect()