import { describe, expect, test, beforeAll, beforeEach, afterAll } from '@jest/globals';

import { clearDatabase, connectDatabase, disconnectDatabase } from '../../../test/database'
import { runGraphql } from '../../../test/graphql';
import { IUser } from '../UserModel';

beforeAll(connectDatabase);
beforeEach(clearDatabase);
afterAll(disconnectDatabase);

const mutation = `
    mutation UserRegister($input: UserRegisterInput!) {
        UserRegister(input: $input) {
            error
            token
            user {
                id
                name
                email
            }
        }
    }
`;

const input = {
    email: 'violetit@mail.com',
    name: 'awesomeusername',
    password: 'awesomepassword',
};


type IUserRegisterResult = {
    user: IUser
    error: string
    token: string
}

describe('UserRegisterMutation', () => {
    test('should register a new user', async () => {
        const result = await runGraphql(mutation, input)
        const data = result.data?.UserRegister as IUserRegisterResult;

        expect(result.errors).toBeUndefined();
        expect(data.error).toBeNull();
        expect(data.token).toBeDefined();
        expect(data.user.name).toStrictEqual(input.name);
        expect(data.user.email).toStrictEqual(input.email);
    });

    test('should not register user with an already used email', async () => {
        const firstResult = await runGraphql(mutation, input)
        const firstData = firstResult.data?.UserRegister as IUserRegisterResult;

        expect(firstResult.errors).toBeUndefined();
        expect(firstData.error).toBeNull();
        expect(firstData.token).toBeDefined();
        expect(firstData.user.name).toStrictEqual(input.name);
        expect(firstData.user.email).toStrictEqual(input.email);

        const secondResult = await runGraphql(mutation, input)
        const secondData = secondResult.data?.UserRegister as IUserRegisterResult;

        expect(secondResult.errors).toBeUndefined();
        expect(secondData.token).toBeNull();
        expect(secondData.user).toBeNull();
        expect(secondData.error).toStrictEqual('Email already in use');
    });
});
