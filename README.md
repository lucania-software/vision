# Vision

A toolbox for developing dynamic web pages fast.

Provides a set of "Reference" classes to manipulate UI based on state changes.

Example of creating a greeting display based on a value a user types into a name input:

*Please note that this relies on an input element with the ID "nameInput" and a text element with the ID "greetingDisplay" existing in your page's HTML.*

```javascript
const Vision = /** @type {import("@lucania/vision")} */ (window["Vision"]);

window.addEventListener("load", function () {
    // Retrieve your HTML elements
    const nameInput = document.getElementById("nameInput");
    const greetingDisplay = document.getElementById("greetingDisplay");

    // Create your references
    const name = new Vision.InputValueReference(nameInput);
    const greeting = new Vision.TextContentReference(greetingDisplay);

    // Indicate that our greeting should follow the value of our "name" with the specified transform function.
    greeting.follow(name, function (name) {
        return `Hello ${name}!`;
    });

    // Because our "greeting" is a "TextContentReference", it wraps the "textContent" property of the element the reference was created with (greetingDisplay).

    // Because our "name" is an "InputValueReference", it wraps the "value" property of its element (nameInput). When text is inputted "nameInput", this reference will reflect that.
});
```