import openai from "@/Hooks/useOpenAI";
import type { FastifyReply, FastifyRequest } from "fastify";

export default async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const body = request.body as any;

    if (!body.text) {
      reply.code(400);

      return {
        success: false,
        error: `"text" is a required field`,
      };
    }

    const givenText = (request.body as any).text;

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Tell me if the given text has a mood of "Happy" or "Discontent".
        --
        Given text: Que buena atencion, todos fueron muy agradables los recomendaré a todos mis amigos ahora mismo!
        Detected mood: Happy
        --
        Given text: La atención es pesima tardan mucho, dejan mucho que desear, no volvere nunca a comprar aca.
        Detected mood: Discontent
        --
        Given text: A pesar de los malentendido supieron como ayudarme y lo agradezco mucho mis dieces.
        Detected mood: Happy
        --
        Given text: Encima de ellos empezar la discusion no me dieron ningin tipo de soporte por el mal causado, sinceramente decepcionante.
        Detected mood: Discontent
        --
        Given text: The food was excellent, and such a very good service.
        Detected mood: Happy
        --
        Given text: What a bad place and what a bad food. Some things were raw and others were overcooked.
        Detected mood: Discontent
        --
        Given text: Very entertaining, the game almost didn't get bored, it's very enjoyable.
        Detected mood: Happy
        --
        Given text: Don't download this game, it's very boring, I just uninstalled it.
        Detected mood: Discontent
        --
        Given text: ${givenText}
        `,
      max_tokens: 20,
      temperature: 0.7,
    });

    return {
      success: true,
      ...response.data,
    };
  } catch (e: any) {
    delete e.config.headers.Authorization;

    return {
      success: false,
      error: e,
    };
  }
};
