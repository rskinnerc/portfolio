import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const Contact = () => {
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
        onSubmit={() => {}}
      >
        {(form) => (
          <Form className="flex flex-col p-2 gap-4">
            <Field
              className="text-xl text-sky-600 placeholder:text-sky-600/30 p-2 h-16"
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
              className="text-xl text-sky-600 placeholder:text-sky-600/30 p-2 h-16"
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
              className="text-xl text-sky-600 placeholder:text-sky-600/30 p-2 h-48"
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
              className="w-1/2 md:w-2/6 lg:w-1/6 mx-auto block text-center from-fuchsia-900 to-fuchsia-700 hover:from-sky-900 hover:to-sky-700 bg-gradient-to-r shadow-fuchsia-900/50 hover:shadow-sky-900/50 shadow-md hover:shadow-lg p-2 rounded-md text-white font-bold font-exo z-40 disabled:bg-slate-600 disabled:from-slate-600 disabled:to-slate-400 disabled:shadow-none disabled:cursor-not-allowed"
            >
              SEND
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default Contact;
