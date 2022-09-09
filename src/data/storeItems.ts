import espressoTradizionale from '../assets/img/expresso.png'
import americano from '../assets/img/americano.png'
import espressoCremoso from '../assets/img/expresso-cremoso.png'
import caffeFreddo from '../assets/img/cafe-gelado.png'
import caffeLatte from '../assets/img/cafe-com-leite.png'
import latte from '../assets/img/latte.png'
import cappuccino from '../assets/img/cappuccino.png'
import macchiato from '../assets/img/macchiato.png'
import mocacino from '../assets/img/mochaccino.png'
import cioccolataCalda from '../assets/img/chocolate-quente.png'

const storeItems = [
  {
    id: 1,
    image: espressoTradizionale,
    name: 'Espresso Tradizionale',
    description:
      'Una tazzina con una bevanda aromatica che ferma il mondo circostante per un momento di piacere',
    price: 1.25,
    tags: ['Tradizionale'],
  },
  {
    id: 2,
    image: americano,
    name: 'Espresso Americano',
    description: 'Espresso diluito, meno intenso del tradizionale',
    price: 1.25,
    tags: ['Tradizionale'],
  },
  {
    id: 3,
    image: espressoCremoso,
    name: 'Espresso Cremoso',
    description: 'Espresso Tradizionale, con schiuma cremosa',
    price: 1.25,
    tags: ['Tradizionale'],
  },
  {
    id: 4,
    image: caffeFreddo,
    name: 'Espresso Freddo',
    description: 'Caffè espresso con cubetti di ghiaccio',
    price: 2.25,
    tags: ['Tradizionale', 'Freddo'],
  },
  {
    id: 5,
    image: caffeLatte,
    name: 'Caffè e latte',
    description: 'Espresso Tradizionale con latte',
    price: 1.25,
    tags: ['Tradizionale', 'Con Latte'],
  },
  {
    id: 6,
    image: latte,
    name: 'Latte',
    description:
      'Una dose di caffè espresso con il doppio latte e schiuma cremosa',
    price: 1.25,
    tags: ['Tradizionale', 'Con Latte'],
  },
  {
    id: 7,
    image: cappuccino,
    name: 'Cappuccino',
    description: 'Composta da caffè e latte montato a vapore',
    price: 1.25,
    tags: ['Tradizionale', 'Con Latte'],
  },
  {
    id: 8,
    image: macchiato,
    name: 'Macchiato',
    description: 'Fatto con schiuma, latte cotto a vapore ed espresso.',
    price: 1.25,
    tags: ['Tradizionale', 'Con Latte'],
  },
  {
    id: 9,
    image: mocacino,
    name: 'Mocaccino',
    description:
      "Bevanda calda costituita da cappuccino, panna e cioccolata, con l'aggiunta di polvere di cacao",
    price: 1.25,
    tags: ['Tradizionale', 'Con Latte'],
  },
  {
    id: 10,
    image: cioccolataCalda,
    name: 'Cioccolata Calda',
    description: 'Cioccolata sciolta nel latte caldo e caffè',
    price: 2.55,
    tags: ['Speciale', 'Con Latte'],
  },
]

export default storeItems
