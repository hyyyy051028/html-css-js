// 部署修复脚本
document.addEventListener('DOMContentLoaded', function() {
  // 替换视频为在线视频或提示信息
  const mainVideo = document.querySelector('.main-video');
  if (mainVideo) {
    // 创建替代内容
    const videoPlaceholder = document.createElement('div');
    videoPlaceholder.className = 'video-placeholder';
    videoPlaceholder.innerHTML = `
      <div class="placeholder-content">
        <i class="fas fa-film"></i>
        <h3>视频演示</h3>
        <p>由于文件大小限制，视频内容已被优化。</p>
        <a href="#" class="btn">查看示例视频</a>
      </div>
    `;
    
    // 替换视频元素
    if (mainVideo.parentNode) {
      mainVideo.parentNode.replaceChild(videoPlaceholder, mainVideo);
    }
    
    // 移除不需要的控制按钮
    const videoControls = document.querySelector('.video-controls');
    if (videoControls) {
      videoControls.style.display = 'none';
    }
  }
  
  console.log('部署修复脚本已运行');
});
