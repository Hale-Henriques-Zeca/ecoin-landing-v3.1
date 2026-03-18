// src/app/api/collect-price/route.ts

import { NextResponse } from "next/server"
import { collect } from "../../../../scripts/priceCollector"

export async function GET() {
  await collect()
  return NextResponse.json({ ok: true })
}