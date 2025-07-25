"use client";
import MainSection from "@/components/layout/mainSection";
import { newsData } from "@/data/data";
import Image from "next/image";
import { UserRound, CalendarDays, MoveUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import * as Yup from "yup";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { NewsSendMessage } from "@/interfaces/form";


export default function NewsDetails({ params }: { params: { id: string } }) {
  const { id } = params;
  const newsItem = newsData.find((item) => item.id === parseInt(id));
  const latestNews = newsData.slice(0,3);
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
      <MainSection name="News" />
      <div className="w-full md:w-[70%] mx-auto">
        <div className="p-3 md:p-10 flex flex-col items-center justify-center">
          <Image
            className="rounded-2xl mb-2"
            width={500}
            height={400}
            src={newsItem!.images.imgURL}
            alt="Image"
          />
          <div className="flex justify-start items-center mt-5">
            <div className="flex items-center mr-4">
              <span className="mr-2">
                <UserRound size={20} strokeWidth={1.75} />
              </span>
              <p>{newsItem?.name}</p>
            </div>
            <div className="flex items-center">
              <span className="mr-2">
                <CalendarDays size={20} strokeWidth={1.75} />
              </span>
              <p className="text-sm">{newsItem?.date}</p>
            </div>
          </div>
          <div className="w-full md:w-[60%] text-center">
            <h3 className="text-2xl font-semibold mt-4 mb-4 text-center">
              {newsItem?.title}
            </h3>
            <p className="mb-6 text-gray-600 leading-7">
              Nestled in the heart of the city, Diamond Apartments offer a
              perfect blend of luxury and convenience. These elegantly designed
              residence boast spacious layouts, modern amenities, and stunning
              city views, providing a sanctuary.
            </p>
            <p className="text-gray-600 leading-7">
              Nestled in the heart of the city, Diamond Apartments offer a
              perfect blend of luxury and convenience. These elegantly designed
              residence boast spacious layouts, modern amenities, and stunning
              city views, providing a sanctuary.
            </p>
          </div>
          <div className="flex mt-5 gap-4">
            <Image
              className="rounded-2xl mb-2"
              width={300}
              height={300}
              src={newsItem!.images.imgURL}
              alt="Image"
            />
            <Image
              className="rounded-2xl mb-2"
              width={300}
              height={300}
              src={newsItem!.images.imgURL}
              alt="Image"
            />
          </div>
          <div className="w-full md:w-[60%] text-center">
            <h3 className="text-2xl font-semibold mt-4 mb-4 text-center">
              Unparalleled Elegance: Discover Luxury Villa
            </h3>
            <p className="mb-6 text-gray-600 leading-7">
              Escape to luxury Serenity Heights, a prestigious hilltop offering
              panoramic views of the Pacific Ocean. This contemporary
              masterpiece features 5 bed rooms, 6 bathrooms, an expansive
              infinity pool that blends seamlessly.
            </p>
          </div>

          <div className="bg-[#F1F4F3] p-12 rounded-3xl w-full lg:w-[60%]">
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
                <div
                  className="mb-4 text-sm text-red-800 rounded-lg"
                  role="alert"
                >
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
        </div>
      </div>
      <div className="bg-[#F1F4F3] p-10 flex flex-col justify-center items-center mt-10">
<p className="bg-gray-200/60 text-[#14453D] mb-2 uppercase text-center text-md lg:text-2xl inline-block p-2 rounded-3xl w-fit">Our News</p>
<h2 className="text-lg md:text-4xl font-bold mb-10">Our Latest Blog</h2>            
<div className="flex flex-col md:flex-row gap-5 mb-10 w-[100%] justify-center items-center">
{latestNews.map((news) => (  <div
                    key={news.id}
                    className="relative rounded-2xl shadow-md hover:shadow-none group w-[80%] lg:w-[33%] mb-10"
                  >
                    {/* Image with overlay container */}

                    <Image
                      className="rounded-2xl w-full transition-all transition-duration-300 group-hover:rotate-1"
                      width={600}
                      height={600}
                      src={news!.images.imgURL}
                      alt="Image"
                    />

                    {/* Content div */}
                    <div className="absolute rounded-2xl bg-white p-4 -bottom-10 w-[80%] left-[50%] transform -translate-x-1/2 rounded-b-2xl">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center">
                          <span className="mr-2">
                            <UserRound size={20} strokeWidth={1.75} />
                          </span>
                          <p className="mt-2">{news.name}</p>
                        </div>
                        <div className="flex items-center">
                          <span className="mr-2">
                            <CalendarDays size={20} strokeWidth={1.75} />
                          </span>
                          <p className="text-sm mt-1">{news.date}</p>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mt-4">
                        {news.title}
                      </h3>
                      <p
                        className="flex items-center mt-4 transition-all transition-duration-300 hover:text-[#DEC778] font-semibold cursor-pointer"
                      >
                        <p className="mr-2">Read More</p>
                        <span>
                          <MoveUpRight size={18} strokeWidth={1.75} />
                        </span>
                      </p>
                    </div>
</div>))}
</div>

</div> 
    </>
  );
}




