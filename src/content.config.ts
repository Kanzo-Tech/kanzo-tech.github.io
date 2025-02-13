import { defineCollection } from "astro:content";
import { file } from "astro/loaders";

import { menuSchema, sectionsSchema, solutionsSchema, advantagesSchema, aboutSchema, collaborationsSchema } from "./schemas";

const menu = defineCollection({
    loader: file("src/data/menu.json"),
    schema: menuSchema,
});

const sections = defineCollection({
    loader: file("src/data/sections.json"),
    schema: sectionsSchema,
});

const solutions = defineCollection({
    loader: file("src/data/solutions.json"),
    schema: solutionsSchema,
});

const advantages = defineCollection({
    loader: file("src/data/advantages.json"),
    schema: advantagesSchema,
});

const collaborations = defineCollection({
    loader: file("src/data/collaborations.json"),
    schema: collaborationsSchema,
})

const about = defineCollection({
    loader: file("src/data/about.json"),
    schema: aboutSchema,
})

export const collections = {
    menu,
    sections,
    solutions,
    advantages,
    collaborations,
    about
};