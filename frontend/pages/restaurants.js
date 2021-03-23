/* /pages/restaurants.js */
import { useContext } from "react";
import { useQuery } from "@apollo/react-hooks";
import { useRouter } from "next/router";
import { gql } from "apollo-boost";

import Cart from "../components/cart/";
import AppContext from "../context/AppContext";

import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Row,
} from "reactstrap";

const GET_RESTAURANT_DISHES = gql`
  query($id: ID!) {
    restaurant(id: $id) {
      id
      name
      dishes {
        id
        name
        description
        price
        image {
          url
        }
      }
    }
  }
`;

function Restaurants() {
  const appContext = useContext(AppContext);
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_RESTAURANT_DISHES, {
    variables: { id: router.query.id },
  });

  if (error) return "Error Loading Dishes";
  if (loading) return <h1>Loading ...</h1>;
  if (data.restaurant) {
    const { restaurant } = data;
    return (
      <>
        <h1 style={{ marginTop: 20 }}>{restaurant.name}</h1>
        <Row style={{ marginTop: 40 }}>
        
          {restaurant.dishes.map((res) => (
            <Col xs="13" sm="4" style={{ padding: 0, marginBottom: 20 }} key={res.id}>
              <Card style={{ margin: "0 10px" }}>
                <CardImg
                  top={true}
                  style={{ height: 250 }}
                  src={
                    process.env.NODE_ENV === "production"
                      ? res.image.url
                      : `${process.env.NEXT_PUBLIC_API_URL}${res.image.url}`
                  }
                />
                <CardBody>
                  <CardTitle><b>{res.name}</b></CardTitle>
                  <CardText>{res.description}</CardText>
                </CardBody>
                <div className="card-footer">
                  <Button
                    outline
                    color="primary"
                    onClick={() => appContext.addItem(res)}
                  >
                    + Add To Cart
                  </Button>

                  <style jsx>
                    {`
                      a {
                        color: white;
                      }
                      a:link {
                        text-decoration: none;
                        color: white;
                      }
                      .container-fluid {
                        margin-bottom: 30px;
                      }
                      .btn-outline-primary {
                        color: #007bff !important;
                      }
                      a:hover {
                        color: white !important;
                      }
                    `}
                  </style>
                </div>
              </Card>
            </Col>
          ))}
          <Col xs="13" style={{ padding: 0,marginBottom: 20, marginLeft: 10 }}>
            
            <div>
              <Cart />
            </div>
            
            <style jsx global>
              {`
                button {
                  white-space: nowrap;
                  border: 0;
                  outline: 0;
                  display: inline-block;
                  height: 40px;
                  line-height: 40px;
                  padding: 0 14px;
                  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
                    0 1px 3px rgba(0, 0, 0, 0.08);
                  color: #fff;
                  border-radius: 4px;
                  font-size: 15px;
                  font-weight: 600;
                  text-transform: uppercase;
                  letter-spacing: 0.025em;
                  background-color: #6772e5;
                  text-decoration: none;
                  -webkit-transition: all 150ms ease;
                  transition: all 150ms ease;
                  margin-top: 10px;
                }
                button:hover {
                  color: #fff;
                  cursor: pointer;
                  background-color: #7795f8;
                  transform: translateY(-1px);
                  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1),
                    0 3px 6px rgba(0, 0, 0, 0.08);
                }
              `}
            </style>
          </Col>
        
        </Row>
      </>
    );
  }
  return <h1>Add Dishes</h1>;
}
export default Restaurants;