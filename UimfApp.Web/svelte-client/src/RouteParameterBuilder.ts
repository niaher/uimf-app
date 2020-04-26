import * as umf from "./core/framework";

export class RouteParameterBuilder {
	public readonly parameterName: string;
	public currentForm: string;
	public getFormInstance: (formId: string, throwError: boolean) => umf.FormInstance;
	public defaultParameters: any = {};

	constructor(parameterName: string, app: umf.UmfApp) {
		this.getFormInstance = (formId: string, throwError: boolean) => app.getFormInstance(formId, null);
		this.parameterName = parameterName;
		this.defaultParameters[parameterName] = "";
	}

	public buildFormRouteParameters(form: string, values: any): any {
		const formInstance = this.getFormInstance(form, true);
		const base = formInstance.getSerializedInputValuesFromObject(values);

		if (form === this.currentForm) {
			const d = RouteParameterBuilder.parseQueryStringParameters(location.hash)[this.parameterName] || 0;
			const dAsNumber = parseInt(d, 10);
			base[this.parameterName] = isNaN(dAsNumber) ? 0 : dAsNumber + 1;
		}

		return {...base,  _id: form};
	}

	public static parseQueryStringParameters(url: string): any {
		const queryStartsAt = url.indexOf("?");

		const result = {};

		// If there is a query string.
		if (queryStartsAt !== -1 && url.length > queryStartsAt) {
			url.substr(queryStartsAt + 1).split("&").filter((t) => {
				const value = t.split("=");
				result[value[0]] = value[1];
			});
		}

		return result;
	}
}
