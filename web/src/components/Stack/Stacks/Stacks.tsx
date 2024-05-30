import type {
  DeleteStackMutation,
  DeleteStackMutationVariables,
  FindStacks,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Stack/StacksCell'
import { truncate } from 'src/lib/formatters'

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

const StacksList = ({ stacks }: FindStacks) => {
  const [deleteStack] = useMutation(DELETE_STACK_MUTATION, {
    onCompleted: () => {
      toast.success('Stack deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id: DeleteStackMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete stack ' + id + '?')) {
      deleteStack({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>User id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {stacks.map((stack) => (
            <tr key={stack.id}>
              <td>{truncate(stack.id)}</td>
              <td>{truncate(stack.title)}</td>
              <td>{truncate(stack.userId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.stack({ id: stack.id })}
                    title={'Show stack ' + stack.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editStack({ id: stack.id })}
                    title={'Edit stack ' + stack.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete stack ' + stack.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(stack.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StacksList
