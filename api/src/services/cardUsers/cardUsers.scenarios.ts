import type { Prisma, CardUser } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CardUserCreateArgs>({
  cardUser: {
    one: { data: { externalAuthId: 'String' } },
    two: { data: { externalAuthId: 'String' } },
  },
})

export type StandardScenario = ScenarioData<CardUser, 'cardUser'>
