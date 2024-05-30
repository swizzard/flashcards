import type {
  DeleteCardMutation,
  DeleteCardMutationVariables,
  FindCards,
} from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Card/CardsCell'
import { truncate } from 'src/lib/formatters'

const DELETE_CARD_MUTATION: TypedDocumentNode<
  DeleteCardMutation,
  DeleteCardMutationVariables
> = gql`
  mutation DeleteCardMutation($id: String!) {
    deleteCard(id: $id) {
      id
    }
  }
`

const CardsList = ({ cards }: FindCards) => {
  const [deleteCard] = useMutation(DELETE_CARD_MUTATION, {
    onCompleted: () => {
      toast.success('Card deleted')
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

  const onDeleteClick = (id: DeleteCardMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete card ' + id + '?')) {
      deleteCard({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Front text</th>
            <th>Front image</th>
            <th>Back</th>
            <th>Stack id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {cards.map((card) => (
            <tr key={card.id}>
              <td>{truncate(card.id)}</td>
              <td>{truncate(card.frontText)}</td>
              <td>{truncate(card.frontImage)}</td>
              <td>{truncate(card.back)}</td>
              <td>{truncate(card.stackId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.card({ id: card.id })}
                    title={'Show card ' + card.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editCard({ id: card.id })}
                    title={'Edit card ' + card.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete card ' + card.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(card.id)}
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

export default CardsList
