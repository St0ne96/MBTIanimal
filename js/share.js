function setShare() {
  // 공유할 URL
  const shareUrl = "https://clinquant-phoenix-fe8474.netlify.app";

  // 공유할 이미지 URL
  const shareImage = "img/share.png";

  // 공유할 제목
  const shareTitle = "MBTI 유형";

  // 공유할 설명
  const shareDescription = "MBTI 유형";

  // 카카오링크 생성
  Kakao.Link.sendDefault({
    objectType: "feed",
    content: {
      title: shareTitle,
      description: shareDescription,
      imageUrl: shareImage,
      link: {
        webUrl: shareUrl,
        mobileWebUrl: shareUrl
      }
    },
    buttons: [
      {
        title: "웹에서 보기",
        link: {
          webUrl: shareUrl,
          mobileWebUrl: shareUrl
        }
      }
    ]
  });
}