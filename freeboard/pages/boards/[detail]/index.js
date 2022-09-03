import { checkDEV } from "@apollo/client/utilities/globals";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";

import {
  Wrapper,
  ContentWrapper,
  TitleWrapper,
  Title,
  TitleInfo,
  ContentInner,
  LikeDislikeWrapper,
  LikeDislikeInner,
  ContentButtonWrapper,
  ContentButton,
  HrLine,
  CommentWrapper,
  CommentTitle,
  CommentTitleImg,
  CommentNonmemberWrapper,
  CommentNameInfo,
  InputW180H52,
  CommentContentWrapper,
  InputW1200,
  CommentContentBottom,
  CharactersCounter,
  CommentCreateButton,
  CommentUpdateButton,
  CommentViewWrapper,
  CommentViewInner,
  CommentViewProfileWrapper,
  CommentViewContentWrapper,
  ViewContentTop,
  CommentContentName,
  CommentViewButtonWrapper,
  CommentViewContent,
  CommentViewContentDate,
  LinkIcon,
  MapIcon,
  MapModal,
} from "../../../styles/detail";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
      boardAddress {
        zipcode
        address
        addressDetail
      }
      createdAt
      updatedAt
    }
  }
`;

export default function DetailPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      boardId: router.query.detail,
    },
  });

  return (
    <Wrapper>
      <TitleWrapper className="타이틀영역랩퍼">
        <Title className="타이틀">
          {data ? data.fetchBoard.title : "Loading..."}
        </Title>
        <TitleInfo className="세부정보1">
          {data && data.fetchBoard.images} {data && data.fetchBoard.writer}{" "}
          {data && data.fetchBoard.createdAt}
        </TitleInfo>
        <TitleInfo className="세부정보2/이건 상황에 따라 삭제할수도">
          <LinkIcon src="/link_icon.png" /> <MapIcon src="/map_icon.png" />
          <MapModal>
            {data && data.fetchBoard.boardAddress.address}
            <br />
            {data && data.fetchBoard.boardAddress.addressDetail}
          </MapModal>
        </TitleInfo>
      </TitleWrapper>
      <ContentWrapper>
        <ContentInner className="콘텐츠사진">
          {data && data.fetchBoard.images}
        </ContentInner>
        <ContentInner className="콘텐츠텍스트">
          {data ? data.fetchBoard.contents : "Loading..."}
        </ContentInner>
        <ContentInner className="유튜브링크">
          YOUTUBE LINK : {data && data.fetchBoard.youtubeUrl}
        </ContentInner>
        <LikeDislikeWrapper className="좋아요싫어요">
          <LikeDislikeInner>
            <img src="/like_icon.png" />{" "}
            <div>{data && data.fetchBoard.likeCount}</div>
          </LikeDislikeInner>
          <LikeDislikeInner>
            <img src="/dislike_icon.png" />{" "}
            <div>{data && data.fetchBoard.dislikeCount}</div>
          </LikeDislikeInner>
        </LikeDislikeWrapper>
      </ContentWrapper>
      <ContentButtonWrapper className="버튼랩퍼">
        <ContentButton className="목록보기">목록으로</ContentButton>
        <ContentButton className="수정하기">수정하기</ContentButton>
        <ContentButton className="수정하기">삭제하기</ContentButton>
      </ContentButtonWrapper>
      <HrLine />
      <CommentWrapper className="댓글래퍼">
        <CommentTitle className="댓글title">
          <CommentTitleImg src="/comment.png" />
          댓글
        </CommentTitle>
        <CommentNonmemberWrapper className="비회원글쓰기래퍼">
          <CommentNameInfo className="래퍼글쓴이정보와별점">
            <InputW180H52 type="text" placeholder="작성자" />
            <InputW180H52 type="password" placeholder="비밀번화" />
            <div className="별점">별 별 별 별 별</div>
          </CommentNameInfo>
          <CommentContentWrapper className="댓글콘텐츠래퍼">
            <InputW1200
              type="text"
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            />
            <CommentContentBottom className="래퍼글자수확인">
              <CharactersCounter className="글자수확인">
                0/100
              </CharactersCounter>
              <CommentCreateButton className="등록하기버튼">
                등록하기
              </CommentCreateButton>
            </CommentContentBottom>
          </CommentContentWrapper>
        </CommentNonmemberWrapper>

        <CommentNonmemberWrapper className="비회원글수정래퍼">
          <CommentNameInfo className="래퍼글쓴이정보와별점">
            <InputW180H52 type="text" />
            <InputW180H52 type="password" />
            <div className="별점">별 별 별 별 별</div>
          </CommentNameInfo>
          <CommentContentWrapper className="댓글콘텐츠래퍼">
            <InputW1200 type="text" />
            <CommentContentBottom className="래퍼글자수확인">
              <CharactersCounter className="글자수확인">
                0/100
              </CharactersCounter>
              <CommentUpdateButton className="등록하기버튼">
                수정하기
              </CommentUpdateButton>
            </CommentContentBottom>
          </CommentContentWrapper>
        </CommentNonmemberWrapper>

        <CommentViewWrapper className="댓글보기래퍼">
          <CommentViewInner className="가로등분래퍼">
            <CommentViewProfileWrapper className="프로필사진">
              <img src="/profile_icon.png" />
            </CommentViewProfileWrapper>
            <CommentViewContentWrapper className="댓글콘텐츠래퍼">
              <ViewContentTop className="래퍼_이름부터삭제까지">
                <CommentNameInfo className="래퍼_이름별점">
                  <CommentContentName className="이름">이름</CommentContentName>
                  <div className="별점">별 별 별 별 별</div>
                </CommentNameInfo>
                <CommentViewButtonWrapper className="래퍼_수정삭제">
                  <button className="수정버튼">
                    <img src="/update_icon.png" />
                  </button>
                  <button className="삭제버튼">
                    <img src="/delete_icon.png" />
                  </button>
                </CommentViewButtonWrapper>
              </ViewContentTop>
              <CommentViewContent className="댓글내용">
                댓글내용
              </CommentViewContent>
              <CommentViewContentDate className="댓글날짜">
                댓글날짜
              </CommentViewContentDate>
            </CommentViewContentWrapper>
          </CommentViewInner>
        </CommentViewWrapper>
        <CommentViewWrapper className="댓글보기래퍼">
          <CommentViewInner className="가로등분래퍼">
            <CommentViewProfileWrapper className="프로필사진">
              <img src="/profile_icon.png" />
            </CommentViewProfileWrapper>
            <CommentViewContentWrapper className="댓글콘텐츠래퍼">
              <ViewContentTop className="래퍼_이름부터삭제까지">
                <CommentNameInfo className="래퍼_이름별점">
                  <CommentContentName className="이름">이름</CommentContentName>
                  <div className="별점">별 별 별 별 별</div>
                </CommentNameInfo>
                <CommentViewButtonWrapper className="래퍼_수정삭제">
                  <button className="수정버튼">
                    <img src="/update_icon.png" />
                  </button>
                  <button className="삭제버튼">
                    <img src="/delete_icon.png" />
                  </button>
                </CommentViewButtonWrapper>
              </ViewContentTop>
              <CommentViewContent className="댓글내용">
                댓글내용이라니까요~~~
              </CommentViewContent>
              <CommentViewContentDate className="댓글날짜">
                댓글날짜
              </CommentViewContentDate>
            </CommentViewContentWrapper>
          </CommentViewInner>
        </CommentViewWrapper>
      </CommentWrapper>
    </Wrapper>
  );
}
