import type {
  EditCardById,
  UpdateCardInput,
  UpdateCardMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CardForm from 'src/components/Card/CardForm'

export const QUERY: TypedDocumentNode<EditCardById> = gql`
  query EditCardById($id: String!) {
    card: card(id: $id) {
      id
      frontText
      frontImage
      back
      stackId
    }
  }
`

const UPDATE_CARD_MUTATION: TypedDocumentNode<
  EditCardById,
  UpdateCardMutationVariables
> = gql`
  mutation UpdateCardMutation($id: String!, $input: UpdateCardInput!) {
    updateCard(id: $id, input: $input) {
      id
      frontText
      frontImage
      back
      stackId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ card }: CellSuccessProps<EditCardById>) => {
  const [updateCard, { loading, error }] = useMutation(UPDATE_CARD_MUTATION, {
    onCompleted: () => {
      toast.success('Card updated')
      navigate(routes.cards())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: UpdateCardInput, id: EditCardById['card']['id']) => {
    updateCard({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Card {card?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <CardForm card={card} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
