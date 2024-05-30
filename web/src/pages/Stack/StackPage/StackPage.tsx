import StackCell from 'src/components/Stack/StackCell'

type StackPageProps = {
  id: string
}

const StackPage = ({ id }: StackPageProps) => {
  return <StackCell id={id} />
}

export default StackPage
