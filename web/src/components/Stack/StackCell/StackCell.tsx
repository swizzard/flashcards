import type { FindStackById, FindStackByIdVariables } from 'types/graphql'

import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

import Stack from 'src/components/Stack/Stack'

export const QUERY: TypedDocumentNode<
  FindStackById,
  FindStackByIdVariables
> = gql`
  query FindStackById($id: String!) {
    stack: stack(id: $id) {
      id
      title
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Stack not found</div>

export const Failure = ({
  error,
}: CellFailureProps<FindStackByIdVariables>) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({
  stack,
}: CellSuccessProps<FindStackById, FindStackByIdVariables>) => {
  return <Stack stack={stack} />
}
