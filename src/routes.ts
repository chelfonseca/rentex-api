import { Request, Response } from "express";
import CreateCourseService from "./CreateCourseService";

export function createCourse(request: Request, response: Response) {
    CreateCourseService.execute({
        name: 'NodeJs', 
        duration: 1777, 
        educator: 'Chel'
    });

    return response.send();
}