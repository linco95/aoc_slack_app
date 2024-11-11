import { Manifest } from 'deno-slack-sdk/mod.ts'
import SampleWorkflow from './workflows/sample_workflow.ts'
import SampleObjectDatastore from './datastores/sample_datastore.ts'
import { PollLeaderboardFunctionDefinition } from './functions/poll_leaderboard_function.ts'
import { SampleFunctionDefinition } from '@/functions/sample_function.ts'
/**
 * The app manifest contains the app's configuration. This
 * file defines attributes like app name and description.
 * https://api.slack.com/automation/manifest
 */
export default Manifest({
    name: 'aoc-bot',
    description: 'A template for building Slack apps with Deno',
    icon: 'assets/default_new_app_icon.png',
    workflows: [SampleWorkflow],
    outgoingDomains: [],
    functions: [PollLeaderboardFunctionDefinition, SampleFunctionDefinition],
    datastores: [SampleObjectDatastore],
    botScopes: [
        'commands',
        'chat:write',
        'chat:write.public',
        'datastore:read',
        'datastore:write',
    ],
})
