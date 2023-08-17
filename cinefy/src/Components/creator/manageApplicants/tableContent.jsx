import { Mail } from "@mui/icons-material";
import {
  Avatar,
  Badge,
  Box,
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { getStatus } from "../manageSubmissions/applicants";
import { useState } from "react";
import { updateStatus } from "../../../redux/action";
export const TableContent = (props) => {
  const [status, setStatus] = useState([]);
  const handleClick = (data, id) => {
    setStatus((prev) => [...prev, id]);
    updateStatus(id,data,props.post)
  };
  const navigate = useNavigate();
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
              {props.select && <TableCell>Status</TableCell>}
              <TableCell>view profile</TableCell>
              <TableCell>Actions / Messages</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.length &&
              items.map((customer, index) => {
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
                    {props.select && (
                      <TableCell>{getStatus(customer.status)}</TableCell>
                    )}
                    <TableCell>
                      <Link to={`/view-profile?id=${customer._id}`}>
                        more details
                      </Link>
                    </TableCell>
                    <TableCell>
                      <ButtonGroup
                        size="small"
                        variant="text"
                        aria-label="text button group"
                      >
                        {customer.status !== "rejected" && customer.status !== "selected" && props.select &&
                          !status.includes(customer._id) && (
                            <>
                              <Button
                                onClick={() =>
                                  handleClick("selected", customer._id)
                                }
                              >
                                Accept
                              </Button>
                              <Button
                                onClick={() =>
                                  handleClick("rejected", customer._id)
                                }
                              >
                                Reject
                              </Button>
                            </>
                          )}

                        <IconButton
                          size="small"
                          aria-label="show 4 new mails"
                          color="inherit"
                          onClick={() => navigate(`/chat?id=${customer._id}&dp=${customer.profilePic}&name=${customer.name}`)}
                        >
                          Message
                          {/* <Badge badgeContent={4} color="error"> */}
                          <Mail />
                          {/* </Badge> */}
                        </IconButton>
                      </ButtonGroup>
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
