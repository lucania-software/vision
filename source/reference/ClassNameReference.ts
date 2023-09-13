import { Reference } from "./Reference";

export class ClassNameReference extends Reference<string> {

    private _element: HTMLElement;

    public constructor(element: HTMLElement) {
        super(element.className);
        this._element = element;
    }

    public get value() {
        return super.value;
    }

    public set value(newValue) {
        super.value = newValue;
        this._element.className = newValue;
        console.log("Set class name", newValue);
    }

}