export type ReferenceChangeListener<Value> = (newValue: Value, oldValue: Value) => void;
export type ReferenceTransformer<From, To> = (fromValue: From) => To;

export class Reference<Value> {

    public readonly originalValue: Value;
    protected _value: Value;
    protected _changeListeners: ReferenceChangeListener<Value>[];

    public constructor(value: Value) {
        this.originalValue = value;
        this._value = value;
        this._changeListeners = [];
    }

    public get value() {
        return this._value;
    }

    public set value(newValue: Value) {
        const oldValue = this._value;
        this._value = newValue;
        for (const changeListener of this._changeListeners) {
            changeListener(newValue, oldValue);
        }
    }

    public addChangeListener(changeListener: ReferenceChangeListener<Value>) {
        this._changeListeners.push(changeListener);
    }

    public removeListener(changeListener: ReferenceChangeListener<Value>) {
        const index = this._changeListeners.indexOf(changeListener);
        if (index !== -1) {
            this._changeListeners.splice(index, 1);
        }
    }

    public follow(reference: Reference<Value>, transform?: ReferenceTransformer<Value, Value>): void;
    public follow<LeaderValue>(reference: Reference<LeaderValue>, transform: ReferenceTransformer<LeaderValue, Value>): void;
    public follow(reference: Reference<any>, transform?: ReferenceTransformer<any, Value>): void {
        reference.addChangeListener((newValue) => this.value = transform === undefined ? newValue : transform(newValue));
        this.value = transform === undefined ? reference.value : transform(reference.value);
    }

}