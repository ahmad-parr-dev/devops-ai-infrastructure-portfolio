export interface BaseAgent {
  id: string;
  execute(input: unknown): Promise<unknown>;
}
