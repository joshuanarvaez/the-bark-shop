# Project: Travel Mate
## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Built With](#built-with)
- [Dependencies](#dependencies)
- [What We Learned](#what-we-learned)
- [Acknowledgements](#acknowledgements)

## Overview
![Alt text](/assets/projectScreenshot.png?raw=true "The Bark Shop Screenshot")

 Live demo: https://jn-bark-shop.vercel.app/ 
 
## Features
This full stack ecommerce application enables users to browse products and related information. We accomplish this by calling our Sanity backend which holds all of our product details. Users can add products to cart, update quantities in the cart, and checkout. When a user clicks "Pay with Stripe" during checkout, they will be redirected to a stripe checkout page which is a test implementation of stripe. Here, users will see an overview of their order and have the option to change the shipping method which will update the total price. 

Users can complete the checkout by filling out the card information form. For the card number field, users should input 4242 4242 4242 4242. For expiration date, users can input any future valid date. For CVC field, users can input any 3 digits they'd like. See screenshot below for example.

![Alt text](/assets/stripeScreenshot.png?raw=true "Stripe Screenshot")

Once the test purchase is complete, users will be redirected to a confirmation page where they have the option to email the ecommerce company directly or continue shopping.

## Built With
Sanity: https://www.sanity.io/  
Stripe: https://stripe.com/docs/testing   
React JS: https://reactjs.org/  
Next JS: https://nextjs.org/  
Node JS: https://nodejs.org/en/  
React Icons: https://react-icons.github.io/react-icons/   
React Hot Toast - https://react-hot-toast.com/  
Canvas Confetti - https://www.kirilv.com/canvas-confetti/   
Vercel: https://vercel.com/  

## Dependencies
npm install react react-dom react-hot-toast react-icons next next-sanity-image @sanity/client @sanity/image-url stripe @stripe/stripe-js canvas-confetti

## What We Learned
How to use Sanity CMS for our backend which holds all of our data. We built custom schemas to structure this data and then we call it from our front end so users can view the data. Sanity allows for simple and quick updates to our data straight from the Sanity dashboard.

How to integrate a test implementation of stripe, adding additional shipping methods and updating costs for the order. We also learned how to create banners with React Hot Toast and how to use the Canvas Confetti package which users will see after stripe checkout.
 

## Acknowledgements
Adrian Hajdin - JavascriptMastery JSM    
Github - https://github.com/adrianhajdin/ecommerce_sanity_stripe    
Project 2: https://www.youtube.com/watch?v=XxXyfkrP298&t=17396s  
