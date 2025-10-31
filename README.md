# 롤페 FrontEnd (2025.11 현재 리팩토링중)

## 목차
1. [롤페 소개](#롤페-소개)
2. [기술 스택](#기술-스택)
3. [핵심 기능](#핵심-기능)
4. [컨벤션](#컨벤션)
5. [기타](#기타)

---

## 소개
> 다같이 한 마음으로 사랑하는 사람에게 전달해보세요!</br>
> **Team Exiters 사이드 프로젝트**</br>
> 롤링 페이퍼 온라인 커뮤니티 서비스 '롤페'

<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/ca8bf99f-8a46-4fee-8fdf-57afb2561bb8" width="300"/></td>
    <td><img src="https://github.com/user-attachments/assets/bc9c2288-364e-4cd2-b448-4db8797a2784" width="300"/></td>
    <td><img src="https://github.com/user-attachments/assets/c970ddd9-dd80-4758-9e7c-f6868dd437eb" width="300"/></td>
  </tr>
  <tr>
    <td colspan="3" align="center">롤페 메인 온보딩 페이지</td>
  </tr>
</table>

**롤페**는 학창시절, 한 해의 마무리를 함께하던 롤링 페이퍼를 온라인으로 구현한 웹 커뮤니티 서비스입니다.

---

## 기술 스택
**Next.js 14**</br>
- 추후 SEO 최적화를 위한 SSR 구현을 위해 사용

**React ^18**
- JSX 기반 사용자 인터페이스 구현을 위해 사용

**redux, redux-persist**
- 로그인 사용자 정보를 영속적으로 전역에서 관리하기 위해 사용

**styled-components**
- 컴포넌트 단위로 스타일 적용하여 재사용성 향상을 위해 사용
- 자동 고유 클래스 네이밍으로 컴포넌트 스타일 관리 편리 향상을 위해 사용

---

## 핵심 기능
> 용어 설명</br>
> 롤페 : 롤페는 큰 도화지 한 장의 개념으로, 사용자들은 롤페에 참가하여 특정 대상을 위한 메시지(마음)를 작성할 수 있음</br>
> 마음 : 롤페라는 큰 도화지에 특정 대상을 위해 작성하는 메시지 포스트잇

**롤페 생성**
- 롤페의 비율, 테마, 크기, 기간 및 받는 사람과 공개 설정 여부 등을 설정하는 폼을 입력하여 롤페 생성

**롤페 참여**
- 롤페를 만든 사용자의 초대, 혹은 공개 롤페 참여로 사용자는 해당 롤페에 마음을 작성할 권한을 얻음

**마음 작성**
- 롤페에 참여한 사용자는 마음을 작성
- 내용 및 포스트잇 배경 색상 지정 가능

**롤페 전달**
- 롤페를 생성할 때 지정한 기간이 만료되면 해당 롤페는 완료되어 대상자에게 전달할 수 있음
- 롤페의 대상이 롤페의 유저라면 해당 유저의 계정에 해당 롤페를 등록
- 롤페의 대상이 롤페의 유저가 아니라면 이미지로 저장하여 직접 전달 가능

---
## 컨벤션
**파일 네이밍 규칙**
- 컴포넌트 파일 : PascalCase
- 유틸 / API : camelCase
- 타입 정의 : camelCase / Interface 기반
- 설정 : kebab-case

**스타일링**
- styled-components 사용
- `COLORS` 객체로 전역 색상 관리
- rem 단위로 반응형 대응
- next/font 및 CSS 변수로 폰트 적용

**디렉토리 구조**
```text
app/
├── _components/
│   ├── Commons/       # 공통 컴포넌트
│   └── Pages/         # 페이지별 컴포넌트
├── (route-group)/     # Next.js route group
public/
├── styles/            # 스타일 관련
├── utils/apis/        # API 함수들
├── redux/             # Redux 관련
└── fonts/             # 폰트 파일
```

**커밋 컨벤션**
```
Type: Description (영문 작성)
```
- Feat: 기능 추가
- Refactor: 리팩토링
- Remove: 삭제
- Docs: 문서 추가/수정

---

## 기타
- [Rollpe BE](https://github.com/Team-Exiters/roll-pe-api)
- [Rollpe iOS](https://github.com/Team-Exiters/Roll-pe_iOS)



