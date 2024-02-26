import { NextResponse } from "next/server";
import 'dotenv/config'

import { Client } from 'pg'

console.log(process.env.PGUSER)
console.log(process.env.PGPASSWORD)

const client = new Client({
    host: 'ep-still-snowflake-a6cpzwql.us-west-2.aws.neon.tech',
    port: 5334,
    database: 'impactdb',
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
})

export const query = async (text, params) => {
    client.connect((err, client, release) => {
        console.log('lets see')
        if (err) {
            return console.error('Error acquiring client', err.stack)
        }
    })

    const start = Date.now()
    console.log("before")
    const res = await client.query(text, params)
    console.log("after")

    const duration = Date.now() - start
    console.log('executed query', { text, duration, rows: res.rowCount })
    return res
}

export async function POST(request) {

    console.log(request)
    console.log("receiving data")
    const data = await request.json()
    console.log("jsonifed")

    const reponse = await query('SELECT version()')
    console.log(reponse.rows[0].message) // Hello world!

    return NextResponse.json({
        data
    })
}