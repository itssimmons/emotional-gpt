import type { FastifyReply, FastifyRequest } from "fastify";

export default (request: FastifyRequest, reply: FastifyReply) => {
  return { welcome: "home!" };
};
