import { DefineFunction, SlackFunction } from 'deno-slack-sdk/mod.ts'

export const PollLeaderboardFunctionDefinition = DefineFunction({
    callback_id: 'sample_function',
    title: 'Sample function',
    description: 'A sample function',
    source_file: 'functions/sample_function.ts',
    input_parameters: {
        properties: {},
        required: [],
    },
    output_parameters: {
        properties: {},
        required: [],
    },
})

export default SlackFunction(
    PollLeaderboardFunctionDefinition,
    ({ inputs }) => {
        console.debug('PollLeaderboardFunction inputs:', inputs)
        return { error: 'Not implemented' }
    },
)
