// FormContact.jsx

import { useState } from "preact/hooks";

const FormContact = () => {
  const [send, setSend] = useState(null);
  const submitForm = (e) => {
    const btn = document.getElementById("button");

    document
      .getElementById("form")
      .addEventListener("submit", function (event) {
        event.preventDefault();

        btn.value = "Sending...";

        const serviceID = "default_service";
        const templateID = "template_0nd0dzv";

        emailjs
          .sendForm(serviceID, templateID, this)
          .then(
            () => {
              btn.value = "submit";
              setSend(true);
            },
            (err) => {
              btn.value = "submit";
              setSend(false);
            }
          )
          .finally(() => {
            document.getElementById("form").reset()
            setTimeout(() => {
              setSend(null);
            }, 1000);
          });
      });
  };
  return (
    <form id="form">
      <div class="mt-5 grid grid-cols-1 gap-y-8">
        <div class="sm:col-span-4">
          <label for="username" class="block text-sm font-medium leading-6 ">
            Name
          </label>
          <input
            type="text"
            name="from_name"
            required
            id="from_name"
            class="block w-full outline-1 border border-1 flex-1 bg-transparent py-1.5 pl-3  placeholder:text-gray-400 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div class="mt-5 grid grid-cols-1 gap-y-8">
        <div class="sm:col-span-4">
          <label for="username" class="block text-sm font-medium leading-6 ">
            Email
          </label>
          <input
            type="text"
            name="email_id"
            required
            id="email_id"
            class="block w-full outline-1 border border-1 flex-1 bg-transparent py-1.5 pl-3  placeholder:text-gray-400 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div class="mt-5 grid grid-cols-1 gap-y-8">
        <div class="sm:col-span-4">
          <label for="subject" class="block text-sm font-medium leading-6 ">
            Message
          </label>
          <input
            type="text"
            name="message"
            required
            id="message"
            class="block w-full outline-1 border border-1 flex-1 bg-transparent py-1.5 pl-3  placeholder:text-gray-400 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div class="mt-5 grid grid-cols-1 gap-y-8">
        <input
          onClick={submitForm}
          type="submit"
          id="button"
          value="Submit"
          class="bg-red-200 dark:bg-gray-600 mx-auto w-32 text-center rounded-md p-2 border border-1 border-gray-100 hover:bg-white"
        />
      </div>
      {send !== null &&
        (send ? (
          <div
            class="p-4 mt-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
            role="alert"
          >
            <span class="font-medium">Formulario exitoso!</span>
          </div>
        ) : (
          <div
            class="p-4 mt-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <span class="font-medium">Error!</span> Vuelva a intentarlo.
          </div>
        ))}
    </form>
  );
};

export default FormContact;
