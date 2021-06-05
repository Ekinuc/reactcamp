import React from "react";
import { Button, GridColumn, GridRow, Icon, Label } from "semantic-ui-react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import Navi from "./Navi";
import { Grid } from "semantic-ui-react";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn width={4}>
            <Categories />
          </GridColumn>
          <GridColumn width={12}>
            <ProductList />
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}
