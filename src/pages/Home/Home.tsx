import { Banner } from "./components/Banner";
import { CoffeList } from "./components/CoffeList";
import { HomeContainer } from "./HomeStyles";

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <CoffeList />
    </HomeContainer>
  );
}
