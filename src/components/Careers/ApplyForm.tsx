"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import * as Yup from "yup";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { ApplyNow } from "@/interfaces/form";

export default function ApplyForm({
  appearTheForm, setAppearForm
}: {
  appearTheForm: boolean ,
  setAppearForm: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(3, "Full Name must be at least 3 characters")
      .max(10, "Full name must be at most 10 characters")
      .matches(/^[A-Za-z\s]{3,10}$/, "Full name can only contain letters")
      .required("Full Name is required"),
    phone: Yup.string()
      .matches(/^(01)[0-2,5]{1}[0-9]{8}$/, "Invalid phone number")
      .required("Phone number is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    uploadCv: Yup.mixed().required("Upload CV is required"),
    message: Yup.string().optional(),
  });

  function handleSubmit(
    formValues: ApplyNow,
    { resetForm }: import("formik").FormikHelpers<ApplyNow>
  ) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Successfully Application Sent",
      showConfirmButton: false,
      timer: 3000,
    });
    setAppearForm(false);
    resetForm();
  }

  function validation(formValues: ApplyNow) {
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

    if (!formValues.email) {
      errors.email = "Email is required";
    }

    if (!formValues.uploadCv) {
      errors.uploadCv = "Upload CV is required";
    }

    return errors;
  }
  const formik = useFormik<ApplyNow>({
    initialValues: {
      fullName: "",
      phone: "",
      email: "",
      uploadCv: null,
      message: "",
    },
    validate: validation,
    validationSchema,
    onSubmit: handleSubmit,
  });
  return (
    <>
      <div
        className={`bg-[#F1F4F3] p-12 rounded-none md:rounded-3xl w-full mt-5 ${
          appearTheForm ? "block" : "hidden"
        }`}
      >
        <h1 className="font-bold text-2xl mb-4">Send us a Message</h1>
        <form id="contactForm" onSubmit={formik.handleSubmit}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex flex-col w-full md:w-1/2">
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
            <div className="flex flex-col w-full md:w-1/2">
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
          <div className="flex flex-col w-full">
            <Input
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              name="email"
              className="my-3 flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              type="text"
              placeholder="E-mail"
            />
            {formik.errors.email && formik.touched.email ? (
              <div
                className="mb-4 text-sm text-red-800 rounded-lg"
                role="alert"
              >
                {formik.errors.email}
              </div>
            ) : null}
          </div>
          <div className="flex flex-col w-full">
            <label className="py-2 " htmlFor="uploadCv">
              Upload Your CV
            </label>
            <Input
              onBlur={formik.handleBlur}
              onChange={(event) =>
                formik.setFieldValue(
                  "uploadCv",
                  event.currentTarget.files?.[0] || null
                )
              }
              name="uploadCv"
              className="my-3 flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              type="file"
              id="uploadCv"
              accept=".pdf,.doc,.docx"
            />
            {formik.errors.uploadCv && formik.touched.uploadCv ? (
              <div
                className="mb-4 text-sm text-red-800 rounded-lg"
                role="alert"
              >
                {formik.errors.uploadCv}
              </div>
            ) : null}
          </div>
          <Textarea
            value={formik.values.message}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            name="message"
            className="my-4 flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Your Message*"
          />
        </form>

        <div className="flex ">
          <div className=" flex justify-start">
            <Button
              type="submit"
              form="contactForm"
              className="relative z-1 rounded-4xl bg-gray-200 leading-3.5
                text-black text-lg border-0 py-6 my-2 cursor-pointer hover:text-white
                after:content-[''] after:absolute after:h-10 after:w-10 after:inline-block after:rounded-full 
                after:transition-all 
                after:duration-400 after:bg-[#446A64] after:left-[5px] after:top-[4px] after:-z-10 
                hover:after:w-[94%] hover:after:rounded-[80px]
                "
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
