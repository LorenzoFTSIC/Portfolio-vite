export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: string;
  image: string;
  demoUrl: string | null;
  githubUrl: string;
  featured: boolean;
  year: number;
  status: string;
}