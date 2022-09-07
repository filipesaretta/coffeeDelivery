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
      <h1>Complete seu pedido</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormAdress>
          <Title>
            <span>
              <MapPinLine size={22} weight="regular" color="#C47F17" />
            </span>
            <div>
              <p>Endereço de Entrega</p>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </Title>

          <input
            placeholder="CEP"
            {...register('cep', {
              required: true,
              pattern: /^[0-9]{5}-[0-9]{3}$/,
            })}
          />
          {errors.cep && errors.cep.type === 'required' && (
            <span>This field is required</span>
          )}
          {errors.cep && errors.cep.type === 'pattern' && (
            <span> CEP is invalid ex: 12345-678 </span>
          )}

          <input placeholder="Rua" {...register('rua', { required: true })} />
          {errors.rua && <span>This field is required</span>}

          <div className="two-inputs">
            <input
              type="number"
              placeholder="Número"
              {...register('numero', { required: true })}
            />
            {errors.numero && <span>This field is required</span>}
            <input placeholder="Complemento" {...register('complemento')} />
          </div>
          <div className="three-inputs">
            <input
              placeholder="Bairro"
              {...register('bairro', { required: true })}
            />
            {errors.bairro && <span>This field is required</span>}
            <input placeholder="Cidade" {...register('cidade')} />
            {errors.cidade && <span>This field is required</span>}
            <input placeholder="UF" {...register('uf')} />
            {errors.uf && <span>This field is required</span>}
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
                O pagamento é feito na entrega. Escolha a forma que deseja
                pagar.
              </p>
            </div>
          </Title>
          <PaymentSelection>
            <button
              type="button"
              onClick={() => setPayment('Cartão de Crédito')}
            >
              <CreditCard size={22} weight="regular" color="#8047F8" />
              <span> Cartão de crédito</span>
            </button>
            <button
              type="button"
              onClick={() => setPayment('Cartão de Débito')}
            >
              <Bank size={22} weight="regular" color="#8047F8" />
              <span>Cartão de débito</span>
            </button>
            <button type="button" onClick={() => setPayment('Dinheiro')}>
              <Money size={22} weight="regular" color="#8047F8" />
              <span>Dinheiro</span>
            </button>
          </PaymentSelection>
        </FormPayment>

        <OrderSummaryCard />
      </Form>
    </FormContainer>
  )
}
