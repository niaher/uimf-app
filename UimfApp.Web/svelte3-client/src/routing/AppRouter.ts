import type * as umf from "core/framework";
import * as abstractStateRouter from "abstract-state-router";
import * as svelteStateRenderer from "svelte-state-renderer";

import Home from "../ui/components/Home.svelte";
import Form from "../ui/Form.svelte";

import { RouteParameterBuilder } from "./RouteParameterBuild";

type ResolveCallback = (error: boolean, content: any) => string;

export class AppRouter implements umf.IAppRouter {
	private readonly stateRenderer: any;
	private readonly stateRouter: any;
	private readonly element: HTMLElement;
	private readonly rpb: RouteParameterBuilder;

	constructor(element: HTMLElement, app: umf.UmfApp) {
		this.element = element;
		this.stateRenderer = (svelteStateRenderer as any).default({});
		this.stateRouter = (abstractStateRouter as any).default(this.stateRenderer, this.element);
		const rpb = this.rpb = new RouteParameterBuilder("_", app);

		this.stateRouter.addState({
			name: "home",
			route: "/home",
			template: Home,
			resolve(data: any, parameters: any, cb: ResolveCallback): void {
				cb(false, { app: app });
			}
		});

		const self = this;

		this.stateRouter.addState({
			name: "form",
			data: {},
			route: "/form/:_id",
			template: Form,

			// Force route reload when value of _d parameter changes. This is
			// needed because by default the router will not reload route even if
			// any of the parameters change, unless they are specified in "querystringParameters".
			// This means that if we are trying to reload same form, but with different parameters,
			// nothing will happen, unless _d changes too.
			querystringParameters: [rpb.parameterName],
			defaultParameters: rpb.defaultParameters,

			activate(context: any): void {
				rpb.currentForm = context.parameters._id;
				context.on("destroy", () => rpb.currentForm = null);
				self.fire("router:activated", null);
			},
			resolve(data: any, parameters: any, cb: ResolveCallback): void {
				const formInstance = app.getFormInstance(parameters._id, true);
				formInstance.initializeInputFields(parameters).then(() => {
					cb(false, {
						form: formInstance,
						app
					});
				});
			}
		});

		this.stateRouter.evaluateCurrentRoute("home");
	}

	public fire(eventName: string, params: any): void {
		const event = new Event(eventName, params);
		this.element.dispatchEvent(event);
	}

	public on(eventName: string, fn: () => void): void {
		this.element.addEventListener(eventName, function (): void {
			fn();
		});
	}

	public go(form: string, values: any): void {
		this.stateRouter.go("form", this.rpb.buildFormRouteParameters(form, values));
	}

	public makeUrl(form: string, values: any): string {
		return this.stateRouter.makePath("form", this.rpb.buildFormRouteParameters(form, values));
	}
}
