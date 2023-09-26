import { Reference } from "./Reference";

export class ElementFocusReference extends Reference<boolean> {

    private _input: HTMLInputElement;

    public constructor(input: HTMLInputElement) {
        super(document.activeElement === input);
        this._input = input;
        this._input.addEventListener("focus", () => this.value = true);
        this._input.addEventListener("blur", () => this.value = false);
    }

    public get value() {
        return super.value;
    }

    public set value(newValue) {
        if (newValue) {
            this._input.focus();
        } else {
            this._input.blur();
        }
        super.value = document.activeElement === this._input;
    }

}