import { Catalog, Features, HomeContainer, HomeDetails, Title } from './styles'

import coffeMainImage from '../../assets/img/cofee-image-home.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { CardItem } from '../../components/CardItem'
import storeItems from '../../data/storeItems.json'

export function Home() {
  return (
    <>
      <HomeContainer>
        <HomeDetails>
          <Title>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee DeVlivery você recebe seu café onde estiver, a
              qualquer hora.
            </p>
          </Title>
          <Features>
            <p>
              <span className="cart">
                <ShoppingCart width={16} weight="fill" />
              </span>
              Compra simples e segura
            </p>
            <p>
              <span className="timer">
                <Timer width={16} weight="fill" />
              </span>
              Entrega rápida e rastreada
            </p>
            <p>
              <span className="package">
                <Package width={16} weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </p>
            <p>
              <span className="coffee">
                <Coffee width={16} weight="fill" />
              </span>
              O café chega fresquinho até você
            </p>
          </Features>
        </HomeDetails>
        <img
          src={coffeMainImage}
          alt="A cup of coffee with some beans of coffee around it"
        />
      </HomeContainer>
      <Catalog>
        {storeItems.map((item) => (
          <div key={item.id}>
            <CardItem {...item} />
          </div>
        ))}
      </Catalog>
    </>
  )
}
