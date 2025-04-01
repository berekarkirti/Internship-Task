'use client';

import { Field, Formik, Form, ErrorMessage } from 'formik';
import React from 'react';
import * as yup from 'yup';
import { toast } from 'react-toastify';


const RegisterPage = () => {
    const validationSchema = yup.object({
        name: yup.string().required('Name is required'),
        email: yup.string().email('Please enter a valid email').required('Email is required'),
        password: yup.string()
            .min(6, 'Password must be at least 6 characters long')
            .required('Password is required'),
    });

    const initialValue = {
        name: '',
        email: '',
        password: '',
    };

    const onSubmitHandler = async (values, helpers) => {
        try {
            console.log(values)
            toast.success("Login successful");
        }
        catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className='min-h-screen flex items-center justify-center'>
            <Formik
                initialValues={initialValue}
                validationSchema={validationSchema}
                onSubmit={onSubmitHandler}
            >
                <Form className="w-1/2 border border-white shadow rounded-md overflow-hidden px-3 py-4">
                    <div className="mb-3">
                        <label htmlFor="name">
                            Name <span className='text-red-500'>*</span>
                        </label>
                        <Field
                            name="name"
                            type="text"
                            className="w-full py-2 px-3 text-white bg-transparent outline-none border rounded-md"
                            placeholder="Enter Your Name"
                        />
                        <ErrorMessage className='text-xs text-red-500' name='name' component={'p'} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name">
                            Email <span className='text-red-500'>*</span>
                        </label>
                        <Field
                            name="email"
                            type="email"
                            className="w-full py-2 px-3 text-white bg-transparent outline-none border rounded-md"
                            placeholder="Enter Your Email"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="name">
                            Password <span className='text-red-500'>*</span>
                        </label>
                        <Field
                            name="password"
                            type="password"
                            className="w-full py-2 px-3 text-white bg-transparent outline-none border rounded-md"
                            placeholder="Enter Your Password"
                        />
                    </div>
                    <div className="mg-3">
                        <button
                            type="submit"
                            className='w-full py-2 border border-white rounded-md flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300'>
                            Register
                        </button>                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default RegisterPage;
