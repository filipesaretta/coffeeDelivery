import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { OrderSummaryCard } from '../../components/OrderSummaryCard'
import { useShoppingCartContext } from '../../contexts/ShoppingCartContext'
import {
  Form,
  FormAdress,
  FormContainer,
  FormPayment,
  PaymentSelection,
  Title,
} from './styles'

interface AddressDetailsProps {
  bairro: string
  cep: string
  cidade: string
  complemento: string
  numero: string
  payment: string
  rua: string
  uf: string
}

export function Checkout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddressDetailsProps>()
  const navigate = useNavigate()
  const [payment, setPayment] = useState('Dinheiro')

  const { handleAddress } = useShoppingCartContext()

  const onSubmit = (data: AddressDetailsProps) => {
    const deliveryData = {
      bairro: data.bairro,
      cep: data.cep,
      cidade: data.cidade,
      complemento: data.complemento,
      numero: data.numero,
      payment,
      rua: data.rua,
      uf: data.uf,
    }
    handleAddress(deliveryData)
    navigate('/success')
  }

  return (
    <FormContainer>
      <h1>Carello</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormAdress>
          <Title>
            <span>
              <MapPinLine size={22} weight="regular" color="#C47F17" />
            </span>
            <div>
              <p>Indirizzo</p>
              <p>Inserisci l&apos;indirizzo dove vuoi ricevere il tuo caffè</p>
            </div>
          </Title>

          <input
            placeholder="CAP"
            {...register('cep', {
              required: true,
              pattern: /^[0-9]{5}$/,
            })}
          />
          {errors.cep && errors.cep.type === 'required' && (
            <span>Questo campo è obbligatorio</span>
          )}
          {errors.cep && errors.cep.type === 'pattern' && (
            <span> CAP non è valido - es: 12345 </span>
          )}

          <input placeholder="Via" {...register('rua', { required: true })} />
          {errors.rua && <span>Questo campo è obbligatorio</span>}

          <div className="two-inputs">
            <input
              type="number"
              placeholder="Numero"
              {...register('numero', { required: true })}
            />
            {errors.numero && <span>Questo campo è obbligatorio</span>}
            <input placeholder="Complemento" {...register('complemento')} />
          </div>
          <div className="three-inputs">
            <input
              placeholder="Quartiere"
              {...register('bairro', { required: true })}
            />
            {errors.bairro && <span>Questo campo è obbligatorio</span>}
            <input placeholder="Città" {...register('cidade')} />
            {errors.cidade && <span>Questo campo è obbligatorio</span>}
            <input placeholder="Targa" {...register('uf')} />
            {errors.uf && <span>Questo campo è obbligatorio</span>}
          </div>
        </FormAdress>

        <FormPayment>
          <Title>
            <span>
              <CurrencyDollar size={22} weight="regular" color="#8047F8" />
            </span>
            <div>
              <p>Pagamento</p>
              <p>
                Il pagamento è fatto nella consegna. Sceglie la forma in cui
                vuoi pagare:
              </p>
            </div>
          </Title>
          <PaymentSelection>
            <button
              type="button"
              onClick={() => setPayment('Cartão de Crédito')}
            >
              <CreditCard size={22} weight="regular" color="#8047F8" />
              <span> Cata di credito</span>
            </button>
            <button
              type="button"
              onClick={() => setPayment('Cartão de Débito')}
            >
              <Bank size={22} weight="regular" color="#8047F8" />
              <span>Carta di debito</span>
            </button>
            <button type="button" onClick={() => setPayment('Dinheiro')}>
              <Money size={22} weight="regular" color="#8047F8" />
              <span>Soldi</span>
            </button>
          </PaymentSelection>
        </FormPayment>

        <OrderSummaryCard />
      </Form>
    </FormContainer>
  )
}
