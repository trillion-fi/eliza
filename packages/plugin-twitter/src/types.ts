import { z } from "zod";

export interface TweetContent {
    text: string;
    quoteID?: string;
    link?: string;
}

export const TweetSchema = z.object({
    text: z.string().describe("The text of the tweet"),
    quoteID: z.string().optional().describe("The ID of the tweet being quoted"),
    link: z
        .string()
        .url()
        .optional()
        .describe("A link to include in the tweet"),
});

export const isTweetContent = (obj: any): obj is TweetContent => {
    return TweetSchema.safeParse(obj).success;
};
