export type Education = {
  school: string
  program: string
  dates: string
  location: string
  detail?: string
  highlight?: string
}

export const education: Education[] = [
  {
    school: 'GITAM Deemed to be University',
    program: 'B.Tech, Computer Science Engineering',
    dates: 'September 2022 – May 2026',
    location: 'Hyderabad',
    detail: 'CGPA 8.45 / 10',
    highlight: '25% academic scholarship, received each year',
  },
  {
    school: 'Sri Chaitanya Junior Kalasala',
    program: 'Intermediate',
    dates: '2020 – 2022',
    location: 'Hyderabad',
    detail: '979 / 1000',
  },
  {
    school: 'Sri Chaitanya School',
    program: '10th Grade',
    dates: '2019 – 2020',
    location: 'Hyderabad',
    detail: 'CGPA 10',
  },
]
