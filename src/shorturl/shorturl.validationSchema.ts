import { TypeOf, object, string } from "zod";

export const createShortUrlSchema = object({
  body: object({
    url: string({
      required_error: "url is required.",
    }).url('url is not valid.'),
  }),
});

export type CreateShortUrlInput = TypeOf<typeof createShortUrlSchema>;
