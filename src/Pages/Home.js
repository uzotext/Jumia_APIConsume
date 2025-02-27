import React, { useEffect, useState } from "react";

import myImg1 from "../Images/slider-1.jpg"
import myImg2 from "../Images/slider-2.jpg"
import myImg3 from "../Images/slider-3.jpg"
import myImg4 from "../Images/slider1.jpg"
import side from "../Images/side3.png"
import banner from "../Images/banner.gif"
import sideer from "../Images/side4.gif"
import jumia1 from "../Images/jumia2.png"
import jumia2 from "../Images/jumia3.png"
import jumia3 from "../Images/jumia4.png"
import jumia4 from "../Images/jumia5.png"
import logo1 from "../Images/logo-2.png"

import '../Styles/Home.css';

function Home() {
  const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then(response => response.json())
            .then(data => setProducts(data.products))
            .catch(error => console.error("Error fetching products:", error));
    }, []);

  return (
    <div className="container-fluid">

     

      <img alt='' src={banner} style={{width: "100%"}}/>



       <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    
    <a><img src={logo1} /></a> 
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
     
      <form class="d-flex" role="search" style={{width: "70%"}}>
        <input class="form-control me-2" type="search" style={{paddingTop: "2%"}} placeholder="Search products, brands and categories" aria-label="Search"/>
        <button class="btn btn-outline-success"  style={{width: "9%", color:"white", backgroundColor:"brown"}} type="submit">SEARCH</button>
      </form>

      <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg>
<h5 style={{marginLeft: "5px", marginRight:"12px" }}>Account</h5>

<svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" style={{marginLeft: "5px"}}/>
  <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286m1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94"/>
</svg>
<h5 style={{marginLeft: "5px",  marginRight:"19px"}}>Help</h5>

<svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>

<h5 style={{marginLeft: "9px"}}>Cart</h5>


    </div>
  </div>
</nav> 

 <div class="container" >
<div class="row gy-4" id="big" >

<div class="col-md-4" style={{width: "20%", backgroundColor: "white"}} >
<div class="list-group" >
  <ul style={{  height: "200%" }}>
   <a href="" >Computer</a> <br />
    <a href="" >Appliances</a> <br />
    <a href="" >Phones & Tablets</a> <br />
    <a href="" >Health & Beauty</a> <br />
    <a href="" >Health & Beauty</a> <br />
    <a href="" >Electronics</a> <br />
    <a href="" >Fashion</a> <br />
    <a href="" >Supermarket</a> <br />
    <a href="" >Computing</a> <br />
    <a href="" >Beaby Product</a> <br />
    <a href="" >Gaming</a> <br />
    <a href="" >Musical Instrument</a> <br />
    <a href="" >Other categories</a>
  </ul>
</div>

  </div>


  <div className="col-md-4"   style={{width: "60%"}}>
 
  <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner" id="img1">
        <div class="carousel-item active">
          <img src={myImg1}  class="d-block w-100 h-400"  alt="..."/>
          <div class="carousel-caption d-none d-md-block">
            <h5 class="fs-1">First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={myImg2} class="d-block w-100" alt="..."/>
          <div class="carousel-caption d-none d-md-block">
            <h5 class="fs-1">Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={myImg3} class="d-block w-100" alt="..."/>
          <div class="carousel-caption d-none d-md-block">
            <h5 class="fs-1">Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
     
    </div>

  </div>


  <div class="col-md-4" id="img11" style={{width: "20%"}}>
 <div id="img11">
 <img alt='' src={side} style={{width: "100%"}} />
 </div>

 <div id="img11" style={{marginTop: "9px"}}>
 <img alt='' src={sideer} style={{width: "100%"}}/>
 </div>
  
  </div>
  
  </div>
</div>

    <div class="container">
      

      <div class="row gy-3">
        <div class="col-md-3">
          <div class="card" style={{width: "100%", height: "60%"}}>
            <img src={jumia1} class="card-img-top" alt="..."/>
            <div class="card-body">
              
              <h4 style={{textAlign: "center"}}>Beauty</h4>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card" style={{width: "100%", height: "60%"}}>
            <img src={jumia2} class="card-img-top" alt="..."/>
            <h4 style={{textAlign: "center"}}>Appliances</h4>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card" style={{width: "100%", height: "60%"}}>
            <img src={jumia3} class="card-img-top" alt="..."/>
            <h4 style={{textAlign: "center"}}>TV Set</h4>
          </div>
        </div>
        <div class="col-md-3">
          <div class="card" style={{width: "100%", height: "60%"}}>
            <img src={jumia4} class="card-img-top"  alt="..."/>
            <h4 style={{textAlign: "center"}}>Phone & Tablets</h4>
          </div>
        </div>

      </div>
    </div>

      <h1 id="h11">Lists of Products</h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }} className="col-lg mb-3 ">
            
                {products.map(product => (
                    <div key={product.id} style={{ border: "1px solid #ddd", padding: "10px", width: "200px"}} className="containerss">
                        <img src={product.thumbnail} alt={product.title} style={{ width: "100%" }} />
                        <h3>{product.title}</h3>
                        <p>Price: ${product.price}</p>
                        <p>Discount: ${product.price}</p>
                      </div>
                ))}
            </div>
           

    </div>
   
  )
}


export default Home;