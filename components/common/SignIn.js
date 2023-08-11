import styles from '../../styles/SignIn.module.css';

import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
// REDUCERS
import { loggedName, loggedToken, loggedStatus } from '../../reducers/user';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

function SignIn() {

  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [errorMsg, setErrorMsg] = useState(false)

  const isFormValid = email && password;

  const handleSubmit = () => {
    fetch('https://frappadingue-backend.vercel.app/users/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    }).then(response => response.json())
      .then(data => {
        console.log(data)
        if (data.result === false) {
          console.log('pas d user')
          setErrorMsg(true)
          
        }
        else { 
          setErrorMsg(false)
          dispatch( loggedStatus ())
         }
        
      //dispatch( loggedName (data.name))
      //dispatch( loggedSurname (data.surname))
      //dispatch( loggedToken (data.token)) ;
      //setShowRegisterForm(true)
      });
  
    //console.log(name, surname, email, password);
  };
  
  //console.log(name, surname, email, password);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Connexion</h1>

      { errorMsg &&  <Alert severity="warning">Email / mot de passe non valides</Alert>}
     
     
      <TextField
          required
          id="outlined-required"
          label="Email@email.com"
          defaultValue=""
          onChange={(e) => setEmail(e.target.value)} value={email}
          size="small"
        />

      <TextField
          id="outlined-password-input"
          label="Mot de passe"
          type="password"
          autoComplete=""
          onChange={(e) => setPassword(e.target.value)} value={password}
          size="small"
        />


<Button variant="contained" href="#contained-buttons" onClick={ () => handleSubmit() } disabled={!isFormValid} className='mt-10'>
  SE CONNECTER
</Button>

    </div>
  );
}

export default SignIn;
