import React from "react";
import { Text,Stack,Image,Box,Heading,Tag,TagLabel } from '@chakra-ui/react'
import axios from "axios";

const Product = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;

  const [product,setProduct] = React.useState([]);

  
  React.useEffect(()=>{
    axios.get(`http://localhost:8080/products`).then((res)=>setProduct(res.data))
  },[])
  console.log(product)



  return (

    <div>
    {product.map((p)=>(
    <Stack data-cy="product">
      <Image data-cy="product-image"  src = {p.imageSrc}/>
      <Text data-cy="product-category">{p.category}</Text>
      <Tag>
        <TagLabel data-cy="product-gender">{p.gender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title">{p.title}</Heading>
      <Box data-cy="product-price">{p.price}</Box>
    </Stack>
    ))}
    </div>
  );
};

export default Product;
