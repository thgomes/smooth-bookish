import { GraphQLString } from 'graphql'

import { UserType } from './UserType'
import { UserLoader } from './UserLoader'

export const userField = (key: string) => ({
  [key]: {
    type: UserType,
    resolve: async (obj: Record<string, unknown>, _, context) =>
      UserLoader.load(context, obj.id as string),
  },
})

export const tokenField = (key: string) => ({
  [key]: {
    type: GraphQLString,
    resolve: async (obj: Record<string, unknown>) => obj.token as string,
  },
})
