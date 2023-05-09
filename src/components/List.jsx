import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import {
  FormControlLabel,
  IconButton,
  Switch,
  useMediaQuery,
} from "@mui/material";
import { GridDeleteIcon } from "@mui/x-data-grid";
import { useMemo } from "react";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { blue } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import Add from "./Add";
import SearchIcon from "@mui/icons-material/Search";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import { useTheme } from "@material-ui/core/styles";
import { BooleanField } from "@mui/x-data-grid-pro";
import { GridToolbarContainer } from "@mui/x-data-grid";
import { GridToolbarFilterButton } from "@mui/x-data-grid";
import { useGridFilter } from "@mui/x-data-grid/internals";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CloseIcon from "@mui/icons-material/Close";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useRef } from "react";
import { DataArrayOutlined } from "@mui/icons-material";
import myData from '../data.json';


const useStyles = makeStyles({
  root: {
    "& .MuiDataGrid-columnsContainer": {
      backgroundColor: "#E8EAF6",
    },
    "& .MuiDataGrid-iconSeparator": {
      display: "none",
    },
    "& .MuiDataGrid-columnHeaderTitle": {
      fontWeight: "bold",
    },
  },
});

export default function List() {

  const [rowId, setRowId] = useState(null);
  const [visible, setVisible] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isEditVisible, setIsEditVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [form, setForm] = useState({});
  const [viewForm, setViewForm] = useState({});
  const [deleteForm, setDeleteForm] = useState({});
  const [open, setOpen] = useState(false);
  const [view, setView] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [query, setQuery] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef();

  // const handleClickOpen = () => {
  //   console.log("Open");
  //   setOpen(true);
  // };

  const handleClickView = () => {
    console.log("Open");
    setView(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleViewClose = () => {
    setView(false);
  };

  const [newData, setNewData] = useState({});

  const columns = useMemo(
    () => [
      {
        field: "id",
        headerName: "ID",
        width: 70,
        headerClassName: "super-app-theme--header",
      },
      {
        field: "name",
        headerName: "NAME",
        width: 130,
        headerClassName: "super-app-theme--header",
      },
      {
        field: "email",
        headerName: "EMAIL",
        width: 230,
        headerClassName: "super-app-theme--header",
      },
      {
        field: "phone_no",
        type:"string",
        headerName: "PHONE NO",
        width: 130,
        headerClassName: "super-app-theme--header",
      },
      {
        field: "position",
        headerName: "POSITION",
        width: 120,
        headerClassName: "super-app-theme--header",
      },
      {
        field: "description",
        headerName: "DESCRIPTION",
        width: 300,
        headerClassName: "super-app-theme--header",
      },
      {
        field: "status",
        headerName: "STATUS",
        type: "boolean",
        width: 80,
        headerClassName: "super-app-theme--header",
        renderCell: (params) => <Toggle params={params} />,
      },
      {
        field: "actions",
        headerName: "ACTIONS",
        type: "actions",
        renderCell: (params) => <Actions params={params} />,
        width: 120,
        headerClassName: "super-app-theme--header",
      },
    ],
    [rowId]
  );

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const toggleEditVisibility = () => {
    setIsEditVisible(!isEditVisible);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setVisible(true);
  };

  const handleReset = () => {
    setSearchTerm("");
    setVisible(false);
  };

  // const [rows, setRows] = useState([
  //   {
  //     id: 1,
  //     name: "tbelton0",
  //     email: "mellissen0@friendfeed.com",
  //     phone_no: "0925193798",
  //     status: true,
  //     position: "Trainee",
  //     description:
  //       "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
  //   },
  //   {
  //     id: 2,
  //     name: "pfluger1",
  //     email: "cdrought1@yahoo.com",
  //     phone_no: "5997139239",
  //     status: true,
  //     position: "Senior",
  //     description:
  //       "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
  //   },
  //   {
  //     id: 3,
  //     name: "hokuddyhy2",
  //     email: "ahadkins2@ucla.edu",
  //     phone_no: "0329269208",
  //     status: true,
  //     position: "Junior",
  //     description:
  //       "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  //   },
  //   {
  //     id: 4,
  //     name: "bcallf3",
  //     email: "dschrir3@reverbnation.com",
  //     phone_no: "0267968426",
  //     status: false,
  //     position: "Senior",
  //     description:
  //       "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  //   },
  //   {
  //     id: 5,
  //     name: "jkornel4",
  //     email: "mcarnihan4@spiegel.de",
  //     phone_no: "4126433473",
  //     status: true,
  //     position: "Trainee",
  //     description:
  //       "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
  //   },
  //   {
  //     id: 6,
  //     name: "dfihelly5",
  //     email: "tfanner5@google.nl",
  //     phone_no: "0801645832",
  //     status: false,
  //     position: "Trainee",
  //     description:
  //       "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
  //   },
  //   {
  //     id: 7,
  //     name: "rjamrowicz6",
  //     email: "ageratasch6@bravesites.com",
  //     phone_no: "0781523842",
  //     status: true,
  //     position: "Senior",
  //     description:
  //       "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
  //   },
  //   {
  //     id: 8,
  //     name: "smidgely7",
  //     email: "bchuck7@tuttocitta.it",
  //     phone_no: "8700692409",
  //     status: false,
  //     position: "Junior",
  //     description:
  //       "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
  //   },
  //   {
  //     id: 9,
  //     name: "dbeecker8",
  //     email: "ftestro8@arizona.edu",
  //     phone_no: "0174913397",
  //     status: true,
  //     position: "Senior",
  //     description:
  //       "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  //   },
  //   {
  //     id: 10,
  //     name: "jpiggin9",
  //     email: "vkienlein9@va.gov",
  //     phone_no: "1803114703",
  //     status: false,
  //     position: "Trainee",
  //     description:
  //       "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
  //   },
  // ]);

  const [rows, setRows] = useState(myData)

  const filteredRows = rows.filter((row) => {
    return searchTerm.toLowerCase() === ""
      ? row
      : row.name.toLowerCase().includes(searchTerm) ||
          row.id.toString().toLowerCase().includes(searchTerm) ||
          row.email.toLowerCase().includes(searchTerm) ||
          row.phone_no.toLowerCase().includes(searchTerm) ||
          row.position.toLowerCase().includes(searchTerm) 
  });

  // const filteredRows = rows.filter(
  //   (i) =>
  //     i.id.toString() === searchTerm ||
  //     i.name === searchTerm ||
  //     i.email === searchTerm ||
  //     i.position === searchTerm ||
  //     i.phone_no === searchTerm ||
  //     i.status === searchTerm
  // );

  // const handleEditCellChange = ({ id, field, value }) => {
  //   setRows((prevRows) => {
  //     const index = prevRows.findIndex((row) => row.id === id);
  //     const updatedRows = [...prevRows];
  //     updatedRows[index] = { ...updatedRows[index], [field]: value };
  //     return updatedRows;
  //   });
  // };

  const AddButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(blue[500]),
    backgroundColor: "#1f1966",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: "#1f1979",
    },
  }));

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

  const Toggle = (params) => {
    return (
      <>
        <FormControlLabel
          control={<IOSSwitch sx={{ m: 1 }} />}
          label=""
          checked={params.params.row.status}
        />
      </>
    );
  };

  const handleDelete = (idToDelete) => {
    setRows(rows.filter((item) => item.id !== idToDelete));
    setOpen(false)
  };


  const DeleteDialog = ( ) => {
    return (
      <div>
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogContent>
            <DialogContentText>Are sure to delete this ?</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>
              Cancel
            </Button>
            <Button sx={{ color: "red" }} onClick={() => handleDelete(deleteForm.id)} autoFocus>
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };

  const ViewDialog = (params) => {
    return (
      <div className="view-card">
        <div className="close">
          <IconButton aria-label="delete" onClick={handleViewClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className="view">
          <label htmlFor="name">Name</label>
          <span>:</span>
          <span className="data">{viewForm.name}</span>
          <label htmlFor="email">Email</label>
          <span>:</span>
          <span className="data">{viewForm.email}</span>
          <label htmlFor="phone">Phone No</label>
          <span>:</span>
          <span className="data">{viewForm.phone_no}</span>
          <label htmlFor="position">Position</label>
          <span>:</span>
          <span className="data">{viewForm.position}</span>
          <label htmlFor="des">Description</label>
          <span>:</span>
          <span className="data">{viewForm.description}</span>
          {/* <label htmlFor="status">Status</label>
            <span>:</span>
            <span>{viewForm.sta}</span> */}
        </div>
      </div>
    );
  };

  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarFilterButton />
      </GridToolbarContainer>
    );
  }

  const Actions = (params) => {
    return (
      <div className="action-buttons">
        <IconButton
          onClick={() => {
            console.log(params.params.row);
            setIsEdit(true);
            setIsEditVisible(!isEditVisible);
            setForm(params.params.row);
          }}
          aria-label="edit"
        >
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={() => {
          console.log("Open");
          setOpen(true);
          setDeleteForm(params.params.row)
        }} >
          <GridDeleteIcon />
        </IconButton>
        <IconButton
          aria-label="delete"
          onClick={() => {
            setView(true);
            console.log(params.params.row);
            setViewForm(params.params.row);
          }}
        >
          <VisibilityIcon />
        </IconButton>
      </div>
    );
  };

  return (
    <div
      className="list"
      style={{ height: "100vh", width: "100%", padding: "10px" }}
    >
      <div className="head" style={{ height: "10vh", width: "100%" }}>
        <AddButton
          startIcon={<PersonAddIcon />}
          onClick={toggleVisibility}
          variant="contained"
        >
          Add New
        </AddButton>
        <SearchIcon className="search-icon" />
        <input
          id="search"
          type="text"
          value={searchTerm}
          placeholder="Search..."
          onChange={handleSearch}
        />
        {visible && (
          <IconButton
            className="reset"
            aria-label="delete"
            onClick={handleReset}
          >
            <RestartAltIcon />
          </IconButton>
        )}
      </div>
      <div
        className="table"
        style={{ height: "90vh", width: "100%", overflow: "auto" }}
      >
        {open && <DeleteDialog />}
        {view && <ViewDialog />}
        <DataGrid
          rows={filteredRows}
          columns={columns}
          checkboxSelection
          disableRowSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
          getRowId={(row) => row.id}
          // components={{
          //   Toolbar: GridToolbar,
          // }}
          // components={{
          //   Toolbar: CustomToolbar,
          // }}
          // editMode="cell"
          // onEditCellChange={handleEditCellChange}
          sx={{
            "& .super-app-theme--header": {
              background: "rgb(211, 232, 239)",
              color: "black",
              fontWeight: "900",
              fontSize: "15px",
              fontFamily:
                "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
            },
            "& .MuiDataGrid-columnHeaderCheckbox": {
              background: "rgb(211, 232, 239)",
            },
            overflow: "hidden",
          }}
        />
        {isVisible ? <Add isEdit={isEdit} 
        onAdd = {setRows}
        rowVal={rows}
        /> : null}
        {isEditVisible ? <Add isEdit={isEdit} form={form} /> : null}
      </div>
    </div>
  );
}
