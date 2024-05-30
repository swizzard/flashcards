import EditStackCell from 'src/components/Stack/EditStackCell'

type StackPageProps = {
  id: string
}

const EditStackPage = ({ id }: StackPageProps) => {
  return <EditStackCell id={id} />
}

export default EditStackPage
