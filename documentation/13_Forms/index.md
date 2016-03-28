> New to DrupalGap Forms?

First, try [creating a custom form](/documentation/13_Forms/01_Creating_a_Custom_Form.md).

## Handling the Enter Key

Add this `onkeypress` attribute to a form element to have its form automatically submitted when the user presses the enter key on that element:

`onkeypress: "drupalgap_form_onkeypress('" + form.id + "')"`

Look at the `password` element on the `user_login_form()` for a [complete example](https://github.com/signalpoint/DrupalGap/blob/7.x-1.x/src/modules/user/user.forms.js).
