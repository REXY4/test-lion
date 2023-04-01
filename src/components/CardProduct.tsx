import React,{useState} from "react";
import styles from "@/styles/components/card-product.module.css";
import {Card, Button, Image} from "react-bootstrap";
import SelectBasic from "./SelectBasic";
import { convertToRupiah } from "@/utils/convertRupiah";
import {BsFillCartPlusFill} from "react-icons/bs";

interface Props {
  image : string
  name : string
  description : string
  variant : any
  addCart : any
  userId : string
}

const CardProduct :React.FC<Props> = ({image, name,  description, variant, addCart, userId}) => {
  const [variantId, setVariantId] = useState(variant[0] !== undefined ? variant[0].id : undefined);
  const price = variant[0]=== undefined ? "0" : variant.filter((c:any)=>c.id === variantId).map((item:any)=>item.price);
  const getVariant = variant[0]=== undefined ? "-" : variant.filter((c:any)=>c.id === variantId);
  return (
    <div>
     <div>
      <Image src={image} alt="thumbnail" className={styles["image-card"]}/>
     </div>
     <div className={`${styles["card-container"]} d-flex justify-content-center`}> 
    <Card style={{ width: '15rem' }}>
      <Card.Body>
        <Card.Title style={{
          height :"50px"
        }}>{name}</Card.Title>
        <Card.Text className={styles["paragraf-card"]}>
          {description.split(" ").slice(0,8).join(" ")}...
        </Card.Text>
        <div style={{
          width : "100px"
        }}>
          <SelectBasic setId={setVariantId} placeholder={"Variant"} data={variant}/>
        </div>
        <Card.Text className={styles["price-card"]}>
          {convertToRupiah(price[0])}
        </Card.Text>
        <div className="d-flex justify-content-evenly">
        <Button onClick={()=>addCart({image,name,description, variant : getVariant, price, userId})} variant='outline-danger'><BsFillCartPlusFill/></Button>  
        <Button variant="danger">Buy</Button>
        </div> 
      </Card.Body>
    </Card>
    </div>
    </div>
  );
}

export default CardProduct;