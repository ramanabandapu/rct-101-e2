import React from "react";
import AddProduct from "./AddProduct";
import Product from "./Product";
import Pagination from "./Pagination";
import { Flex, Grid, Spacer, GridItem } from "@chakra-ui/react";
const Products = () => {
  // TODO: Remove below const and instead import them from chakra
  // const Flex = () => <div />;
  // const Grid = () => <div />;

  return (
    <Flex flexDirection="column" width="90%" margin="auto">
     <AddProduct />
      <Spacer />
      <Grid>
      <GridItem>
        <Product />
        </GridItem>
      </Grid>
      <Pagination />
    </Flex>
  );
};

export default Products;
