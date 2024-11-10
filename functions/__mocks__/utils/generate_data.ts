import { AocCompletionDayLevels, AocMember, AocResponseData } from '@/types/advent_of_code/fetch_leaderboard_types.ts'

export type MemberData = {
    id: number
    name: string
    stars: AocCompletionDayLevels
    local_score: number
}
export type GenerateMockDataArgs = { year: number; ownerIdx?: number; members: MemberData[] }
export function generateMockData({ year, ownerIdx, members }: GenerateMockDataArgs): AocResponseData {
    const generatedMembers = Object.fromEntries(members.map(generateMember))

    return {
        event: year.toString(),
        owner_id: members[ownerIdx ?? 0].id,
        members: generatedMembers,
    }
}

function generateMember(memberData: MemberData): [id: string, member: AocMember] {
    const starCount = Object.values(memberData.stars).flatMap((days) => Object.keys(days)).length
    const lastStar =
        Object.values(memberData.stars).flatMap((days) => Object.values(days)).sort((a, b) =>
            b.get_star_ts - a.get_star_ts
        )[0]

    return [memberData.id.toString(), {
        id: memberData.id,
        stars: starCount,
        name: memberData.name,
        global_score: 0,
        local_score: memberData.local_score,
        last_star_ts: lastStar.get_star_ts,
        completion_day_level: memberData.stars,
    }]
}
