/* components/RestaurantList/index.js */
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Link from "next/link";

import {
  Card,
  CardBody,
  CardImg,
  CardText,
  CardTitle,
  Row,
  Col,
} from "reactstrap";

import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import Router, { withRouter, useRouter } from 'next/router';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket, faSearch, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import MediaQuery from 'react-responsive'

const QUERY = gql`
    query restaurants($start: Int, $limit: Int, $name : String!) {
      
      restaurants(start: $start, limit: $limit, where: { name_contains: $name }) {
          id
          name
          description
          image {
            url
          }
      }
    }
`;

function RestaurantList(props) {
  const [Wholeres, setWholeres] = React.useState(0);

  const router = useRouter();
  const {page} = router.query;
  /*const starte = 0;
  if({page} == 2){
    const starte = 5;
  }
  else{
    const starte = 0;
  }*/
  const { loading, error, data, fetchMore } = useQuery(QUERY, {
    variables: {
      //date: date,
      //offset: 0,
      start: 0,
      limit: 10,
      name: props.search,
      //limit: 10,
      //start: starte,
      //resellIndex: resellFilter,
      //brandCategorieName: brandFilter
    }
  });

  if (error) return "Error loading restaurants";
  //if restaurants are returned from the GraphQL query, run the filter query
  //and set equal to variable restaurantSearch
  if (loading) return <h1>Fetching</h1>;
  
  //setWholeres(data.restaurants.length);
 axios.get(`${process.env.NEXT_PUBLIC_API_URL}/restaurants/count/?name_contains=${props.search}`)
  .then(response => {
    const restau =response.data;
    setWholeres(restau);
    //alert(restau);
    console.log(restau);
  }, error => {
    console.log(error);
  });
  
  var pageCount = Wholeres / 10;
  if(pageCount < 1){
    pageCount = 1;
  }
  //alert(pageCount);
  //const pageCount = 5;
  //alert(allp.data.code);

  if (data.restaurants && data.restaurants.length) {
    
    //searchQuery
    const searchQuery = data.restaurants.filter((query) =>
      query.name.toLowerCase().includes(props.search)
    );
    //setWholeres(data.restaurants.length);
    //const pageCount = Wholeres / 10;
    if (searchQuery.length != 0) {
      const pagginationHandler = (page) => {
        const currentPath = router.pathname;
        const currentQuery = { ...router.query };
        currentQuery.page = page.selected + 1;
        //alert(page.selected);
        //console.log(page.selected);
        
        router.push({
            pathname: currentPath,
            //query: currentQuery,
        });
        
      fetchMore({
        variables: {
          //start: data.restaurants.length * currentQuery.page - 10,
          start: 10 * (page.selected + 1) - 10,
          limit: 10,
          name: props.search,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          //setWholeres(searchQuery.length);
          if (!fetchMoreResult) return prev;
          return Object.assign({}, prev, {
            //restaurants: [...prev.restaurants, ...fetchMoreResult.restaurants]
            restaurants: [...fetchMoreResult.restaurants]
          });
        }
      })
        
      };
      //const pageCount = searchQuery.length / 10;
      //setWholeres(searchQuery.length);
      //const pageCount = Wholeres / 10;
      //const pageCount = 5;
      //const pageCount = data.restaurants.length / 10;
      /*const pagginationHandler = (page) => {
        const currentPath = router.pathname;
        const currentQuery = { ...router.query };
        currentQuery.page = page.selected + 1;
        //alert(currentQuery.page);
        router.push({
            pathname: currentPath,
            query: currentQuery,
        });
        
        //use state to keep  the searchQuery.length val()///////
        
        fetchMore({
          variables: {
            //start: data.restaurants.length * currentQuery.page - 10,
            start: 10 * currentQuery.page - 10,
            limit: 10,
            name: props.search,
          },
          updateQuery: (prev, { fetchMoreResult }) => {
            setWholeres(searchQuery.length);
            if (!fetchMoreResult) return prev;
            return Object.assign({}, prev, {
              //restaurants: [...prev.restaurants, ...fetchMoreResult.restaurants]
              restaurants: [...fetchMoreResult.restaurants]
            });
          }
        })
        
      };*/

      //const {page} = router.query;
      //const content = {page};
      /*const page = 1;
      const currentQuery = { ...router.query };
      currentQuery.page = page.selected + 1;
      const content = currentQuery.page;*/
      //alert(pageCount);
      return (
        <Row>
    
        <MediaQuery query='(min-device-width: 1224px)'>
          <div style={{ marginRight: 35, marginLeft:10, marginTop: 5, color: "#343a40", }}>
              <h4><FontAwesomeIcon icon={faShoppingBasket} size="xs" color="#343a40" /> ร้านอาหารทั้งหมด (All Restaurants)</h4>
          </div>
          <div style={{ marginTop: 4 }}>
              <Link
                    as={`/addrestaurant/`}
                    href={`/addrestaurants/`}
                  >
                    <a className="btn btn-primary">
                      <FontAwesomeIcon 
                      icon={faPlusSquare} 
                      size="xs" color="white" 
                      />&nbsp;
                      เพิ่มร้านอาหาร
                    </a>
              </Link>
          </div>

          <span className="container" 
          style={{ marginTop: 10, color: "red", whiteSpace: "pre-line" }}
          >
            <FontAwesomeIcon icon={faSearch} color="red" />&nbsp;&nbsp;
            {`ร้านทั้งหมด ${Wholeres} ร้าน ( There are ${Wholeres} Restaurants ) \n `}
          </span>
          
          <div className="container" style={{ marginBottom: 20 }}>
          <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                activeClassName={'active'}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}

                initialPage={1 - 1}
                pageCount={pageCount} //page count
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={pagginationHandler}
                disableInitialCallback={true}
                activeLinkClassName={'active'}
          />
          </div>

          {searchQuery.map((res) => (
            <Col xs="6" sm="4" key={res.id}>
              <Card style={{ margin: "0 0.5rem 20px 0.5rem" }}>
                <CardImg
                  top={true}
                  style={{ height: 250 }}
                  src={
                    process.env.NODE_ENV === "production"
                      ? 
                        res.image[0] != null
                        ? res.image[0].url
                        : `https://strapiuploadtoey.s3.amazonaws.com/istockphoto_922962354_612x612_0f5a0eabc4.jpg`
                      : 
                        res.image[0] != null
                        ? `${process.env.NEXT_PUBLIC_API_URL}${res.image[0].url}`
                        : `${process.env.NEXT_PUBLIC_API_URL}/uploads/istockphoto-922962354-612x612.jpg`
                  }
                />
                
                <CardBody>
                  <CardTitle><b>{res.name}</b></CardTitle>
                  <CardText>{res.description}</CardText>
                </CardBody>
                <div className="card-footer">
                  <Link
                    as={`/restaurants/${res.id}`}
                    href={`/restaurants?id=${res.id}`}
                  >
                    <a className="btn btn-primary">View</a>
                  </Link>
                </div>
              </Card>
            </Col>
          ))}

          <style jsx global>
            {`
              /*a {
                color: white;
              }
              a:link {
                text-decoration: none;
                color: white;
              }
              a:hover {
                color: white;
              }*/
              .card-columns {
                column-count: 3;
              }

              /*.container {
                width: 900px;
                margin: auto;
              }*/
              .posts {
                min-height: 400px;
              }
              .pagination {
                display: flex;
                list-style: none;
                height: 40px;
                border: 1px solid black;
                border-radius: 5px;
                width: fit-content;
                align-items: center;
                padding: 0;
                margin-top: 40px;
                
              }
              a{
                display: flex;
                align-items: center;
                height: 100%;
                padding: 0 10px;
                cursor: pointer;
                color: black;
              }
              a:hover{
                text-decoration: underline;
              }
              .active a{
                font-weight: bold;
				        text-decoration: underline;
				        pointer-events: none;
              }

            `}
          </style>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>
          
          <div style={{ marginTop: 7, marginLeft: 5, display: "flex", marginBottom: 20, justifyContent: "center" }}>
              <Link
                  as={`/addrestaurant/`}
                  href={`/addrestaurants/`}
              >
                    <a
                    style={{textAlign: "center", padding: 20, width: 200, fontSize: 20}}
                    className="btn btn-primary">
                      <FontAwesomeIcon 
                      icon={faPlusSquare} 
                      size="xs" color="white" 
                      />&nbsp;
                      เพิ่มร้านอาหาร
                    </a>
              </Link>
          </div>
          
          <div style={{ marginRight: 40, marginTop: 5, color: "#343a40", whiteSpace: "pre-line" }}>
              <h4>
                <FontAwesomeIcon 
                icon={faShoppingBasket} 
                size="xs" color="#343a40" 
                /> 
                &nbsp;
                {"ร้านอาหารทั้งหมด \n"}
                &nbsp;&nbsp;&nbsp;
                {"(All Restaurants)"}
              </h4>
          </div>

          <span className="container" 
          style={{ marginTop: 10, color: "red", whiteSpace: "pre-line" }}
          >
            <FontAwesomeIcon icon={faSearch} color="red" />&nbsp;&nbsp;
            {`ร้านทั้งหมด ${Wholeres} ร้าน \n `} &nbsp;&nbsp;&nbsp;&nbsp;
            {`( There are ${Wholeres} Restaurants )`}
          </span>
          
          <div className="container" style={{ marginBottom: 20 }}>
          <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                activeClassName={'active'}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}

                initialPage={1 - 1}
                pageCount={pageCount} //page count
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={pagginationHandler}
                disableInitialCallback={true}
                activeLinkClassName={'active'}
          />
          </div>

          {searchQuery.map((res) => (
            <div className="container" xs="6" sm="4" key={res.id}>
              <Card style={{ margin: "0 0.5rem 20px 0.5rem" }}>
                <CardImg
                  top={true}
                  style={{ height: 250 }}
                  src={
                    process.env.NODE_ENV === "production"
                      ? 
                        res.image[0] != null
                        ? res.image[0].url
                        : `https://strapiuploadtoey.s3.amazonaws.com/istockphoto_922962354_612x612_0f5a0eabc4.jpg`
                      : 
                        res.image[0] != null
                        ? `${process.env.NEXT_PUBLIC_API_URL}${res.image[0].url}`
                        : `${process.env.NEXT_PUBLIC_API_URL}/uploads/istockphoto-922962354-612x612.jpg`
                  }
                />
                
                <CardBody>
                  <CardTitle><b>{res.name}</b></CardTitle>
                  <CardText>{res.description}</CardText>
                </CardBody>
                <div className="card-footer">
                  <Link
                    as={`/restaurants/${res.id}`}
                    href={`/restaurants?id=${res.id}`}
                  >
                    <a className="btn btn-primary">View</a>
                  </Link>
                </div>
              </Card>
            </div>
          ))}

          <style jsx global>
            {`
              /*a {
                color: white;
              }
              a:link {
                text-decoration: none;
                color: white;
              }
              a:hover {
                color: white;
              }*/
              .card-columns {
                column-count: 3;
              }

              /*.container {
                width: 900px;
                margin: auto;
              }*/
              .posts {
                min-height: 400px;
              }
              .pagination {
                display: flex;
                list-style: none;
                height: 40px;
                border: 1px solid black;
                border-radius: 5px;
                width: fit-content;
                align-items: center;
                padding: 0;
                margin-top: 40px;
                
              }
              a{
                display: flex;
                align-items: center;
                height: 100%;
                padding: 0 10px;
                cursor: pointer;
                color: black;
              }
              a:hover{
                text-decoration: underline;
              }
              .active a{
                font-weight: bold;
				        text-decoration: underline;
				        pointer-events: none;
              }

            `}
          </style>
        </MediaQuery>

        </Row>

        
      );
    } else {
      return <h1>No Restaurants Found</h1>;
    }
  }
  //return <h5>Add Restaurants</h5>;
  return <h5 style={{color: "red"}}>!ไม่พบร้านอาหาร ( No Restaurants Found )</h5>;
}

export default RestaurantList;