import { FormMetadata, FormResponse, FormResponseMetadata } from "uimf-core";
import { FormInstance } from "./FormInstance";
import * as axiosLib from "axios";

var axios = axiosLib.default;

export class UmfServer {
    private readonly getMetadataUrl: string;
    private readonly postFormUrl: string;
    private loading: boolean = false;
    private eventHandlers: { [id: string]: Array<IEventHandler> } = {};

	/**
	 * Creates a new instance of UmfApp.
	 */
    constructor(getMetadataUrl: string, postFormUrl: string) {
        this.getMetadataUrl = getMetadataUrl;
        this.postFormUrl = postFormUrl;
    }

    on(event: string, handler: IEventHandler) {
        this.eventHandlers[event] = this.eventHandlers[event] || [];
        this.eventHandlers[event].push(handler);
    }

    private fire(event: string, params?: any) {
        var handlersForEvent = this.eventHandlers[event];
        if (handlersForEvent != null && handlersForEvent.length > 0) {
            for (let handler of handlersForEvent) {
                handler(params);
            }
        }
    }

    getMetadata(formId: string): Promise<FormMetadata> {
        this.fire("request:started");
        return axios.get(`${this.getMetadataUrl}/${formId}`).then((response: axiosLib.AxiosResponse) => {
            this.fire("request:completed");
            return <FormMetadata>response.data;
        }).catch(e => {
            console.warn(`Did not find form "${formId}".`)
            this.fire("request:completed");
            return null;
        });
    }

    getAllMetadata(): Promise<{ forms: FormMetadata[], menus: any[] }> {
        this.fire("request:started");
        return axios.get(this.getMetadataUrl).then((response: axiosLib.AxiosResponse) => {
            this.fire("request:completed");
            return response.data;
        });
    }

    postForm(form: string, data: any): Promise<FormResponse> {
        this.fire("request:started");
        return axios.post(this.postFormUrl, JSON.stringify([{
            Form: form,
            RequestId: 1,
            InputFieldValues: data
        }]), <axiosLib.AxiosRequestConfig>{
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response: axiosLib.AxiosResponse) => {
            var invokeFormResponses = <InvokeFormResponse[]>response.data;

            // Make sure metadata is never null.
            invokeFormResponses[0].data.metadata = invokeFormResponses[0].data.metadata || new FormResponseMetadata();
            this.fire("request:completed");
            return invokeFormResponses[0].data;
        }).catch((error: axiosLib.AxiosError) => {
            alert(error.response.data.error);
            this.fire("request:completed");
            return null;
        });
    }
}

class InvokeFormResponse {
    public data: FormResponse;
    public requestId: string;
}

interface IEventHandler {
    (params?: any): any;
}