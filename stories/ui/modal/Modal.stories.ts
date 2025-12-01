import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import { Modal, BottomModal } from '@/app/_components/molecules/ui/modal/Modal';

// Modal Stories
const metaModal = {
  title: 'UI/Modal/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: '모달 제목',
    },
    children: {
      control: 'text',
      description: '모달 내용',
    },
    setModalState: {
      action: 'close',
      description: '모달 상태를 설정하는 함수',
    },
  },
} satisfies Meta<typeof Modal>;

export default metaModal;
type StoryModal = StoryObj<typeof metaModal>;

export const Modal_Default: StoryModal = {
  args: {
    title: '기본 모달',
    children: '모달 내용이 여기에 표시됩니다.',
    setModalState: fn(),
  },
};

export const Modal_LongTitle: StoryModal = {
  args: {
    title: '아주 긴 제목의 모달입니다',
    children: '모달 내용입니다.',
    setModalState: fn(),
  },
};

export const Modal_LongContent: StoryModal = {
  args: {
    title: '긴 내용 모달',
    children:
      '이것은 아주 긴 내용이 들어간 모달입니다. 여러 줄에 걸쳐서 내용이 표시될 수 있습니다. 사용자에게 중요한 정보를 전달하거나, 확인을 요청하는 데 사용됩니다.',
    setModalState: fn(),
  },
};

// BottomModal Stories
const metaBottomModal = {
  title: 'UI/Modal/BottomModal',
  component: BottomModal,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: '모달 제목 (현재 미사용)',
    },
    children: {
      control: 'text',
      description: '모달 내용',
    },
    setModalState: {
      action: 'close',
      description: '모달 상태를 설정하는 함수 (현재 미사용)',
    },
  },
} satisfies Meta<typeof BottomModal>;

type StoryBottomModal = StoryObj<typeof metaBottomModal>;

export const BottomModal_Default: StoryBottomModal = {
  args: {
    title: '하단 모달',
    children: '하단에 표시되는 모달 내용입니다.',
    setModalState: fn(),
  },
};

export const BottomModal_LongContent: StoryBottomModal = {
  args: {
    title: '하단 모달',
    children: '이것은 하단에 표시되는 모달입니다. 주로 간단한 선택이나 확인을 위해 사용됩니다.',
    setModalState: fn(),
  },
};

export const BottomModal_ShortContent: StoryBottomModal = {
  args: {
    title: '하단 모달',
    children: '확인',
    setModalState: fn(),
  },
};
