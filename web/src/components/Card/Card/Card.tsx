import type {
  DeleteCardMutation,
  DeleteCardMutationVariables,
  FindCardById,
} from 'types/graphql'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import {} from 'src/lib/formatters'

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

interface Props {
  card: NonNullable<FindCardById['card']>
}

const Card = ({ card }: Props) => {
  const [deleteCard] = useMutation(DELETE_CARD_MUTATION, {
    onCompleted: () => {
      toast.success('Card deleted')
      navigate(routes.cards())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id: DeleteCardMutationVariables['id']) => {
    if (confirm('Are you sure you want to delete card ' + id + '?')) {
      deleteCard({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Card {card.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{card.id}</td>
            </tr>
            <tr>
              <th>Front text</th>
              <td>{card.frontText}</td>
            </tr>
            <tr>
              <th>Front image</th>
              <td>{card.frontImage}</td>
            </tr>
            <tr>
              <th>Back</th>
              <td>{card.back}</td>
            </tr>
            <tr>
              <th>Stack id</th>
              <td>{card.stackId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editCard({ id: card.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(card.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Card
