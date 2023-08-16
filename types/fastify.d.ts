import type {
  FastifyBaseLogger,
  FastifyInstance,
  FastifyTypeProvider,
  RawServerDefault,
} from "fastify";
import type { IncomingMessage, ServerResponse } from "http";

type Instance = FastifyInstance<
  RawServerDefault,
  IncomingMessage,
  ServerResponse<IncomingMessage>,
  FastifyBaseLogger,
  FastifyTypeProvider
>;

type Next = (err?: Error | undefined) => void;
