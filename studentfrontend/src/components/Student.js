import React, { useEffect, useState } from 'react';
import { styled } from '@mui/system'; // Import styled from @mui/system for Material-UI version 5
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';

// Define styled components
const StyledPaper = styled(Paper)({
  padding: '50px 20px',
  width: 600,
  margin: '20px auto',
});

const FormContainer = styled('div')({
  margin: '10px 0',
});

export default function Student() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [students, setStudents] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    const student = { name, address };
    console.log(student);
    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student)
    }).then(() => {
      console.log("New Student added");
    });
  };

  useEffect(() => {
    fetch("http://localhost:8080/student/getAll")
      .then(res => res.json())
      .then((result) => {
        setStudents(result);
      });
  }, []);

  return (
    <Container>
      <StyledPaper elevation={3}>
        <h1 style={{ color: "blue" }}><u>Add Student</u></h1>
        <FormContainer>
          <TextField label="Student Name" variant="outlined" fullWidth
            value={name} onChange={(e) => setName(e.target.value)}
          />
          <TextField label="Student Address" variant="outlined" fullWidth
            value={address} onChange={(e) => setAddress(e.target.value)}
          />
          <Button variant="contained" color="secondary" onClick={handleClick}>
            Submit
          </Button>
        </FormContainer>
      </StyledPaper>

      <h1>Students</h1>

      <StyledPaper elevation={3}>
        {students.map(student => (
          <Paper key={student.id} style={{ margin: "10px", padding: "15px", textAlign: "left" }}>
            Id: {student.id}<br />
            Name: {student.name}<br />
            Address: {student.address}
          </Paper>
        ))}
      </StyledPaper>
    </Container>
  );
}
