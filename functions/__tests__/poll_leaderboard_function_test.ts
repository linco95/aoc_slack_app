import { assertEquals, assertExists } from 'std/assert/mod.ts'
import { describe, it } from 'std/testing/bdd.ts'
import { SlackFunctionTester } from 'deno-slack-sdk/mod.ts'
import PollLeaderboardFunction from '@/functions/poll_leaderboard_function.ts'
import { install as mfInstall, mock } from 'mock-fetch/mod.ts'
import { mock_aoc_fetch } from '@/functions/__mocks__/advent_of_code_api.mock.ts'
import { generateMockData } from '@/functions/__mocks__/utils/generate_data.ts'

mfInstall()
const mockFecth = mock_aoc_fetch(mock)
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
            const response = generateMockData({
                year: testData.year,
                ownerIdx: 0,
                members: [
                    {
                        id: 1234,
                        name: 'user1',
                        stars: {
                            1: {
                                1: { get_star_ts: 1701470700, star_index: 0 },
                                2: { get_star_ts: 1701539677, star_index: 215958 },
                            },
                        },
                        local_score: 4,
                    },
                    {
                        id: 4321,
                        name: 'user2',
                        stars: {
                            1: {
                                1: { get_star_ts: 1701769601, star_index: 867698 },
                                2: { get_star_ts: 1731095422, star_index: 3851842 },
                            },
                        },
                        local_score: 2,
                    },
                ],
            })

            mockFecth({
                year: testData.year,
                leaderboard: testData.leaderboardId,
            }, response)

            const inputs = {
                channel_id: testData.channelId,
                session: testData.session,
                year: testData.year,
                leaderboard_id: testData.leaderboardId,
                // TODO: Accept current leaderboard from previous step?
            }
            const { outputs } = await PollLeaderboardFunction(createContext({ inputs }))
            const leaderboard = outputs?.leaderboard
            assertExists(leaderboard)
            assertEquals(leaderboard.owner_id, 4321)
            assertEquals(leaderboard.year, testData.year)
            assertEquals(Object.keys(leaderboard.members).length, 2)
        },
    )

    it("doesn't poll the leaderboard if above rate limit", () => {
        // Placeholder
    })

    it('handles invalid session token', () => {
        // Placeholder
    })
})
