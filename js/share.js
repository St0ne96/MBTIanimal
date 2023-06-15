function setShare() {
    const mbtiTitle = document.querySelector('.mbtiTitle').textContent;
    const mbtiContent = document.querySelector('.mbtiContent').textContent;
    const shareURL = 'https://clinquant-phoenix-fe8474.netlify.app'; // 공유할 URL을 여기에 입력하세요
    const shareImage = 'img/share.png'; // 공유할 이미지 경로를 여기에 입력하세요
  
    Kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: mbtiTitle,
        description: mbtiContent,
        imageUrl: shareImage,
        link: {
          mobileWebUrl: shareURL,
          webUrl: shareURL,
        },
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: shareURL,
            webUrl: shareURL,
          },
        },
      ],
    });
  }