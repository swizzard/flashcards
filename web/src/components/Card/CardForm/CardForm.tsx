import type { EditCardById, UpdateCardInput } from 'types/graphql'

import type { RWGqlError } from '@redwoodjs/forms'
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

type FormCard = NonNullable<EditCardById['card']>

interface CardFormProps {
  card?: EditCardById['card']
  onSave: (data: UpdateCardInput, id?: FormCard['id']) => void
  error: RWGqlError
  loading: boolean
}

const CardForm = (props: CardFormProps) => {
  const onSubmit = (data: FormCard) => {
    props.onSave(data, props?.card?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormCard> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="frontText"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Front text
        </Label>

        <TextField
          name="frontText"
          defaultValue={props.card?.frontText}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="frontText" className="rw-field-error" />

        <Label
          name="frontImage"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Front image
        </Label>

        <TextField
          name="frontImage"
          defaultValue={props.card?.frontImage}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />

        <FieldError name="frontImage" className="rw-field-error" />

        <Label
          name="back"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Back
        </Label>

        <TextField
          name="back"
          defaultValue={props.card?.back}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="back" className="rw-field-error" />

        <Label
          name="stackId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Stack id
        </Label>

        <TextField
          name="stackId"
          defaultValue={props.card?.stackId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="stackId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default CardForm
