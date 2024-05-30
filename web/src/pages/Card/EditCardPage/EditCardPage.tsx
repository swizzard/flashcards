import EditCardCell from 'src/components/Card/EditCardCell'

type CardPageProps = {
  id: string
}

const EditCardPage = ({ id }: CardPageProps) => {
  return <EditCardCell id={id} />
}

export default EditCardPage
