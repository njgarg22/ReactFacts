1. Where does React put all of the elements I create in JSX when I
   call `root.render()`?

All the elements I render get put inside the div with the id of "root"
(or whatever other element I might select when calling createRoot)

2. What would show up in my console if I were to run this line of code:

```
console.log(<h1>Hello world!</h1>)
```

Answer:
In vanilla DOM code you create a real DOM node immediately, e.g.:

```
const h1 = document.createElement("h1");
h1.textContent = "Hello world!";
```

h1 is an actual `HTMLHeadingElement` that exists in the DOM once you append it.

In React, JSX like:

```
<h1>Hello world!</h1>
```

is just syntax that gets compiled (by Babel/your build tool) into something like:

```
React.createElement("h1", null, "Hello world!")
```

That returns a plain JavaScript object (“React element”)—a description of what you want the UI to look like:

- type: what kind of element/component ("h1" or a component function)
- props: attributes/children ({ children: "Hello world!" })
- plus some internal fields React uses

React then uses those objects to decide what to render/update in the real DOM.

3. What's wrong with this code:

```
root.render(
    <h1>Hi there</h1>
    <p>This is my website!</p>
)
```

You can only render 1 parent element at a time. That parent element can have
as many children elements as you want.

4. What does it mean for something to be "declarative" instead of "imperative"?

_Imperative_ means we need to give specific step-by-step instructions on how to
accomplish a task.
_Declarative_ means we can write our code to simply "describe" _what_ should show up
on the page and allow the rool (React, e.g.) to handle the details on _how_ to
put those things on the page.

5. What does it mean for something to be "composable"?

We have small pieces that we can put together to make something
larger or greater than the individual pieces themselves.
