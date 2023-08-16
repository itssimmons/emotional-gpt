import openaiController from "@/Http/Controllers/openai.controller";
import welcomeController from "@/Http/Controllers/welcome.controller";
import type { Instance, Next } from "@/types/fastify";

export default (fastify: Instance, opts: any, done: Next) => {
  fastify.get("/hi", welcomeController);
  fastify.put("/emotional", openaiController);

  done();
};
