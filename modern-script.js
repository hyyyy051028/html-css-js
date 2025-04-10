// 现代化脚本 - 为未来旅图网站提供交互功能

document.addEventListener('DOMContentLoaded', function() {
  // 初始化AOS动画库
  AOS.init({
    duration: 800,
    easing: 'ease',
    once: true,
    offset: 100
  });

  // 初始化学员评价轮播
  const reviewSwiper = new Swiper('.review-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    }
  });

  // 学员评价标签切换功能
  const tabBtns = document.querySelectorAll('.tab-btn');
  const testimonialSlides = document.querySelectorAll('.swiper-slide[data-category]');

  // 默认显示所有评价
  function showAllTestimonials() {
    testimonialSlides.forEach(slide => {
      slide.style.display = 'block';
    });
    reviewSwiper.update();
    reviewSwiper.slideTo(0);
  }

  // 初始化时显示所有评价
  showAllTestimonials();

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // 移除所有按钮的active类
      tabBtns.forEach(b => b.classList.remove('active'));
      // 为当前点击的按钮添加active类
      btn.classList.add('active');
      
      const category = btn.getAttribute('data-tab');
      
      // 过滤轮播项
      if (category === 'all') {
        showAllTestimonials();
      } else {
        testimonialSlides.forEach(slide => {
          if (slide.getAttribute('data-category') === category) {
            slide.style.display = 'block';
          } else {
            slide.style.display = 'none';
          }
        });
        
        // 更新轮播
        reviewSwiper.update();
        reviewSwiper.slideTo(0);
      }
    });
  });

  // 添加“所有”标签按钮
  const tabsContainer = document.querySelector('.testimonial-tabs');
  if (tabsContainer && !document.querySelector('.tab-btn[data-tab="all"]')) {
    const allTabBtn = document.createElement('button');
    allTabBtn.className = 'tab-btn active';
    allTabBtn.setAttribute('data-tab', 'all');
    allTabBtn.textContent = '所有评价';
    tabsContainer.prepend(allTabBtn);
    
    // 移除其他按钮的active类
    tabBtns.forEach(btn => btn.classList.remove('active'));
  }

  // 合作伙伴项目悬停效果
  const partnerItems = document.querySelectorAll('.partner-item');
  
  partnerItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      const overlay = item.querySelector('.partner-overlay');
      if (overlay) {
        overlay.style.transform = 'translateY(0)';
      }
    });
    
    item.addEventListener('mouseleave', () => {
      const overlay = item.querySelector('.partner-overlay');
      if (overlay) {
        overlay.style.transform = 'translateY(100%)';
      }
    });
  });

  // 回到顶部按钮
  const scrollTopBtn = document.querySelector('.scroll-top');
  
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('active');
      } else {
        scrollTopBtn.classList.remove('active');
      }
    });
    
    scrollTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 表单验证
  const contactForm = document.querySelector('.contact-form form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // 获取表单字段
      const organization = document.getElementById('organization');
      const contactName = document.getElementById('contact-name');
      const email = document.getElementById('email');
      const phone = document.getElementById('phone');
      const inquiryType = document.getElementById('inquiry-type');
      const message = document.getElementById('message');
      const privacy = document.getElementById('privacy');
      
      // 简单验证
      let isValid = true;
      
      if (!organization.value.trim()) {
        showError(organization, '请输入学校/机构名称');
        isValid = false;
      } else {
        removeError(organization);
      }
      
      if (!contactName.value.trim()) {
        showError(contactName, '请输入联系人姓名');
        isValid = false;
      } else {
        removeError(contactName);
      }
      
      if (!email.value.trim()) {
        showError(email, '请输入电子邮箱');
        isValid = false;
      } else if (!isValidEmail(email.value)) {
        showError(email, '请输入有效的电子邮箱');
        isValid = false;
      } else {
        removeError(email);
      }
      
      if (!phone.value.trim()) {
        showError(phone, '请输入联系电话');
        isValid = false;
      } else {
        removeError(phone);
      }
      
      if (inquiryType.value === '') {
        showError(inquiryType, '请选择咨询类型');
        isValid = false;
      } else {
        removeError(inquiryType);
      }
      
      if (!message.value.trim()) {
        showError(message, '请描述您的需求或疑问');
        isValid = false;
      } else {
        removeError(message);
      }
      
      if (!privacy.checked) {
        showError(privacy, '请阅读并同意隐私政策和服务条款');
        isValid = false;
      } else {
        removeError(privacy);
      }
      
      // 如果验证通过，显示成功消息
      if (isValid) {
        // 这里可以添加AJAX提交表单的代码
        // 为了演示，我们只显示一个成功消息
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = '<i class="fas fa-check-circle"></i> 您的咨询已成功提交，我们将在24小时内与您联系！';
        
        contactForm.innerHTML = '';
        contactForm.appendChild(successMessage);
      }
    });
  }
  
  // 辅助函数：显示错误消息
  function showError(input, message) {
    const formGroup = input.closest('.form-group');
    formGroup.classList.add('error');
    
    // 检查是否已存在错误消息
    let errorMessage = formGroup.querySelector('.error-message');
    
    if (!errorMessage) {
      errorMessage = document.createElement('div');
      errorMessage.className = 'error-message';
      formGroup.appendChild(errorMessage);
    }
    
    errorMessage.textContent = message;
  }
  
  // 辅助函数：移除错误消息
  function removeError(input) {
    const formGroup = input.closest('.form-group');
    formGroup.classList.remove('error');
    
    const errorMessage = formGroup.querySelector('.error-message');
    if (errorMessage) {
      errorMessage.remove();
    }
  }
  
  // 辅助函数：验证邮箱格式
  function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  // 添加表单错误样式
  const style = document.createElement('style');
  style.textContent = `
    .form-group.error .form-control {
      border-color: #ff3860;
    }
    
    .error-message {
      color: #ff3860;
      font-size: 0.85rem;
      margin-top: 0.3rem;
    }
    
    .success-message {
      background-color: #23d160;
      color: white;
      padding: 2rem;
      border-radius: 8px;
      text-align: center;
      font-size: 1.2rem;
    }
    
    .success-message i {
      font-size: 3rem;
      margin-bottom: 1rem;
      display: block;
    }
  `;
  document.head.appendChild(style);
});
