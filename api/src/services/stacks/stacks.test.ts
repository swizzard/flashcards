import type { Stack } from '@prisma/client'

import { stacks, stack, createStack, updateStack, deleteStack } from './stacks'
import type { StandardScenario } from './stacks.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('stacks', () => {
  scenario('returns all stacks', async (scenario: StandardScenario) => {
    const result = await stacks()

    expect(result.length).toEqual(Object.keys(scenario.stack).length)
  })

  scenario('returns a single stack', async (scenario: StandardScenario) => {
    const result = await stack({ id: scenario.stack.one.id })

    expect(result).toEqual(scenario.stack.one)
  })

  scenario('creates a stack', async (scenario: StandardScenario) => {
    const result = await createStack({
      input: { userId: scenario.stack.two.userId },
    })

    expect(result.userId).toEqual(scenario.stack.two.userId)
  })

  scenario('updates a stack', async (scenario: StandardScenario) => {
    const original = (await stack({ id: scenario.stack.one.id })) as Stack
    const result = await updateStack({
      id: original.id,
      input: { userId: scenario.stack.two.userId },
    })

    expect(result.userId).toEqual(scenario.stack.two.userId)
  })

  scenario('deletes a stack', async (scenario: StandardScenario) => {
    const original = (await deleteStack({ id: scenario.stack.one.id })) as Stack
    const result = await stack({ id: original.id })

    expect(result).toEqual(null)
  })
})
