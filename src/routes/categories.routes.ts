import { Router } from "express";

const categoriesRoutes = Router();

interface Icategorie {
  name: string;
  description: string;
}

const categories: Icategorie[] = [];

categoriesRoutes.post("/categories", (request, response) => {
  const { name, description } = request.body;

  categories.push({
    name,
    description,
  });

  return response.status(201).json(categories);
});

export { categoriesRoutes };
