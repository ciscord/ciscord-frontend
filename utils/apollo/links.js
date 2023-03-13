// import { ApolloLink, split, Observable } from 'apollo-link';
import { split, HttpLink, ApolloLink, Observable } from '@apollo/client';
import { onError } from "@apollo/client/link/error";
import { createUploadLink }from 'apollo-upload-client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import fetch from 'isomorphic-unfetch';
import Cookies from 'js-cookie';
import { getMainDefinition } from '@apollo/client/utilities';
import { COMPANY_NAME } from 'utils/config';

const uri = `http://localhost:4000/graphql`;
const wsUri = `ws://localhost:4000/graphql`;
console.log(uri, 'uri');
console.log(wsUri, 'wsUri');
export const httpLink = new HttpLink({
  uri,
});

export const wsLink = process.browser
  ? new GraphQLWsLink(createClient({
    url: wsUri,
  }))
  : () => console.log('SSR');

export const request = async operation => {
  const token = await Cookies.get('token');
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : '',
      "x-hasura-admin-secret": "9R5zjnzbmUlI6DgZaAmUQzwJPdVpiCj3ik96xQsYm9wWENmfej7uPCs4KyOTZTbw",
      'ciscord-tenant': COMPANY_NAME(),
    },
  });
};

export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`)
    );
  }
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

export const requestLink = new ApolloLink(
  (operation, forward) =>
    new Observable(observer => {
      let handle;
      Promise.resolve(operation)
        .then(oper => request(oper))
        .then(() => {
          handle = forward(operation).subscribe({
            next: observer.next.bind(observer),
            error: observer.error.bind(observer),
            complete: observer.complete.bind(observer),
          });
        })
        .catch(observer.error.bind(observer));

      return () => {
        if (handle) handle.unsubscribe();
      };
    })
);

const uploadLink = createUploadLink({ uri });

export const link = process.browser
  ? split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    httpLink,
    uploadLink,
  )
  : uploadLink;
