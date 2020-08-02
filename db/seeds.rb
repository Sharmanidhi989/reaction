course = Course.create(title: "Peaky Blinder", description: "The Gangsters of Garrison Street, We run the Brimingham")

section = Section.create(title: "Race Courses", description: "We own the race courses and the money that flows through it", course: course)

episodes = Episode.create([
  { title: "happy q", description: "me", section: section, url: "https://www.youtube.com/embed/oVzVdvGIC7U" },
  { title: "happy w", description: "mee", section: section , url: "https://www.youtube.com/embed/bKseTWIPmnk"},
  { title: "happy e", description: "meee", section: section, url: "https://www.youtube.com/embed/oVzVdvGIC7U" }
])

