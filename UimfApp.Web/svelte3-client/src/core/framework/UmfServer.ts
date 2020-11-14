import * as axiosLib from "axios";
import * as server from "core/server";

const axios = axiosLib.default;

export class UmfServer {
	private readonly getMetadataUrl: string;
	private readonly postFormUrl: string;
	private eventHandlers: { [id: string]: IEventHandler[] } = {};

	/**
	 * Creates a new instance of UmfApp.
	 */
	constructor(getMetadataUrl: string, postFormUrl: string) {
		this.getMetadataUrl = getMetadataUrl;
		this.postFormUrl = postFormUrl;
	}

	public on(event: string, handler: IEventHandler): void {
		this.eventHandlers[event] = this.eventHandlers[event] || [];
		this.eventHandlers[event].push(handler);
	}

	private fire(event: string, params?: any): void {
		const handlersForEvent = this.eventHandlers[event];
		if (handlersForEvent != null && handlersForEvent.length > 0) {
			for (const handler of handlersForEvent) {
				handler(params);
			}
		}
	}

	public getMetadata(formId: string): Promise<server.FormMetadata> {
		this.fire("request:started");
		return axios.get(`${this.getMetadataUrl}/${formId}`).then((response: axiosLib.AxiosResponse) => {
			this.fire("request:completed");
			return response.data as server.FormMetadata;
		}).catch((e) => {
			// tslint:disable-next-line:no-console
			console.warn(`Did not find form "${formId}".`);
			this.fire("request:completed");
			return null;
		});
	}

	public getAllMetadata(): Promise<{ forms: server.FormMetadata[], menu: any }> {
		this.fire("request:started");
		return axios.get(this.getMetadataUrl).then((response: axiosLib.AxiosResponse) => {
			this.fire("request:completed");
			return response.data;
		});
	}

	public postForm(form: string, data: any): Promise<any> {
		this.fire("request:started");
		return axios.post(this.postFormUrl, JSON.stringify([{
			Form: form,
			RequestId: 1,
			InputFieldValues: data
		}]), {
			headers: {
				"Content-Type": "application/json"
			}
		}).then((response: axiosLib.AxiosResponse) => {
			const invokeFormResponses = response.data as InvokeFormResponse[];

			// Make sure metadata is never null.
			invokeFormResponses[0].data.metadata = invokeFormResponses[0].data.metadata || new server.FormResponseMetadata();
			this.fire("request:completed");
			return invokeFormResponses[0].data;
		}).catch((error: axiosLib.AxiosError) => {
			this.fire("request:completed", error.response.data.error);
			return null;
		});
	}
}

interface InvokeFormResponse {
	data: server.FormResponse;
	requestId: string;
}

type IEventHandler = (params?: any) => any;
