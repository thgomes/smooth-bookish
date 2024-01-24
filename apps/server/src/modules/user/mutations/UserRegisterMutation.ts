import { GraphQLNonNull, GraphQLString } from "graphql";
import { mutationWithClientMutationId } from "graphql-relay";

import { UserModel } from '../UserModel'
import { userField, tokenField } from "../UserFields";
import { errorField } from "../../error/errorFields"

export type UserRegisterInput = {
    name: string,
    email: string,
    password: string,
}

const mutation = mutationWithClientMutationId({
    name: 'UserRegister',
    inputFields: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) }
    },
    mutateAndGetPayload: async ({ name, email, password }) => {
        const userExists = await UserModel.findOne({ email })

        if (userExists) {
            return {
                error: 'Email already in use'
            }
        }

        const user = await new UserModel({
            name,
            email,
            password,
        }).save()

        const token = 'token-example'

        return {
            token,
            id: user._id.toString(),
        }
    },
    outputFields: {
        ...tokenField('token'),
        ...userField('user'),
        ...errorField('error'),
    }
})

export const UserRegisterMutation = {
    ...mutation
}