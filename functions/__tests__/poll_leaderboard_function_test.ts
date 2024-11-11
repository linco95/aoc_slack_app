import { assertEquals } from 'std/assert/mod.ts'
import { describe, it } from 'std/testing/bdd.ts'
import { SlackFunctionTester } from 'deno-slack-sdk/mod.ts'
import PollLeaderboardFunction from '@/functions/poll_leaderboard_function.ts'
import { install as mfInstall, mock } from 'mock-fetch/mod.ts'

mfInstall()

const { createContext } = SlackFunctionTester('sample_function')

describe('PollLeaderboardFunction tests', () => {
  const testData = {
    channelId: 'C01234567',
    session: 'session_token',
    year: 2021,
    leaderboardId: 'leaderboard_id',
  }

  it(
    'polls the leaderboard if no previous data is available',
    async () => {
      const inputs = {
        channel_id: testData.channelId,
        session: testData.session,
        year: testData.year,
        leaderboard_id: testData.leaderboardId,
        // TODO: Accept current leaderboard from previous step?
      }

      const { error } = await PollLeaderboardFunction(createContext({ inputs }))
      assertEquals(error, 'Not implemented')
    },
  )

  it("doesn't poll the leaderboard if above rate limit", () => {
    // Placeholder
  })

  it('handles invalid session token', () => {
    // Placeholder
  })
})
