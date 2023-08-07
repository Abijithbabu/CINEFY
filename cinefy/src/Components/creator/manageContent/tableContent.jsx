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
} from "@mui/material"

function displayWords(paragraph) {

    const wordsArray = paragraph.trim().split(/\s+/);
    const displayedWords = wordsArray.slice(0, 12);
    const result = displayedWords.join(' ');
    return result;
}

export const TableContent = (props) => {
    const { 
        count = 0,
        items = [],
        onDeselectAll,
        onDeselectOne,
        onPageChange = () => { },
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
                            <TableCell>Title</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Views</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell>Validity</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map((customer) => {
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
                                        <Stack alignItems="center" direction="row" >
                                            <img src={`http://localhost:5000/${customer.image}`} width={150} height={80} />
                                        </Stack>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle1">
                                            {customer.title}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2"
                                            //   noWrap

                                            style={{
                                                maxWidth: '200px', // Adjust the value according to your desired limit
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                            }}
                                        >
                                            {displayWords(customer.shortdescription)}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>{customer?.applicants.length ?? "NA"}</TableCell>
                                    <TableCell>{customer.location}</TableCell>
                                    <TableCell>{`${new Date(customer.date).getDay()}-${new Date(customer.date).getMonth()}-${new Date(customer.date).getFullYear()}`}</TableCell>
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

