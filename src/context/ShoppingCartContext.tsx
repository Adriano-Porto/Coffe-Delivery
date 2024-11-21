import { createContext, ReactNode, useState } from "react";

type shoppingCartInterface = {
  name: string;
  price: number;
  quantity: number;
  image: string;
}[];

interface setCoffeQuantityInChartProps {
  name: string;
  quantity: number;
  price?: number;
  image?: string;
}

interface ContextType {
  shoppingCart: shoppingCartInterface;
  setCoffeQuantityInChart: (coffe: setCoffeQuantityInChartProps) => void;
  findCoffeByName: (name: string) => findCoffeStateInChartResponse;
}

interface addProductNotCurrentlyInChartProps {
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface addProductCurrentlyInChartProps {
  name: string;
  quantity: number;
}

interface findCoffeStateInChartResponse {
  quantity: number;
  inChart: boolean;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ShoppingCartContext = createContext({} as ContextType);

export function ShoppingCartContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [shoppingCart, setShoppingCart] = useState<shoppingCartInterface>([]);

  function addProductNotCurrentlyInChart({
    name,
    price,
    quantity,
    image,
  }: addProductNotCurrentlyInChartProps) {
    setShoppingCart([...shoppingCart, { name, price, quantity, image }]);
  }

  function addProductCurrentlyInChart({
    name,
    quantity,
  }: addProductCurrentlyInChartProps) {
    const newValue = shoppingCart
      .map((item) => {
        if (item.name === name) {
          console.log(item);
          return {
            ...item,
            quantity,
          };
        }
        return item;
      })
      .filter((item) => item.quantity > 0);
    setShoppingCart(newValue);
  }

  function setCoffeQuantityInChart({
    name,
    quantity,
    price,
    image,
  }: setCoffeQuantityInChartProps) {
    const isNameInCart = shoppingCart.some((item) => item.name === name);

    console.log(isNameInCart);

    if (!isNameInCart) {
      if (!image || !price) {
        throw new Error("Image and price are required");
      }

      return addProductNotCurrentlyInChart({
        name,
        quantity,
        price,
        image,
      });
    }

    addProductCurrentlyInChart({ name, quantity });
  }

  function findCoffeByName(name: string) {
    const coffe = shoppingCart.find((item) => item.name === name);

    if (!coffe) {
      return {
        quantity: 1,
        inChart: false,
      };
    } else {
      return {
        quantity: coffe.quantity,
        inChart: true,
      };
    }
  }

  return (
    <ShoppingCartContext.Provider
      value={{ shoppingCart, setCoffeQuantityInChart, findCoffeByName }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
