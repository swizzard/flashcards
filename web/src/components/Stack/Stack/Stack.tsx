import type {
  DeleteStackMutation,
  DeleteStackMutationVariables,
  FindStackById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

const DELETE_STACK_MUTATION: TypedDocumentNode<
  DeleteStackMutation,
  DeleteStackMutationVariables
> = gql`
  mutation DeleteStackMutation($id: String!) {
    deleteStack(id: $id) {
      id
    }
  }
`

interface Props {
  stack: NonNullable<FindStackById['stack']>
}

const Stack = ({ stack }: Props) => {
  const [deleteStack] = useMutation(DELETE_STACK_MUTATION, {
    onCompleted: () => {
      toast.success('Stack deleted')
      navigate(routes.stacks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteStackMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete stack ' + id + '?')) {
      deleteStack({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Stack {stack.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{stack.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{stack.title}</td>
            </tr>
            <tr>
              <th>User id</th>
              <td>{stack.userId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editStack({ id: stack.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(stack.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Stack
