import styles from "@/styles/transaction.module.css";
import BasicNavbars from "@/components/Navbars";
import React, { useState } from "react";
import { Container, Row, Col, Card, Image, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { getAllCategory } from "@/actions/category";
import { convertToRupiah, Idr } from "@/utils/convertRupiah";
import { RiDeleteBin3Line } from "react-icons/ri";
import { DeleteCart } from "@/actions/cart";
import PrivateRoute from "@/components/PrivateRoute";

interface State {
    cart: {
        cart: any;
    }
    user: {
        user: any
    }
}

interface Props {
    cart: any
    user: any
    DeleteCart: any
}



const Home: React.FC<Props> = ({ cart, user, DeleteCart }) => {
    const [checkout, setCheckout] = useState<any>([]);
    const userId = user && user.map((item: any) => item.id);
    const carts = cart && cart.filter((c: any) => parseInt(c.userId) === parseInt(userId));
    const handleCheckout = (data: any, id: number) => {
        setCheckout([...checkout, { ...data, checkoutId: id }])
    }

    const handleCancel = (id: number) => {
        setCheckout((prevCheckout: any) => prevCheckout.filter((item: any) => item.checkoutId !== id));
    }


    return (
        <PrivateRoute allowedRoles={["customers"]}>
            <div>
                <BasicNavbars show={false} showDrawer={false} />
                <Container style={{
                    paddingTop: "100px"
                }}>
                    <Row>
                        <Col className="mb-5" md={8}>
                            {carts.map((item: any, index: number) => {
                                const active = checkout.filter((c: any) => c.checkoutId === index)[0] !== undefined && index === checkout.filter((c: any) => c.checkoutId === index)[0].checkoutId
                                return (
                                    <div className={`mb-3 d-flex justify-content-between ${styles["container-card"]}`}>
                                        <div className="d-flex">
                                            <div className={styles["container-image"]}>
                                                <Image src={item.variant[0].image} className={styles["image"]} />
                                            </div>
                                            <div className={styles["container-header"]}>
                                                <h1 className={styles["name"]}>{item.name}</h1>
                                                <p>variant : {item.variant[0].name}</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <p><strong>Price</strong> : {convertToRupiah(item.variant[0].price)}</p>
                                            <Button style={{ marginRight: "10px" }} onClick={() => {
                                                if (active) {
                                                    handleCancel(index)
                                                } else {
                                                    handleCheckout(item, index)
                                                }
                                            }} variant="outline-success">{active ? "Cancel" : "Checkout"}</Button>
                                            <Button disabled={active} variant="danger" onClick={() => DeleteCart(item.id)} > <RiDeleteBin3Line /></Button>
                                        </div>
                                    </div>
                                )
                            })}
                        </Col>
                        <Col md={4} className="mb-5">
                            <Card>
                                <Card.Header className={styles["background-card-header"]}>
                                    <Card.Title>Transaction</Card.Title>
                                </Card.Header>
                                <Card.Body>
                                    {checkout[0] === undefined ? <p>No Transaction</p> :
                                        (
                                            checkout.map((item: any) => {
                                                return (
                                                    <div>
                                                        <p className={styles["name-product"]}>{item.name}</p>
                                                        <div className="d-flex justify-content-between">
                                                            <p>variant : {item.variant[0].name}</p>
                                                            <p>price : {convertToRupiah(item.variant[0].price)}</p>
                                                        </div>
                                                        <hr />
                                                    </div>
                                                )
                                            })
                                        )
                                    }
                                    {checkout[0] !== undefined && (
                                        <div className=" mt-4">
                                            <p><strong>Total</strong> : Rp {
                                                checkout.map((item: any) => Idr(item.price)).reduce(function (sum: number, elemen: number) {
                                                    let result = sum + elemen;
                                                    return result
                                                }, 0).toLocaleString()
                                            }</p>
                                            <div className="d-flex justify-content-center">
                                                <Button variant="success">Pay</Button>
                                            </div>
                                        </div>)
                                    }
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div >
        </PrivateRoute>
    );
};

const mapStateToProps = (state: State) => ({
    cart: state.cart.cart,
    user: state.user.user
});

export default connect(mapStateToProps, { getAllCategory, DeleteCart })(Home);
