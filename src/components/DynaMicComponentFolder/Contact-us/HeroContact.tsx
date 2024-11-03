"use client"
import { useState } from 'react';
import emailjs from "@emailjs/browser"
const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors: typeof errors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name) {
      newErrors.name = 'Name is required';
      isValid = false;
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.message) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "" 
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ""
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_API_KEY  || ""


    if(typeof serviceID !== "string" && typeof templateID !== "string" && typeof publicKey !== "string") {
     console.log("ERROR NOT ENV VARIABLES NOT FOUND")
      return "ERROR NOT ENV VARIABLES NOT FOUND"
    }

const  template_params = {
    name: formData.name,
    email: formData.email,
    to_name: "Muhmmad Raza Aslam",
    message: formData.message,
  }



  emailjs.send(serviceID, templateID, template_params, publicKey).then((response) => {
    console.log(`Email Sent SuccessFully ${response}`)
    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }).catch((error) => console.log("Error Sending an Email",error))



    if (validate()) {
      alert('Form submitted successfully!');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="min-h-screen p-5 md:p-20 bg-[#97FEED] h-full">

      <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-x-8 md:space-y-0">
        
        {/* Our Info Section */}
        <div className="w-full md:w-1/3 bg-cover md:ml-8">
          <h1 className="text-[25.6px] leading-[1.3] font-black mb-[0.5em]">
           Our Info
          </h1>
          <h2 className='mt-5'>Call Us: +92 300 2283540</h2>
          <h2 className='mt-5'>Email: info@medipakinternational.com</h2>
        
          <h2 className='mt-5'>Denso Hall, Shop No 18-A,</h2>
          
          <h2 className='mt-1'>Madina Center Gate No 1 </h2>
          
          <h2 className='mt-1'>Main Market Quarter,</h2>
        
          <h2 className='mt-1'>karachi, Pakistan</h2>
        
          <h2 className=" mt-10 text-[25.6px] leading-[1.3] font-bold mb-[0.5em]">Medipak International Hours:</h2>
          <h2 className='mt-5'>Monday-Saturday: 9 a.m - 6 p.m </h2>
          <h2 className='mt-7'>Closed On Sundays </h2>
          
        </div>
        
        {/* Contact Us Section */}
        <div className="w-full md:w-1/2 max-w-lg p-4 bg-white rounded-lg shadow-2xl ">
          <h2 className="text-2xl font-semibold mb-8 text-center">Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <h1 className="block text-sm font-medium text-gray-700">Your Name (Required)</h1>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 p-1 block w-full border-[#D7D7D7] border-2 rounded-md shadow-sm focus:border-black"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div className="mb-4">
              <h1 className="block text-sm font-medium text-gray-700">Your Email (Required)</h1>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-1 block w-full border-[#D7D7D7] border-2 rounded-md shadow-sm focus:border-black"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="mb-4">
              <h1 className="block text-sm font-medium text-gray-700">Your Message (Required)</h1>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 p-1 block w-full border-[#D7D7D7] border-2 rounded-md shadow-sm focus:border-black"
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
