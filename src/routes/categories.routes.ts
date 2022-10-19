import { Router } from "express";
import { v4 as uuidV4 } from "uuid";

const categoriesRoutes = Router();

interface ICategory {
  name: string;
  description: string;
}

const categories: ICategory[] = [];

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const category = {
    name,
    description,
    id: uuidV4(),
  };

  categories.push(category);

  return response.status(201).json(categories);
});

export { categoriesRoutes };