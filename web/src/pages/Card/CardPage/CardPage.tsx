import CardCell from 'src/components/Card/CardCell'

type CardPageProps = {
  id: string
}

const CardPage = ({ id }: CardPageProps) => {
  return <CardCell id={id} />
}

export default CardPage
