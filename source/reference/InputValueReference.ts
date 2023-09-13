import { Reference } from "./Reference";

export class InputValueReference extends Reference<string> {

    private _input: HTMLInputElement;

    public constructor(input: HTMLInputElement) {
        super(input.value);
        this._input = input;
        this._input.addEventListener("input", () => this.value = this._input.value);
    }

    public get value() {
        return super.value;
    }

    public set value(newValue) {
        super.value = newValue;
        this._input.value = newValue;
    }

}