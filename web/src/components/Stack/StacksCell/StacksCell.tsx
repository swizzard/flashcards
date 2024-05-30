import type { FindStacks, FindStacksVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Stacks from 'src/components/Stack/Stacks'

export const QUERY: TypedDocumentNode<FindStacks, FindStacksVariables> = gql`
  query FindStacks {
    stacks {
      id
      title
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No stacks yet. '}
      <Link to={routes.newStack()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps<FindStacks>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  stacks,
}: CellSuccessProps<FindStacks, FindStacksVariables>) => {
  return <Stacks stacks={stacks} />
}
