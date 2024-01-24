import { GraphQLSchema } from 'graphql';

import { QueryType } from './QueryType';
import { MutationType } from './MutationType';

export const schema = new GraphQLSchema({
    mutation: MutationType,
    query: QueryType,
})
