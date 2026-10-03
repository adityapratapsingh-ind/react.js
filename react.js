import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="imgg"
          src="https://www.shutterstock.com/image-vector/fast-delivery-logo-icon-design-600w-1708549753.jpg"
        />
      </div>
      <div className="Nav-lists">
        <ul>
          <li>Help</li>
          <li>About</li>
          <li>Feedback</li>
        </ul>
      </div>
    </div>
  );
};

const RestroCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, sla, costForTwo } = resData?.info;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0 " }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h4>{cuisines.join(" ,")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} minutes</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};
const resList = [
  {
    info: {
      id: "141535",
      name: "Shiv Bhojhnalaya",
      cloudinaryImageId: "pirjyq8vizxdqr74qcfz",
      locality: "Khandari",
      areaName: "Khandari",
      costForTwo: "₹200 for two",
      cuisines: ["North Indian"],
      avgRating: 3.5,
      parentId: "13493",
      avgRatingString: "3.5",
      totalRatingsString: "6.8K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-10-04 03:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description:
              "Serves only 100% vegetarian food, with no non-veg items.",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
              {
                attributes: {
                  description:
                    "Serves only 100% vegetarian food, with no non-veg items.",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "2.9",
          ratingCount: "32",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-fcebcda6-78c5-4e11-ba2d-cf14710da6fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/agra/shiv-bhojhnalaya-khandari-rest141535",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "134461",
      name: "Om Sai Ram Bhojnalaya",
      cloudinaryImageId: "li2cwuqpmqojxqs5ncju",
      locality: "Khandari",
      areaName: "Khandari",
      costForTwo: "₹250 for two",
      cuisines: ["Indian", "Biryani"],
      avgRating: 3.9,
      parentId: "151794",
      avgRatingString: "3.9",
      totalRatingsString: "12K+",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 2.5,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "2.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-10-04 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description:
              "Serves only 100% vegetarian food, with no non-veg items.",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description:
                    "Serves only 100% vegetarian food, with no non-veg items.",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.9",
          ratingCount: "1.1K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-fcebcda6-78c5-4e11-ba2d-cf14710da6fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/agra/om-sai-ram-bhojnalaya-khandari-rest134461",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "570253",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/f18098a2-43a8-4513-8373-fab4821ce491_570253.jpg",
      locality: "Khandari",
      areaName: "SRK Mall store",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.2,
      parentId: "166",
      avgRatingString: "4.2",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 17,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "10-15 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-10-04 04:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
            description: "Top-rated for Bolt, based on user votes.",
          },
          {
            imageId: "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
            description: "Top-rated for Burger, based on user votes.",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Top-rated for Bolt, based on user votes.",
                  imageId:
                    "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                  theme: "",
                },
              },
              {
                attributes: {
                  description: "Top-rated for Burger, based on user votes.",
                  imageId:
                    "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.7",
          ratingCount: "4.0K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-fcebcda6-78c5-4e11-ba2d-cf14710da6fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/agra/burger-king-khandari-srk-mall-store-rest570253",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "299472",
      name: "La Pino'z Pizza",
      cloudinaryImageId: "wsiozrbg3dmrfhsriiai",
      locality: "Sanjay Place",
      areaName: "Sanjay Place",
      costForTwo: "₹300 for two",
      cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
      avgRating: 4.2,
      parentId: "4961",
      avgRatingString: "4.2",
      totalRatingsString: "15K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-10-04 04:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
            description: "Top-rated for Pizza, based on user votes.",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Top-rated for Pizza, based on user votes.",
                  imageId:
                    "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.6",
          ratingCount: "1.7K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-fcebcda6-78c5-4e11-ba2d-cf14710da6fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/agra/la-pinoz-pizza-sanjay-place-rest299472",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "656582",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/3185138d-7721-4c7b-8623-9ea8a42d9b90_656582.jpg",
      locality: "Khandari",
      areaName: "Khandari",
      costForTwo: "₹350 for two",
      cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
      avgRating: 4.3,
      parentId: "2",
      avgRatingString: "4.3",
      totalRatingsString: "977",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-10-04 02:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
          {
            imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
            description:
              "Meals with high protein, low calorie and no added sugar",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
              {
                attributes: {
                  description:
                    "Meals with high protein, low calorie and no added sugar",
                  imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.9",
          ratingCount: "691",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-fcebcda6-78c5-4e11-ba2d-cf14710da6fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/agra/subway-khandari-rest656582",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "254105",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/9/9335702a-3244-46bf-8ace-ab24d983448e_254105.JPG",
      locality: "Civil Lines",
      areaName: "Sanjay Place",
      costForTwo: "₹400 for two",
      cuisines: ["American", "Fast Food", "Beverages"],
      avgRating: 4.3,
      parentId: "630",
      avgRatingString: "4.3",
      totalRatingsString: "13K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 3.7,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-10-04 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
            description: "Top-rated for Burger, based on user votes.",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Top-rated for Burger, based on user votes.",
                  imageId:
                    "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "6.4K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-fcebcda6-78c5-4e11-ba2d-cf14710da6fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/agra/mcdonalds-civil-lines-sanjay-place-rest254105",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "449450",
      name: "Domino's Pizza",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/9/3/77276647-ad17-44fd-ada1-fe01c461c765_449450.JPG",
      locality: "Vijay Market",
      areaName: "Dayal Bagh",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.5,
      parentId: "2456",
      avgRatingString: "4.5",
      totalRatingsString: "1.9K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-10-04 04:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
            description: "Top-rated for Bolt, based on user votes.",
          },
          {
            imageId: "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
            description: "Top-rated for Pizza, based on user votes.",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Top-rated for Bolt, based on user votes.",
                  imageId:
                    "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                  theme: "",
                },
              },
              {
                attributes: {
                  description: "Top-rated for Pizza, based on user votes.",
                  imageId:
                    "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-fcebcda6-78c5-4e11-ba2d-cf14710da6fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/agra/dominos-pizza-vijay-market-dayal-bagh-rest449450",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "695597",
      name: "Cheesecake & co.",
      cloudinaryImageId: "b318c0b4bc2169550145ace1d6e791a2",
      locality: "Sheetla Road",
      areaName: "SHEEL VIHAR COLONY",
      costForTwo: "₹300 for two",
      cuisines: ["Desserts", "Bakery"],
      avgRating: 4.6,
      veg: true,
      parentId: "387417",
      avgRatingString: "4.6",
      totalRatingsString: "782",
      sla: {
        deliveryTime: 9,
        lastMileTravel: 0.7,
        serviceability: "SERVICEABLE",
        slaString: "5-10 mins",
        lastMileTravelString: "0.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-10-03 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
          {
            imageId: "newg.png",
            description:
              "Premium gourmet restaurant offering an elevated, high-quality food experience.",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
              {
                attributes: {
                  description:
                    "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                  imageId: "newg.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-fcebcda6-78c5-4e11-ba2d-cf14710da6fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/agra/cheesecake-and-co-sheetla-road-sheel-vihar-colony-rest695597",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "151719",
      name: "Kings Kulfi & Icecreams",
      cloudinaryImageId: "djkwtamkcmo4hslqmxqz",
      locality: "Civil Lines",
      areaName: "Civil Lines",
      costForTwo: "₹350 for two",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.6,
      parentId: "3672",
      avgRatingString: "4.6",
      totalRatingsString: "850",
      sla: {
        deliveryTime: 16,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "10-15 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-10-04 00:15:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.8",
          ratingCount: "9",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-fcebcda6-78c5-4e11-ba2d-cf14710da6fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/agra/kings-kulfi-and-icecreams-civil-lines-rest151719",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "566482",
      name: "Faasos Signature Wraps & Rolls",
      cloudinaryImageId: "c583ca6ce40b426797a78ae2ac91f2ec",
      locality: "Nehru Nagar",
      areaName: "Civil Lines",
      costForTwo: "₹350 for two",
      cuisines: [
        "Wraps",
        "rolls",
        "Fast Food",
        "Burger",
        "shawarma",
        "Rice Bowls",
      ],
      avgRating: 4.4,
      parentId: "340366",
      avgRatingString: "4.4",
      totalRatingsString: "430",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-10-04 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId:
              "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
            description: "Top-rated for Corporate, based on user votes.",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Top-rated for Corporate, based on user votes.",
                  imageId:
                    "brand_cards/Badges%202026/85_Best%20in%20Corporate2026.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-fcebcda6-78c5-4e11-ba2d-cf14710da6fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/agra/faasos-signature-wraps-and-rolls-nehru-nagar-civil-lines-rest566482",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "361098",
      name: "Veg Meals By LunchBox",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/9/10/96c1879e-994c-4778-8f3e-787b34ab5cc1_361098.JPG",
      locality: "Nehru Nagar",
      areaName: "Civil Lines",
      costForTwo: "₹200 for two",
      cuisines: ["Biryani", "North Indian", "Desserts", "Beverages"],
      avgRating: 4.2,
      veg: true,
      parentId: "21938",
      avgRatingString: "4.2",
      totalRatingsString: "327",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-10-04 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description:
              "Serves only 100% vegetarian food, with no non-veg items.",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description:
                    "Serves only 100% vegetarian food, with no non-veg items.",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-fcebcda6-78c5-4e11-ba2d-cf14710da6fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/agra/veg-meals-by-lunchbox-nehru-nagar-civil-lines-rest361098",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "801435",
      name: "Makhani Darbar: Curries, Breads & Beyond",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/20/6e996dca-db23-44fe-b46e-116b66e82cb1_801435.JPG",
      locality: "Sanjay Place",
      areaName: "Nehru Nagar",
      costForTwo: "₹500 for two",
      cuisines: [
        "Biryani",
        "North Indian",
        "Kebabs",
        "Mughlai",
        "Beverages",
        "Desserts",
      ],
      avgRating: 3.9,
      parentId: "478595",
      avgRatingString: "3.9",
      totalRatingsString: "118",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-10-04 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId:
              "brand_cards/Badges%202026/123_Best%20in%20Newcomer2026.png",
            description: "Top-rated for Newcomer, based on user votes.",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Top-rated for Newcomer, based on user votes.",
                  imageId:
                    "brand_cards/Badges%202026/123_Best%20in%20Newcomer2026.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-fcebcda6-78c5-4e11-ba2d-cf14710da6fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/agra/makhani-darbar-curries-breads-and-beyond-sanjay-place-nehru-nagar-rest801435",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "623645",
      name: "Giani",
      cloudinaryImageId: "jxr6kdhky89zu4dwljym",
      locality: "Civil Lines",
      areaName: "Anthela",
      costForTwo: "₹350 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.5,
      veg: true,
      parentId: "415",
      avgRatingString: "4.5",
      totalRatingsString: "239",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 4.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "4.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-10-04 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description:
              "Premium gourmet restaurant offering an elevated, high-quality food experience.",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description:
              "Serves only 100% vegetarian food, with no non-veg items.",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description:
                    "Premium gourmet restaurant offering an elevated, high-quality food experience.",
                  imageId: "newg.png",
                  theme: "",
                },
              },
              {
                attributes: {
                  description:
                    "Serves only 100% vegetarian food, with no non-veg items.",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.6",
          ratingCount: "145",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-fcebcda6-78c5-4e11-ba2d-cf14710da6fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/agra/giani-civil-lines-anthela-rest623645",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "629411",
      name: "Dum Safar Biryani",
      cloudinaryImageId: "p3uscqxnshkcafzsqv38",
      locality: "Cosmos Mall",
      areaName: "Civil Lines",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "Hyderabadi", "Kebabs", "North Indian", "barbeque"],
      avgRating: 4.4,
      parentId: "351013",
      avgRatingString: "4.4",
      totalRatingsString: "1.5K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 4.2,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "4.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-10-04 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-fcebcda6-78c5-4e11-ba2d-cf14710da6fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/agra/dum-safar-biryani-cosmos-mall-civil-lines-rest629411",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "793181",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/7/1/1eed9fde-a40b-424a-8633-9b8c2e8c3660_793181.JPG",
      locality: "Khandari",
      areaName: "Nagar Nigam",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.2,
      parentId: "547",
      avgRatingString: "4.2",
      totalRatingsString: "1.7K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-10-04 04:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
            description: "Top-rated for Burger, based on user votes.",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Top-rated for Burger, based on user votes.",
                  imageId:
                    "brand_cards/Badges%202026/41_Best%20in%20Burger2026.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.5",
          ratingCount: "337",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-fcebcda6-78c5-4e11-ba2d-cf14710da6fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/agra/kfc-khandari-nagar-nigam-rest793181",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "778196",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/6/15/62172b41-b578-4284-a695-00158bea4dce_778196.JPG",
      locality: "Church Road",
      areaName: "Church Road",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.4,
      parentId: "721",
      avgRatingString: "4.4",
      totalRatingsString: "2.1K+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-10-04 03:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
            description: "Top-rated for Pizza, based on user votes.",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Top-rated for Pizza, based on user votes.",
                  imageId:
                    "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.9",
          ratingCount: "717",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-fcebcda6-78c5-4e11-ba2d-cf14710da6fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/agra/pizza-hut-church-road-rest778196",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "454743",
      name: "Pizza King",
      cloudinaryImageId: "0ba64c8321dc0b54e01a0eaeb5973771",
      locality: "DayalBagh Road",
      areaName: "Dayal Bagh",
      costForTwo: "₹250 for two",
      cuisines: ["Pizzas"],
      avgRating: 4,
      parentId: "4202",
      avgRatingString: "4.0",
      totalRatingsString: "3.9K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-10-04 03:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      priceComparisonComms: {},
    },
    analytics: {
      context: "seo-data-fcebcda6-78c5-4e11-ba2d-cf14710da6fb",
    },
    cta: {
      link: "https://www.swiggy.com/city/agra/pizza-king-dayalbagh-road-dayal-bagh-rest454743",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "639642",
      name: "Biryani Blues",
      cloudinaryImageId: "97377e54937c079fe269d744aa66274a",
      locality: "Nehru Nagar",
      areaName: "Civil Lines",
      costForTwo: "₹400 for two",
      cuisines: [
        "Biryani",
        "Hyderabadi",
        "Lucknowi",
        "Kebabs",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.2,
      parentId: "13813",
      avgRatingString: "4.2",
      totalRatingsString: "1.7K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-10-04 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <button type="button"> search</button>
      </div>
      <div className="res-container">
        {resList.map((restorant) => (
          <RestroCard key={restorant.info.id} resData={restorant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
