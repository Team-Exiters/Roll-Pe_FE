import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { fn } from 'storybook/test';
import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonSubmit,
  ButtonMore,
  ButtonLink,
} from '@/app/_components/ui/button/StyledButton';

// ButtonPrimary Stories
const metaPrimary = {
  title: 'UI/Button/ButtonPrimary',
  component: ButtonPrimary,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: '버튼에 표시될 텍스트',
    },
    onClickHandler: {
      action: 'clicked',
      description: '클릭 이벤트 핸들러',
    },
  },
} satisfies Meta<typeof ButtonPrimary>;

export default metaPrimary;
type StoryPrimary = StoryObj<typeof metaPrimary>;

export const Primary_Default: StoryPrimary = {
  args: {
    text: '기본 버튼',
    onClickHandler: fn(),
  },
};

export const Primary_LongText: StoryPrimary = {
  args: {
    text: '아주 긴 텍스트가 들어간 버튼입니다',
    onClickHandler: fn(),
  },
};

export const Primary_ShortText: StoryPrimary = {
  args: {
    text: '확인',
    onClickHandler: fn(),
  },
};

// ButtonSecondary Stories
const metaSecondary = {
  title: 'UI/Button/ButtonSecondary',
  component: ButtonSecondary,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: '버튼에 표시될 텍스트',
    },
    onClickHandler: {
      action: 'clicked',
      description: '클릭 이벤트 핸들러',
    },
  },
} satisfies Meta<typeof ButtonSecondary>;

type StorySecondary = StoryObj<typeof metaSecondary>;

export const Secondary_Default: StorySecondary = {
  args: {
    text: '세컨더리 버튼',
    onClickHandler: fn(),
  },
};

export const Secondary_LongText: StorySecondary = {
  args: {
    text: '아주 긴 텍스트가 들어간 세컨더리 버튼',
    onClickHandler: fn(),
  },
};

export const Secondary_ShortText: StorySecondary = {
  args: {
    text: '취소',
    onClickHandler: fn(),
  },
};

// ButtonSubmit Stories
const metaSubmit = {
  title: 'UI/Button/ButtonSubmit',
  component: ButtonSubmit,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: '버튼에 표시될 텍스트',
    },
    isDisabled: {
      control: 'boolean',
      description: '버튼 비활성화 여부',
    },
  },
} satisfies Meta<typeof ButtonSubmit>;

type StorySubmit = StoryObj<typeof metaSubmit>;

export const Submit_Default: StorySubmit = {
  args: {
    text: '제출',
    isDisabled: false,
  },
};

export const Submit_Disabled: StorySubmit = {
  args: {
    text: '제출',
    isDisabled: true,
  },
};

export const Submit_LongText: StorySubmit = {
  args: {
    text: '긴 텍스트 제출 버튼',
    isDisabled: false,
  },
};

// ButtonMore Stories
const metaMore = {
  title: 'UI/Button/ButtonMore',
  component: ButtonMore,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: '버튼에 표시될 텍스트',
    },
  },
} satisfies Meta<typeof ButtonMore>;

type StoryMore = StoryObj<typeof metaMore>;

export const More_Default: StoryMore = {
  args: {
    text: '더보기',
  },
};

export const More_CustomText: StoryMore = {
  args: {
    text: '전체보기',
  },
};

// ButtonLink Stories
const metaLink = {
  title: 'UI/Button/ButtonLink',
  component: ButtonLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: '버튼에 표시될 텍스트',
    },
    href: {
      control: 'text',
      description: '이동할 경로',
    },
  },
} satisfies Meta<typeof ButtonLink>;

type StoryLink = StoryObj<typeof metaLink>;

export const Link_Default: StoryLink = {
  args: {
    text: '링크 버튼',
    href: '/main',
  },
};

export const Link_ExternalLink: StoryLink = {
  args: {
    text: '외부 링크',
    href: 'https://example.com',
  },
};

export const Link_LongText: StoryLink = {
  args: {
    text: '아주 긴 텍스트가 들어간 링크 버튼',
    href: '/rollpe/123',
  },
};
