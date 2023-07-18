import styles from '../../styles/SignUp.module.css';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function SignUp() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Inscription</h1>
      <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />

      <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />

<Button variant="contained" disabled>
  Disabled
</Button>
<Button variant="contained" href="#contained-buttons">
  Link
</Button>

    </div>
  );
}

export default SignUp;
