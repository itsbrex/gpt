import { generateId } from "@/lib/generate-id";
import * as svg from "@/ui/svg";
import clsx from "clsx";
import type { JSX } from "ovr";

type TriggerProps = JSX.IntrinsicElements["button"];
type PopoverProps = JSX.IntrinsicElements["div"] & { trigger: TriggerProps };

export const Popover = (props: PopoverProps) => {
	const { title, children, trigger, ...rest } = props;
	const { children: triggerChildren, ...triggerRest } = trigger;

	const id = rest.id ?? `popover-${generateId()}`;

	return (
		<>
			<Trigger id={id} aria-label={title} {...triggerRest}>
				{triggerChildren}
			</Trigger>

			<div
				id={id}
				{...rest}
				popover
				class="bg-background/75 border-secondary/80 backdrop:bg-muted/60 mx-5 my-auto max-h-[90dvh] overflow-y-auto rounded-md border p-7 opacity-0 shadow-2xl transition-[display,opacity] transition-discrete backdrop:opacity-0 backdrop:backdrop-blur-lg backdrop:transition-[display,opacity] backdrop:transition-discrete open:opacity-100 open:backdrop:opacity-100 motion-reduce:duration-0 sm:mx-auto sm:max-w-[60ch] starting:open:opacity-0 starting:open:backdrop:opacity-0"
			>
				<div class="flex items-center justify-between">
					<div class="cursor-default text-xl font-semibold">{title}</div>
					<Trigger id={id}>
						<svg.X />
					</Trigger>
				</div>

				<div class="pt-6">{children}</div>
			</div>
		</>
	);
};

const Trigger = (props: TriggerProps) => {
	const { id, class: className, children, ...rest } = props;

	return (
		<button
			popovertarget={id}
			type="button"
			class={clsx(!className && "icon ghost", className)}
			{...rest}
		>
			{children}
		</button>
	);
};
