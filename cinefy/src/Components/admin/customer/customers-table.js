import {
  Avatar,
  Box,
  Button,
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
import { blockUser } from "../../../redux/action";
import { useState } from "react";
// import { Scrollbar } from 'src/components/scrollbar';
// import { getInitials } from 'src/utils/get-initials';

export const CustomersTable = (props) => {
  const {
    count = 0,
    items = [],
    onDeselectAll,
    onDeselectOne,
    onPageChange = () => {},
    onRowsPerPageChange,
    onSelectAll,
    onSelectOne,
    page = 0,
    rowsPerPage = 0,
    selected = [],
  } = props;
  const [data, setdata] = useState(items)
  const selectedSome = selected.length > 0 && selected.length < items.length;
  const selectedAll = items.length > 0 && selected.length === items.length;

  return (
    <Card>
      {/* <Scrollbar> */}
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedAll}
                  indeterminate={selectedSome}
                  onChange={(event) => {
                    if (event.target.checked) {
                      onSelectAll?.();
                    } else {
                      onDeselectAll?.();
                    }
                  }}
                />
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Block user</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length && data.map((customer,index) => {
              const isSelected = selected.includes(customer._id);
              // const createdAt = format(customer.createdAt, 'dd/MM/yyyy');

              return (
                <TableRow hover key={customer._id} selected={isSelected}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isSelected}
                      onChange={(event) => {
                        if (event.target.checked) {
                          onSelectOne?.(customer._id);
                        } else {
                          onDeselectOne?.(customer._id);
                        }
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Stack alignItems="center" direction="row" spacing={2}>
                      <Avatar src={customer?.profilePic}>
                        {/* {getInitials(customer.name)} */}
                      </Avatar>
                      <Typography variant="subtitle2">
                        {customer.name}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>{customer.email}</TableCell>
                  <TableCell>{customer?.phone ?? "NA"}</TableCell>
                  <TableCell>
                    <Button onClick={()=>{
                      blockUser(customer._id)
                      setdata((prev)=>{
                        prev[index].isDelete=!customer.isDelete
                        return [...prev]
                      })
                      }}>
                      {customer.isDelete?'unBlock':'Block'}
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>  
      </Box>
      {/* </Scrollbar> */}
      <TablePagination
              component="div"
              count={count}
              onPageChange={onPageChange}
              onRowsPerPageChange={onRowsPerPageChange}
              page={page}
              rowsPerPage={rowsPerPage}
              rowsPerPageOptions={[5, 10, 25]}
          />
    </Card>
  );
};


