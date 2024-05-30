import type {
  QueryResolvers,
  MutationResolvers,
  CardUserRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const cardUsers: QueryResolvers['cardUsers'] = () => {
  return db.cardUser.findMany()
}

export const cardUser: QueryResolvers['cardUser'] = ({ id }) => {
  return db.cardUser.findUnique({
    where: { id },
  })
}

export const createCardUser: MutationResolvers['createCardUser'] = ({
  input,
}) => {
  return db.cardUser.create({
    data: input,
  })
}

export const updateCardUser: MutationResolvers['updateCardUser'] = ({
  id,
  input,
}) => {
  return db.cardUser.update({
    data: input,
    where: { id },
  })
}
export async function getCardUserByExternalAuthId(externalAuthId: string) {
  return await db.cardUser.findFirst({
    where: { externalAuthId },
  })
}

export async function createCardUserWithExternalAuthId(externalAuthId: string) {
  return await db.cardUser.create({
    data: {
      externalAuthId,
    },
  })
}

export const deleteCardUser: MutationResolvers['deleteCardUser'] = ({ id }) => {
  return db.cardUser.delete({
    where: { id },
  })
}

export const CardUser: CardUserRelationResolvers = {
  stacks: (_obj, { root }) => {
    return db.cardUser.findUnique({ where: { id: root?.id } }).stacks()
  },
}
