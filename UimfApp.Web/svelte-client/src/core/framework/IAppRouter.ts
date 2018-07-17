import { UmfApp } from "./UmfApp";

export interface IAppRouter {
	go: (form: string, values: any) => void;
	makeUrl: (form: string, values: any) => string;
}
