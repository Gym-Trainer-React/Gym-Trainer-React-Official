import React from 'react';
import { useForm } from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Container, Card, TextField,Box } from '@mui/material';
import "./SignUpForm.css"
import Button from '@mui/material/Button';
import "../../../pages/AuthPage.css"




 const SignUpFormRC: React.FC = () =>{
    

    type UserSubmitForm = {
        firstName: string;
        lastName: string;
        username: string;
        password: string;
        confirmPassword: string;

    };


        const validation = Yup.object().shape({
            firstName: Yup.string().required("First name is required"),
            lastName: Yup.string().required("Last name is required"),
            username: Yup.string().required("Username is required").min(5,"Username must be at least 5 characters")
            .max(20,"Username must not exceed 20 characters"),
            password: Yup.string().required("Password is required").min(6,"Password must be at least 6 characters")
            .max(30, "Password must not exceed 30 characters"),
            confirmPassword: Yup.string().required("Passwords must match").oneOf([Yup.ref('password'), null], 'Passwords must match')
            


        });

        

        const onSubmit = (data: UserSubmitForm) => {
          //data is the form
            console.log(JSON.stringify(data, null, 2));
        }

        const {
            register,
            handleSubmit,
            reset,
            formState: {errors} } = useForm<UserSubmitForm>({
                resolver: yupResolver(validation)
            });
            
            

        

        
    return( <Container  id="register" className='registrationCard'>
      <Card style={{width : "30rem", height : "35rem"}}>

        <h1>New User Registration</h1>
            
          
          
            <div className="register-form" id="forms">
      <form onSubmit={handleSubmit(onSubmit)}>
    
     
        <div className="form-group">
       
       
        
          <label>First Name</label>
          <input
            type="text" placeholder='First Name'
            {...register('firstName')}
            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
          />
          <div id="invalid-input">{errors.firstName?.message}</div>
         
          
        </div>
        
        
        

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text" placeholder='Last Name'
            {...register('lastName')}
            className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
          />
          <div id="invalid-input">{errors.lastName?.message}</div>
        </div>


        <div className="form-group">
          <label>Username</label>
          <input
            type="text" placeholder='Username'
            {...register('username')}
            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
          />
          <div id="invalid-input">{errors.username?.message}</div>
        </div>


        <div className="form-group">
          <label>Password</label>
          <input
            type="password" placeholder='Password'
            {...register('password')}
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
          />
          <div id="invalid-input">{errors.password?.message}</div>
        </div>


        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password" placeholder='Confirm Password'
            {...register('confirmPassword')}
            className={`form-control ${
              errors.confirmPassword ? 'is-invalid' : ''
            }`}
          />
          <div id="invalid-input">
            {errors.confirmPassword?.message}
          </div>
        </div>
        
        <div className="form-group">
          <Button type="submit" variant="contained">
            Register
          </Button>
          <Button
            type="button"
            onClick={() => reset()}
            variant="outlined"
          >
            Reset
          </Button>
        </div>
      </form>
    </div>

    

    </Card>
    </Container>
    
        
    )


}

export default SignUpFormRC