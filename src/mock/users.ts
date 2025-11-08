import type { User } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Startup',
    email: 'john@startup.com',
    coins: 5000,
    avatar: '👨‍💼',
    expertise: ['Web Development', 'UI/UX Design'],
    createdAt: new Date('2024-01-15'),
  },
  {
    id: '2',
    name: 'Sarah Designer',
    email: 'sarah@design.com',
    coins: 3500,
    avatar: '👩‍🎨',
    expertise: ['Graphic Design', 'Branding'],
    createdAt: new Date('2024-02-10'),
  },
  {
    id: '3',
    name: 'Mike Developer',
    email: 'mike@dev.com',
    coins: 4200,
    avatar: '👨‍💻',
    expertise: ['Full Stack', 'Mobile Apps'],
    createdAt: new Date('2024-03-05'),
  },
  {
    id: '4',
    name: 'Emma Marketing',
    email: 'emma@marketing.com',
    coins: 2800,
    avatar: '👩‍💼',
    expertise: ['Digital Marketing', 'Content Creation'],
    createdAt: new Date('2024-04-20'),
  },
];

export const currentUser = mockUsers[0];
