import React from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Padding } from '@mui/icons-material';
import {useNavigate } from 'react-router-dom';


const signupFormSchema = Yup.object().shape({
  first_name: Yup.string().required("First Name is required"),
  last_name:Yup.string(),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone_number: Yup.number().required("Number is required"),
  password: Yup.string().required("Password is required"),
  re_password: Yup.string().required("Re-Type Password is required"),
  website_url: Yup.string().required("Website Url is required")
});

const inputStyle='border p-3 rounded-md bg-white focus:border-[#6c63ff]  focus:shadow-md focus:outline-none  '
const Signup = () => {
  const navigate =useNavigate()
  const handleSignup = useFormik({
    initialValues: {
        first_name: '',
        last_name:'',
        email: '',
        phone_number: '',
        password: '',
        re_password: '',
        website_url: ''
    },
    validationSchema: signupFormSchema,
    onSubmit: async (values) => {
        console.log(values)
    }
})

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <h1 className="text-center text-2xl font-bold text-[#5348c8] sm:text-3xl">Start getting more sales with your AI identity now!</h1>
        <form action="#" className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8" >
          <div className="flex flex-col gap-[10px] m-auto text-start">
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                name='first_name'
                id="first-name"
                placeholder="First Name"
                className={inputStyle}
                onChange={handleSignup.handleChange}
                onBlur={handleSignup.handleBlur}
                value={handleSignup.values.first_name}
              />
              {handleSignup.touched.first_name && handleSignup.errors.first_name ? (
                <div className="text-red-500 text-xs">{handleSignup.errors.first_name}</div>
              ) : null}

              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                id="last-name"
                placeholder="Last Name"
                name='last_name'
                className={inputStyle}
                onChange={handleSignup.handleChange}
                onBlur={handleSignup.handleBlur}
                value={handleSignup.values.last_name}
              />
          
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                name="email"
                className={inputStyle}
                onChange={handleSignup.handleChange}
                onBlur={handleSignup.handleBlur}
                value={handleSignup.values.email}
              />
              {handleSignup.touched.email && handleSignup.errors.email ? (
                <div className="text-red-500 text-xs">{handleSignup.errors.email}</div>
              ) : null}
            
              <label htmlFor="phone-number">Phone Number</label>
              <input
                type="tel"
                id="phone-number"
                placeholder="Phone Number"
                name='phone_number'
                className={inputStyle}
                onChange={handleSignup.handleChange}
                onBlur={handleSignup.handleBlur}
                value={handleSignup.values.phone_number}
              />
              {handleSignup.touched.phone_number && handleSignup.errors.phone_number ? (
                <div className="text-red-500 text-xs">{handleSignup.errors.phone_number}</div>
              ) : null}
           
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                name="password"
                className={inputStyle}
                onChange={handleSignup.handleChange}
                onBlur={handleSignup.handleBlur}
                value={handleSignup.values.password}
              />
              {handleSignup.touched.password && handleSignup.errors.password ? (
                <div className="text-red-500 text-xs">{handleSignup.errors.password}</div>
              ) : null}
           
              <label htmlFor="re-password">Re-Type Password</label>
              <input
                type="password"
                id="re-password"
                placeholder="Re-Type Password"
                name="re_password"
                className={inputStyle}
                onChange={handleSignup.handleChange}
                onBlur={handleSignup.handleBlur}
                value={handleSignup.values.re_password}
              />
              {handleSignup.touched.re_password && handleSignup.errors.re_password ? (
                <div className="text-red-500 text-xs">{handleSignup.errors.re_password}</div>
              ) : null}
           
              <label htmlFor="website-url">Website URL</label>
              <input
                type="url"
                id="website-url"
                placeholder="Website URL"
                name="website_url"
                className={inputStyle}
                onChange={handleSignup.handleChange}
                onBlur={handleSignup.handleBlur}
                value={handleSignup.values.website_url}
              />
              {handleSignup.touched.website_url && handleSignup.errors.website_url ? (
                <div className="text-red-500 text-xs">{handleSignup.errors.website_url}</div>
              ) : null}
          </div>
           
          <div className="flex justify-center items-center">
            <button className="bg-[#5348c8] px-10 py-3 rounded-md text-white" onClick={()=>navigate("/dashboard")}>
              Sign Up &amp; get your code
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup  

