"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MoveUpRight } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import * as Yup from "yup";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { FormValues } from "../../interfaces/form";

export default function EnquiryForm() {

  const phoneSchema = Yup.string()
    .required("Phone number is required")
    .test(
      "is-valid-phone",
      "Invalid phone number", 
      (value) => {
        if (!value) return false;
        const phone = parsePhoneNumberFromString(value);
        return phone?.isValid() ?? false;
      }
    );

  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(3, "Full Name must be at least 3 characters")
      .max(10, "Full name must be at most 10 characters")
      .matches(/^[A-Za-z\s]{3,10}$/, "Full name can only contain letters"),
    phone: phoneSchema,
    option: Yup.string().required("Please select an option"),
    message: Yup.string().optional(),
  });

  function handleSubmit(formValues: FormValues, { resetForm }: import("formik").FormikHelpers<FormValues>) {

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Successfully submitted",
      showConfirmButton: false,
      timer: 1000,
    });

    resetForm();
  }

  function validation(formValues: FormValues) {
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

    if (!formValues.option) {
      errors.option = "You must choose one option";
    }
    return errors;
  }

  const formik = useFormik({
    initialValues: {
      fullName: "",
      phone: "",
      option: "",
      message: "",
    },
    validate: validation,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <section className="form bg-gray-300/90 p-7 rounded-3xl">
        <h3 className="text-xl font-bold py-3">Make An Enquiry</h3>
        <form onSubmit={formik.handleSubmit}>
          <Input
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="my-4 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            placeholder="Full Name*"
          />
          {formik.errors.fullName && formik.touched.fullName ? (
            <div
              className="mb-4 text-sm text-red-800 rounded-lg"
              role="alert"
            >
              {formik.errors.fullName}
            </div>
          ) : null}
          <PhoneInput
          international
            defaultCountry="EG"
            name="phone"
            placeholder="Enter phone number"
            className="my-4 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            value={formik.values.phone}
            onChange={(value) => formik.setFieldValue("phone", value)}
            onBlur={formik.handleBlur}
          />
          {formik.errors.phone && formik.touched.phone ? (
            <div
              className="mb-4 text-sm text-red-800 rounded-lg"
              role="alert"
            >
              {formik.errors.phone}
            </div>
          ) : null}
          <select
            name="option"
            value={formik.values.option}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="my-4 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="" disabled>
              Select You Option
            </option>
            <option value="2rooms">2 Rooms</option>
            <option value="3rooms">3 Rooms</option>
            <option value="4rooms">4 Rooms </option>
          </select>
          {formik.errors.option && formik.touched.option ? (
            <div
              className="mb-4 text-sm text-red-800 rounded-lg"
              role="alert"
            >
              {formik.errors.option}
            </div>
          ) : null}{" "}
          <Textarea
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="my-4 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Your Message*"
          />
          <div className="text-right">
            <Button
              type="submit"
              className="p-[25px] font-bold text-lg group rounded-4xl text-white bg-sky-700 border-0 cursor-pointer"
              variant="outline"
            >
              Submit Now{" "}
              <MoveUpRight
                size={32}
                strokeWidth={2.75}
                className="ml-2 transition-transform duration-300 group-hover:rotate-45"
              />
            </Button>
          </div>
        </form>
      </section>
    </>
  );
}
