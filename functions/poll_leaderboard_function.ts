import { DefineFunction, DefineProperty, SlackFunction } from 'deno-slack-sdk/mod.ts'

export const PollLeaderboardFunctionDefinition = DefineFunction({
    callback_id: 'poll_leaderboard_function',
    title: 'Poll Leaderboard, if within the rate limit',
    // description: 'A sample function',
    source_file: 'functions/poll_leaderboard_function.ts',
    input_parameters: {
        properties: {},
        required: [],
    },
    output_parameters: {
        properties: {
            leaderboard: DefineProperty({
                properties: {
                    owner_id: { type: 'number' },
                    year: { type: 'number' },
                    members: { type: 'object' },
                },
                required: ['owner_id', 'year', 'members'],
                type: 'object',
            }),
        },
        required: ['leaderboard'],
    },
})

export default SlackFunction(
    PollLeaderboardFunctionDefinition,
    ({ inputs }) => {
        console.debug('PollLeaderboardFunction inputs:', inputs)
        return { outputs: { leaderboard: { owner_id: 4321, year: 2021, members: {} } } }
    },
)
