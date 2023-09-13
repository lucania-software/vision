import { Reference } from "./Reference";

export class TextContentReference extends Reference<string | null> {

    private _element: HTMLElement;

    public constructor(element: HTMLElement) {
        super(element.textContent);
        this._element = element;
    }

    public get value() {
        return super.value;
    }

    public set value(newValue) {
        super.value = newValue;
        this._element.textContent = newValue;
    }

}