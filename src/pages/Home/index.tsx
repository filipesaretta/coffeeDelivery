import { Catalog, Features, HomeContainer, HomeDetails, Title } from './styles'

import coffeMainImage from '../../assets/img/cofee-image-home.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { CardItem } from '../../components/CardItem'
import storeItems from '../../data/storeItems'

export function Home() {
  return (
    <>
      <HomeContainer>
        <HomeDetails>
          <Title>
            <h1>
              Trovi il caffè perfetto per te in qualsiasi orari del giorno
            </h1>
            <p>
              Con il coffee delivery puoi ricevere il tuo caffè dove vuoi e
              quando vuoi
            </p>
          </Title>
          <Features>
            <p>
              <span className="cart">
                <ShoppingCart width={16} weight="fill" />
              </span>
              Acquisto semplice e sicuro
            </p>
            <p>
              <span className="timer">
                <Timer width={16} weight="fill" />
              </span>
              Consegna rapida e tracciata
            </p>
            <p>
              <span className="package">
                <Package width={16} weight="fill" />
              </span>
              Imballaggio mantieni il caffè intatto
            </p>
            <p>
              <span className="coffee">
                <Coffee width={16} weight="fill" />
              </span>
              Il caffè arriva caldo fino a te!
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
          <CardItem items={item} key={item.id} />
        ))}
      </Catalog>
    </>
  )
}
