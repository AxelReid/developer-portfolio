export enum SkillLevel {
  Basic = "Basic",
  Intermediate = "Intermediate",
  Advanced = "Advanced",
}
export interface SkillType {
  name: string;
  level: SkillLevel;
  icon: JSX.Element;
}

export interface UploadResponse {
  data?: {
    message: string;
    imageId: string | undefined;
  } | null;
  error?: string | null;
}
