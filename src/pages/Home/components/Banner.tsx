import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import BigCoffe from "../../../assets/BigCoffe.svg";
import {
  BannerContainer,
  BannerItem,
  BannerItensContainer,
  BannerTitle,
} from "./BannerStyle";

export function Banner() {
  return (
    <BannerContainer>
      <div>
        <BannerTitle>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>
            Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
            hora
          </h2>
        </BannerTitle>
        <BannerItensContainer>
          <BannerItem color="yellow-dark">
            <button>
              <ShoppingCart size={16} weight="fill" />
            </button>
            <span>Compra simples e segura</span>
          </BannerItem>

          <BannerItem color="yellow">
            <button>
              <Timer size={16} weight="fill" />
            </button>
            <span>Entrega rápida e rastreada</span>
          </BannerItem>

          <BannerItem color="base-text">
            <button>
              <Package size={16} weight="fill" />
            </button>
            <span>Compra simples e segura</span>
          </BannerItem>

          <BannerItem color="purple">
            <button>
              <Coffee size={16} weight="fill" />
            </button>
            <span>Compra simples e segura</span>
          </BannerItem>
        </BannerItensContainer>
      </div>

      <img src={BigCoffe} alt="" />
    </BannerContainer>
  );
}
