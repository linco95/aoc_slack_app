import { IntRange, RequireAtLeastOne } from '@/types/utils.ts'

export type Leaderboard = {
    year: number
    members: Record<string, Member>
    owner_id: number
    timestamp: number
}

export type Member = {
    id: number
    name?: string
    stars: Star[]
    local_score: number
    global_score: number
}

export type Star = {
    day: IntRange<1, 26>
    part: RequireAtLeastOne<1 | 2>
    timestamp: number
}
