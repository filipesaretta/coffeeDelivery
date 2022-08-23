import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useForm } from 'react-hook-form'
import {
  Form,
  FormAdress,
  FormContainer,
  FormPayment,
  PaymentSelection,
  Title,
} from './styles'

export function Checkout() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data: any) => console.log(data)

  console.log(watch('cep')) // watch input value by passing the name of it

  return (
    <>
      <h1>Complete seu pedido</h1>

      <FormContainer>
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
              name="cep"
              placeholder="CEP"
              {...(register('cep'), { required: true })}
            />
            {errors.cep && <span>This field is required</span>}

            <input placeholder="Rua" {...register('rua', { required: true })} />
            {errors.rua && <span>This field is required</span>}
            <div className="two-inputs">
              <input
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
                  pagar
                </p>
              </div>
            </Title>
            <PaymentSelection>
              <button type="button">
                <CreditCard size={22} weight="regular" color="#8047F8" />
                <span> Cartão de crédito</span>
              </button>
              <button type="button">
                <Bank size={22} weight="regular" color="#8047F8" />
                <span>Cartão de débito</span>
              </button>
              <button type="button">
                <Money size={22} weight="regular" color="#8047F8" />
                <span>Dinheiro</span>
              </button>
            </PaymentSelection>
          </FormPayment>

          {/* <input type="submit" /> */}
        </Form>
      </FormContainer>
    </>
  )
}
