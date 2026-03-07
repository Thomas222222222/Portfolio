import fs from "fs";
import path from "path";

export interface Project {
    id: string;
    title: string;
    description: string;
    content?: string;
    techStack: string[];
    link: string;
    github: string;
}

export function getAllProjects(): Project[] {
    const projectsDir = path.join(process.cwd(), "app/data/projects");
    if (!fs.existsSync(projectsDir)) {
        return [];
    }
    const fileNames = fs.readdirSync(projectsDir);
    return fileNames
        .filter((fileName) => fileName.endsWith(".json"))
        .map((fileName) => {
            const filePath = path.join(projectsDir, fileName);
            const fileContent = fs.readFileSync(filePath, "utf-8");
            return JSON.parse(fileContent) as Project;
        });
}

export function getProjectById(id: string): Project | undefined {
    const projects = getAllProjects();
    return projects.find((project) => project.id === id);
}
