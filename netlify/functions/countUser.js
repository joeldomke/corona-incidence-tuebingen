let faunadb = require('faunadb')

const q = faunadb.query
const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET
})

exports.handler = async (event, context) => {
    console.log('visitor');
    await client.query(q.Call('incrementCounter'))
    return {
        statusCode: 200,
        body: JSON.stringify({message: "Incremented visitor count"})
    };
}