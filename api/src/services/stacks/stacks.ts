import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const stacks: QueryResolvers['stacks'] = () => {
  return db.stack.findMany()
}

export const stack: QueryResolvers['stack'] = ({ id }) => {
  return db.stack.findUnique({
    where: { id },
  })
}

export const createStack: MutationResolvers['createStack'] = ({ input }) => {
  return db.stack.create({
    data: { ...input, user: context.currentUser.id },
  })
}

export const updateStack: MutationResolvers['updateStack'] = ({
  id,
  input,
}) => {
  return db.stack.update({
    data: input,
    where: { id },
  })
}

export const deleteStack: MutationResolvers['deleteStack'] = ({ id }) => {
  return db.stack.delete({
    where: { id },
  })
}

export const dashboardSummary: QueryResolvers['dashboardSummary'] =
  async () => {
    console.log(`dashboardSummary for ${context.currentUser.id}`)
    const userId = context.currentUser.id
    return db.stack
      .findMany({
        where: { userId },
        select: {
          id: true,
          title: true,
          _count: {
            select: { cards: true },
          },
        },
      })
      .then((stacks) =>
        stacks.map(({ id, title, _count: { cards } }) => ({
          id,
          title,
          cardCount: cards,
        }))
      )
      .then((stacks) => ({ stacks }))
  }
