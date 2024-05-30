import type {
  EditStackById,
  UpdateStackInput,
  UpdateStackMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import StackForm from 'src/components/Stack/StackForm'

export const QUERY: TypedDocumentNode<EditStackById> = gql`
  query EditStackById($id: String!) {
    stack: stack(id: $id) {
      id
      title
      userId
    }
  }
`

const UPDATE_STACK_MUTATION: TypedDocumentNode<
  EditStackById,
  UpdateStackMutationVariables
> = gql`
  mutation UpdateStackMutation($id: String!, $input: UpdateStackInput!) {
    updateStack(id: $id, input: $input) {
      id
      title
      userId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ stack }: CellSuccessProps<EditStackById>) => {
  const [updateStack, { loading, error }] = useMutation(UPDATE_STACK_MUTATION, {
    onCompleted: () => {
      toast.success('Stack updated')
      navigate(routes.stacks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (
    input: UpdateStackInput,
    id: EditStackById['stack']['id']
  ) => {
    updateStack({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Stack {stack?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <StackForm
          stack={stack}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
