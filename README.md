# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Screenshot

### Links

- Solution URL: [GitHub](https://github.com/sherimin/multi-step-form)
- Live Site URL: [Vercel](https://multi-step-form-lyart-seven.vercel.app)

## My process

### Built with

- [React](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [React-hook-form](https://react-hook-form.com/docs/useform)
- [TailwindCSS](https://tailwindcss.com)
- [Framer-Motion](https://motion.dev)

### What I learned

In this project, I learnt about ```useForm``` from React Hook Form, particularly how it manages form state and stores user input across multiple steps. I now understand how to validate, trigger, and persist form data while maintaining an efficient and clean application structure. Without ```useForm```, when I tried to store and manage every input field and handle validation, the form would look like this: 

```
...
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email.includes("@")) newErrors.email = "Invalid email";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Submit:", { name, email });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      {errors.name && <p>{errors.name}</p>}

      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      {errors.email && <p>{errors.email}</p>}

      <button type="submit">Next</button>
    </form>
  );
...
```

The code is repetitive for a multi-step-form, and I also need to manually handle field validation and display error states. 

Now with ```useForm```:

```
...
const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log("Submit:", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: "Name is required" })} />
      {errors.name && <p>{errors.name.message}</p>}

      <input
        {...register("email", {
          required: "Email is required",
          pattern: { value: /^\S+@\S+$/, message: "Invalid email" },
        })}
      />
      {errors.email && <p>{errors.email.message}</p>}

      <button type="submit">Next</button>
    </form>
  );
```

```useForm``` handles all state validation automatically, so I don't need to use useState hook or manually manage error state.
Besides, it also gives access to helpers like trigger(), setValue(), and getValues() which simplize the development of a multi-step-form. 

### Useful resources

- [react-hook-form.com](https://react-hook-form.com/docs/useform) - This website provides detailed explanation for usage of useForm hook.
- [MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation) - This article explains form validation.

## Author

- Sheri's Portfolio - [Sheri Lu](https://www.sherilu.com/)
- Frontend Mentor - [@sherimin](https://www.frontendmentor.io/profile/sherimin)
