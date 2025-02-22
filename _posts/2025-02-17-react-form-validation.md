---
layout: post
title: "You don't need a validation library: how to build accessible React forms"
category: code
description: "An approach to React form validation built on the Constraint Validation API"
syntax: true
---

<style>
  iframe {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  @media(min-width: 768px) {
    iframe {
      width: 70vw;
      margin-left: calc((-70vw + 100%) / 2);
      margin-right: calc((-70vw + 100%) / 2);
    }
  }
</style>

Sooner than later, there comes a moment in every web developer's coming-of-age quest where they must create a form. And where there are forms, there is validation. And where there is validation... there is peril.

In my wanderings through React projects, I've seen two particularly common approaches to validation:

## Perilous approach #1: Manual validation

Write the rules by hand for each form, check the values somewhere (in the change handler? In the component body? On submit? Or, most unfortunately, in a `useEffect`?)... and then show the validation messages or let the form submit.

As a contrived and basic example, perhaps you've encountered or written something like this:

<iframe src="https://codesandbox.io/embed/2m3d7f?view=split&module=%2Fsrc%2FForm.tsx&fontsize=12"
  style="height: 500px; border:0; border-radius: 4px; overflow:hidden;"
  title="Manual React Form Validation Example"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

This first approach has many challenges working against it:

1. Very often when writing validation by hand, **accessibility is overlooked.** We're already putting so much effort into remembering all the details of the validation, that accessibility is a distant afterthought if it gets addressed at all. Speaking of which...
2. **It's a lot of work!** We have to remember everything to check for each field, come up with the pattern for when to show the validation messages and when to hide them, and generally do a lot of heavy lifting. As the form grows more complex, the validation gets exponentially more difficult to track and understand.
3. **It's going to be inconsistent across any project with more than one form**. Even if it's just you writing all the forms, there's very low chance the user experience will be predictable and clear across forms. Getting form UX right involves a hundred small details working together. Writing validation manually is necessarily going to lead to small variations in logic, and variations are where the bugs live.

## Perilous approach #2: Bring in the libraries

Entire cottage industries around form validation exist in packages like [`react-hook-form`](https://react-hook-form.com) and [`formik`](https://formik.org), among others – the latter of which promises to help you "Build forms in React, without the tears"!

On the surface, these libraries are designed to address the three major challenges of manual validation. They reduce the manual overhead of writing logic for every form by providing a clear configurable interface, they're easy to re-use across many forms, and when used with care they make it easier to ensure the form and its validation is accessible.

However, most libraries are not explicitly accessibility driven and leave the details up to the user. Both `formik` and `react-hook-form` handle the many details of form UX, but they leave accessibility completely up to the developer. Handling form validation through either manual JavaScript or a library gives the widest range of control and flexibility, but has a great cost of additional overhead in maintaining the logic and taking on responsibility for accessibility.

## An alternative approach: tapping into the Constraint Validation API

In a recent project, I was building a design system component library in React that needed a full range of form inputs, and I once again faced the Perils of Validation. I considered the various libraries available, but I didn't feel great about the library approach. I was curious if there was a way to follow the principles of progressive enhancement and handle validation primarily with standard HTML and CSS and dip into JavaScript when needed for customization. I wanted to make validation logic a core interface of the component library so that an external tool wouldn't be necessary every time an engineer on my team needed to write a form. My goals were:

- **Developers should need to write as little custom validation logic as possible**. The input interface should be truly declarative—the only imperative logic passed in should be complex validation that relies on dependencies between multiple fields.
- **The components should be accessible by default**. Accessibility should _just happen_ without a developer needing to remember to do it.
- **The UX flow should be helpful, clear, and automatic**. There should be a standard pattern for when to show and clear validation messages to be most helpful in the user's context.
- **Customization should be available when needed**. While the standard validations have default messages, they should be easy to customize when desired.

### Step 1: It's just a form!

Luckily, HTML5 provides almost all of the validation logic we need right out of the browser. If we didn't need customization options for styling and messages, an HTML form on its own would be enough. Here's an example—even though this form is rendered by a React component, it Just Works for validation. Try to submit the form without entering a value in the input, and the browser will provide a validation message:

<iframe src="https://codesandbox.io/embed/rn8ht9?view=split&module=%2Fsrc%2FForm.tsx&fontsize=12"
  style="height: 500px; border:0; border-radius: 4px; overflow:hidden;"
  title="HTML Form Example"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

All we needed to do was to give the input a `form` as a parent rather than a `div` and add the `required` attribute to the input. If we used other semantic `type` values in the `input` like `email` or `url`, we'd get even more built in validation by default. Every standard HTML input type features basic validation like `required`, and there are also plenty of other validation attributes available in the standard spec depending on the type of input used. We could extend the prop interface to allow setting other validation constraints like `maxlength`, `pattern`, etc. but to keep the examples easy to read we'll stick with `required.`

Feels pretty good! But... this version has some drawbacks. I didn't have to write any validation logic, but I can't easily customize the message or its styling.

### Step 2: Customizing the validation message

First, let's see if we can create a way to customize the message shown by the browser. Let's start by creating a reusable React component for the `input`. Rather than using an external library, we'll use our own components as the interface for validation.

```tsx
type InputProps = {
  id: string;
  type?: HTMLInputTypeAttribute;
  labelText: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
};

function Input({ id, type, labelText, value, onChange, required }: InputProps) {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
      />
    </>
  );
}
```

> Note: Normally I would define other reusable components in a component library for elements like `label`, but for demonstration purposes it's helpful to show the markup all in one place.

The browser can handle a huge range of validation needs just with HTML attributes, but when customization or flexibility is needed, browsers also provide the [Constraint Validation API](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation) – an interface that allows us to "tap in" to the validation logic using JavaScript. This means we'll need an "escape hatch" out of the world of React and into the browser DOM. And that means, we need a [ref](https://react.dev/reference/react/useRef). Let's set it up:

```tsx
function Input({ id, type, labelText, value, onChange, required }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input
        ref={inputRef}
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
      />
    </>
  );
}
```

The `inputRef` will now give us access to the full set of validation tools the browser provides.

- `validity` - returns a [`ValidityState`](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState) object that represents the state of the browser's validity checks. `ValidityState` provides a standard set of Boolean properties for common validation needs: `badInput`, `patternMismatch`, `rangeOverflow`, `rangeUnderflow`, `stepMismatch`, `tooLong`, `tooShort`, `typeMismatch`, and `valueMissing`.
- `validationMessage` – returns a string of the message that would be displayed by the browser based on the `ValidityState` when the form is submitted
- `setCustomValidity` – sets a custom error message to be displayed when the form is submitted. **This is the one we need!**

If I were to indulge in some wishful programming, I would love to simply provide the `Input` component a prop with custom validation messages tied to the standard fields on `ValidityState`. Something like this:

```jsx
const validationMessages = {
  valueMissing:  "This is a custom error message!"
}

<Input
  validationMessages={validationMessages}
  required
/>
```

We can define this prop with some helpful typing by reading the keys of the browser's `ValidityState`:

```ts
type ValidityStatuses = keyof Omit<ValidityState, "valid">;
type ValidationMessageConfig = Partial<Record<ValidityStatuses, string>>;

type InputProps = {
  // ...
  validationMessages?: ValidationMessageConfig;
};
```

With the custom messages passed in, we can check the element's validity state as it changes and use `setCustomValidity` to provide our custom message. Since we're working outside of React and in the DOM directly, we will need a `useEffect`—the code might start to look a little ungainly, but gradually we could move this to a custom hook to make the interface more readable. Let's try tying it all together–try submitting the form below without entering a value to see the custom error message!

<iframe src="https://codesandbox.io/embed/9tzgv5?view=split&module=%2Fsrc%2FInput.tsx&fontsize=12"
  style="height: 500px; border:0; border-radius: 4px; overflow:hidden;"
  title="Customizable Validation Example"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

> Note: Use the file browser in the sandbox above to open the `Form` component too to see the new prop!

Using this approach we now have support for custom validation messages, and we haven't lost any of the benefits of the built in browser accessibility!

### Step 3: Customizing the message styles

It's common to want to have some level of control over the way the validation message is styled. Browsers all provide their own tooltips or other way of showing the validation message, but this level of inconsistency may not be desirable, or we may simply want more direction over visual styling. Using the Constraint Validation API, we can read the validation message for any input and decide for ourselves where we want to display it! As we do so, we will need to be extra careful not to lose accessibility and helpful UX details, but if we implement this in a reusable component we can make it easy.

The first thing we'll need to do is read the validation message from the DOM via the `inputRef` (either the default the browser provides or a custom message that we've set) and pass it back into the world of React. We could try to simply render the text by accessing `validationMessage` from `inputRef.current`, but because the validation state changes as a side effect, React doesn't know the message has changed and it leads to odd bugs. So, let's save our validation message to a local state and render it.

```tsx
export default function Input({
  id,
  type,
  labelText,
  value,
  onChange,
  required,
  validationMessages = {},
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [currentValidationMessage, setCurrentValidationMessage] = useState("");

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }

    const customValidationStatuses = Object.keys(
      validationMessages
    ) as ValidityStatuses[];

    customValidationStatuses.forEach((status) => {
      const statusIsInvalid = inputRef.current?.validity[status];
      const customMessage = statusIsInvalid ? validationMessages[status] : "";
      inputRef.current?.setCustomValidity(customMessage || "");
    });

    setCurrentValidationMessage(inputRef.current.validationMessage);
  }, [Boolean(inputRef?.current), value]);

  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input
        ref={inputRef}
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
      />
      <span className="validation-error">{currentValidationMessage}</span>
    </>
  );
}
```

This works! We can see the validation message below the input and we can style it however we like. However, it has some issues.

1. The message is not accessibly linked to the input – based on the markup it's just a random floating piece of text and it's not clear it's connected to the input's state.
2. The error message is shown all the time, not just when the form is submitted. Ideally we would keep the browser UX and only show the validation when the form is submitted.
3. The browser still shows its own message when the form is submitted, leading to duplicate information shown to the user.

The first issue is simple enough to address. Let's make a small adjustment using ARIA attributes to semantically link the input with the error message with `aria-errormessage`.

```tsx
export default function Input(props: InputProps) {
  // ...
  const errorMessageId = `${id}-error-message`;

  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input
        ref={inputRef}
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        aria-errormessage={errorMessageId}
      />
      {currentValidationMessage && (
        <span id={errorMessageId} className="validation-error">
          {currentValidationMessage}
        </span>
      )}
    </>
  );
}
```

Using `aria-errormessage`, we can link the input to our custom error message markup. Note that because we're using the standard HTML validation attributes such as `required`, we don't need to set `aria-invalid` ourselves because the browser is responsible for tracking validity state. It will automatically be considered invalid based on the value and the parameters we've set. There's more we could do here for accessibility such as making the message a live region to read out to the user, but let's turn our attention to the other two issues in the validation UX.

Before we move on, here's what the current version looks like all put together:

<iframe src="https://codesandbox.io/embed/xyldzy?view=split&module=%2Fsrc%2FInput.tsx&fontsize=12"
  style="height: 500px; border:0; border-radius: 4px; overflow:hidden;"
  title="Styled Customizable Validation Example"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

### Step 4: Wrapping up the validation loop

To finish up our validation system, we want to make sure the form UX is clear and helpful. Ideally, this means:

* Error messages only show when the form is submitted (and possibly when "leaving" a field, or "on blur", but this is optional to your taste)
* The first invalid input is focused when the form is submitted in an invalid state.

There's a lot more we could do to enhance the UX, but I consider this a baseline user experience.

To do this, we'll need to take over control of the validation loop from the browser, but we'll still be relying on the browser's internal validation logic. While we'll take on the overhead of maintaining the rendering logic, we're still not going to write _any_ direct validation logic to check the values of inputs—it's all handled with standard HTML attributes!

We can start by turning off the browser's validation loop by setting `noValidate` on the form. While this will stop the browser's validation tooltips from applying, the validation state of the inputs are still tracked by the browser and we can still use them.

```tsx
<form onSubmit={onSubmit} noValidate>
{/*  */}
</form>
```

The browser no longer shows its own validation messages, but it's also no longer blocking the form submission when there are invalid fields! That's the opposite of what we want, so let's update the form's submission handler to implement it ourselves.

```tsx
function onSubmit(event: FormEvent) {
  event.preventDefault();
  const formElement = event.target as HTMLFormElement;
  const isFormValid = formElement.checkValidity();
  if (isFormValid) {
    console.log("Form submitted");
  }
}
```

Once again, we're tapping into the Constraint Validation API which provides us with a [`checkValidity`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/checkValidity) method on the form element. I'd recommend reading the MDN docs linked on this method, but essentially it will return `true` if all of the form's elements are valid, and `false` if any of them are invalid.

Now we've solved our first two problems: the browser's message no longer shows, and the form no longer submits when invalid. Next let's figure out how to control when the validation message shows.

If you carefully read the docs on `checkValidity`, you might notice an interesting detail:

> The method also fires an `invalid` event on each invalid element...

An event that fires to all elements whenever the validity is checked! Maybe we can listen to this event on the input and use it to determine if we should show the validation message or not.

```tsx
export default function Input({}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  // 1. Create a new state to track whether we should show the error or not
  const [showError, setShowError] = useState(false);
  const [currentValidationMessage, setCurrentValidationMessage] = useState("");

  // ...

  function handleInvalidEvent() {
    setShowError(true);
  }

  // 2. Listen for the `invalid` event fired by the form
  useEffect(() => {
    if (inputRef.current) {
      const inputElement = inputRef.current;
      inputElement.addEventListener("invalid", handleInvalidEvent);

      return () => {
        inputElement.removeEventListener("invalid", handleInvalidEvent);
      };
    }
  });

  const errorMessageId = `${id}-error-message`;

  return (
    <>
      <label htmlFor={id}>{labelText}</label>
      <input
        ref={inputRef}
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        aria-errormessage={errorMessageId}
      />
      {showError && currentValidationMessage && (
        <span id={errorMessageId} className="validation-error">
          {currentValidationMessage}
        </span>
      )}
    </>
  );
}
```

We've added another state to track whether we should show the error or not, and a `useEffect` to set up an event listener on the `invalid` event. Whenever the field receives an event, we turn on the error message rendering. After that, it will always show and update as the user types so they know when it becomes valid. Let's see it all working together!

<iframe src="https://codesandbox.io/embed/ftkzg3?view=split&module=%2Fsrc%2FInput.tsx&fontsize=12"
  style="height: 500px; border:0; border-radius: 4px; overflow:hidden;"
  title="Complete Customizable Validation Example"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

> Note: Open the file browser to view the `Form` component and see the whole system working together in `src/App.tsx`!

In this complete version, we've accomplished all of our goals:

1. We've written zero "validation" logic, meaning logic to check and compare the actual value of a field to a valid state. The interface is fully declarative for developers.
2. The UX is as good as the baseline provided by the browser and can be extended from this foundation to add even more helpful details. (Note that I didn't implement the ability to focus the first invalid form element on submit, but this is possible to handle in the form submission logic and a good exercise to get familiar with the validation API.)
3. Everything is fully customizable in content and styling!
4. Everything is accessible!

Starting from this structure, we can continue to build out our validation system with:

- The remaining standard validation props
- Components for other types of inputs following the same pattern
- Support for complex validation logic that relies on dependencies between multiple fields
- Support for fully custom components that don't build on top of standard HTML input types

These extensions are beyond the scope of this post, but hopefully this pattern demo shows how little validation logic needs to be written and how easy it is to keep inputs accessible while also providing full customization and flexibility.

What do you think about this approach? Have you used the Constraint Validation API for forms in your React project? See any bugs in this demo? Let me know on [Bluesky](https://bsky.app/profile/schmevin.bsky.social)!