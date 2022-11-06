import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';

function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="outlined"
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      {mode === 'light' ? 'Turn dark' : 'Turn light'}
    </Button>
  );
}

export const AdminLogin = () => {
         const navigate = useNavigate();
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const handleSubmit = ()=>{
              if(email == "admin@gmail.com" && password == "masai"){
                  alert("Login successfull");
                  navigate("/adminpage");
              }else{
                 alert("Please check your login credential");
              }   
        }
            

  return (
    <CssVarsProvider>
    <main>
      <ModeToggle />
      <Sheet
        sx={{
          width: 300,
          mx: 'auto', // margin left & right
          my: 4, // margin top & botom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md',
        }}
        variant="outlined"
      >
        <div>
          <Typography level="h4" component="h1">
            <b>Welcome to Tericsoft !</b>
          </Typography>
          <Typography level="body2">Sign in to continue.</Typography>
        </div>
        <TextField
          // html input attribute
          onChange={(e)=>setEmail(e.target.value)}
          name="email"
          type="email"
          placeholder="johndoe@email.com"
          // pass down to FormLabel as children
          label="Email"
        />
        <TextField
         onChange={(e)=>setPassword(e.currentTarget.value)}
          name="password"
          type="password"
          placeholder="password"
          label="Password"
        />
        <Button sx={{ mt: 1 /* margin top */ }} onClick={()=>handleSubmit()}  >Log in</Button>
        <Typography
          endDecorator={<Link href="#">Sign up</Link>}
          fontSize="sm"
          sx={{ alignSelf: 'center' }}
        >
          Don&apos;t have an account?
        </Typography>
      </Sheet>
    </main>
   </CssVarsProvider>
        
  )
}
