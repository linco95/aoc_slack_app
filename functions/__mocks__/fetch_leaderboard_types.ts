import { IntRange, RequireAtLeastOne } from '@/types/utils.ts'

export type AocCompletionDayLevel = {
    get_star_ts: number
    star_index: number
}

type DayType<T> = { [Day in IntRange<1, 26>]?: T }

type PartType<T> = RequireAtLeastOne<{ [Part in '1' | '2']: T }>

export type AocCompletionDayLevels = DayType<PartType<AocCompletionDayLevel>>
export type AocMember = {
    last_star_ts: number
    name?: string
    stars: number
    id: number
    global_score: number
    local_score: number
    completion_day_level: AocCompletionDayLevels
}
export type AocResponseData = {
    event: string
    members: Record<string, AocMember>
    owner_id: number
}
