import type {
  QueryResolvers,
  MutationResolvers,
  CardRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const cards: QueryResolvers['cards'] = () => {
  return db.card.findMany()
}

export const card: QueryResolvers['card'] = ({ id }) => {
  return db.card.findUnique({
    where: { id },
  })
}

export const createCard: MutationResolvers['createCard'] = ({ input }) => {
  return db.card.create({
    data: input,
  })
}

export const updateCard: MutationResolvers['updateCard'] = ({ id, input }) => {
  return db.card.update({
    data: input,
    where: { id },
  })
}

export const deleteCard: MutationResolvers['deleteCard'] = ({ id }) => {
  return db.card.delete({
    where: { id },
  })
}

export const Card: CardRelationResolvers = {
  stack: (_obj, { root }) => {
    return db.card.findUnique({ where: { id: root?.id } }).stack()
  },
}
