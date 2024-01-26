import { graphql } from 'graphql'

import { schema } from '../schema/schema'
import { getContext } from '../server/getContext'

async function runGraphql(source, input) {
  const rootValue = {}
  const contextValue = getContext()
  const variableValues = { input }

  const result = await graphql({
    schema,
    rootValue,
    contextValue,
    source,
    variableValues,
  })

  return { errors: result.errors, data: result.data }
}

export { runGraphql }
