export class OutputControlConfiguration {
	public alwaysHideLabel: boolean = false;
	public block: boolean = true;

	constructor(alwaysHideLabel: boolean = false, block: boolean = true) {
		this.alwaysHideLabel = alwaysHideLabel;
		this.block = block;
	}
}
