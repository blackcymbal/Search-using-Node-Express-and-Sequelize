import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [name, setName] = useState("");

  const fetchStudent = async () => {
    const { data } = await axios.get(
      `http://localhost:5000/students?keyword=${keyword}`
    );
    setStudents(data);
  };

  useEffect(() => {
    fetchStudent();
  }, [fetchStudent]);

  return (
    <>
      <div>
        <h1></h1>
      </div>
      <Stack spacing={2} sx={{ width: 300 }}>
        <Autocomplete
          freeSolo
          id='free-solo-2-demo'
          disableClearable
          options={students.map((option) => option.name)}
          renderInput={(params) => (
            <TextField
              {...params}
              label='Search...'
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
              value={name}
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
            />
          )}
        />
      </Stack>
      <div>
        <h1></h1>
      </div>

      {students.map((student) => {
        return (
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            <ListItem alignItems='flex-start'>
              <ListItemAvatar>
                <Avatar alt='Remy Sharp' src='' />
              </ListItemAvatar>
              <ListItemText
                primary={<React.Fragment>{student.name}</React.Fragment>}
                secondary={student.email}
              />
            </ListItem>
            <Divider variant='inset' component='li' />
          </List>
        );
      })}
    </>
  );
};

export default Students;
