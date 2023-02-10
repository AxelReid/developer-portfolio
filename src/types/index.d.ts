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
