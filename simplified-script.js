// 简化版脚本 - 移除对外部库的依赖

document.addEventListener('DOMContentLoaded', function() {
  // 基本DOM操作
  let searchBtn = document.querySelector('#search-btn');
  let searchBar = document.querySelector('.search-bar-container');
  let formBtn = document.querySelector('#login-btn');
  let loginForm = document.querySelector('.login-form-container');
  let formClose = document.querySelector('#form-close');
  let menu = document.querySelector('#menu-bar');
  let navbar = document.querySelector('.navbar');

  // 滚动事件
  window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
  };

  // 搜索按钮点击事件
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      searchBtn.classList.toggle('fa-times');
      searchBar.classList.toggle('active');
    });
  }

  // 登录表单事件
  if (formBtn) {
    formBtn.addEventListener('click', () => {
      loginForm.classList.add('active');
    });
  }

  if (formClose) {
    formClose.addEventListener('click', () => {
      loginForm.classList.remove('active');
    });
  }

  // 菜单按钮事件
  if (menu) {
    menu.addEventListener('click', () => {
      menu.classList.toggle('fa-times');
      navbar.classList.toggle('active');
    });
  }

  // 过滤按钮功能
  const filterBtns = document.querySelectorAll('.filter-btn');
  const filterItems = document.querySelectorAll('[data-category]');

  if (filterBtns.length > 0 && filterItems.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // 移除所有按钮的active类
        filterBtns.forEach(b => b.classList.remove('active'));
        // 为当前点击的按钮添加active类
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        // 过滤项目
        filterItems.forEach(item => {
          if (filter === 'all' || item.getAttribute('data-category') === filter) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // 评价标签切换功能
  const tabBtns = document.querySelectorAll('.tab-btn');
  const testimonialSlides = document.querySelectorAll('.swiper-slide[data-category]');

  if (tabBtns.length > 0 && testimonialSlides.length > 0) {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // 移除所有按钮的active类
        tabBtns.forEach(b => b.classList.remove('active'));
        // 为当前点击的按钮添加active类
        btn.classList.add('active');
        
        const category = btn.getAttribute('data-tab');
        
        // 过滤评价
        testimonialSlides.forEach(slide => {
          if (category === 'all' || slide.getAttribute('data-category') === category) {
            slide.style.display = 'block';
          } else {
            slide.style.display = 'none';
          }
        });
      });
    });
  }

  // 表单验证
  const forms = document.querySelectorAll('form');
  if (forms.length > 0) {
    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('表单提交功能已简化，实际提交功能已禁用。');
      });
    });
  }

  // 为所有链接添加点击事件
  const links = document.querySelectorAll('a[href="#"]');
  if (links.length > 0) {
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
      });
    });
  }
});
