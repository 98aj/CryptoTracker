import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from './Grid';
import './style.css'
import List from './List';

export default function TabsComponent({coins}) {
  const [value, setValue] = useState('grid');

  const style = {
    color : 'var(--white)',
    width : '50vw',
    fontSize: '1.2rem',
    fontFamily : 'Inter',
    fontWeight : 600,

  }

 

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div >
      <TabContext value={value}>
        
          <TabList onChange={handleChange} variant="fullWidth" >
            <Tab label="Grid" value="grid" sx={style}/>
            <Tab label="List" value="list" sx={style} />
            
          </TabList>
       
        <TabPanel value="grid">
          <div className='flex-grid'>

          
            {
                coins.map((item, i)=>{
                    return(

                        <Grid coin={item}/>
                    )
                })
            }
            </div>
        </TabPanel>
        <TabPanel value="list">
          <table className='list-table'>

          
        {
                coins.map((item, i)=>{
                    return(
                        <List coin={item}/>
                    )
                })
            }
            </table>
        </TabPanel>
        
      </TabContext>
    </div>
  );
}