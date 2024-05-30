import type { CardUser } from '@prisma/client'

import {
  cardUsers,
  cardUser,
  createCardUser,
  updateCardUser,
  deleteCardUser,
} from './cardUsers'
import type { StandardScenario } from './cardUsers.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('cardUsers', () => {
  scenario('returns all cardUsers', async (scenario: StandardScenario) => {
    const result = await cardUsers()

    expect(result.length).toEqual(Object.keys(scenario.cardUser).length)
  })

  scenario('returns a single cardUser', async (scenario: StandardScenario) => {
    const result = await cardUser({ id: scenario.cardUser.one.id })

    expect(result).toEqual(scenario.cardUser.one)
  })

  scenario('creates a cardUser', async () => {
    const result = await createCardUser({
      input: { externalAuthId: 'String' },
    })

    expect(result.externalAuthId).toEqual('String')
  })

  scenario('updates a cardUser', async (scenario: StandardScenario) => {
    const original = (await cardUser({
      id: scenario.cardUser.one.id,
    })) as CardUser
    const result = await updateCardUser({
      id: original.id,
      input: { externalAuthId: 'String2' },
    })

    expect(result.externalAuthId).toEqual('String2')
  })

  scenario('deletes a cardUser', async (scenario: StandardScenario) => {
    const original = (await deleteCardUser({
      id: scenario.cardUser.one.id,
    })) as CardUser
    const result = await cardUser({ id: original.id })

    expect(result).toEqual(null)
  })
})
