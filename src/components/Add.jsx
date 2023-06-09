import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormControlLabel,
  IconButton,
  MenuItem,
  OutlinedInput,
  Switch,
  TextField,
} from "@mui/material";
import { red, green } from "@mui/material/colors";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";

export default function Add(props) {
  const [visible, setVisible] = useState(true);
  // const randomId = (Math.random() * 1).toString()

  const initialState = {
    id: props.rowVal.length + 1,
    name: "",
    email: "",
    phone_no: "",
    position: "",
    description: "",
    status: false,
  };
  const [personDtl, setPersonDtl] = useState(initialState);

  const CancelButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    "&:hover": {
      backgroundColor: red[700],
    },
  }));

  const SubmitButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    color: "white",
    "&:hover": {
      backgroundColor: green[700],
    },
  }));

  const handleCancel = () => {
    setVisible(false);
  };

  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor:
            theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));

  const positions = [
    {
      value: "Senior",
      label: "Senior",
    },
    {
      value: "Junior",
      label: "Junior",
    },
    {
      value: "Trainee",
      label: "Trainee",
    },
  ];

  const handleSubmit = () => {
    console.log(personDtl);
    // const newData =
    //   {
    //     id: id,
    //     name: name,
    //     email: email,
    //     phone_no: phone,
    //     position: position,
    //     description: description,
    //     status: status,
    //   };
    props.onAdd((preg) => {
      return [...preg, personDtl];
    });
    setVisible(false);
    setPersonDtl(initialState);
    // setMyData((prevState) => {
    //   let newOne = [...prevState.rows, newData];
    //   props.onAdd(newOne)
    //   return newOne;
    // });
  };

  return (
    <>
      {visible ? (
        <div className="add-wrapper">
          <div className="add">
            <div className="add-card">
              <div className="close">
                <IconButton aria-label="delete" onClick={handleCancel}>
                  <CloseIcon />
                </IconButton>
              </div>
              <div>
                <label htmlFor="input">
                  Name <span style={{ color: "red" }}>*</span>
                </label>
                <br />
                <OutlinedInput
                  sx={{ height: "3.5ch", padding: "0px" }}
                  placeholder="Please enter text"
                  value={props.isEdit ? props.form.name : personDtl.name}
                  onChange={(e) => {
                    setPersonDtl((preg) => {
                      return { ...preg, name: e.target.value };
                    });
                  }}
                />
              </div>
              <div>
                <label htmlFor="input">
                  Email <span style={{ color: "red" }}>*</span>
                </label>
                <br />
                <OutlinedInput
                  sx={{ height: "3.5ch", padding: "0px" }}
                  placeholder="Please enter text"
                  value={props.isEdit ? props.form.email : personDtl.email}
                  onChange={(e) => {
                    setPersonDtl((preg) => {
                      return { ...preg, email: e.target.value };
                    });
                  }}
                />
              </div>
              <div>
                <label htmlFor="input">
                  Phone No <span style={{ color: "red" }}>*</span>
                </label>
                <br />
                <OutlinedInput
                  sx={{ height: "3.5ch", padding: "0px" }}
                  placeholder="Please enter text"
                  value={props.isEdit ? props.form.phone_no : personDtl.phone}
                  onChange={(e) => {
                    setPersonDtl((preg) => {
                      return { ...preg, phone: e.target.value };
                    });
                  }}
                />
              </div>
              <div>
                <label htmlFor="input">
                  Position <span style={{ color: "red" }}>*</span>
                </label>
                <br />
                <TextField
                  id="outlined-select-currency"
                  select
                  value={
                    props.isEdit ? props.form.position : personDtl.position
                  }
                  onChange={(e) => {
                    setPersonDtl((preg) => {
                      return { ...preg, position: e.target.value };
                    });
                  }}
                  sx={{ width: "37ch" }}
                  className="dropdown"
                >
                  {positions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <div>
                <label htmlFor="input">
                  Description <span style={{ color: "red" }}>*</span>
                </label>
                <br />
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  rows={4}
                  sx={{ width: "37ch" }}
                  placeholder="Please enter text"
                  value={
                    props.isEdit
                      ? props.form.description
                      : personDtl.description
                  }
                  onChange={(e) => {
                    setPersonDtl((preg) => {
                      return { ...preg, description: e.target.value };
                    });
                  }}
                />
              </div>
              <div>
                <label htmlFor="input">
                  Status <span style={{ color: "red" }}>*</span>
                </label>
                <br />
                {/* <ToggleButtonGroup
              value={status}
              exclusive
              onChange={handleStatusChange}
            >
              <ToggleButton value={true}>Active</ToggleButton>
              <ToggleButton value={false}>Inactive</ToggleButton>
            </ToggleButtonGroup> */}
                <FormControlLabel
                  control={<IOSSwitch sx={{ m: 1 }} />}
                  label=""
                  checked={props.isEdit ? props.form.status : personDtl.status}
                  onChange={(e) => {
                    setPersonDtl((preg) => {
                      return { ...preg, status: e.target.checked };
                    });
                  }}
                />
              </div>
              <div className="buttons">
                <Button variant="outlined" color="error" onClick={handleCancel}>
                  Cancel
                </Button>
                <SubmitButton
                  variant="contained"
                  className="submit"
                  onClick={handleSubmit}
                >
                  Submit
                </SubmitButton>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
