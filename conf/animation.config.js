/**
 * 网站美化动效相关
 */
module.exports = {
  // 鼠标点击烟花特效
  FIREWORKS: process.env.NEXT_PUBLIC_FIREWORKS || true, // 开启烟花特效

  FIREWORKS_COLOR: [
    '255, 20, 97',
    '24, 255, 146',
    '90, 135, 255',
    '251, 243, 140'
  ],

  // 鼠标跟随特效
  MOUSE_FOLLOW: process.env.NEXT_PUBLIC_MOUSE_FOLLOW || true, // 开启鼠标跟随
  MOUSE_FOLLOW_EFFECT_TYPE: 11,
  MOUSE_FOLLOW_EFFECT_COLOR: '#1989fa',

  // 樱花飘落特效
  SAKURA: process.env.NEXT_PUBLIC_SAKURA || false,
  // 漂浮线段特效
  NEST: process.env.NEXT_PUBLIC_NEST || false,
  // 动态彩带特效
  FLUTTERINGRIBBON: process.env.NEXT_PUBLIC_FLUTTERINGRIBBON || true, // 开启彩带
  // 静态彩带特效
  RIBBON: process.env.NEXT_PUBLIC_RIBBON || false,
  // 星空雨特效
  STARRY_SKY: process.env.NEXT_PUBLIC_STARRY_SKY || false,

  ANIMATE_CSS_URL: process.env.NEXT_PUBLIC_ANIMATE_CSS_URL || 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
}
