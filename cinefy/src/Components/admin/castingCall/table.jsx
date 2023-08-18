import { useCallback, useMemo, useState } from 'react';
import { TableContent } from './tableContent';
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

const Page = ({data,select}) => { 
  const [page, setPage] = useState(0); 
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const customers = useCustomers(data, page, rowsPerPage);
  const customersIds = useCustomerIds(customers);
  const customersSelection = useSelection(customersIds)
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
            />

  );
};

export default Page