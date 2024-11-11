export const callback_ids = {
  poll_leaderboard_workflow: {
    title: "Poll leaderboard workflow",
    description: "Workflow to poll the advent of code leaderboard",
  },
  sample_workflow: {
    title: "Sample workflow",
    description: "A sample workflow",
  },
} as const;

export type CallbackIds = keyof typeof callback_ids;
