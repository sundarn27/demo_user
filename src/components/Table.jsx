import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from "@mui/material";
import { GridDeleteIcon } from "@mui/x-data-grid";

function createData(name, email, phone_no, status, position, description) {
  return { name, email, phone_no, status, position, description };
}

const rows = [
  createData(
    "cbartolomeotti0",
    "edunton0@squidoo.com",
    "1725821117",
    false,
    "Rooxo",
    "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
  ),
  createData(
    "gdukesbury1",
    "swingrove1@comcast.net",
    "3424817821",
    true,
    "Vinte",
    "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus."
  ),
  createData(
    "acambden2",
    "vcollis2@nytimes.com",
    "7240297594",
    false,
    "Mita",
    "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
  ),
  createData(
    "rpauncefort3",
    "clascell3@odnoklassniki.ru",
    "9976722176",
    true,
    "Latz",
    "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede."
  ),
  createData(
    "eaynold4",
    "aheliot4@dyndns.org",
    "8164076945",
    false,
    "Lajo",
    "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat."
  ),
  createData(
    "khinkes5",
    "dbordiss5@utexas.edu",
    "4347979940",
    true,
    "Shuffledrive",
    "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam."
  ),
  createData(
    "cpavitt6",
    "jsurgenor6@so-net.ne.jp",
    "4524245367",
    true,
    "Dabtype",
    "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat."
  ),
  createData(
    "dkampshell7",
    "jgathercole7@networksolutions.com",
    "7023324690",
    true,
    "Aivee",
    "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis."
  ),
  createData(
    "tplaydon8",
    "pbickardike8@flickr.com",
    "5740233038",
    false,
    "Realbuzz",
    "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti."
  ),
  createData(
    "ldun9",
    "torteu9@reddit.com",
    "9787071313",
    true,
    "Yakitri",
    "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
  ),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ height: "40px", background: "rgb(211, 232, 239)" }}>
            <TableCell>Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Phone No</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left">Position</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.phone_no}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
              <TableCell align="left">{row.position}</TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="left">
                <IconButton aria-label="delete">
                  <EditIcon />
                </IconButton>
                <IconButton aria-label="delete">
                  <GridDeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
