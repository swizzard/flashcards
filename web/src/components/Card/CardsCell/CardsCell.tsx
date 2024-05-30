import type { FindCards, FindCardsVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Cards from 'src/components/Card/Cards'

export const QUERY: TypedDocumentNode<FindCards, FindCardsVariables> = gql`
  query FindCards {
    cards {
      id
      frontText
      frontImage
      back
      stackId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No cards yet. '}
      <Link to={routes.newCard()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps<FindCards>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  cards,
}: CellSuccessProps<FindCards, FindCardsVariables>) => {
  return <Cards cards={cards} />
}
