/*
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
*/

import { MockFetch } from 'mock-fetch/mod.ts'
import { AocResponseData } from './fetch_leaderboard_types.ts'

export type AocFetchParams = {
  year: number
  leaderboard: string
}

const baseUrl = 'https://adventofcode.com'
export const mock_aoc_fetch =
  (mock: MockFetch['mock']) => ({ year, leaderboard }: AocFetchParams, response: AocResponseData): void => {
    mock(
      `GET@${baseUrl}/${year}/leaderboard/private/view/${leaderboard}.json`,
      () => {
        return new Response(JSON.stringify(response), {
          status: 200,
        })
      },
    )
  }
