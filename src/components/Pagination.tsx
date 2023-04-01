import React from "react";
import Pagination from "react-bootstrap/Pagination";

interface Props {
    data: any[];
    handlePage: any;
    handlePrev: any;
    handleNext: any;
    handleFirst: any;
    handleLast: any;
}

const PaginationBasic: React.FC<Props> = ({
    data,
    handlePage,
    handlePrev,
    handleNext,
    handleFirst,
    handleLast,
}) => {
    const pagination = Math.ceil(data.length / 8);
    const handlePaginationItem = () => {
        let result: JSX.Element[] = [];
        for (let i: number = 0; i <= pagination - 1; i++) {
            result.push(
                <Pagination.Item onClick={() => handlePage(i)} key={i}>
                    {i + 1}
                </Pagination.Item>
            );
        }
        return result;
    };

    return (
        <Pagination>
            <Pagination.First onClick={handleFirst} />
            <Pagination.Prev onClick={handlePrev} />
            {handlePaginationItem()}
            <Pagination.Next onClick={handleNext} />
            <Pagination.Last onClick={handleLast} />
        </Pagination>
    );
};

export default PaginationBasic;
