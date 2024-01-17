import Koa from 'koa'
import Router from 'koa-router'
import { graphqlHTTP } from 'koa-graphql'
import { buildSchema } from 'graphql'

const app = new Koa()
const router = new Router()

const schema = buildSchema(`
type Query {
    hello: String
}
`)

const root = {
    hello: _ => "Hello GraphQL"
}

router.all('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
    rootValue: root
}));

app.use(router.routes())
app.use(router.allowedMethods())

app.use(async ctx => {
    ctx.body = 'Hello World'
})

const PORT = 3000
app.listen(PORT)