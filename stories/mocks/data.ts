import { User, Heart, HeartList, Rollpe } from '@/public/utils/types';

// Mock Users
export const mockUser: User = {
  id: 1,
  identifyCode: 'USER001',
  name: '김테스트',
  email: 'test@rollpe.com',
  provider: 'Email',
};

export const mockHost: User = {
  id: 2,
  identifyCode: 'HOST001',
  name: '롤페주최자',
  email: 'host@rollpe.com',
  provider: 'Kakao',
};

export const mockReceiver: User = {
  id: 3,
  identifyCode: 'RECV001',
  name: '받는사람',
  email: 'receiver@rollpe.com',
  provider: 'Google',
};

// Mock Heart
export const mockHeart: Heart = {
  id: 'heart-001',
  index: 0,
  author: mockUser,
  content: '생일 축하해요! 항상 행복하세요.',
  createdAt: '2025-11-25T10:00:00Z',
  color: 'FFD6F8',
  version: '1.0',
};

// Mock HeartList
export const mockHeartList: HeartList = {
  count: 3,
  data: [
    mockHeart,
    {
      ...mockHeart,
      id: 'heart-002',
      index: 1,
      color: 'FFE5B4',
      content: '좋은 하루 보내세요!',
    },
    {
      ...mockHeart,
      id: 'heart-003',
      index: 2,
      color: 'B4E5FF',
      content: '응원합니다!',
    },
  ],
};

// Mock Rollpe
export const mockRollpe: Rollpe = {
  id: 1,
  code: 'ROLLPE001',
  createdAt: '2025-11-01T00:00:00Z',
  host: mockHost,
  ratio: '가로',
  receive: {
    receivingDate: '2025-12-25T00:00:00Z',
    receivingStat: 1,
    receiver: mockReceiver,
  },
  size: 'large',
  title: '생일 축하 롤페',
  viewStat: true,
  theme: 'birthday',
  hearts: mockHeartList,
  invitingUser: [mockUser, mockHost],
};
