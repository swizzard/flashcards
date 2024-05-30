import type {
  CreateStackMutation,
  CreateStackInput,
  CreateStackMutationVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import type { TypedDocumentNode } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import StackForm from 'src/components/Stack/StackForm'

const CREATE_STACK_MUTATION: TypedDocumentNode<
  CreateStackMutation,
  CreateStackMutationVariables
> = gql`
  mutation CreateStackMutation($input: CreateStackInput!) {
    createStack(input: $input) {
      id
    }
  }
`

const NewStack = () => {
  const [createStack, { loading, error }] = useMutation(CREATE_STACK_MUTATION, {
    onCompleted: () => {
      toast.success('Stack created')
      navigate(routes.stacks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input: CreateStackInput) => {
    createStack({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Stack</h2>
      </header>
      <div className="rw-segment-main">
        <StackForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewStack
