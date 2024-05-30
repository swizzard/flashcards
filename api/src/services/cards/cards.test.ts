import type { Card } from '@prisma/client'

import { cards, card, createCard, updateCard, deleteCard } from './cards'
import type { StandardScenario } from './cards.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('cards', () => {
  scenario('returns all cards', async (scenario: StandardScenario) => {
    const result = await cards()

    expect(result.length).toEqual(Object.keys(scenario.card).length)
  })

  scenario('returns a single card', async (scenario: StandardScenario) => {
    const result = await card({ id: scenario.card.one.id })

    expect(result).toEqual(scenario.card.one)
  })

  scenario('creates a card', async (scenario: StandardScenario) => {
    const result = await createCard({
      input: { back: 'String', stackId: scenario.card.two.stackId },
    })

    expect(result.back).toEqual('String')
    expect(result.stackId).toEqual(scenario.card.two.stackId)
  })

  scenario('updates a card', async (scenario: StandardScenario) => {
    const original = (await card({ id: scenario.card.one.id })) as Card
    const result = await updateCard({
      id: original.id,
      input: { back: 'String2' },
    })

    expect(result.back).toEqual('String2')
  })

  scenario('deletes a card', async (scenario: StandardScenario) => {
    const original = (await deleteCard({ id: scenario.card.one.id })) as Card
    const result = await card({ id: original.id })

    expect(result).toEqual(null)
  })
})
