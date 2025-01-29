import { createYoga, createSchema } from 'graphql-yoga';
import { createServer } from 'node:http';
import { typeDefs } from './schema/typeDefs.generated';
import { resolvers } from './schema/resolvers.generated';
import { createContext } from './context';

function main() {
  const yoga = createYoga({
    schema: createSchema({ typeDefs, resolvers }),
    context: createContext,
  });
  const server = createServer(yoga);
  server.listen(4000, () => {
    console.info('Server is running on http://localhost:4000/graphql');
  });
}

main();
