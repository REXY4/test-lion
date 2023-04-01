import React from "react";
import styles from "@/styles/components/drawer.module.css";
import {Container, Row, Col, Button} from "react-bootstrap";
import Logo from "@/assets/icon/logo.png"
import Image from "next/image";
import {useRouter} from "next/router";

interface Props {
    show : boolean
    setShow : any
    active : string
}

const Drawer:React.FC<Props> = ({show, setShow, active}) =>{
    let router = useRouter();
    const drawerData = [
        {
            name : "Product",
            link : "/admin"
        },
        {
            name : "Category",
            link : "/admin/category"
        },
        {
            name : "Transaction",
            link : "/admin/transaction"
        },
        //  {
        //     name : "Master",
        //     link : ""
        // },
    ]

    return(
        <div>
        <div className={`${styles["background"]} ${show && styles["active"]}`}>
            <div className={`${styles["container-button"]} ${!show ? styles["close-button"] : styles["button-active"]}`}>
                <button onClick={()=>setShow(false)} id={styles["button-burger"]}>x</button>
            </div>
            <Container>
                    <Row md={12} className="p-3">
                            <Image src={Logo}  alt="logo" width="100" height="50"/>
                    </Row> 
                <Row style={{
                        paddingLeft : "0px"
                    }}>   
                    <Col md={12} style={{
                        paddingLeft : "0px",
                        paddingTop  :"10px"
                    }}>
                        <ul className={`${styles.ul} ${show && styles["fade-right"]}`}>
                            {
                                drawerData.map((item)=>{
                                    return (
                                        <>
                                        <li
                                        onClick={()=>router.push(item.link)} 
                                        className={`${styles["li"]} ${active.toLowerCase() === item.name.toLowerCase() && styles["li-active"]}`} key={item.name}>
                                            {item.name}
                                            <hr />
                                        </li>
                                        </>
                                    )
                                })
                            }
                        </ul>
                    </Col>
                </Row>
                </Container>
        </div>
        </div>
    )
}

export default Drawer;