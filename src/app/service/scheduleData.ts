import { Schedule } from "../interface/schedule";
import { Team } from "../interface/team";

export const SEASON_SCHEDULE: Schedule [] = [
    {id: 1, playingDate:new Date(2021,8,11),HomeTeam: 'RRQ',
    AwayTeam: 'BLACKLIST',HomeScore:3, AwayScore:1,
    RefName:'LIAM',notes:'RRQ WIN'},
    {id: 2, playingDate:new Date(2021,8,12),HomeTeam: 'EVOS',
    AwayTeam: 'ONIC',HomeScore:3, AwayScore:2,
    RefName:'LJ',notes:'EVOS WIN'},
    {id: 3, playingDate:new Date(2021,8,13),HomeTeam: 'AURA',
    AwayTeam: 'GEEK',HomeScore:3, AwayScore:2,
    RefName:'GODIVA',notes:'AURA WIN'},
    {id: 4, playingDate:new Date(2021,8,14),HomeTeam: 'REBELION',
    AwayTeam: 'GPX',HomeScore:1, AwayScore:3,
    RefName:'WATT',notes:'GPX WIN'},
    {id: 5, playingDate:new Date(2021,8,15),HomeTeam: 'BTR',
    AwayTeam: 'AE',HomeScore:2, AwayScore:3,
    RefName:'RIPPO',notes:'AE WIN'},
]
export const TEAMS: Team [] = [
    {id:1, name:'RRQ', type: 'Over 37'},
    {id:2, name:'EVOS', type: 'Over 30'},
    {id:3, name:'AURA', type: 'Over 32'},
    {id:4, name:'GPX', type: 'Over 36'},
    {id:5, name:'AE', type: 'Over 30'}
]