import { NextResponse } from 'next/server'

export async function GET() {
  const text = ' Hello :D'
  return NextResponse.json({ text })
}
