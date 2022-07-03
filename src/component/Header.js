import React from 'react'
import { Nav, Navbar, Container, Button, FormControl, Form } from 'react-bootstrap'
import ASC from './ASC.jpg'
import './Header.css';
import { BsGithub, BsEnvelopeFill, BsFillTelephoneFill, BsShop } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { BiLogIn, BiUser } from "react-icons/bi";
import { BsCartPlusFill } from "react-icons/bs";
import { useSelector } from 'react-redux';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, NavLink } from 'react-router-dom';
import Cart from './Cart';
import Popuplogin from './Popuplogin';
import { GradientTwoTone } from '@mui/icons-material';

const Header = () => {
    const state = useSelector((state) => state.handleCart)
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const styleTheme = {
        background: "linear-gradient(#e66465, #9198e5)"
    }

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark bg-info p-4" style={styleTheme} >
                <div class="container-fluid">
                    <img src={ASC} alt="logo" id='flogo' />
                    <b> <a class="navbar-brand ps-5 text-black" href="#">ASC's Ecommerce-Store</a> </b>
                    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> */}
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        {/* Put here form content if you want Collapse */}

                    </div>

                    <form class="d-flex ps-5 w-100">
                        <input class="form-control me-2 searchbar h-25 bg-dark text-white" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-info search text-black h-25" type="submit">Search</button>
                        <div className='text-white ms-5 text-muted d-flex'>
                            <a className='' href="mailto:ankitsinghchandel@gmail.com"><BsEnvelopeFill width={0} fontSize={20} color="black" /></a>
                            <a className='ps-4' href="https://github.com/AnkitSinghChandel"><BsGithub width={0} fontSize={20} color="black" /></a>
                            <a className='ps-4' href="tel:+918840356006"><BsFillTelephoneFill width={0} fontSize={20} color="black" /></a>
                            <span class="vertical-line"></span>
                        </div>
                        <div className='text-black w-50 ms-2'>
                            <b>   <BsFillTelephoneFill width={0} fontSize={15} color="red" /> +91 8840356006 </b>
                            <p class="h6 ps-4 text-muted">You can call me:</p>
                        </div>
                    </form>

                </div>
                <div className='text-white ms-auto pt-4 d-flex'>
                    {/* <Link to="/Login"> <BiUser width={70} fontSize={30} color="white" className="mx-3" /> </Link> */}

                    {/* popup login open */}

                    <Link
                        id="fade-button"
                        aria-controls={open ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onMouseOver={handleClick}
                        onClick={handleClick}

                        class="me-2" to="/Login" role="button"><BiUser width={70} fontSize={30} color="black" className="mx-3" />
                    </Link>

                    {/* popup login close */}

                    <Badge badgeContent={state.length} color="primary" className="mx-3">
                        <Link to="/Cart"> <ShoppingCartIcon htmlColor='black' /> </Link>
                    </Badge>
                    {/* <BsCartPlusFill width={70} fontSize={30} /> ({state.length}) */}


                    {/* popup login menu */}

                    <Menu
                        id="fade-menu"
                        MenuListProps={{
                            'aria-labelledby': 'fade-button',
                        }}
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        onMouseLeave={handleClose}
                        //    onMouseMove={handleClose}
                        //  onMouseOut={handleClose}
                        TransitionComponent={Fade}
                    >
                        <Popuplogin onClick={handleClose}></Popuplogin>
                        {/* <Popupcart onClick={handleClose}></Popupcart> */}
                    </Menu>

                    {/* popup login menu close */}

                </div>
            </nav>

            <nav className='navbar navbar-expand-lg navbar-dark bg-info ps-5'>
                <BsShop width={0} fontSize={30} color="black" />
                <b> <p class="h4 ps-5 text-black">Shop by products</p> </b>
                <h6>
                    <ul class="nav me-auto mb-2 mb-lg-0 ps-4 py-3 snip1226">
                        <li class="nav-item ps-4">
                            <b> <Link class="nav-link active text-black" aria-current="page" to="/" data-hover="Home">Home</Link> </b>
                        </li>
                        <li class="nav-item ps-4">
                            <b> <Link class="nav-link active text-black" aria-current="page" to="/Products" data-hover="Product">Product</Link> </b>
                        </li>
                        <li class="nav-item ps-4">
                            <b> <Link class="nav-link active text-black" aria-current="page" to="/About" data-hover="About">About</Link> </b>
                        </li>
                        <li class="nav-item ps-4">
                            <b> <Link class="nav-link active text-black" aria-current="page" to="/Contact" data-hover="Contact">Contact</Link> </b>
                        </li>
                    </ul>
                </h6>
            </nav>

        </>
    )
}

export default Header;