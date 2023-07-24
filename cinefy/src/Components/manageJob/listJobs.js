import React from "react";
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
const listJobs = ({ data }) => {
  return (
    <Card>
      {/* <Scrollbar> */}
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">Sl.no</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Posted on</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((customer, index) => {
              // const isSelected = selected.includes(customer._id);
              // const createdAt = format(customer.createdAt, 'dd/MM/yyyy');

              return (
                <TableRow hover key={customer._id}>
                  <TableCell padding="checkbox">{index + 1}</TableCell>
                  <TableCell>
                    <Stack alignItems="center" direction="row" spacing={2}>
                      <Avatar src={customer?.image}>
                        {/* {getInitials(customer.name)} */}
                      </Avatar>
                      <Typography variant="subtitle2">
                        {customer.title}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>{customer.location}</TableCell>
                  <TableCell>{customer?.phone ?? "NA"}</TableCell>
                  <TableCell>{customer?.date.toString() ?? "NA"}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
      {/* </Scrollbar> */}
      {/* <TablePagination
      component="div"
      count={count}
      onPageChange={onPageChange}
      onRowsPerPageChange={onRowsPerPageChange}
      page={page}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={[5, 10, 25]}
    /> */}
    </Card>
  );
};

export default listJobs;
