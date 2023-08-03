import { useCallback, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Alert, Box, Button, FormHelperText, Stack, Tab, Tabs, TextField, Typography } from '@mui/material';
import { Layout as AuthLayout } from '../../Layouts/auth/layout';
import { Link, useNavigate } from 'react-router-dom';
import { findUser, resetPassword, sendOtp } from '../../redux/action';
import { useDispatch } from 'react-redux'
import { Store } from 'react-notifications-component';

const ResetPassword = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [timer, setTimer] = useState(60)
  const [user , setuser] = useState(false)
  const [show , setShow] = useState('forget')
  const [verify , setVerify] = useState(false)
  const [message , setMessage] = useState(false)
  const [method, setMethod] = useState('email');
  const notification = {
    title: "Error !",
    message: "Configurable",
    autoClose : 4998,
    type: "danger",
    insert: "top",
    container: "top-right",
    dismiss: {
      duration: 4000,
    },
    animationIn: ["animate__animated animate__flipInX"], 
    animationOut: ["animate__animated animate__flipInX"] 
  };
  const formik = useFormik({
    initialValues: {
      email: 'demo@cinefy.io',
      submit: null
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required('Email is required'),
    }),
    onSubmit: async (values, helpers) => {
      try {
        await findUser(values.email).then(res=>{
            setuser(res)
            setShow('verify')
            Timer(res.phone)
        })
      } catch (err) {
        helpers.setStatus({ success: false });
        helpers.setErrors({ submit: err.message });
        helpers.setSubmitting(false);
      }
    } 
  });
 
  const handleMethodChange = useCallback(
    (event, value) => {
      setMethod(value);
    }, 
  )
  const verifyOtp = async(e)=>{
    if(parseInt(e?.target?.value) === verify){
        setMessage('')
        setShow('reset')
    }else if(e?.target?.value.length != 4){ 
      setMessage('Please enter 4-digits')
    }else{
      setMessage('Incorrect OTP , Please recheck !')
    }
    console.log(e?.target?.value,verify);
  }

  async function Timer(phone = user.phone) {
    await sendOtp({phone}).then((res)=>setVerify(res))
    setTimer(10)
    var newtimer = setInterval(()=> {
      setTimer((prev) => {
      if (prev === 0) {
        clearInterval(newtimer);
        return false;
      }
      return prev - 1;
    })    
    }, 1000)
  }
  const verifyPass = (e)=>{
    setuser({...user,password:e.target.value})
    if(e.target.value.length < 6){
       setMessage('Atleast 6 character is must')
    }else{
        setMessage('')
    }
  }
  const handleVerify = ()=>{
    Store.addNotification({
      ...notification, 
      message   
    })
  }
  return (
    <AuthLayout>
      <Box
        sx={{
          backgroundColor: 'background.paper',
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
          {show==='forget' && (<div>
            <Stack
              spacing={1}
              sx={{ mb: 3 }}
            >
              <Typography variant="h4">
                Forgot Password
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
              >
                Provide your known credentials to recover your account
              </Typography>
            </Stack>
            <Tabs
              onChange={handleMethodChange}
              sx={{ mb: 3 }}
              value={method}
            >
              <Tab
                label="Email"
                value="email"
              />
              <Tab
                label="Phone Number"
                value="phoneNumber"
              />
            </Tabs>
            {method === 'email' && (
              <form
                noValidate
                onSubmit={formik.handleSubmit}
              >
                <Stack spacing={3}>
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
                <Button
                  fullWidth
                  size="large"
                  sx={{ mt: 3 }}
                  onClick={() => navigate('/login')}
                >
                  Back to Login
                </Button>
                <Alert
                color="primary"
                severity="info"
                sx={{ mt: 3 }}
              >
                <div>
                  *By confirming otp will be sent to your registered phone number
                </div>
              </Alert>
              </form>
            )}
            {method === 'phoneNumber' && (
              <div>
                <Typography
                  sx={{ mb: 1 }}
                  variant="h6"
                >
                  Not available in the demo
                </Typography>
                <Typography color="text.secondary">
                  To prevent unnecessary costs we disabled this feature in the demo.
                </Typography>
              </div>
            )}
          </div>
          )}
          {show==='verify' &&(
            <div>
              <Stack spacing={1} sx={{ mb: 3 }}>
                <Typography variant="h4">
                  Verify OTP
                </Typography>
                <Typography color="text.secondary" variant="body2" >
                &nbsp;OTP has been sent to <b>+91 XXXXXX{user.phone[6]+user.phone[7]+user.phone[8]+user.phone[9]}</b>.Please enter your OTP to reset&nbsp;Password.
                </Typography> 
                <div style={{ display: "flex", justifyContent: "center" ,marginBottom:'100px'}}>

    </div>
    <Typography
                  color="error"
                  sx={{ mb: 30 }} 
                  variant="body2"
                >
                  {message}
                </Typography>
    {timer?(<Typography
                  color="error"
                  sx={{ mb: 30 }}
                  variant="body2"
                >
                  Resend OTP in 00:{timer}
                </Typography>):(
                  <Link
                  onClick={()=>Timer()}
                  style={{ textDecoration: 'none', color: '#1976D2' }}
                  className="link"
                >
                  Resend OTP
                </Link>
                )}
    <TextField sx={{ mt: 30 }} onChange={verifyOtp} />
    <Button
                fullWidth
                size="large"
                sx={{ mt: 3 }}
                type='button' 
                onClick={handleVerify}
                variant="contained"
              >
                Continue
              </Button>
              </Stack> 
            </div> 
          )} 
          {show==='reset' &&(
            <div>
              <Stack spacing={1} sx={{ mb: 3 }}>
                <Typography variant="h4">
                  ResetPassword
                </Typography>
                <Typography color="text.secondary" variant="body2" >
                    OTP verified Successfully ! Now you can create a new password for your account
                </Typography> 
                <div style={{ display: "flex", justifyContent: "center" ,marginBottom:'50px'}}>
                <Stack spacing={3}>

                </Stack>
    </div>

                  <TextField
                  sx={{ mb: 5 }}
                    fullWidth
                    label="New Password"
                    name="email"
                    type="password"
                    onChange={verifyPass}
                    required
                  /> 
                  <Typography
                  color="error"
                  sx={{ mb: 30 }} 
                  variant="body2"
                >
                  {message}
                </Typography>
    <Button
                fullWidth
                size="large"
                sx={{ mt: 5 }}
                type='button' 
                onClick={async()=>{
                    if(message){
                        handleVerify()
                    }else{
                       await resetPassword({_id:user._id,password:user.password}).then((res)=>navigate('/login'))
                    }
                }}
                variant="contained"  
              >
                Continue
              </Button>

              </Stack> 
              <Alert
                  color="primary"
                  severity="info"
                  sx={{ mt: 3 }}
                >
                  <div>
                    Create a strong password with a mix of numbers and Special charachters
                  </div>
                </Alert>
            </div> 
          )} 
        </Box>
      </Box>
    </AuthLayout>

  )
}


export default ResetPassword;
