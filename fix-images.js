// 图片修复脚本
document.addEventListener('DOMContentLoaded', function() {
  // 修复研学定制部分图片
  const bookImage = document.querySelector('.book .row .image .image-placeholder');
  if (bookImage) {
    const img = document.createElement('img');
    img.src = 'images/book-img.svg';
    img.alt = '研学定制插图';
    bookImage.parentNode.replaceChild(img, bookImage);
  }

  // 修复职业生涯规划部分图片
  const careerImage = document.querySelector('.career .row .image .image-placeholder');
  if (careerImage) {
    const img = document.createElement('img');
    img.src = 'images/career.svg';
    img.alt = '职业生涯规划';
    careerImage.parentNode.replaceChild(img, careerImage);
  }

  // 修复研学路线卡片图片
  const packageImages = document.querySelectorAll('.packages .box .image-container .image-placeholder');
  const packageImageSources = [
    { src: 'images/p-1.jpg', alt: '科技探索' },
    { src: 'images/p-2.jpg', alt: '科学实验' },
    { src: 'images/p-3.jpg', alt: '自然探索' },
    { src: 'images/p-4.jpg', alt: '历史文化' },
    { src: 'images/p-5.jpg', alt: '艺术体验' },
    { src: 'images/p-6.jpg', alt: '职业体验' }
  ];
  
  packageImages.forEach((placeholder, index) => {
    if (index < packageImageSources.length) {
      const img = document.createElement('img');
      img.src = packageImageSources[index].src;
      img.alt = packageImageSources[index].alt;
      placeholder.parentNode.replaceChild(img, placeholder);
    }
  });

  // 修复画廊图片
  const galleryImages = document.querySelectorAll('.gallery-item .gallery-image .image-placeholder');
  const galleryImageSources = [
    { src: 'images/g-1.jpg', alt: '科技研学营' },
    { src: 'images/g-2.jpg', alt: '自然探索营' },
    { src: 'images/g-3.jpg', alt: '历史文化之旅' },
    { src: 'images/g-4.jpg', alt: '科学实验课' },
    { src: 'images/g-5.jpg', alt: '艺术创作营' },
    { src: 'images/g-6.jpg', alt: '团队建设活动' },
    { src: 'images/g-7.jpg', alt: '职业体验日' },
    { src: 'images/g-8.jpg', alt: '研学成果展' },
    { src: 'images/g-9.jpg', alt: '研学分享会' }
  ];
  
  galleryImages.forEach((placeholder, index) => {
    if (index < galleryImageSources.length) {
      const img = document.createElement('img');
      img.src = galleryImageSources[index].src;
      img.alt = galleryImageSources[index].alt;
      placeholder.parentNode.replaceChild(img, placeholder);
    }
  });

  // 修复评价头像
  const testimonialAvatars = document.querySelectorAll('.testimonial-avatar .image-placeholder');
  const avatarSources = [
    { src: 'images/pic1.png', alt: '张同学' },
    { src: 'images/pic4.png', alt: '刘同学' },
    { src: 'images/pic3.png', alt: '王家长' },
    { src: 'images/pic2.png', alt: '李老师' }
  ];
  
  testimonialAvatars.forEach((placeholder, index) => {
    if (index < avatarSources.length) {
      const img = document.createElement('img');
      img.src = avatarSources[index].src;
      img.alt = avatarSources[index].alt;
      placeholder.parentNode.replaceChild(img, placeholder);
    }
  });

  // 修复品牌赞助图片
  const brandImages = document.querySelectorAll('.brand-slider .swiper-slide .image-placeholder');
  const brandSources = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg', 'images/6.jpg'];
  
  brandImages.forEach((placeholder, index) => {
    if (index < brandSources.length) {
      const img = document.createElement('img');
      img.src = brandSources[index % brandSources.length];
      img.alt = '';
      placeholder.parentNode.replaceChild(img, placeholder);
    }
  });

  // 修复视频
  const videoPlaceholder = document.querySelector('.main-video-placeholder');
  if (videoPlaceholder) {
    const video = document.createElement('video');
    video.src = 'images/vid-5.mp4';
    video.controls = true;
    video.poster = 'images/video-poster.jpg';
    video.className = 'main-video';
    videoPlaceholder.parentNode.replaceChild(video, videoPlaceholder);
  }

  console.log('图片修复脚本已运行');
});
