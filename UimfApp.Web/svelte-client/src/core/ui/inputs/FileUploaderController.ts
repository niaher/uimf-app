import * as umf from "core-framework";
import * as axiosLib from "axios";

var axios = axiosLib.default;

export class FileUploaderController extends umf.InputController<FileUploaderValue> {
	selected: any[];

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

		for (let f of self.selected) {
			if (f.fileId != null) {
				result.files.push(f.fileId);
				continue;
			}

			let p = new Promise((resolve, reject) => {
				var formData = new FormData();
				formData.append("file", f);

				// Make http request to upload the files.
				axios.post("/file/upload", formData, <axiosLib.AxiosRequestConfig>{
					headers: {
						"Content-Type": "multipart/form-data"
					}
				}).then((response: axiosLib.AxiosResponse) => {
					f.fileId = response.data.fileId;
					result.files.push(response.data.fileId);
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

	private parse(value: string | FileUploaderValue): FileUploaderValue {
		var parsed = typeof (value) === "string"
			? JSON.parse(value)
			: value;

		if (parsed == null || parsed.files == null || parsed.files.length < 1) {
			return null;
		}

		return parsed;
	}
}

class FileUploaderValue {
	files: number[] = [];
}