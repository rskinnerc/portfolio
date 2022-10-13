import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-white to-sky-100"
    >
      <div className="relative h-20 md:mt-6 lg:mt-16 md:w-11/12 xl:w-10/12">
        <h1 className="font-exo text-3xl font-bold absolute top-0.5 right-0 pr-3 tracking-wide z-10 text-sky-600 2xl:right-20">
          Contact Me
        </h1>
        <h2 className="font-exo text-5xl font-bold absolute top-0 right-0 pr-3 tracking-wide text-fuchsia-600/10 z-0 2xl:right-20">
          Contact Me
        </h2>
      </div>
      <p className="p-2 md:w-9/12 lg:w-1/2 md:mx-auto font-ibm text-lg text-center">
        I have created an awesome personal Telegram Bot that will notify me
        whenever you send me a contact message.
      </p>
      {!messageSent && (
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={Yup.object({
            name: Yup.string()
              .min(2, "Must be 2 characters or more")
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            message: Yup.string()
              .min(2, "Must be 2 characters or more")
              .max(100, "Must be 255 characters or less")
              .required("Required"),
          })}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            const res = await fetch("/api/notifyContact", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            });

            if (res.status === 200) {
              setMessageSent(true);
              resetForm();
            } else {
              alert("Something went wrong, please try again later.");
            }
          }}
        >
          {(form) => (
            <Form className="flex flex-col p-2 gap-4 md:w-9/12 lg:w-1/2 md:mx-auto mb-36">
              <Field
                className="text-sky-600 placeholder:text-sky-600/30 font-ibm p-2 h-12"
                type="text"
                name="name"
                placeholder="Your Name"
              />
              <ErrorMessage
                className="text-red-600 text-sm"
                name="name"
                component="div"
              />
              <Field
                className="text-sky-600 placeholder:text-sky-600/30 font-ibm p-2 h-12"
                type="email"
                name="email"
                placeholder="Your Email"
              />
              <ErrorMessage
                className="text-red-600 text-sm"
                name="email"
                component="div"
              />
              <Field
                className="text-sky-600 placeholder:text-sky-600/30 font-ibm p-2 h-48"
                type="text"
                as="textarea"
                name="message"
                placeholder="Please write your message..."
              />
              <ErrorMessage
                className="text-red-600 text-sm"
                name="message"
                component="div"
              />
              <button
                type="submit"
                disabled={form.isSubmitting}
                className="w-1/2 md:w-2/6 lg:w-1/6 mx-auto block text-center from-fuchsia-900 to-fuchsia-700 hover:from-sky-900 hover:to-sky-700 bg-gradient-to-r shadow-fuchsia-900/50 hover:shadow-sky-900/50 shadow-md hover:shadow-lg p-2 rounded-md text-white font-bold font-exo disabled:bg-slate-600 disabled:from-slate-600 disabled:to-slate-400 disabled:shadow-none disabled:cursor-not-allowed"
              >
                SEND
              </button>
            </Form>
          )}
        </Formik>
      )}
      {messageSent && (
        <div className="flex flex-col items-center justify-center md:w-9/12 lg:w-1/2 md:mx-auto my-20">
          <FaTelegramPlane className="text-6xl text-sky-600 animate-pulse drop-shadow-lg" />
          <h2 className="text-xl text-fuchsia-600 font-exo italic">Message Sent!</h2>
          <p className="text-center text-sky-600 font-ibm p-2">Your message was sent. I will contact you back soon. Thank you for reaching out.</p>
        </div>
      )}
    </section>
  );
};

export default Contact;
