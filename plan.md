# Advent of Code slack app
A bot to fetch advent of code information, and share it in slack.

## TODO:
- Parameters:
  - Advent of Code session token
  - Slack channel
  - Leaderboard id
  - year (default current)
  - Polling interval (min 15 minutes)
  - Include non active
- Expired token
  - Disable polling, send message to update token
- Store initial state in data store if missing
  - One per year
- On schedule
  - Compare leaderboard with datastore
  - Handle multiple stars since last update
  - Maximum amount of updates at once? - Avoid wall of text
- On different schedule 
  - Post leaderboard summary
- On command
  - Post leaderboard
  - Refresh session token, re sync leaderboard without update, in case a lot of updates
- Mock fetching during testing/development
- Share in Kodsnack slack
- Add bot to Kodsnack slack
- ~~Add License.md~~
- Add Sponsor.md
- Add Collaborators.md
- Add to private slack workspace for testing
- Msg "owner" when session token is about to expire/expired
- ~~Try to use [ts-doctest](https://github.com/danr/doctest-ts)~~ Use deno doctest instead
- Update ts config with strict settings
- Add codescene integration OSS
- Set up branch protection - Signed commits
- Add git repo to github
- Use events?
- Create and link [ko-fi](https://ko-fi.com/)
- (Optional) - visualize data
- Credit https://github.com/1grzyb1/aoc-slack
- Credit https://adventofcode.com
- Inform about **minimum** 15 minutes interval
- Update readme to inform about how to use project
- [Deploy app to slack marketplace](https://api.slack.com/slack-marketplace/using)
  - Post to reddit - get installed in > 10 active workspaces
- [AoC Automation guidlines](https://www.reddit.com/r/adventofcode/wiki/faqs/automation/)
- Map of AoC username -> slack user
- Store input in datastore, and 

## Example payload
Request:
```shell
curl 'https://adventofcode.com/<<<year>>>/leaderboard/private/view/<<<leaderboarid>>>.json' \
  -H 'accept: application/json' \
  -H 'cookie: session=<<<SESSION>>>' \
  -H 'user-agent: AOC-Slack-App (linco95@gmail.com) - https://github.com/linco95/aoc-slack-app'
  ```

  Response:
```json
{
  "event": "2023",
  "members": {
    "1234": {
      "last_star_ts": 1701539677,
      "name": "user1",
      "stars": 2,
      "id": 1234,
      "global_score": 0,
      "completion_day_level": {
        "1": {
          "1": {
            "get_star_ts": 1701470700,
            "star_index": 0
          },
          "2": {
            "get_star_ts": 1701539677,
            "star_index": 215958
          }
        }
      },
      "local_score": 4
    },
    "4321": {
      "last_star_ts": 1731095422,
      "name": "user2",
      "stars": 2,
      "id": 4321,
      "global_score": 0,
      "completion_day_level": {
        "1": {
          "1": {
            "get_star_ts": 1701769601,
            "star_index": 867698
          },
          "2": {
            "star_index": 3851842,
            "get_star_ts": 1731095422
          }
        }
      },
      "local_score": 2
    }
  },
  "owner_id": 4321
}
```

## Automation guidlines
> This script/repo/tool does follow the automation guidelines on the /r/adventofcode [community wiki](https://www.reddit.com/r/adventofcode/wiki/faqs/automation). 
>
>Specifically:
> 
> Outbound calls are throttled to every x minutes in throttleFunction()
> Once inputs are downloaded, they are cached locally (cacheFunction())
> If you suspect your input is corrupted, you can manually request a fresh copy using manualDownloadFunction()
> The User-Agent header in userAgentHeaderFunction() is set to me since I maintain this tool :)
