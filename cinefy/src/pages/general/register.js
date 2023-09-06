import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Alert, Box, Button, Stack, Tab, Tabs, TextField, Typography } from '@mui/material';
import { sendOtp, signUp } from '../../utils/api';
import { Layout as AuthLayout } from '../../Layouts/auth/layout';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useRef, useState } from 'react';

const Page = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [timer, setTimer] = useState(60)
  const [verify, setVerify] = useState(false)
  const [message, setMessage] = useState('')
  const [user, setUser] = useState({ type: 'user' });
  const [code, setCode] = useState([]);

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
        .min(6)
        .max(255)
        .required('Password is required')
    }),
    onSubmit: async (values, helpers) => {
      try {
        const { email, name, phone, password } = values
        setUser({ ...user, email, name, phone, password })
        setVerify(1234)
        console.log(user);
        Timer(phone)

      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    }
  });

  const inputRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];

  const handleInput = (e, index) => {
    const value = e.target.value;
    if(e.which === 8 || e.keyCode === 8){
      setMessage('')
       if (value.length === 0 && index > 0) {
        inputRefs[index - 1].current.focus();
      }
    }
    else if (e.keyCode >= 48 && e.keyCode <= 57) {
      setMessage('')
      if(value.length === 1 && index < inputRefs.length - 1){
        inputRefs[index + 1].current.focus()
      }
    }else{
      setMessage('please enter a valid number !')
    }
  };

  const verifyOtp = async (e) => {
    const value = code[0] + code[1] + code[2] + code[3]
    if (parseInt(value) === verify) {
      setMessage('')
      await signUp(user, dispatch) && navigate('/')
    } else if (value.length !== 4) {
      setMessage('Please enter 4-digits')
    } else {
      setMessage('Incorrect OTP , Please recheck !')
    }
  }

  async function Timer(phone = user.phone) {
    await sendOtp({ phone }).then((res) => setVerify(res.code))
    setTimer(60)
    var newtimer = setInterval(() => {
      setTimer((prev) => {
        if (prev === 0) {
          clearInterval(newtimer);
          return false;
        }
        return prev - 1;
      })
    }, 1000)
  }

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
            <Stack spacing={1} sx={{ mb: 3 }} >
              <Typography variant="h4">
                Register
              </Typography>
              <Typography color="text.secondary" variant="body2" >
                Already have an account?&nbsp;
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
              onChange={(event, value) => setUser({ ...user, type: value })}
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
          </div>
          ) : (
            <div>
              <Stack spacing={1} sx={{ mb: 3 }}>
                <Typography variant="h4">
                  Verify OTP
                </Typography>
                <Typography color="text.secondary" variant="body2" >
                  &nbsp;OTP has been sent to <b>+91 XXXXXX{user.phone[6] + user.phone[7] + user.phone[8] + user.phone[9]}</b>.Please enter your OTP to complete  &nbsp;registration process.
                </Typography>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: '100px' }}>
                <Stack direction={"row"} sx={{mt:6}} spacing={2}>
                  {inputRefs.map((ref, index) => (
                    <TextField
                      key={index}
                      inputRef={ref}
                      variant="outlined"
                      size="small"
                      inputProps={{
                        maxLength: 1,
                      }}
                      onKeyDown={(e) => handleInput(e, index)}
                      onChange={(e) =>setCode(pre=>{pre[index] = e.target.value
                      return pre})}
                      style={{ width: "38px", textAlign: "center" }}
                      error={message}
                    />
                  ))}

                </Stack>
                </div>
                <Typography
                  color="error"
                  // sx={{ mb: 30 }}
                  variant="body2"
                >
                  {message}
                </Typography>
                {timer ? (<Typography
                  color="error"
                  // sx={{ mb: 30 }}
                  variant="body2"
                >
                  Resend OTP in 00:{timer}
                </Typography>) : (
                  <Link
                    onClick={() => Timer()}
                    style={{ textDecoration: 'none', color: '#1976D2' }}
                    className="link"
                  >
                    Resend OTP
                  </Link>
                )}
                <Button
                  
                  size="large"
                  sx={{ mt: 3 }}
                  type='button'
                  onClick={verifyOtp}
                  variant="contained"
                >
                  Continue
                </Button>
              </Stack>
            </div>
          )}
        </Box>
      </Box>
    </AuthLayout>
  );
};



export default Page;
