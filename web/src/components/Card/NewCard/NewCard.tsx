import type {
  CreateCardMutation,
  CreateCardInput,
  CreateCardMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CardForm from 'src/components/Card/CardForm'

const CREATE_CARD_MUTATION: TypedDocumentNode<
  CreateCardMutation,
  CreateCardMutationVariables
> = gql`
  mutation CreateCardMutation($input: CreateCardInput!) {
    createCard(input: $input) {
      id
    }
  }
`

const NewCard = () => {
  const [createCard, { loading, error }] = useMutation(CREATE_CARD_MUTATION, {
    onCompleted: () => {
      toast.success('Card created')
      navigate(routes.cards())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: CreateCardInput) => {
    createCard({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Card</h2>
      </header>
      <div className="rw-segment-main">
        <CardForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewCard
