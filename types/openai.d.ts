import type { ConfigurationParameters } from "openai";

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

interface OpenAIConfigurationParams extends Omit<ConfigurationParameters, 'apiKey' | 'organization'> {}

