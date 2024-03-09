import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";

let myProducts = [
  {
    id: 1,
    image:
      "https://b.zmtcdn.com/data/pictures/7/19672427/fab0f327a0193957ee122f8c72c4d2f9_featured_v2.jpg?output-format=webp",
    title: "Ironhill Bengaluru",
    details:
      "North Indian, Continental, Asian, Pizza, Fast Food, Biryani, Beverages, Marathahalli, Bangalore",
    price: 2000,
    distance: "1.1 km",
    rating: 4.3,
  },
  {
    id: 2,
    image:
      "https://b.zmtcdn.com/data/pictures/chains/5/20478855/c05533227fb3ec385da1e3e466abc19d_featured_v2.jpg?output-format=webp",
    title: "Long Boat Brewing Co.",
    details:
      "Asian, Steak, Pizza, Pasta, Chinese, South Indian, North Indian, Marathahalli, Bangalore",
    price: 2600,
    distance: "997 m",
    rating: 4.3,
  },
  {
    id: 3,
    image:
      "https://b.zmtcdn.com/data/pictures/5/18800355/7b62a1e44b543e329cc4a8aec87cf816_featured_v2.jpg?output-format=webp",
    title: "TBC- Sky Lounge",
    details:
      "Continental, Italian, Asian, North Indian, South Indian, Biryani, Desserts, Beverages Kadubeesanahalli, Bangalore",
    price: 1200,
    distance: "2 km",
    rating: 4.3,
  },
  {
    id: 4,
    image:
      "https://b.zmtcdn.com/data/pictures/8/20741898/094b931159b4ed8512045bfaadfb1cbd_featured_v2.jpg?output-format=webp",
    title: "Deck Of Brews",
    details:
      "Continental, North Indian, Italian, Asian, Desserts, Pizza, Pasta, South Indian Kadubeesanahalli, Bangalore",
    price: 1000,
    distance: "3.1 km",
    rating: 4.3,
  },
  {
    id: 5,
    image:
      "https://b.zmtcdn.com/data/pictures/4/20942924/1ce779008ac7d1b4d22be5c9417c8c1d_featured_v2.jpg?output-format=webp",
    title: "BLR Brewing Co",
    details:
      "North Indian, Continental, Chinese, Italian, BBQ, Bar Food, Desserts Whitefield, Bangalore",
    price: 2200,
    distance: "2.7 km",
    rating: 4.3,
  },
  {
    id: 6,
    image:
      "https://b.zmtcdn.com/data/pictures/0/20416890/431f3d9831b3fb2e67877653d3f83b40_featured_v2.jpg?output-format=webp",
    title: "Zodiac Bar & Kitchen",
    details:
      "Continental, North Indian, Pizza, Italian, Chinese, Fast Food, Biryani, Desserts Brookefield, Bangalore",
    price: 1800,
    distance: "1.7 km",
    rating: 4.3,
  },
  {
    id: 7,
    image:
      "https://b.zmtcdn.com/data/pictures/chains/7/53497/8d1d8b5d69b2467d98180ca13302add9_featured_v2.jpg?output-format=webp",
    title: "Pasta Street",
    details:
      "Pasta, Pizza, Italian, Salad, Desserts, Beverages Varthur Main Road, Whitefield, Bangalor",
    price: 1900,
    distance: "1.4 km",
    rating: 4.3,
  },
  {
    id: 8,
    image:
      "https://b.zmtcdn.com/data/pictures/chains/8/58698/3aa2079d1ded4a354058acf1084c7386_featured_v2.jpg?output-format=webp",
    title: "Mamagoto",
    details:
      "Asian, Sushi, Japanese, Sichuan, Thai, Desserts Marathahalli, Bangalore",
    price: 1500,
    distance: "1.2 km",
    rating: 4.3,
  },
  {
    id: 9,
    image:
      "https://b.zmtcdn.com/data/pictures/6/19187476/64e04cf14756f1f218439b530fcc48e3_featured_v2.jpg?output-format=webp",
    title: "Fox In The Field",
    details:
      "Modern Indian, Continental, North Indian, Pizza, American, Italian, Desserts, Beverages Forum Shantiniketan Mall, Whitefield,",
    price: 900,
    distance: "4.1 km",
    rating: 4.3,
  },
  {
    id: 10,
    image:
      "https://b.zmtcdn.com/data/pictures/chains/2/18535632/a7e9d1b3b025b3081ca6ccfafafe4cf4_featured_v2.jpg",
    title: "Aroma's Hyderabad House",
    details:
      "Hyderabadi, Biryani, North Indian, Mughlai, Chinese, Seafood, Kebab, Beverages Marathahalli, Bangalore",
    price: 950,
    distance: "1.3 km",
    rating: 4.3,
  },
  {
    id: 11,
    image:
      "https://b.zmtcdn.com/data/pictures/2/53872/a802c255b02922c217fff01fa9c69e53_featured_v2.jpg",
    title: "Windmills",
    details:
      "Continental, North Indian, Mughlai, Kebab, Desserts Craftworks, Bangalore",
    price: 3500,
    distance: "3.7 km",
    rating: 4.3,
  },
  {
    id: 12,
    image:
      "https://b.zmtcdn.com/data/pictures/chains/1/18313531/d34593d0faea7fb4bb27af37d4ee1709_featured_v2.jpg",
    title: "Biergarten",
    details:
      "Continental, Italian, North Indian, South Indian, Seafood, Desserts, Juices, Beverages Forum Shantiniketan Mall, Whitefield, B",
    price: 2100,
    distance: "2.1 km",
    rating: 4.3,
  },
  {
    id: 13,
    image:
      "https://b.zmtcdn.com/data/pictures/7/19868137/22c6031fd4bbd10d0bd94b6f8809155f_featured_v2.jpg",
    title: "Backstreet Brewery",
    details:
      "Italian, Bar Food, Pizza, North Indian, Asian, Desserts, Beverages Sarjapur Road, Bangalore",
    price: 1550,
    distance: "5.1 km",
    rating: 4.3,
  },
  {
    id: 14,
    image:
      "https://b.zmtcdn.com/data/pictures/chains/8/57438/d7f1e56afdaddb183b2f4167d67dfc71_featured_v2.jpg",
    title: "Rajdhani",
    details:
      "Gujarati, North Indian, Rajasthani Phoenix Marketcity Bangalore, Whitefi",
    price: 1200,
    distance: "4.0 km",
    rating: 4.3,
  },
  {
    id: 15,
    image:
      "https://b.zmtcdn.com/data/pictures/chains/5/18298235/61ea23ce5dec8c3183ab3ea801e95648_featured_v2.jpg",
    title: "Nando's",
    details:
      "Burger, Healthy Food, Portuguese Phoenix Marketcity Bangalore, Whitefiel",
    price: 2600,
    distance: "4.4 km",
    rating: 4.3,
  },
  {
    id: 16,
    image:
      "https://b.zmtcdn.com/data/pictures/chains/2/18595782/82ded2a6514c949e29efb4a74d648826_featured_v2.jpg",
    title: "The Pallet",
    details:
      "Finger Food, North Indian, Continental, Chinese, Italian, Beverages Whitefield, Bangalore",
    price: 2200,
    distance: "4.5 km",
    rating: 4.3,
  },
  {
    id: 17,
    image:
      "https://b.zmtcdn.com/data/pictures/7/20273287/e1185dc09f0b1cb31c17fc77a07a76be_featured_v2.jpg",
    title: "Hitchki",
    details:
      "North Indian, Chinese, Continental, Biryani, Finger Food, Bar Food, Desserts, Beverages Phoenix Marketcity Bangalore, Whitefie",
    price: 1680,
    distance: "2.6 km",
    rating: 4.3,
  },
  {
    id: 18,
    image:
      "https://b.zmtcdn.com/data/pictures/7/56467/2237ec6920d9c51cb6075437cc7f87a3_featured_v2.jpg",
    title: "153 Biere Street",
    details:
      "Asian, Continental, North Indian, Malaysian, Italian, Desserts Whitefield, Bangalore",
    price: 3000,
    distance: "3.4 km",
    rating: 4.3,
  },
  {
    id: 19,
    image:
      "https://b.zmtcdn.com/data/pictures/3/19264693/7994ea3bb0211da27dd46d07a2b2d541_featured_v2.jpg",
    title: "Hard Rock Cafe",
    details:
      "Salad, American, Sandwich, Burger, Wraps, Fast Food, Desserts, Beverages Ascendas Park Square, Whitefield, Bang",
    price: 1700,
    distance: "3.3 km",
    rating: 4.3,
  },
  {
    id: 20,
    image:
      "https://b.zmtcdn.com/data/pictures/1/18353121/919df7e17989713ce3fca155e5b9322f_featured_v2.jpg",
    title: "Flechazo",
    details:
      "North Indian, Chinese, Pizza, Continental, Fast Food, Desserts, Shake, Beverages Marathahalli, Bangalore",
    price: 2900,
    distance: "3.1 km",
    rating: 4.3,
  },
  {
    id: 21,
    image:
      "https://b.zmtcdn.com/data/pictures/2/52312/702b42228f0041fcb407b105a9ed4aea_featured_v2.jpg",
    title: "Pasta Street",
    details:
      "Pasta, Pizza, Italian, Salad, Desserts, Beverages Varthur Main Road, Whitefield, Bangalor",
    price: 2300,
    distance: "1.4 km",
    rating: 4.3,
  },
];

const Product = () => {
  return (
    <>
      <div id="rp-product-main">
        {myProducts.map((el) => {
          return (
            <div className="product-child">
              <img src={el.image} alt="error" />
              <div className="product-child-container">
                <div className="product-details-left">
                  <p className="product-title">{el.title}</p>
                  <p className="product-details">{el.details}</p>
                </div>
                <div className="product-details-right">
                  <h6 className="product-h6">
                    {el.rating}
                    <StarRateIcon style={{ fontSize: "13px" }} />
                  </h6>
                  <p className="rp-p1-product">₹{el.price}</p>
                  <p className="rp-p2-product">{el.distance}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Product;
