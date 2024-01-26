import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'
import { graphqlHTTP } from 'koa-graphql'
import Router from 'koa-router'
import logger from 'koa-logger'

import { schema } from '../schema/schema'
import { getContext } from './getContext'

const app = new Koa()

app.use(cors({ origin: '*' }))
app.use(logger())
app.use(
  bodyParser({
    onerror(err, ctx) {
      ctx.throw(err, 422)
    },
  }),
)

const routes = new Router()

routes.all(
  '/graphql',
  graphqlHTTP(() => ({
    schema,
    graphiql: true,
    context: getContext(),
  })),
)

app.use(routes.routes())
app.use(routes.allowedMethods())

export { app }
