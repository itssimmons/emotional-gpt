// #!/usr/bin/env ts-node
import Fastify from "fastify";

import v1 from "@/Routes/v1/index.route";

const fastify = Fastify({
  logger: true,
});

fastify.register(v1, { prefix: "/v1" });

// Starting the server
(async () => {
  try {
    await fastify.listen({ port: 1234 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
})();
