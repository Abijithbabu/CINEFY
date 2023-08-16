import { useCallback, useEffect, useMemo, useState } from 'react';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { TableContent } from './tableContent';
// import { CustomersSearch } from './customers-search';
import { useLocation } from 'react-router';
import { useSelection } from '../../admin/customer/selection';

 function applyPagination(documents, page, rowsPerPage) {
  return documents.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
const useCustomers = (data, page, rowsPerPage) => {
  return useMemo(
    () => {
      return applyPagination(data, page, rowsPerPage);
    },
    [page, rowsPerPage]
  );
};

const useCustomerIds = (customers) => {
  return useMemo(
    () => {
      return customers.map((customer) => customer._id);
    },
    [customers]
  ); 
};
 
const Page = ({data,select,post}) => { 

  const [page, setPage] = useState(0); 
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const customers = useCustomers(data, page, rowsPerPage);
  const customersIds = useCustomerIds(customers);
  const customersSelection = useSelection(customersIds);
  select && customersSelection.selected.push(select)
  const handlePageChange = useCallback( 
    (event, value) => {   
      setPage(value);  
    },
    []  
  );   

  const handleRowsPerPageChange = useCallback( 
    (event) => { 
      setRowsPerPage(event.target.value);
    }, 
    [] 
  );
 
  return (
 
    
            <TableContent
              count={data.length}
              items={customers}
              onDeselectAll={customersSelection.handleDeselectAll}
              onDeselectOne={customersSelection.handleDeselectOne}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleRowsPerPageChange}
              onSelectAll={customersSelection.handleSelectAll}
              onSelectOne={customersSelection.handleSelectOne}
              page={page}
              rowsPerPage={rowsPerPage} 
              selected={customersSelection.selected} 
              select={select? select : false}
              post={post}
            />

  );
};

export default Page;