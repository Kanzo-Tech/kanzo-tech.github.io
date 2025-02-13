import { z } from "astro:content";

export const menuSchema = z.object({
  id: z.string(),
  href: z.string(),
});

export const sectionsSchema = z.object({
  id: z.string(),
  title: z.string(),
  subtitle: z.string().optional(),
});

export const solutionsSchema = ({image}) => z.object({
  id: z.string(),
  text: z.string(),
  image: image(),
});

export const advantagesSchema = ({image}) => z.object({
  id: z.string(),
  title: z.string(),
  text: z.string(),
  image: image(),
});

export const collaborationsSchema = ({image}) => z.object({
  id: z.string(),
  image: image(),
});

export const aboutSchema = ({image}) => z.object({
  id: z.string(),
  title: z.string(),
  subtitle: z.string(),
  features: z.array(featuresSchema),
  image: image(),
});

const featuresSchema = z.object({
  id: z.string(),
  text: z.string(),
});