import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Alert, Box, Button, Stack, Tab, Tabs, TextField, Typography } from '@mui/material';
import { sendOtp, signUp } from '../redux/action';
import { Layout as AuthLayout } from '../Layouts/auth/layout';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const Page = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [verify, setVerify] = useState(false)
  const [user, setUser] = useState({ type: 'user' });
  const formik = useFormik({
    initialValues: {
      email: 'sample@gmail.com',
      name: 'sample',
      phone: '1234567890',
      password: 'qwerty',
      submit: null
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
      name: Yup
        .string()
        .max(255)
        .required('Name is required'),
      phone: Yup.string()
        .test('phone', 'Must be a valid phone number', (value) => {
          const phoneRegExp = /^[0-9]{10}$/;
          return phoneRegExp.test(value);
        })
        .required('Phone number is required'),
      password: Yup
        .string()
        .max(255)
        .required('Password is required')
    }),
    onSubmit: async (values, helpers) => {
      try {
        const { email, name, phone, password } = values
        setUser({ ...user, email, name, phone, password })
        setVerify(true)
        console.log(user);
        // const otp = await sendOtp({phone})
        // console.log(otp);
        // await signUp({email, name, phone, password , type},dispatch) && navigate('/')
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    }
  });

  return (
    <AuthLayout>
      <Box
        sx={{
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            maxWidth: 550,
            px: 3,
            py: '100px',
            width: '100%'
          }}
        >
          {!verify ? (<div>
            <Stack
              spacing={1}
              sx={{ mb: 3 }}
            >
              <Typography variant="h4">
                Register
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
              >
                Already have an account?
                &nbsp;
                <Link
                  to="/login"
                  style={{ textDecoration: 'none', color: '#1976D2' }}
                  className="link"
                >
                  Sign in
                </Link>
              </Typography>
            </Stack>
            <Tabs
              onChange={(event, value) => {
                setUser({ ...user, type: value });
              }}
              sx={{ mb: 3 }}
              value={user.type}
            >
              <Tab
                label="USER"
                value="user"
              />
              <Tab
                label="Recruiter"
                value="recruiter"
              />
            </Tabs>
            <form
              noValidate
              onSubmit={formik.handleSubmit}
            >
              <Stack spacing={3}>
                <TextField
                  error={!!(formik.touched.name && formik.errors.name)}
                  fullWidth
                  helperText={formik.touched.name && formik.errors.name}
                  label="Name"
                  name="name"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                <TextField
                  error={!!(formik.touched.email && formik.errors.email)}
                  fullWidth
                  helperText={formik.touched.email && formik.errors.email}
                  label="Email Address"
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="email"
                  value={formik.values.email}
                />
                <TextField
                  error={!!(formik.touched.phone && formik.errors.phone)}
                  fullWidth
                  helperText={formik.touched.phone && formik.errors.phone}
                  label="Phone Number"
                  name="phone"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="text"
                  value={formik.values.phone}
                />
                <TextField
                  error={!!(formik.touched.password && formik.errors.password)}
                  fullWidth
                  helperText={formik.touched.password && formik.errors.password}
                  label="Password"
                  name="password"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  type="password"
                  value={formik.values.password}
                />
              </Stack>
              {formik.errors.submit && (
                <Typography
                  color="error"
                  sx={{ mt: 3 }}
                  variant="body2"
                >
                  {formik.errors.submit}
                </Typography>
              )}
              <Button
                fullWidth
                size="large"
                sx={{ mt: 3 }}
                type="submit"
                variant="contained"
              >
                Continue
              </Button>
              <Alert
                color="primary"
                severity="info"
                sx={{ mt: 3 }}
              >
                <div>
                  *By confirming otp will be sent to your provided phone number
                </div>
              </Alert>
            </form>
          </div>) : (
            <div>
              <Stack spacing={1} sx={{ mb: 3 }}>
                <Typography variant="h4">
                  Verify OTP
                </Typography>
                <Typography color="text.secondary" variant="body2" >
                  &nbsp; OTP has been sent to +91 {user.phone}
                </Typography> 
              </Stack>
            </div>
          )}
        </Box>
      </Box>
    </AuthLayout>
  );
};



export default Page;
