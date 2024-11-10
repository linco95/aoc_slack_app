export type AocCompletionDayLevel = {
    get_star_ts: number
    star_index: number
}
// { <day>: { <part>: { get_star_ts: number, star_index: number } } }
// { '1': { '1': { get_star_ts: number, star_index: number }, '2': { get_star_ts: number, star_index: number } } }
export type AocCompletionDayLevels = Record<string, Record<string, AocCompletionDayLevel>>
export type AocMember = {
    last_star_ts: number
    name: string
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
