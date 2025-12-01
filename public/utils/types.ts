import { StaticGenerationAsyncStorage } from "next/dist/client/components/static-generation-async-storage.external";

//! Rollpe List 관련
export interface RollpeListItemProps {
  rollpeId: string;
  rollpeTitle: string;
  rollpeOwner: string;
  createdAt: string;
  dDay: number;
  isPublic: boolean;
  thumbnail: string;
}

export interface RollpeListProps {
  rollpeList: RollpeListItemProps[];
  resultText: string;
}

export interface SearchRollpeProps {
  rollpeList: Rollpe[] | undefined;
  resultText: string;
}

export interface userIntroResponse {
  host: number;
  heart: number;
}

//! Rollpe 관련

export interface Rollpe {
  id: number;
  code: string;
  createdAt: string;
  host: User;
  ratio: "가로" | "세로";
  receive: {
    receivingDate: string;
    receivingStat: number;
    receiver: User;
  };
  size: string;
  title: string;
  viewStat: boolean;
  theme: string;
  hearts: HeartList;
  invitingUser: User[];
}

//! Heart 관련
export interface Heart {
  id: string;
  index: number;
  author: User;
  content: string;
  createdAt: string;
  color: string;
  version: string;
}

export interface HeartList {
  count: number;
  data: Heart[];
}

// ! User 관련
export interface User {
  id: number;
  identifyCode: string;
  name: string;
  email: string;
  provider: "Apple" | "Google" | "Kakao" | "Email" | null;
}

export interface RollpeInstance {
  id: number;
  name: string;
  query: Object;
  type: "THEME" | "SIZE" | "RATIO";
}

//! Rollpe Search
export interface RollpeSearchListData {
  count: number;
  next: string | null;
  previous: string | null;
  results: Rollpe[];
}

//! Create Heart
export interface HeartCreateRequestBody {
  paperFK: number;
  color: string; //#제외
  context: string;
  location: number;
}

//! Auth 관련
export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignInResponse {
  user: User;
  access: string;
  refresh: string;
}

export interface ApiError {
  message: string;
  code?: string;
  statusCode?: number;
}