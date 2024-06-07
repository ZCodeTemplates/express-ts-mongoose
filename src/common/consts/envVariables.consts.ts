import { z } from 'zod';
import { config as configDotenv } from 'dotenv';
configDotenv();

const envSchema = z.object({
    PORT: z.number().or(z.undefined()),
    MONGO_URI: z.string()
});

const envVariables = {
    PORT: process.env.PORT ? parseInt(process.env.PORT, 10) : undefined,
    MONGO_URI: process.env.MONGO_URI || ''
};

const validatedEnv = envSchema.parse(envVariables);

export { envVariables };
