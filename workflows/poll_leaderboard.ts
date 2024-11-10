import { DefineWorkflow, Schema } from 'deno-slack-sdk/mod.ts'
import { callback_ids, CallbackIds } from '../common/callback_ids.ts'
import { getDefaultYear } from '../common/utils.ts'

/**
 * A workflow that will poll the leaderboard for the advent of code, and post the results to a channel
 */
const PollLeaderboardWorkflow = DefineWorkflow({
    callback_id: 'poll_leaderboard_workflow' satisfies CallbackIds,
    title: callback_ids.poll_leaderboard_workflow.title,
    description: callback_ids.poll_leaderboard_workflow.description,
    input_parameters: {
        properties: {
            channel: {
                type: Schema.slack.types.channel_id,
                description: 'The channel to post the leaderboard updates to',
            },
            leaderboard: {
                type: Schema.types.string,
                description: 'The id of the private leaderboard to poll',
            },
            aoc_session: {
                type: Schema.types.string,
                description: 'The session cookie for the advent of code website',
            },
            year: {
                type: Schema.types.number,
                description: 'The year of the leaderboard to poll',
                default: getDefaultYear(new Date()),
            },
            onlyActive: {
                type: Schema.types.boolean,
                description: 'Only include active members',
                default: true,
            },
        },
        required: ['channel', 'leaderboard', 'aoc_session'],
    },
})

/*
Steps:
- Get current leaderboard
- Poll(?) leaderboard
- Generate diff message
- Post to channel
*/

export default PollLeaderboardWorkflow
