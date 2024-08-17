# Profile Shopping App

A modern web application designed for managing and shopping for profile-related items. Built with Next.js, TypeScript, and Tailwind CSS

## Tech stack used
- Next.js, React.js, TypeScript, JavaScript, Tailwind CSS, Mongoose, 

## Features

- **Product Listing Page**:Displayed products fetched from the API.
- **Add to Cart Functionality:** -  Implemented using React Context for state management.
- **Responsive Design**: Fully responsive layout using Tailwind CSS across all devices.
- **Cart Page:**: Features include adjusting item quantities, a summary component that calculates and displays discounts, and functionality to manage and display an empty cart state.
- **Apply coupon**: Managed coupon application with validation, error handling for invalid coupons, and integration with the cart system.
- **Checkout** - Redirected to a checkout page upon clicking 'Checkout,' with a confirmation of successful purchase.
- **Routing** - Used next.js built in app routing.
- **Backend** - Connected mongodb and madecreated a GET API for product listing using next js API.
- **Deployment**: Integrated with Vercel for continuous deployment.


## Live Demo

You can explore the live site [here](https://profile-shopping-app.vercel.app/).

## Post api to add product

curl --location 'https://profile-shopping-app.vercel.app/api/products' \
--header 'Content-Type: application/json' \
--data '[
  { 
    "name": "Stories Sell",
    "price": 299,
    "originalPrice": 399, 
    "currency": "₹",
    "image": "https://m.media-amazon.com/images/I/71p55gYgjiL._AC_UF1000,1000_QL80_.jpg",
    "description": "Storyworthy Strategies to Grow Your Business and Brand"
  }
]

'
