## `/form` lifecycle

* Resolve
  * Create `FormInstance`
  * Initialize `FormInstance` input fields from URL parameters
* Create Svelte component (`Form`)
* Initialize Svelte component (`Form`)
  * If `postOnLoad == true` and all required inputs have values, post the form
  * Select response handler and handle the response

## Default response handler (`FormComponentResponseHandler`)

`FormComponentResponseHandler` is the default response handler. It will

1. set `FormInstance` output fields
2. render output fields

## `FormInstance`

`FormInstance` provides API to communicate with the server-side form.

### Events

* `form:posting` - just before form is posted to the server (fired by `FormInstance`). Uses `FormEventArgs` for event arguments.
* `form:responseReceived` - fired when response from the server is received, but hasn't been processed yet (fired by `FormInstance`). Uses `FormEventArgs` for event arguments.
* `form:responseHandled` - fired after response from the server has been handled (fired by `FormInstance`). Uses `FormEventArgs` for event arguments.

## Form.html

Form is a UI control which can render a form in a browser. `Form` uses `FormInstance` to facilitate communication with the server and to ensure *form lifecycle*. 

### `parent`
Components are assembled into a hierarchy. `Form` components can be nested using `InlineForm` output field. The nested form can access its parent form via `Form.parent`.

### Custom events with `fireAndBubbleUp`
Each input or output field can publish events up to its `Form` component and to all parent forms using `Form.fireAndBubbleUp`.

### Built-in events

Form has several built in-events:

* `form:loaded` - fired as soon as the form has been rendered and initialized (before the initial `post-on-load`).
arguments.
* `form:responseHandled` - fired after response from the server has been handled.

## Input.html

Each input component gets initialized with the these properties:

* `field` - `InputFieldValue` instance
* `tabindex` - auto-calculated tabindex
* `id` - auto-generated unique identifier
* `app` - `UmfApp` instance
* `form` - parent `Form.html`

## Output.html

Each input component gets initialized with the these properties:

* `field` - `InputFieldValue` instance
* `app` - `UmfApp` instance
* `form` - `FormInstance` object
* `parent` - instance of `Form.html` component inside which the output is rendered
