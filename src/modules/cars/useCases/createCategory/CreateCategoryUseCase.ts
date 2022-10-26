<<<<<<< HEAD:src/services/CreateCategoryService.ts
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";
=======
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";
>>>>>>> temp-branch:src/modules/cars/useCases/createCategory/CreateCategoryUseCase.ts

interface IRequest {
  name: string;
  description: string;
}

<<<<<<< HEAD:src/services/CreateCategoryService.ts
class CreateCategoryService {
=======
class CreateCategoryUseCase {
>>>>>>> temp-branch:src/modules/cars/useCases/createCategory/CreateCategoryUseCase.ts
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ description, name }: IRequest) {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category Already exists!");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
