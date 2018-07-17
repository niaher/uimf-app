import * as umf from "core-framework";
import * as axiosLib from "axios";

var axios = axiosLib.default;

export class FileUploaderController extends umf.InputController<FileUploaderValue> {
	selected: any[];
	filesIds: any[] = [];
	serializeValue(value: FileUploaderValue | string): string {
		return value != null ? JSON.stringify(value) : null;
	}

	init(): Promise<FileUploaderController> {
		return new Promise((resolve, reject) => {
			// Don't do anything. File uploader doesn't allow initialization
			// from pre-existing value.
			resolve(this);
		});
	}

	getValue(): Promise<FileUploaderValue> {
		var self = this;

		if (self.selected == null ||
			self.selected.length === 0) {
			return Promise.resolve(new FileUploaderValue());
		}

		var promises = [];
		var result = new FileUploaderValue();
		var files = self.selected;

		if (self.filesIds.length > 0) {
			for (let fileId of self.filesIds) {
				result.files.push(fileId);
			}
			self.filesIds = [];
			self.selected = null;
		} else {
			let p = new Promise((resolve, reject) => {

				var formData = new FormData();
				for (let f of files) {
					formData.append("file", f);
				}

				// Make http request to upload the files.
				axios.post("/file/upload", formData, <axiosLib.AxiosRequestConfig>{
					headers: {
						"Content-Type": "multipart/form-data"
					}
				}).then((response: axiosLib.AxiosResponse) => {
					if (response.data.fileIds != null && response.data.fileIds.length > 0) {
						for (let fileId of response.data.fileIds) {
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

		return Promise.all(promises).then(t => {
			return result;
		});
	}
}

class FileUploaderValue {
	files: number[] = [];
}