export enum ObjectiveValue {
  Rookie = 'ROOKIE',
  ThreeMinuteMiracle = 'THREE_MINUTE_MIRACLE',
  GunsBlazing = 'GUNS_BLAZING',
}

type Objective = {
  label: Array<{
    display: string
  }>
  name: string
  description: string
  value: ObjectiveValue
}
const objectives: Array<Objective> = [
  {
    label: [
      {
        display: 'Get 25 kills'
      },
      {
        display: 'Win the match'
      }
    ],
    name: 'Rookie',
    description: 'Get 25 kills in a match won',
    value: ObjectiveValue.Rookie,
  },
  {
    label: [
      {
        display: 'Get 1 Pentakill in the first 3 mins'
      },
      {
        display: 'Win the match'
      }
    ],
    name: '3 Minute Miracle',
    description: 'Get 1 pentakill within the first 3 minutes and win the match',
    value: ObjectiveValue.ThreeMinuteMiracle,
  },
  {
    label: [
      {
        display: 'Get 10 kills in the first 8 mins'
      }
    ],
    name: 'Guns Blazing',
    description: 'Get 10 kills within the first 8 minutes of the match',
    value: ObjectiveValue.GunsBlazing,
  }
] as const

export default objectives
