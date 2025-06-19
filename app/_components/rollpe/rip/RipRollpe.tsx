// "use client";
// import styled from "styled-components";
// import { HeartPaperPreview } from "../commons/HeartPaper";
// import { Rollpe } from "@/public/utils/types";
// import { COLORS } from "@/public/styles/colors";

// export const RipRollpe: React.FC = () => {
//   return (
//     <RollpeWrapper>
//       <PreviewContainer>
//         <FirstRow>
//           <HeartPaperPreview
//             color={"#999"}
//             deg={-2.72}
//             margin={"0rem 0rem 0rem 0rem"}
//             vertical={false}
//           />
//           <HeartPaperPreview
//             color={"#D3D3D3"}
//             deg={0}
//             margin={"0rem 0rem 0rem 0rem"}
//             vertical={false}
//           />
//           <HeartPaperPreview
//             color={"#999"}
//             deg={5.39}
//             margin={"0rem 0rem 0rem 0rem"}
//             vertical={false}
//           />
//           <HeartPaperPreview
//             color={"#999"}
//             deg={0.22}
//             margin={"0rem 0rem 0rem 0rem"}
//             vertical={false}
//           />
//           <HeartPaperPreview
//             color={"#999"}
//             deg={-1.6}
//             margin={"0em 0em 0.3em 0em"}
//             vertical={false}
//           />
//         </FirstRow>
//         <SecondRow>
//           <HeartPaperPreview
//             color={"#999"}
//             deg={2.78}
//             margin={"0em 0em 0.6em 0em"}
//             vertical={false}
//           />
//           <div className={"title-wrapper"}>
//             <p>삼가고인의 명복을 빕니다.</p>
//           </div>
//           <HeartPaperPreview
//             color={"#d3d3d3"}
//             deg={3.1}
//             margin={"0em 0em 0.98em 0em"}
//             vertical={false}
//           />
//         </SecondRow>
//         <ThirdRow>
//           <HeartPaperPreview
//             color={"#999"}
//             deg={-1.98}
//             margin={"0rem 0rem 0rem 0rem"}
//             vertical={false}
//           />
//           <HeartPaperPreview
//             color={"#D3D3D3"}
//             deg={4.03}
//             margin={"0.3em 0em 0em 0em"}
//             vertical={false}
//           />
//           <HeartPaperPreview
//             color={"#999"}
//             deg={-1.98}
//             margin={"0em 0em 0.6em 0em"}
//             vertical={false}
//           />
//           <HeartPaperPreview
//             color={"#D3D3D3"}
//             deg={-0.5}
//             margin={"0rem 0rem 0rem 0rem"}
//             vertical={false}
//           />
//           <HeartPaperPreview
//             color={"#999"}
//             deg={-2.83}
//             margin={"0em 0em 0em 0.28em"}
//             vertical={false}
//           />
//         </ThirdRow>
//       </PreviewContainer>
//     </RollpeWrapper>
//   );
// };

// export const VerticalRipRollpe: React.FC = () => {
//   return (
//     <VerticalWrapper>
//       <VerticalContainer>
//         <VerticalRollpeTitleWrapper>
//           <p>**참사 희생자들을 추모합니다.</p>
//         </VerticalRollpeTitleWrapper>
//         <VerticalHeartContainer>
//           <VerticalHeartRow>
//             <HeartPaperPreview
//               color={"#999999"}
//               deg={0.86}
//               margin={"0em 0em 0.5em 0em"}
//               vertical={true}
//             />
//             <HeartPaperPreview
//               color={"#999999"}
//               deg={-0.26}
//               margin={"0.5em 0em 0em 0em"}
//               vertical={true}
//             />
//             <HeartPaperPreview
//               color={"#999999"}
//               deg={0.15}
//               margin={"0em 0em 0.5em 0em"}
//               vertical={true}
//             />
//             <HeartPaperPreview
//               color={"#999999"}
//               deg={0.42}
//               margin={"1em 0em 0em 0em"}
//               vertical={true}
//             />
//           </VerticalHeartRow>
//           <VerticalHeartRow>
//             <HeartPaperPreview
//               color={"#999999"}
//               deg={-0.07}
//               margin={"0em 0em 0em 0em"}
//               vertical={true}
//             />
//             <HeartPaperPreview
//               color={"#999999"}
//               deg={0.86}
//               margin={"1em 0em 0em 0em"}
//               vertical={true}
//             />
//             <HeartPaperPreview
//               color={"#D3D3D3"}
//               deg={-0.74}
//               margin={"0em 0em 0em 0em"}
//               vertical={true}
//             />
//             <HeartPaperPreview
//               color={"#D3D3D3"}
//               deg={0.76}
//               margin={"1em 0em 0em 0em"}
//               vertical={true}
//             />
//           </VerticalHeartRow>
//           <VerticalHeartRow>
//             <HeartPaperPreview
//               color={"#999999"}
//               deg={1.45}
//               margin={"1em 0em 0em 0em"}
//               vertical={true}
//             />
//             <HeartPaperPreview
//               color={"#D3D3D3"}
//               deg={-0.11}
//               margin={"0em 0em 0em 0em"}
//               vertical={true}
//             />
//             <HeartPaperPreview
//               color={"#999999"}
//               deg={1.23}
//               margin={"1em 0em 0em 0em"}
//               vertical={true}
//             />
//             <HeartPaperPreview
//               color={"#999999"}
//               deg={-0.66}
//               margin={"0em 0em 0em 0em"}
//               vertical={true}
//             />
//           </VerticalHeartRow>
//         </VerticalHeartContainer>
//       </VerticalContainer>
//     </VerticalWrapper>
//   );
// };

// const RollpeWrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//   width: 100%;
//   aspect-ratio: 297 / 210;
//   background-color: #393939;
//   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
// `;

// const VerticalWrapper = styled(RollpeWrapper)`
//   aspect-ratio: 210 / 297;
// `;

// const PreviewContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
//   padding: 0.5rem;
//   width: calc(100% - 1rem);
//   height: calc(100% - 1rem);
// `;

// const VerticalContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 0.5em 0.4em;
//   width: calc(100% - 0.8em);
//   height: calc(100% - 2em);
// `;

// const VerticalRollpeTitleWrapper = styled.div`
//   padding: 1em 2.5em;
//   width: calc(100% - 5em);
//   /* height: 20%; */

//   @media (min-width: 768px) {
//     padding: 2em 5em;
//     width: calc(100% - 10em);
//   }
//   background-image: url("/images/image/rip.png");
//   background-size: contain;
//   background-repeat: no-repeat;
//   background-position: center;

//   & > p {
//     width: 100%;

//     font-family: var(--font-nanummyeongjo);
//     line-height: 130%;
//     font-size: 1.5em;
//     word-break: keep-all;
//     text-align: center;
//     color: ${COLORS.ROLLPE_PRIMARY};

//     @media (min-width: 768px) {
//       font-size: 3.25em;
//     }
//   }
// `;

// const VerticalHeartContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 1.5em;
//   padding: 1em 0em;
//   width: 100%;
//   height: calc(100% - 2em);
// `;

// const VerticalHeartRow = styled.div`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   height: 100%;
//   min-height: 6em;
//   max-height: 15em;
// `;

// const FirstRow = styled.div`
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   width: 100%;
//   height: 100%;
//   min-height: 4em;
//   max-height: 10em;
// `;

// const SecondRow = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 3fr 1fr;

//   width: 100%;
//   height: 100%;
//   min-height: 4em;
//   max-height: 10em;

//   & > .title-wrapper {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;

//     padding: 0.2em;
//     width: calc(100% - 0.4em);
//     height: calc(100% - 0.4em);

//     background-image: url("/images/image/rip.png");
//     background-size: cover;

//     & > p {
//       text-align: center;
//       font-size: 1.25em;
//       font-family: var(--font-nanummyeongjo);
//       color: ${COLORS.ROLLPE_PRIMARY};
//       line-height: auto;
//       word-break: keep-all;

//       @media (min-width: 768px) {
//         font-size: 3.125em;
//       }
//     }
//   }
// `;

// const ThirdRow = styled.div`
//   display: grid;
//   grid-template-columns: repeat(5, 1fr);
//   width: 100%;
//   height: 100%;
//   min-height: 4em;
//   max-height: 10em;
// `;
