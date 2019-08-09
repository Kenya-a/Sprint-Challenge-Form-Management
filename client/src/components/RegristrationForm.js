import React, { useState, useEffect } from 'react';
import { withFormik,Form, Field} from 'formik';

 import * as Yup from 'yup';
//  import axios from 'axios';


function RegristrationForm({values, errors, touched}){

    return <div className = 'form'>
        <Form>

          <div>
            {errors.username && <p>{errors.username}</p>}
             <Field
                type = 'text'
                name = 'username'
                placeholder = 'Username'
            />
          </div>
          
          <div>
            {touched.username && errors.password && <p>{errors.password}</p>}
             <Field
                type = 'password'
                name = 'password'
                placeholder = 'password'
              />
          </div>

            <button type = 'submit'>Submit</button>

        </Form>


    </div>
};

const FormikRegristrationForm = withFormik({
    mapPropsToValues({username, password}){

        return{
            username: username || '',
            password: password || '',
        };
    },

    handleSubmit(values){
        console.log('Handle Submit Values:',values)

    },

    //========Validation Schema============

    validationSchema: Yup.object().shape({

        username: Yup.string()
         .min(1,'username not valid.')
         .required('username is required.'),
        

        password: Yup.string()
         .min(4, 'Password must be longer than 4 characters')
         .required('Password is required'),

    }),

    //=====================================
})(RegristrationForm)

export default FormikRegristrationForm