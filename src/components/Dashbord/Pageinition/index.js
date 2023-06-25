import React from 'react';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import './style.css'

export default function PaginationControlled({page, handlePaChange}) {
  const style = {
    color : 'var(--white)',
    '& .Mui-selected' : {
        backgroundColor: 'var(--blue) !important',
        color : '#fff !important',
        borderColor: 'var(--blue) !important',
    },
    '& .MuiPaginationItem-ellipsis' : {
        border : '0px solid var(--grey) !important',
    },
    '& .MuiPaginationItem-text': {
        color: 'var(--white)',
        border: '1px solid var(--grey)',
    },
    
  }  
  
  return (
    <Stack spacing={2} className='pagination'>
      
      <Pagination count={10} page={page} onChange={(e, v)=>handlePaChange(e, v)} sx={style}/>
    </Stack>
  );
}