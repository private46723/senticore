'use server';
/**
 * @fileOverview A cybersecurity threat analysis AI agent for Redwall Cyber Defense.
 *
 * - analyzeThreat - A function that handles the threat analysis process.
 * - AnalyzeThreatInput - The input type for the analyzeThreat function.
 * - AnalyzeThreatOutput - The return type for the analyzeThreat function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AnalyzeThreatInputSchema = z.object({
  query: z.string().describe('The security related query or log snippet to analyze.'),
});
export type AnalyzeThreatInput = z.infer<typeof AnalyzeThreatInputSchema>;

const AnalyzeThreatOutputSchema = z.object({
  analysis: z.string().describe('The detailed AI analysis of the threat or query.'),
  severity: z.enum(['low', 'medium', 'high', 'critical']).describe('The calculated severity level.'),
  recommendations: z.array(z.string()).describe('List of actionable security recommendations.'),
});
export type AnalyzeThreatOutput = z.infer<typeof AnalyzeThreatOutputSchema>;

export async function analyzeThreat(input: AnalyzeThreatInput): Promise<AnalyzeThreatOutput> {
  return analyzeThreatFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeThreatPrompt',
  input: { schema: AnalyzeThreatInputSchema },
  output: { schema: AnalyzeThreatOutputSchema },
  prompt: `You are an elite cybersecurity analyst at Redwall Cyber Defense, specializing in Precision AI® threat hunting.
  
  Analyze the following security query or log snippet:
  
  Query: {{{query}}}
  
  Provide a professional, technical analysis including the threat nature, its potential impact on enterprise infrastructure, and a set of specific, actionable remediation steps. Your tone should be authoritative, global, and highly professional.`,
});

const analyzeThreatFlow = ai.defineFlow(
  {
    name: 'analyzeThreatFlow',
    inputSchema: AnalyzeThreatInputSchema,
    outputSchema: AnalyzeThreatOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) throw new Error('Redwall AI failed to generate analysis');
    return output;
  }
);