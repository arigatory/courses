export type Course = {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
};

export type Lesson = {
  id: string;
  title: string;
  description: string;
  vimeoId: number;
};

const courses: Course[] = [
  {
    id: '1',
    title: 'C#-разработчик',
    description:
      'Phasellus ac tellus tincidunt, pharetra dui eu, bibendum nulla.',
    lessons: [
      {
        id: '1',
        title: 'Welcome to the course',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit bibendum ex nec interdum.',
        vimeoId: 76979871,
      },
      {
        id: '2',
        title: 'How does a camera work?',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit bibendum ex nec interdum.',
        vimeoId: 76979871,
      },
      {
        id: '3',
        title: 'What is exposure?',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit bibendum ex nec interdum.',
        vimeoId: 76979871,
      },
      {
        id: '4',
        title: 'What is an aperture?',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit bibendum ex nec interdum.',
        vimeoId: 76979871,
      },
    ],
  },
  {
    id: '2',
    title: 'React-разработчик',
    description: 'Cras ut sem eu ligula luctus ornare quis nec arcu.',
    lessons: [
      {
        id: '1',
        title: 'Welcome to the course',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit bibendum ex nec interdum.',
        vimeoId: 76979871,
      },
      {
        id: '2',
        title: 'How does a camera work?',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit bibendum ex nec interdum.',
        vimeoId: 76979871,
      },
      {
        id: '3',
        title: 'What is exposure?',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit bibendum ex nec interdum.',
        vimeoId: 76979871,
      },
      {
        id: '4',
        title: 'What is an aperture?',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam suscipit bibendum ex nec interdum.',
        vimeoId: 76979871,
      },
    ],
  },
];

export default courses;
