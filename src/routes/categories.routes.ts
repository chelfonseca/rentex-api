import { Router } from "express";
import multer from "multer";

<<<<<<< HEAD
import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { PostgresCategoryRepository } from "../repositories/PostgresCategoriesRepository";
import { CreateCategoryService } from "../services/CreateCategoryService";
=======
import { createCategoryController } from "../modules/cars/useCases/createCategory";
import { importCategoryController } from "../modules/cars/useCases/importCategory";
import { listCategoriesController } from "../modules/cars/useCases/listCategories.ts";
>>>>>>> temp-branch

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp",
});

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
});

export { categoriesRoutes };
