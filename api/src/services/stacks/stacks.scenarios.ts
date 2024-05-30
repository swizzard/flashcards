import type { Prisma, Stack } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.StackCreateArgs>({
  stack: {
    one: { data: { user: { create: { externalAuthId: 'String' } } } },
    two: { data: { user: { create: { externalAuthId: 'String' } } } },
  },
})

export type StandardScenario = ScenarioData<Stack, 'stack'>
