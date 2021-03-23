/* /pages/index.js */
import React, { useState } from "react";

import { Col, Input, InputGroup, InputGroupAddon, Row } from "reactstrap";
import RestaurantList from "../components/RestaurantList";
import MediaQuery from 'react-responsive';

function Home() {
  const [query, updateQuery] = useState("");

  const [value, setValue] = useState();

    const refresh = ()=>{
        // re-renders the component
        setValue({});
    }

  return (
    <div className="container-fluid">
      <Row>
        <Col>
        <MediaQuery query='(min-device-width: 1224px)'>
          <div className="search" style={{marginLeft: "0px"}}>
            <InputGroup>
              <InputGroupAddon addonType="append"> Search </InputGroupAddon>
              <Input
                onChange={(e) => {
                  updateQuery(e.target.value.toLocaleLowerCase());
                    if(e.target.value == ""){
                      window.location.href = "/";
                      //window.location.reload(false);
                      //refresh;
                    }
                }}
                value={query}
              />
            </InputGroup>
          </div>
          <RestaurantList search={query} />
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>
        <div className="search" style={{maxWidth: "300px", marginLeft: "0px"}}>
            <InputGroup>
              <InputGroupAddon addonType="append"> Search </InputGroupAddon>
              <Input
                onChange={(e) => {
                  updateQuery(e.target.value.toLocaleLowerCase());
                    if(e.target.value == ""){
                      window.location.href = "/";
                      //window.location.reload(false);
                      //refresh;
                    }
                }}
                value={query}
              />
            </InputGroup>
          </div>
          <RestaurantList search={query} />
        </MediaQuery>
        </Col>
      </Row>
      <style jsx>
        {`
          .search {
            margin: 20px;
            width: 500px;
          }
        `}
      </style>
    </div>
  );
}
export default Home;