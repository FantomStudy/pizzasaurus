export const STEPS = ["phone", "code"] as const;
export type Step = (typeof STEPS)[number];
