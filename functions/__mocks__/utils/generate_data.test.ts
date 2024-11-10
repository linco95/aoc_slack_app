import { generateMockData, GenerateMockDataArgs } from '@/functions/__mocks__/utils/generate_data.ts'
import { assertEquals } from 'std/assert/assert_equals.ts'
import { AocResponseData } from '@/types/advent_of_code/fetch_leaderboard_types.ts'

Deno.test('Generated mock data', () => {
    const input: GenerateMockDataArgs = {
        year: 2023,
        ownerIdx: 1,
        members: [
            {
                id: 1234,
                name: 'user1',
                stars: {
                    '1': {
                        '1': { get_star_ts: 1701470700, star_index: 0 },
                        '2': { get_star_ts: 1701539677, star_index: 1 },
                    },
                },
                local_score: 4,
            },
            {
                id: 4321,
                name: 'user2',
                local_score: 2,
                stars: {
                    '1': {
                        '1': { get_star_ts: 1701769601, star_index: 2 },
                        '2': { get_star_ts: 1731095422, star_index: 3 },
                    },
                },
            },
        ],
    }

    const expectedResponse: AocResponseData = {
        event: '2023',
        members: {
            '1234': {
                last_star_ts: 1701539677,
                name: 'user1',
                stars: 2,
                id: 1234,
                global_score: 0,
                completion_day_level: {
                    '1': {
                        '1': {
                            get_star_ts: 1701470700,
                            star_index: 0,
                        },
                        '2': {
                            get_star_ts: 1701539677,
                            star_index: 1,
                        },
                    },
                },
                local_score: 4,
            },
            '4321': {
                last_star_ts: 1731095422,
                name: 'user2',
                stars: 2,
                id: 4321,
                global_score: 0,
                completion_day_level: {
                    '1': {
                        '1': {
                            get_star_ts: 1701769601,
                            star_index: 2,
                        },
                        '2': {
                            star_index: 3,
                            get_star_ts: 1731095422,
                        },
                    },
                },
                local_score: 2,
            },
        },
        owner_id: 4321,
    }

    assertEquals(generateMockData(input), expectedResponse)
})
