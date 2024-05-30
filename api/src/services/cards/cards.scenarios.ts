import type { Prisma, Card } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CardCreateArgs>({
  card: {
    one: {
      data: {
        back: 'String',
        stack: { create: { user: { create: { externalAuthId: 'String' } } } },
      },
    },
    two: {
      data: {
        back: 'String',
        stack: { create: { user: { create: { externalAuthId: 'String' } } } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Card, 'card'>
