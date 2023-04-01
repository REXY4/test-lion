import React from "react";
import styles from '@/styles/components/navbar.module.css';
import Button from 'react-bootstrap/Button';
import {NavDropdown} from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import { useRouter} from "next/router";
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from "react-redux"; 
import { store } from "@/stores";
import Logo from "@/assets/icon/logo.png"
import Image from "next/image";
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai";
import {CgProfile} from "react-icons/cg";
import {BsCart4} from "react-icons/bs";
import Images from "react-bootstrap/Image"
// import Image from "react-bootstrap";
import { convertToRupiah } from "@/utils/convertRupiah";

interface Props {
  // dispatch :any
  // login : AnyAaaaRecord
  show : boolean
  showDrawer :any
}

const BasicNavbars : React.FC<Props> = ({show,showDrawer}) => {
  let dispatch = useDispatch();
  let router = useRouter();
  let isLogin = store.getState().user.isLogin;
  let role = store.getState().user.user;
  let getCart = store.getState().cart.cart;
  const cart = getCart.filter((c:any)=>c.userId === role[0].id)
  
  const handleOpenModalAuth = () =>{
    dispatch({
      type : "MODAL_AUTH",
    })
  }

  const handleLogout = () =>{
    dispatch({
      type : "LOGOUT",
    })
  }


  const handleToggle = () =>{
    if(show){
      showDrawer(false)
    }else{
      showDrawer(true)
    }
  }

  console.log(cart)

  return (
    <Navbar fixed="top" variant="dark" expand="lg" style={{
      backgroundColor : "#DF2E38"
    }}>
      <Container >
        {role && role[0].role === "admin" && router.pathname !== "/" &&
        <div className={styles["toggel-drawer"]}>
          <Button variant="outline-light" id={styles["button-toggle-drawer"]} onClick={()=>handleToggle()}>
            {!show ?
            <GiHamburgerMenu className={styles["icon-humberger"]}/>
            :
            <AiOutlineClose className={styles["icon-humberger"]}/>
          }
          </Button>
        </div>
        }
        <Navbar.Brand href="#">
          <Image src={Logo} alt="logo" width={100} height={40}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
             <Nav.Link onClick={()=>router.push("/")}>Home</Nav.Link>
             {role && role[0].role === "admin" && (
              <>
                      <Nav.Link onClick={()=>router.push("/admin")}>Master</Nav.Link>
              </>
             )}
              <div >
                  {cart.length > 0 && <Badge bg="primary" className={styles["badge"]}>{cart.length}</Badge>}
                  <NavDropdown style={{
                    width : "300px"
                  }} title={<BsCart4 className={styles["icon-profile"]}/>} id="basic-nav-dropdown">
                   {cart && cart.map((item:any)=>{
                      return(
                        <NavDropdown.Item href="#action/3.2">
                          <Images src={item.image} width={50} height={50} /> | {item.name} | {item.variant[0].name } | {convertToRupiah(item.price)}
                      </NavDropdown.Item>
                      )
                   })}
                  </NavDropdown>
                </div>
          </Nav>
          <Nav>
            {!isLogin ?
            ( 
            <div className={styles["button-container"]} onClick={handleOpenModalAuth}> 
            <button  id={styles["button-auth-1"]}>Login</button>/
            <button id={styles["button-auth-2"]}>Register</button>
            </div>
            )
            :
            (
              <div className="d-flex">
                 <div>
                 <Nav.Link onClick={()=>router.push(`/user/transaction`)}>Transaction</Nav.Link>
                </div>
                <div>
                  <h3 className={styles["profile-name"]}>{
                    role && role[0].name 
                  }</h3>
                </div>
                 <NavDropdown title={<CgProfile className={styles["icon-profile"]}/>} id="basic-nav-dropdown">
                   <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.2">
                     Another action
                   </NavDropdown.Item>
                   <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                   <NavDropdown.Divider />
                   <NavDropdown.Item href="#action/3.4">
                          Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
              </div>
            )
        }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNavbars;