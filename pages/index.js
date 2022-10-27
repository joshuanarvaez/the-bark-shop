import React from 'react'
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => (
    <div>
    {/* create heroBanner prop here and pass it to HeroBanner component so we can fetch data */}
      <HeroBanner heroBanner={bannerData.length && bannerData[0] } />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p> Many variations of Dog Toys</p>
      </div>

      <div className="products-container">
        {products?.map((product) => <Product key={product._id} product={product} />)}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  );

    // We use getServerSideProps function whenever we fetch data from API or CMS in Next.js - will pre-render this page on each request using the data returned in the function
  

  export const getServerSideProps = async () => {
    const query = '*[_type == "product"]';
    const products = await client.fetch(query);

    const bannerQuery = '*[_type == "banner"]';
    const bannerData = await client.fetch(bannerQuery);
    
    return {
      props: { products, bannerData }
    }
  }

export default Home;