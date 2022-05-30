import React from "react";

import axios from "axios";
import { Radio } from '@chakra-ui/react';
import { RadioGroup } from '@chakra-ui/react';
import { Button,
  Modal,
  ModalBody,
  Input,
  Select,
  useDisclosure} from' @chakra-ui/react';
 

const AddProduct = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Button = () => <div />;
  // const Modal = () => <div />;
  // const ModalBody = () => <div />;
  // const Input = () => <div />;
  // const Select = () => <div />;
  // const RadioGroup = () => <div />;
  // const Radio = () => <div />;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data,setData] = React.useState({
    title : "",
    category : '',
    gender : '',
    price : ''
  })

  
  const handleSumbit = ()=>{
    axios.post("http://localhost:8080/products",data).then((res)=>alert("data Stored"))
  }

  const handleChange =(e)=>{
    const {name,value} = e.target
    setData({...data,[name] : value})
  }
  return (
    <>
      <Button my={4} data-cy="add-product-button" onClick={onOpen} size='lg' width='fit-content' margin='auto'>Add Product</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalBody pb={6}>
          <label htmlFor="">Title</label>
          <Input data-cy="add-product-title" name = 'title' value = {data.name} onChange = {handleChange} />
          <label>Category</label>
          <Select data-cy="add-product-category"  name = "category" value = {data.category} onChange = {handleChange}>
            <option data-cy="add-product-category-shirt"> Shirt</option>
            <option data-cy="add-product-category-pant">Pant</option>
            <option data-cy="add-product-category-jeans">Jeans</option>
          </Select>
          <label>Gender</label>
          <RadioGroup data-cy="add-product-gender"  name = "gender" value = {data.gender} onChange = {handleChange}>
            <Radio data-cy="add-product-gender-male" value = 'male'> Male</Radio>
            <Radio data-cy="add-product-gender-female" value = 'female'>Female</Radio>
            <Radio data-cy="add-product-gender-unisex" value = 'unisex'>Unisex</Radio>
          </RadioGroup>
          <label>Price</label>
          <Input data-cy="add-product-price" name = 'price' value = {data.price} onChange = {handleChange}/>
          <Button data-cy="add-product-submit-button" onClick = {handleSumbit}>Submit</Button>
        </ModalBody>
        <Button colorScheme="blue" mr={3} onClick={onClose}>
          Close
        </Button>
      </Modal>
    </>
  );
};

export default AddProduct;
