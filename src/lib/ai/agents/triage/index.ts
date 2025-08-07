import * as assistant from "@/lib/ai/agents/assistant";
import * as data from "@/lib/ai/agents/data";
import * as developer from "@/lib/ai/agents/developer";
import * as math from "@/lib/ai/agents/math";
import instructions from "@/lib/ai/agents/triage/instructions.md?raw";
import type { Dataset } from "@/lib/types";
import { Agent } from "@openai/agents";
import { promptWithHandoffInstructions } from "@openai/agents-core/extensions";

export const create = (dataset: Dataset) =>
	Agent.create({
		name: "Triage",
		instructions: promptWithHandoffInstructions(instructions),
		model: "gpt-5-nano",
		modelSettings: { toolChoice: "required" },
		handoffs: [
			assistant.create(),
			data.create(dataset),
			developer.create(),
			math.create(),
		],
	});
