import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(20).max(500),
  category: z.string().min(3).max(20),
  link: z.string().url().refine((url) => {
    // Check if the URL string is not empty and has a valid URL structure
    return /\.(jpg|jpeg|png|gif|bmp|webp|svg)$/i.test(url);
  }, {
    message: "The provided link must be a valid image URL.",
  }),
  
  pitch: z.string().min(10),
});