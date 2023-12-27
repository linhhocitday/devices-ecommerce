import { Children, createContext, useReducer } from "react";

export const AppContext = createContext();

export const appReducer = () => {};

const products = [
  {
    id: 1,
    type: "phone",
    name: "iPhone 15 Pro",
    thumbnail: "product-iphone15pro.png",
    preOrder: "true",
    colors: ["#BAB4A9", "#4D5463", "#F3F2EC", "#4D4E4F"],
    price: 999,
    storages: {
      "128GB": 999,
      "256GB": 1099,
      "512GB": 1299,
      "1TB": 1499,
    },
  },
  {
    id: 2,
    type: "phone",
    name: "iPhone 15",
    thumbnail: "product-iphone15.png",
    preOrder: "true",
    colors: ["#D5DDE0", "#ECD3D5", "#EDE8CB", "#D3DCCD", "#4B4F50"],
    price: 1199,
    storages: {
      "128GB": 999,
      "256GB": 1099,
      "512GB": 1299,
      "1TB": 1499,
    },
  },
  {
    id: 3,
    type: "phone",
    name: "iPhone 14 Plus",
    thumbnail: "product-iphone14.png",
    preOrder: "false",
    colors: ["#A7BACB", "#E6DDEB", "#FFF495", "#30363D", "#FAF6F3", "#FC1735"],
    price: 799,
    storages: {
      "128GB": 999,
      "256GB": 1099,
      "512GB": 1299,
      "1TB": 1499,
    },
  },
  {
    id: 4,
    type: "phone",
    name: "iPhone 14",
    thumbnail: "product-iphone14.png",
    preOrder: "false",
    colors: ["#A7BACB", "#E6DDEB", "#FFF495", "#30363D", "#FAF6F3", "#FC1735"],
    price: 699,
    storages: {
      "128GB": 999,
      "256GB": 1099,
      "512GB": 1299,
      "1TB": 1499,
    },
  },
  {
    id: 5,
    name: "iPhone 13",
    type: "phone",
    thumbnail: "product-iphone13.png",
    preOrder: "false",
    colors: ["#437692", "#FBE1DD", "#41484E", "#FBF7F4", "#475946", "#C72333"],
    price: 599,
    storages: {
      "128GB": 999,
      "256GB": 1099,
      "512GB": 1299,
      "1TB": 1499,
    },
  },
  {
    id: 6,
    type: "laptop",
    name: 'MacBook Air 13"',
    thumbnail: "product-macbookAir13Inch.png",
    preOrder: "false",
    colors: ["#7D7E80", "#2E3642", "#F0E4D3", "#E3E4E6"],
    price: 1099,
    storages: {
      "128GB": 999,
      "256GB": 1099,
      "512GB": 1299,
      "1TB": 1499,
    },
  },
  {
    id: 7,
    type: "laptop",
    name: 'MacBook Air 15"',
    thumbnail: "product-macbookAir15Inch.png",
    preOrder: "false",
    colors: ["#7D7E80", "#2E3642", "#F0E4D3", "#E3E4E6"],
    price: 1299,
    storages: {
      "128GB": 999,
      "256GB": 1099,
      "512GB": 1299,
      "1TB": 1499,
    },
  },
  {
    id: 8,
    type: "laptop",
    name: 'MacBook Pro 13"',
    thumbnail: "product-macbookPro13Inch.png",
    preOrder: "false",
    colors: ["#AAADB0", "#DDDFDE"],
    price: 1299,
    storages: {
      "128GB": 999,
      "256GB": 1099,
      "512GB": 1299,
      "1TB": 1499,
    },
  },
  {
    id: 9,
    type: "laptop",
    name: 'MacBook Pro 14"',
    thumbnail: "product-macbookPro14Inch.png",
    preOrder: "false",
    colors: ["#868789", "#E5E6E7"],
    price: 1999,
    storages: {
      "128GB": 999,
      "256GB": 1099,
      "512GB": 1299,
      "1TB": 1499,
    },
  },
  {
    id: 10,
    type: "laptop",
    name: 'MacBook Pro 16"',
    thumbnail: "product-macbookPro16Inch.jpg",
    preOrder: "false",
    colors: ["#868789", "#E5E6E7"],
    price: 2499,
    storages: {
      "128GB": 999,
      "256GB": 1099,
      "512GB": 1299,
      "1TB": 1499,
    },
  },
  {
    id: 11,
    type: "tablet",
    name: 'iPad Pro 11"',
    thumbnail: "product-ipadPro11Inch.png",
    preOrder: "false",
    colors: ["#B1B4B7", "#DFE1E0"],
    price: 799,
    storages: {
      "128GB": 999,
      "256GB": 1099,
      "512GB": 1299,
      "1TB": 1499,
    },
  },
  {
    id: 12,
    type: "tablet",
    name: "iPad Air",
    thumbnail: "product-ipadAir.jpg",
    preOrder: "false",
    colors: ["#747277", "#91B4C4", "#E8D2CF", "#BEBDD4", "#E6E2DA"],
    price: 599,
    storages: {
      "128GB": 999,
      "256GB": 1099,
      "512GB": 1299,
      "1TB": 1499,
    },
  },
  {
    id: 13,
    type: "tablet",
    name: "iPad (10th gen)",
    thumbnail: "product-ipad10thGen.png",
    preOrder: "false",
    colors: ["#6880A3", "#DE6373", "#F0D95B", "#E3E4E5"],
    price: 449,
    storages: {
      "128GB": 999,
      "256GB": 1099,
      "512GB": 1299,
      "1TB": 1499,
    },
  },
  {
    id: 14,
    type: "watch",
    name: "Apple Watch Series 9",
    thumbnail: "product-watchS9.jpg",
    preOrder: "false",
    colors: ["#E8D2CF", "#4D5463", "#E6E2DA", "#4D4E4F"],
    price: 399,
    storages: {
      "128GB": 999,
      "256GB": 1099,
      "512GB": 1299,
      "1TB": 1499,
    },
  },
  {
    id: 15,
    type: "watch",
    name: "Apple Watch Ultra 2",
    thumbnail: "product-watchU2.jpg",
    preOrder: "false",
    colors: [],
    price: 799,
    storages: {
      "128GB": 999,
      "256GB": 1099,
      "512GB": 1299,
      "1TB": 1499,
    },
  },
];

const initialState = {
  products: products,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const findProductByName = (name) => {
    const product = state.products.find((product) => product.name == name);

    return product;
  };

  const findProductById = (id) => {
    const product = state.products.find((product) => product.id == id);

    return product;
  };

  return (
    <AppContext.Provider
      value={{ ...state, findProductByName, findProductById }}
    >
      {children}
    </AppContext.Provider>
  );
};
