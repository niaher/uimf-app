import * as axiosLib from "axios";
import * as umf from "core-framework";

const axios = axiosLib.default;

export class FileUploaderController extends umf.InputController<FileUploaderValue> {
	public selected: any[];
	public filesIds: any[] = [];
	public serializeValue(value: FileUploaderValue | string): string {
		return value != null ? JSON.stringify(value) : null;
	}

	public init(): Promise<FileUploaderController> {
		return new Promise((resolve, reject) => {
			// Don't do anything. File uploader doesn't allow initialization
			// from pre-existing value.
			resolve(this);
		});
	}

	public getValue(): Promise<FileUploaderValue> {
		const self = this;

		if (self.selected == null ||
			self.selected.length === 0) {
			return Promise.resolve(new FileUploaderValue());
		}

		const promises = [];
		const result = new FileUploaderValue();
		const files = self.selected;

		if (self.filesIds.length > 0) {
			for (const fileId of self.filesIds) {
				result.files.push(fileId);
			}
			self.filesIds = [];
			self.selected = null;
		} else {
			const p = new Promise((resolve, reject) => {

				const formData = new FormData();
				for (const f of files) {
					formData.append("file", f);
				}

				// Make http request to upload the files.
				axios.post("/file/upload", formData, {
					headers: {
						"Content-Type": "multipart/form-data"
					}
				}).then((response: axiosLib.AxiosResponse) => {
					if (response.data.fileIds != null && response.data.fileIds.length > 0) {
						for (const fileId of response.data.fileIds) {
							result.files.push(fileId);
							self.filesIds.push(fileId);
						}
					}
					resolve();
				}).catch((error: axiosLib.AxiosError) => {
					alert(error.response.data.error);
					reject(error);
				});
			});

			promises.push(p);
		}

		return Promise.all(promises).then((t) => {
			return result;
		});
	}
}

// tslint:disable-next-line:max-classes-per-file
class FileUploaderValue {
	public files: number[] = [];
}
