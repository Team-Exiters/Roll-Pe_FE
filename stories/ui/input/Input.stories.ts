import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import { SearchInput, Checkbox } from '@/app/_components/molecules/ui/input/Input';

// SearchInput Stories
const metaSearchInput = {
  title: 'UI/Input/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    setSearchText: {
      action: 'search',
      description: '검색어를 설정하는 함수',
    },
  },
} satisfies Meta<typeof SearchInput>;

export default metaSearchInput;
type StorySearchInput = StoryObj<typeof metaSearchInput>;

export const SearchInput_Default: StorySearchInput = {
  args: {
    setSearchText: fn(),
  },
};

// Checkbox Stories
const metaCheckbox = {
  title: 'UI/Input/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checkboxId: {
      control: 'text',
      description: '체크박스 고유 ID',
    },
    label: {
      control: 'text',
      description: '체크박스 라벨',
    },
    link: {
      control: 'text',
      description: '선택적 링크 URL',
    },
    isLabelBlack: {
      control: 'boolean',
      description: '라벨 색상을 검정으로 표시할지 여부',
    },
    onChange: {
      action: 'changed',
      description: '체크박스 변경 이벤트 핸들러',
    },
  },
} satisfies Meta<typeof Checkbox>;

type StoryCheckbox = StoryObj<typeof metaCheckbox>;

export const Checkbox_Default: StoryCheckbox = {
  args: {
    checkboxId: 'checkbox-1',
    label: '기본 체크박스',
    onChange: fn(),
  },
};

export const Checkbox_WithLink: StoryCheckbox = {
  args: {
    checkboxId: 'checkbox-2',
    label: '약관에 동의합니다',
    link: '/terms',
    onChange: fn(),
  },
};

export const Checkbox_BlackLabel: StoryCheckbox = {
  args: {
    checkboxId: 'checkbox-3',
    label: '검정 라벨 체크박스',
    isLabelBlack: true,
    onChange: fn(),
  },
};

export const Checkbox_LongLabel: StoryCheckbox = {
  args: {
    checkboxId: 'checkbox-4',
    label: '아주 긴 텍스트가 들어간 체크박스 라벨입니다. 이렇게 길어도 괜찮을까요?',
    onChange: fn(),
  },
};

export const Checkbox_WithLinkAndBlackLabel: StoryCheckbox = {
  args: {
    checkboxId: 'checkbox-5',
    label: '모든 옵션 활성화',
    link: '/details',
    isLabelBlack: true,
    onChange: fn(),
  },
};
