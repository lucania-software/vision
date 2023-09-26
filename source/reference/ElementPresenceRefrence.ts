import { Reference } from "./Reference";

export class ElementPresenceReference extends Reference<boolean> {

    private _element: HTMLElement;
    private _placeholder: Range;
    private _fragment: DocumentFragment;

    public constructor(element: HTMLElement) {
        super(document === element.getRootNode());
        this._element = element;
        this._placeholder = document.createRange();
        this._fragment = document.createDocumentFragment();

        if (this.value) {
            this._placeholder.surroundContents(element);
        }
    }

    public get value() {
        return super.value;
    }

    public set value(newValue) {
        super.value = newValue;
        if (newValue) {
            this._placeholder.insertNode(this._fragment);
        } else {
            this._fragment = this._placeholder.extractContents();
        }
    }

}