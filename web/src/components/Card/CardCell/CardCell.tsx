import type { FindCardById, FindCardByIdVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Card from 'src/components/Card/Card'

export const QUERY: TypedDocumentNode<
  FindCardById,
  FindCardByIdVariables
> = gql`
  query FindCardById($id: String!) {
    card: card(id: $id) {
      id
      frontText
      frontImage
      back
      stackId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Card not found</div>

export const Failure = ({ error }: CellFailureProps<FindCardByIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  card,
}: CellSuccessProps<FindCardById, FindCardByIdVariables>) => {
  return <Card card={card} />
}
