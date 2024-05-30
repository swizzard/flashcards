import type { EditStackById, UpdateStackInput } from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

type FormStack = NonNullable<EditStackById['stack']>

interface StackFormProps {
  stack?: EditStackById['stack']
  onSave: (data: UpdateStackInput, id?: FormStack['id']) => void
  error: RWGqlError
  loading: boolean
}

const StackForm = (props: StackFormProps) => {
  const onSubmit = (data: FormStack) => {
    props.onSave(data, props?.stack?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormStack> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>

        <TextField
          name="title"
          defaultValue={props.stack?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="title" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default StackForm
