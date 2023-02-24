export enum SkillLevel {
  Basic = "Basic",
  Intermediate = "Intermediate",
  Advanced = "Advanced",
}
export interface SkillType {
  name: string;
  level: SkillLevel;
  icon: JSX.Element;
  category: string;
  stacks: Stacks[];
}

export enum Stacks {
  Hyperbeast = "Hyperbeast Stack",
  T3 = "T3 Stack",
  MERN = "MERN Stack",
}
export interface UploadResponse {
  data?: {
    message: string;
    files: string[];
  } | null;
  error?: string | null;
}
