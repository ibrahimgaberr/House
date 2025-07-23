import MainSection from '../layout/mainSection';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PhoneCall, MailCheck, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import * as Yup from "yup";
import { useFormik } from "formik";
import Swal from "sweetalert2";
import { SendMessageValues } from '@/interfaces/form';


export default function MainContact() {

    const validationSchema = Yup.object().shape({
        fullName: Yup.string()
            .min(3, "Full Name must be at least 3 characters")
            .max(10, "Full name must be at most 10 characters")
            .matches(/^[A-Za-z\s]{3,10}$/, "Full name can only contain letters")
            .required("Full Name is required"),
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        phone: Yup.string()
            .matches(/^(01)[0-2,5]{1}[0-9]{8}$/, "Invalid phone number")
            .required("Phone number is required"),
        subject: Yup.string().required("Please select an option"),
        message: Yup.string().min(10, "Message must be at least 10 characters").optional(),
    })

    function handleSubmit(formValues: SendMessageValues, { resetForm }: import("formik").FormikHelpers<SendMessageValues>) {

        Swal.fire({
        position: "center",
        icon: "success",
        title: "Successfully submitted",
        showConfirmButton: false,
        timer: 1000,
        });

        resetForm();
    }

    function validation(formValues: SendMessageValues) {
        
    const errors: Record<string, string> = {};

    if (!formValues.fullName) {
        errors.fullName = "Full Name must be at least 3 characters";
    } else if (!/^[A-Za-z\s]{3,10}$/.test(formValues.fullName)) {
        errors.fullName =
        "Full name can only contain letters and between 3 and 10 characters";
    }

    if(!formValues.email) {
        errors.email = "Email is required";
    }

    if (!formValues.phone) {
        errors.phone = "Phone number is required";
    }

    if (!formValues.subject) {
        errors.subject = "You must choose one option";
    }

    if (!formValues.message) {
        errors.message = "The message must be at least 10 characters";
    }
    return errors;
    }

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        },
        validate: validation,
        validationSchema,
        onSubmit: handleSubmit,
    });

    return (
    <>
        {/* Main section */}
        <MainSection name="Contact Us"/>
        {/* Main section */}
        {/* form */}
        <div className="p-0 md:p-20">
            <div className="bg-[#F1F4F3] p-5 md:p-12 rounded-3xl grid grid-cols-12 gap-7">
                <div className="col-span-12 lg:col-span-8">
                <h1 className='font-bold text-2xl mb-4'>Send us a Message</h1>
                <p className='text-[#4e5352]'>Contact us today and let&apos;s start your journey to urban living excellence.</p>
                <p className='text-[#4e5352]'>Our team at House is here answer your questions, schedule viewings.</p>
                <form id='contactForm' onSubmit={formik.handleSubmit}>
                   <div className="flex flex-col md:flex-row gap-3">
                    <div className='w-full md:w-1/2'>
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
                    <div className='w-full md:w-1/2'>
                        <Input
                    value={formik.values.email}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    name="email"
                    className="my-3 flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
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
                   </div>
                   <div className="flex flex-col md:flex-row gap-3">
                    <div className='w-full md:w-1/2'>
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
                    <div className='w-full md:w-1/2'>
                    <select
                        value={formik.values.subject}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}                        
                        name="subject"
                        className="my-3 flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        <option value="" disabled>
                        Select You Option
                        </option>
                        <option value="option1">Option 1</option>
                        <option value="option2">Option 2</option>
                        <option value="option3">Option 3</option>
                        <option value="option4">Option 4</option>
                        <option value="option5">Option 5</option>
                    </select>
                    {formik.errors.subject && formik.touched.subject ? (
                        <div
                        className="mb-4 text-sm text-red-800 rounded-lg"
                        role="alert"
                        >
                        {formik.errors.subject}
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
                </div>

                <div className='flex md:hidden '>
                    <div className=" flex justify-center lg:justify-start">
                        <Button
                        type='submit'
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
                
                <div className="col-span-12 lg:col-span-4 flex flex-col justify-center">
                    <div className='flex gap-5 items-center bg-white p-6 rounded-lg mb-4 hover:bg-[#14453D] hover:text-white transition-colors duration-300'>
                        <PhoneCall size={28} strokeWidth={2.25} />
                        <div>
                            <p className='text-lg'>Call</p>
                            <p className='text-[#FFF/80]'>+1234567890</p>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center bg-white p-6 rounded-lg mb-4 hover:bg-[#14453D] hover:text-white transition-colors duration-300'>
                        <MailCheck size={28} strokeWidth={2.25} />
                        <div>
                            <p className='text-lg'>Email</p>
                            <p className='text-[#FFF/80]'>infp@housevilla.com</p>
                        </div>
                    </div>
                    <div className='flex gap-5 items-center bg-white p-6 rounded-lg mb-4 hover:bg-[#14453D] hover:text-white transition-colors duration-300'>
                        <Clock size={28} strokeWidth={2.25} />
                        <div>
                            <p className='text-lg'>Schedule Time</p>
                            <p className='text-[#FFF/80]'>24/7 Anytime All Support</p>
                        </div>
                    </div>
                </div>
                <div className='hidden md:flex '>
                    <div className=" flex justify-center lg:justify-start">
                        <Button
                        type='submit'
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
        {/* form */}
    </>
);
}