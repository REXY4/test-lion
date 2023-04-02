import Drawer from "@/components/Drawer";
import BasicNavbars from "@/components/Navbars";
import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { getAllTransaction } from "@/actions/transaction";
import TabbleTransaction from "@/components/transaction/TabbleTransactions";
import PrivateRoute from "@/components/PrivateRoute";

interface State {
    transaction: {
        transaction: any;
    };
}

interface Props {
    getAllTransaction :any
    transaction: any;
}

const Transaction: React.FC<Props> = ({ transaction, getAllTransaction }) => {
    const [show, setShow] = useState(true);
    console.log(transaction)
    useEffect(() => {
        getAllTransaction();
    }, []);

    return (
        <PrivateRoute allowedRoles={["admin"]}>
            <div>
                <BasicNavbars show={show} showDrawer={setShow} />
                <div className="d-flex">
                    <Drawer
                        active="Transaction"
                        show={show}
                        setShow={setShow}
                    />
                    <Container
                        style={{
                            marginTop: "100px",
                            marginLeft: "100px",
                            marginRight: "100px",
                        }}
                    >
                        <Row className="mb-5">
                            <Col md={12}>
                                <h1>Transaction</h1>
                            </Col>
                            <Col md={12} className="mt-5">
                                <TabbleTransaction product={transaction} />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </PrivateRoute>
    );
};

const mapStateToProps = (state: State) => ({
    transaction :state.transaction.transaction
});

export default connect(mapStateToProps, { getAllTransaction })(Transaction);
