import React from 'react'
import classes from './topbar.module.css'
import Image from 'next/image'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const Topbar = () => {
  return (
    <div className={classes.topbarDiv}>
        <div className={classes.topbarDivLeft}>
            <div className={classes.alignText}>
                <span>New</span>
                <h2>Products</h2>
            </div>
            <div className={classes.alignText}>
                <span>New</span>
                <h2>Services</h2>
            </div>
        </div>
        <div className={classes.topbarDivRight}>
            <Image src='/Logo.jpg' width={50} height={50} alt='logo'/>
            <div className={classes.searchBox}>
                <SearchIcon style={{color: 'gray', width: '18px', height: '18px'}}/>
                <input className={classes.input} placeholder='Search for products and services'/>
            </div>
            <PersonIcon style={{color: '#2F3191', width: '30px', height: '30px', background: '#dcf0c6', padding: '5px', borderRadius: '50%', cursor: 'pointer'}}/>
            <ShoppingCartIcon style={{color: '#EC108B', width: '35px', height: '35px', margin: '0 25px', cursor: 'pointer' }}/>
            <MenuIcon style={{color: '#2F3191', width: '30px', height: '30px', background: '#dcf0c6', padding: '5px', borderRadius: '50%', cursor: 'pointer'}}/>
        </div>
    </div>
  )
}

export default Topbar