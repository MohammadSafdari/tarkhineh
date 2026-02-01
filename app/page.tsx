import TextField from '@mui/material/TextField';

export default function Home() {
  return (
    <div>
         <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
    </div>
  );
}

