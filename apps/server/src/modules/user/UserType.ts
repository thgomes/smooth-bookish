import { GraphQLObjectType, GraphQLString, GraphQLNonNull } from 'graphql'
import { globalIdField, connectionDefinitions } from 'graphql-relay'

import { nodeInterface, registerTypeLoader } from '../node/typeRegister'
import { UserLoader } from './UserLoader'
import { IUser } from './UserModel'

const UserType = new GraphQLObjectType<IUser>({
    name: 'User',
    description: 'Represents a user',
    fields: () => ({
        id: globalIdField('User'),
        name: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: user => user.name,
        },
        email: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: user => user.email,
        },
        createdAt: {
            type: GraphQLString,
            resolve: (user) => user.createdAt.toISOString(),
        },
        updatedAt: {
            type: GraphQLString,
            resolve: (user) => user.updatedAt.toISOString(),
        },
    }),
    interfaces: () => [nodeInterface],
})

const UserConnection = connectionDefinitions({
    name: 'User',
    nodeType: UserType,
})

registerTypeLoader(UserType, UserLoader.load)

export { UserType, UserConnection }