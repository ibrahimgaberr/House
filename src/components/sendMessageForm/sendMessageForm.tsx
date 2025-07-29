'use client'
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import * as Yup from "yup";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { NewsSendMessage } from "@/interfaces/form";

export default function SendMessage() {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(3, "Full Name must be at least 3 characters")
      .max(10, "Full name must be at most 10 characters")
      .matches(/^[A-Za-z\s]{3,10}$/, "Full name can only contain letters")
      .required("Full Name is required"),
    phone: Yup.string()
      .matches(/^(01)[0-2,5]{1}[0-9]{8}$/, "Invalid phone number")
      .required("Phone number is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .optional(),
  });

  function handleSubmit(
    formValues: NewsSendMessage,
    { resetForm }: import("formik").FormikHelpers<NewsSendMessage>
  ) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Successfully submitted",
      showConfirmButton: false,
      timer: 1000,
    });
    resetForm();
  }

  function validation(formValues: NewsSendMessage) {
    const errors: Record<string, string> = {};

    if (!formValues.fullName) {
      errors.fullName = "Full Name must be at least 3 characters";
    } else if (!/^[A-Za-z\s]{3,10}$/.test(formValues.fullName)) {
      errors.fullName =
        "Full name can only contain letters and between 3 and 10 characters";
    }

    if (!formValues.phone) {
      errors.phone = "Phone number is required";
    }

    if (!formValues.message) {
      errors.message = "The message must be at least 10 characters";
    }
    return errors;
  }
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phone: "",
      message: "",
    },
    validate: validation,
    validationSchema,
    onSubmit: handleSubmit,
  });
  return (
    <>
      <div className="bg-[#F1F4F3] p-12 rounded-none md:rounded-3xl w-full md:w-[70%] lg:w-[60%] mt-10 mx-auto">
        <h1 className="font-bold text-2xl mb-4">Send us a Message</h1>
        <form id="contactForm" onSubmit={formik.handleSubmit}>
          <div className="flex gap-4">
            <div className="flex flex-col w-1/2">
              <Input
                value={formik.values.fullName}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                name="fullName"
                className="my-3 flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                placeholder="Full Name"
              />
              {formik.errors.fullName && formik.touched.fullName ? (
                <div
                  className="mb-4 text-sm text-red-800 rounded-lg"
                  role="alert"
                >
                  {formik.errors.fullName}
                </div>
              ) : null}
            </div>
            <div className="flex flex-col w-1/2">
              <Input
                value={formik.values.phone}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                name="phone"
                className="my-3 flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                type="tel"
                placeholder="Phone"
              />
              {formik.errors.phone && formik.touched.phone ? (
                <div
                  className="mb-4 text-sm text-red-800 rounded-lg"
                  role="alert"
                >
                  {formik.errors.phone}
                </div>
              ) : null}
            </div>
          </div>
          <Textarea
            value={formik.values.message}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name="message"
            className="my-4 flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Your Message*"
          />
          {formik.errors.message && formik.touched.message ? (
            <div className="mb-4 text-sm text-red-800 rounded-lg" role="alert">
              {formik.errors.message}
            </div>
          ) : null}
        </form>

        <div className="flex ">
          <div className=" flex justify-start">
            <Button
              type="submit"
              form="contactForm"
              className="relative z-1 rounded-4xl bg-gray-200 leading-3.5
                                  text-black text-lg border-0 py-6 my-2 cursor-pointer hover:text-white
                                  after:content-[''] after:absolute after:h-10 after:w-10 after:inline-block after:rounded-full after:transition-all 
                                  after:duration-400 after:bg-[#446A64] after:left-[5px] after:top-[4px] after:-z-10 
                                  hover:after:w-[94%] hover:after:rounded-[80px]
                                  "
            >
              Send Message
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
