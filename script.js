const IS_PRODUCT_PAGE = /(?:^|\/)product\.html$/i.test(window.location.pathname);
const WHATSAPP="8801670455526";
// Google Apps Script Web App URL (your live /exec URL)
const APPS_SCRIPT_URL="https://script.google.com/macros/s/AKfycbwve7BtdnB-pAt-p2uQrpykl7sjlyRVCRk3dv8xLzyGnvBkQU8Qa56kR5wvklhAk9OI/exec";

const galleryImages=[  
  
      "images/wall-lamp-1.webp",
      "images/wall-lamp-2.webp",
      "images/wall-lamp-3.webp",
      "images/wall-lamp-4.webp",
      "images/wall-lamp-5.webp",
      "images/wall-lamp-6.webp",
      "images/wall-lamp-7.webp",
      "images/wall-lamp-8.webp",
      "images/wall-lamp-9.webp",
      "images/wall-lamp-10.webp",
      "images/wall-lamp-11.webp",
      "images/wall-lamp-12.webp",
      "images/wall-lamp-13.webp",
      "images/wall-lamp-14.webp",
      "images/wall-lamp-15.webp",
      "images/wall-lamp-16.webp",
      "images/wall-lamp-17.webp",
      "images/wall-lamp-18.webp",
      "images/wall-lamp-1-2.webp",
      "images/wall-lamp-1-3.webp",
      "images/wall-lamp-1-4.webp",
      "images/wall-lamp-1-5.webp",
	  
      "images/table-lamp-1.webp",
      "images/table-lamp-1-2.webp",
      "images/table-lamp-1-3.webp",
      "images/table-lamp-1-4.webp",
      "images/table-lamp-1-5.webp",
	  
      "images/table-lamp-2.webp",
      "images/table-lamp-1-2.webp",
      "images/table-lamp-1-3.webp",
      "images/table-lamp-1-4.webp",
      "images/table-lamp-1-5.webp",
	  
      "images/table-lamp-3.webp",
      "images/table-lamp-3-2.webp",
      "images/table-lamp-3-3.webp",
      "images/table-lamp-3-4.webp",
      "images/table-lamp-3-5.webp",
	  
      "images/table-lamp-4.webp",
      "images/table-lamp-4-2.webp",
      "images/table-lamp-4-3.webp",
      "images/table-lamp-4-4.webp",
      "images/table-lamp-4-5.webp",
	  
      "images/table-lamp-5.webp",
      "images/table-lamp-5-2.webp",
      "images/table-lamp-5-3.webp",
      "images/table-lamp-5-4.webp",
      "images/table-lamp-5-5.webp",
	  
      "images/table-lamp-6.webp",
      "images/table-lamp-6-2.webp",
      "images/table-lamp-6-3.webp",
      "images/table-lamp-6-4.webp",
      "images/table-lamp-6-5.webp",
	  
      "images/table-lamp-7.webp",
      "images/table-lamp-7-2.webp",
      "images/table-lamp-7-3.webp",
      "images/table-lamp-7-4.webp",
      "images/table-lamp-7-5.webp",
	  
      "images/table-lamp-8.webp",
      "images/table-lamp-1-2.webp",
      "images/table-lamp-3-3.webp",
      "images/table-lamp-3-4.webp",
      "images/table-lamp-3-5.webp",
	  
      "images/table-lamp-9.webp",
      "images/table-lamp-3-2.webp",
      "images/table-lamp-3-3.webp",
      "images/table-lamp-3-4.webp",
      "images/table-lamp-3-5.webp",
	  
      "images/table-lamp-10.webp",
      "images/table-lamp-1-2.webp",
      "images/table-lamp-3-3.webp",
      "images/table-lamp-3-4.webp",
      "images/table-lamp-3-5.webp",
	  
      "images/table-lamp-11.webp",
      "images/table-lamp-1-2.webp",
      "images/table-lamp-3-3.webp",
      "images/table-lamp-3-4.webp",
      "images/table-lamp-3-5.webp",
	  
      "images/decorative-items-1.webp",
      "images/decorative-items-1.webp",
      "images/decorative-items-1.webp",
      "images/decorative-items-1.webp",
      "images/decorative-items-1.webp",
	  
      "images/decorative-items-2.webp",
      "images/decorative-items-2.webp",
      "images/decorative-items-2.webp",
      "images/decorative-items-2.webp",
      "images/decorative-items-2.webp",
	  
      "images/decorative-items-3.webp",
      "images/decorative-items-3.webp",
      "images/decorative-items-3.webp",
      "images/decorative-items-3.webp",
      "images/decorative-items-3.webp",
	  
      "images/decorative-items-4.webp",
      "images/decorative-items-4.webp",
      "images/decorative-items-4.webp",
      "images/decorative-items-4.webp",
      "images/decorative-items-4.webp",
	  
      "images/decorative-items-5.webp",
      "images/decorative-items-5.webp",
      "images/decorative-items-5.webp",
      "images/decorative-items-5.webp",
      "images/decorative-items-5.webp",
	  
      "images/decorative-items-6.webp",
      "images/decorative-items-6.webp",
      "images/decorative-items-6.webp",
      "images/decorative-items-6.webp",
      "images/decorative-items-6.webp",
	  
      "images/decorative-items-7.webp",
      "images/decorative-items-7.webp",
      "images/decorative-items-7.webp",
      "images/decorative-items-7.webp",
      "images/decorative-items-7.webp",
	  
      "images/neon-strip-light-1.webp",
      "images/neon-strip-light-2.webp",
      "images/neon-strip-light-1.webp",
      "images/neon-strip-light-2.webp",
      "images/neon-strip-light-1.webp",
	  
      "images/holdar-pin-1.webp",
      "images/holdar-pin-2.webp",
      "images/holdar-pin-1.webp",
      "images/holdar-pin-2.webp",
      "images/holdar-pin-1.webp",
	  
      "images/rgb-leb-light-1.webp",
      "images/rgb-leb-light-1.webp",
      "images/rgb-leb-light-1.webp",
      "images/rgb-leb-light-1.webp",
      "images/rgb-leb-light-1.webp",
	  
      "images/holdar-patch-1.webp",
      "images/holdar-patch-2.webp",
      "images/holdar-patch-1.webp",
      "images/holdar-patch-2.webp",
      "images/holdar-patch-1.webp",
	  
      "images/ac-power-cord-1.webp",
      "images/ac-power-cord-2.webp",
      "images/ac-power-cord-1.webp",
      "images/ac-power-cord-2.webp",
      "images/ac-power-cord-1.webp",
	  
      "images/mini-honey-nut-mixd-1.webp",
      "images/mini-honey-nut-mixd-2.webp",
      "images/mini-honey-nut-mixd-3.webp",
      "images/mini-honey-nut-mixd-4.webp",
      "images/mini-honey-nut-mixd-5.webp",
	  
      "images/mixed-honey-1.webp",
      "images/mixed-honey-2.webp",
      "images/mixed-honey-1.webp",
      "images/mixed-honey-2.webp",
      "images/mixed-honey-2.webp",
	  
      "images/honey-nut-mixd-5.webp",
      "images/honey-nut-mixd-2.webp",
      "images/honey-nut-mixd-4.webp",
      "images/honey-nut-mixd-5.webp",
      "images/honey-nut-mixd-5.webp",
	  
      "images/zatax-attar-1.webp",
      "images/zatax-attar-2.webp",
      "images/zatax-attar-3.webp",
      "images/zatax-attar-1.webp",
      "images/zatax-attar-2.webp",
	  
      "images/vampire-blood-attar-1.webp",
      "images/vampire-blood-attar-2.webp",
      "images/vampire-blood-attar-3.webp",
      "images/vampire-blood-attar-1.webp",
      "images/vampire-blood-attar-2.webp",
	  
      "images/fiber-paper-1.webp",
      "images/fiber-paper-2.webp",
      "images/fiber-paper-3.webp",
      "images/fiber-paper-4.webp",
      "images/fiber-paper-5.webp"
	  
	  
	  
];


// =====================================================
// MANUAL FEATURED PRODUCT CONTROL
// trending: true  -> show in ðŸ”¥ Trending Products
// isNew: true     -> show in âœ¨ New Arrivals
// Omit either property or set it to false to hide that product
// from the corresponding section. A product can appear in both.
// =====================================================
const products=[
  {
    id:1,
	stock:false,
	//trending: true,
	//isNew: true,
    name:"à¦†à¦²à§à¦²à¦¾à¦¹à§-à¦†à¦•à¦¬à¦¾à¦° PVC Wall Lamp",
    cat:"à¦“à§Ÿà¦¾à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª",
    price:650,
    discount:25,
    img:"images/wall-lamp-1.webp",
    images:[
      "images/wall-lamp-1.webp",
      "images/wall-lamp-1-2.webp",
      "images/wall-lamp-1-3.webp",
      "images/wall-lamp-1-4.webp",
      "images/wall-lamp-1-5.webp"
    ],
    short:"à¦‡à¦¸à¦²à¦¾à¦®à¦¿à¦• à¦•à§à¦¯à¦¾à¦²à¦¿à¦—à§à¦°à¦¾à¦«à¦¿ à¦¡à¦¿à¦œà¦¾à¦‡à¦¨",
    desc:"à¦†à¦²à§à¦²à¦¾à¦¹à§-à¦†à¦•à¦¬à¦¾à¦° à¦•à§à¦¯à¦¾à¦²à¦¿à¦—à§à¦°à¦¾à¦«à¦¿ à¦¸à¦®à§à¦¬à¦²à¦¿à¦¤ à¦à¦‡ Premium Decorative PVC Lamp à¦˜à¦°à§‡à¦° à¦ªà¦°à¦¿à¦¬à§‡à¦¶à§‡ à¦à¦•à¦Ÿà¦¿ à¦¶à¦¾à¦¨à§à¦¤, à¦®à¦¾à¦°à§à¦œà¦¿à¦¤ à¦“ à¦¨à¦¾à¦¨à§à¦¦à¦¨à¦¿à¦• à¦†à¦¬à¦¹ à¦¤à§ˆà¦°à¦¿ à¦•à¦°à¦¤à§‡ à¦ªà¦¾à¦°à§‡à¥¤ à¦¬à§‡à¦¡à¦°à§à¦®, à¦¡à§à¦°à§Ÿà¦¿à¦‚à¦°à§à¦®, à¦¨à¦¾à¦®à¦¾à¦œà§‡à¦° à¦¸à§à¦¥à¦¾à¦¨ à¦¬à¦¾ à¦¬à¦¿à¦¶à§‡à¦· à¦‰à¦ªà¦¹à¦¾à¦° à¦¹à¦¿à¦¸à§‡à¦¬à§‡ à¦à¦Ÿà¦¿ à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à¦¾ à¦¯à¦¾à§Ÿà¥¤",
    features:["Premium PVC body 2mm","à¦†à¦•à¦°à§à¦·à¦£à§€à§Ÿ Islamic Calligraphy","à¦¸à¦¹à¦œà§‡à¦‡ à¦²à¦¾à¦‡à¦Ÿ à¦ªà¦°à¦¿à¦¬à¦°à§à¦¤à¦¨ à¦¸à§à¦¬à§à¦¬à¦¿à¦§à¦¾","à¦¦à§‡à§Ÿà¦¾à¦²à§‡ à¦“ à¦Ÿà§‡à¦¬à¦¿à¦²à§‡ à¦¦à§à¦‡à¦­à¦¾à¦¬à§‡à¦‡ à¦®à¦¾à¦¨à¦¿à§Ÿà§‡ à¦¨à§‡à§Ÿ","à§­ à¦•à¦¾à¦²à¦¾à¦° RGB LED light (9wt with 3 mode)","à¦¸à¦¾à¦‡à¦œà¦ƒ- à§ª.à§«à¦‡à¦žà§à¦šà¦¿ à¦ªà¦¾à¦¶ à¦à¦¬à¦‚ à¦‰à¦šà§à¦šà¦¤à¦¾ à§§à§§à¦‡à¦žà§à¦šà¦¿","à§§à¦Ÿà¦¿ à¦¹à§‹à¦²à§à¦¡à¦¾à¦° à¦•à¦¨à¦­à¦¾à¦°à§à¦Ÿà¦¾à¦°","à¦¨à¦°à¦® à¦“ à¦¸à§à¦¨à§à¦¦à¦° lighting effect","à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¨à§‹ à¦“ à¦‰à¦ªà¦¹à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§‹à¦—à§€"]
  },
  {
    id:2,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"à¦®à¦¾à¦¶à¦¾-à¦†à¦²à§à¦²à¦¾à¦¹ PVC Wall Lamp",
    cat:"à¦“à§Ÿà¦¾à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª",
    price:650,
    discount:25,
    img:"images/wall-lamp-2.webp",
    images:[
      "images/wall-lamp-2.webp",
      "images/wall-lamp-1-2.webp",
      "images/wall-lamp-1-3.webp",
      "images/wall-lamp-1-4.webp",
      "images/wall-lamp-1-5.webp"
    ],
    short:"à¦‡à¦¸à¦²à¦¾à¦®à¦¿à¦• à¦•à§à¦¯à¦¾à¦²à¦¿à¦—à§à¦°à¦¾à¦«à¦¿ à¦¡à¦¿à¦œà¦¾à¦‡à¦¨",
    desc:"à¦®à¦¾à¦¶à¦¾-à¦†à¦²à§à¦²à¦¾à¦¹ à¦•à§à¦¯à¦¾à¦²à¦¿à¦—à§à¦°à¦¾à¦«à¦¿à¦° à¦¸à§à¦¨à§à¦¦à¦° à¦¡à¦¿à¦œà¦¾à¦‡à¦¨à§‡à¦° à¦à¦‡ Decorative Lamp à¦†à¦ªà¦¨à¦¾à¦° à¦˜à¦°à§‡à¦° à¦¸à¦¾à¦œà§‡ à¦à¦•à¦Ÿà¦¿ à¦†à¦²à¦¾à¦¦à¦¾ à¦¸à§Œà¦¨à§à¦¦à¦°à§à¦¯ à¦¯à§‹à¦— à¦•à¦°à¦¬à§‡à¥¤ Islamic decor à¦ªà¦›à¦¨à§à¦¦ à¦•à¦°à§‡à¦¨ à¦à¦®à¦¨ à¦ªà§à¦°à¦¿à§Ÿà¦œà¦¨à§‡à¦° à¦œà¦¨à§à¦¯à¦“ à¦à¦Ÿà¦¿ à¦šà¦®à§Žà¦•à¦¾à¦° à¦à¦•à¦Ÿà¦¿ à¦‰à¦ªà¦¹à¦¾à¦°à¥¤",
    features:["Premium PVC body 2mm","à¦†à¦•à¦°à§à¦·à¦£à§€à§Ÿ Islamic Calligraphy","à¦¸à¦¹à¦œà§‡à¦‡ à¦²à¦¾à¦‡à¦Ÿ à¦ªà¦°à¦¿à¦¬à¦°à§à¦¤à¦¨ à¦¸à§à¦¬à§à¦¬à¦¿à¦§à¦¾","à¦¦à§‡à§Ÿà¦¾à¦²à§‡ à¦“ à¦Ÿà§‡à¦¬à¦¿à¦²à§‡ à¦¦à§à¦‡à¦­à¦¾à¦¬à§‡à¦‡ à¦®à¦¾à¦¨à¦¿à§Ÿà§‡ à¦¨à§‡à§Ÿ","à§­ à¦•à¦¾à¦²à¦¾à¦° RGB LED light (9wt with 3 mode)","à¦¸à¦¾à¦‡à¦œà¦ƒ- à§ª.à§«à¦‡à¦žà§à¦šà¦¿ à¦ªà¦¾à¦¶ à¦à¦¬à¦‚ à¦‰à¦šà§à¦šà¦¤à¦¾ à§§à§§à¦‡à¦žà§à¦šà¦¿","à§§à¦Ÿà¦¿ à¦¹à§‹à¦²à§à¦¡à¦¾à¦° à¦•à¦¨à¦­à¦¾à¦°à§à¦Ÿà¦¾à¦°","à¦¨à¦°à¦® à¦“ à¦¸à§à¦¨à§à¦¦à¦° lighting effect","à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¨à§‹ à¦“ à¦‰à¦ªà¦¹à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§‹à¦—à§€"]
  },
  {
    id:3,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"à¦†à¦²à§à¦²à¦¾à¦¹à§ â€” PVC Wall Lamp",
    cat:"à¦“à§Ÿà¦¾à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª",
    price:650,
    discount:25,
    img:"images/wall-lamp-3.webp",
    images:[
      "images/wall-lamp-3.webp",
      "images/wall-lamp-1-2.webp",
      "images/wall-lamp-1-3.webp",
      "images/wall-lamp-1-4.webp",
      "images/wall-lamp-1-5.webp"
    ],
    short:"à¦‡à¦¸à¦²à¦¾à¦®à¦¿à¦• à¦•à§à¦¯à¦¾à¦²à¦¿à¦—à§à¦°à¦¾à¦«à¦¿ à¦¡à¦¿à¦œà¦¾à¦‡à¦¨",
    desc:"à¦†à¦²à§à¦²à¦¾à¦¹à§ à¦†à¦²à§‹à¦° à¦†à¦•à¦°à§à¦·à¦£à§€à§Ÿ presentation-à¦à¦° à¦¸à¦™à§à¦—à§‡ Islamic decorative designà¥¤ à¦˜à¦°à§‡à¦° à¦à¦•à¦Ÿà¦¿ à¦¬à¦¿à¦¶à§‡à¦· corner, bedside table à¦¬à¦¾ decorative setup-à¦ à¦†à¦²à¦¾à¦¦à¦¾ visual effect à¦¤à§ˆà¦°à¦¿ à¦•à¦°à¦¤à§‡ à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à¦¤à§‡ à¦ªà¦¾à¦°à§‡à¦¨à¥¤",
    features:["Premium PVC body 2mm","à¦†à¦•à¦°à§à¦·à¦£à§€à§Ÿ Islamic Calligraphy","à¦¸à¦¹à¦œà§‡à¦‡ à¦²à¦¾à¦‡à¦Ÿ à¦ªà¦°à¦¿à¦¬à¦°à§à¦¤à¦¨ à¦¸à§à¦¬à§à¦¬à¦¿à¦§à¦¾","à¦¦à§‡à§Ÿà¦¾à¦²à§‡ à¦“ à¦Ÿà§‡à¦¬à¦¿à¦²à§‡ à¦¦à§à¦‡à¦­à¦¾à¦¬à§‡à¦‡ à¦®à¦¾à¦¨à¦¿à§Ÿà§‡ à¦¨à§‡à§Ÿ","à§­ à¦•à¦¾à¦²à¦¾à¦° RGB LED light (9wt with 3 mode)","à¦¸à¦¾à¦‡à¦œà¦ƒ- à§ª.à§«à¦‡à¦žà§à¦šà¦¿ à¦ªà¦¾à¦¶ à¦à¦¬à¦‚ à¦‰à¦šà§à¦šà¦¤à¦¾ à§§à§§à¦‡à¦žà§à¦šà¦¿","à§§à¦Ÿà¦¿ à¦¹à§‹à¦²à§à¦¡à¦¾à¦° à¦•à¦¨à¦­à¦¾à¦°à§à¦Ÿà¦¾à¦°","à¦¨à¦°à¦® à¦“ à¦¸à§à¦¨à§à¦¦à¦° lighting effect","à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¨à§‹ à¦“ à¦‰à¦ªà¦¹à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§‹à¦—à§€"]
  },
  {
    id:4,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"à¦®à§à¦¹à¦¾à¦®à§à¦®à¦¦ ï·º â€” PVC Wall Lamp",
    cat:"à¦“à§Ÿà¦¾à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª",
    price:650,
    discount:25,
    img:"images/wall-lamp-4.webp",
    images:[
      "images/wall-lamp-4.webp",
      "images/wall-lamp-1-2.webp",
      "images/wall-lamp-1-3.webp",
      "images/wall-lamp-1-4.webp",
      "images/wall-lamp-1-5.webp"
    ],
    short:"à¦‡à¦¸à¦²à¦¾à¦®à¦¿à¦• à¦•à§à¦¯à¦¾à¦²à¦¿à¦—à§à¦°à¦¾à¦«à¦¿ à¦¡à¦¿à¦œà¦¾à¦‡à¦¨",
    desc:"à¦®à§à¦¹à¦¾à¦®à§à¦®à¦¦ ï·º à¦¨à¦¾à¦®à§‡à¦° à¦…à¦¨à§à¦ªà§à¦°à§‡à¦°à¦£à¦¾à§Ÿ à¦¤à§ˆà¦°à¦¿ à¦à¦‡ decorative lamp-à¦à¦° à¦¸à¦¬à§à¦œ lighting presentation à¦˜à¦°à§‡ à¦à¦•à¦Ÿà¦¿ à¦¶à¦¾à¦¨à§à¦¤ à¦“ elegant Islamic decor feeling à¦¤à§ˆà¦°à¦¿ à¦•à¦°à¦¤à§‡ à¦¸à¦¾à¦¹à¦¾à¦¯à§à¦¯ à¦•à¦°à§‡à¥¤",
    features:["Premium PVC body 2mm","à¦†à¦•à¦°à§à¦·à¦£à§€à§Ÿ Islamic Calligraphy","à¦¸à¦¹à¦œà§‡à¦‡ à¦²à¦¾à¦‡à¦Ÿ à¦ªà¦°à¦¿à¦¬à¦°à§à¦¤à¦¨ à¦¸à§à¦¬à§à¦¬à¦¿à¦§à¦¾","à¦¦à§‡à§Ÿà¦¾à¦²à§‡ à¦“ à¦Ÿà§‡à¦¬à¦¿à¦²à§‡ à¦¦à§à¦‡à¦­à¦¾à¦¬à§‡à¦‡ à¦®à¦¾à¦¨à¦¿à§Ÿà§‡ à¦¨à§‡à§Ÿ","à§­ à¦•à¦¾à¦²à¦¾à¦° RGB LED light (9wt with 3 mode)","à¦¸à¦¾à¦‡à¦œà¦ƒ- à§ª.à§«à¦‡à¦žà§à¦šà¦¿ à¦ªà¦¾à¦¶ à¦à¦¬à¦‚ à¦‰à¦šà§à¦šà¦¤à¦¾ à§§à§§à¦‡à¦žà§à¦šà¦¿","à§§à¦Ÿà¦¿ à¦¹à§‹à¦²à§à¦¡à¦¾à¦° à¦•à¦¨à¦­à¦¾à¦°à§à¦Ÿà¦¾à¦°","à¦¨à¦°à¦® à¦“ à¦¸à§à¦¨à§à¦¦à¦° lighting effect","à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¨à§‹ à¦“ à¦‰à¦ªà¦¹à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§‹à¦—à§€"]
  },
  {
    id:5,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"à¦¸à§à¦¬à¦¹à¦¾à¦¨-à¦†à¦²à§à¦²à¦¾à¦¹ â€” PVC Wall Lamp",
    cat:"à¦“à§Ÿà¦¾à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª",
    price:650,
    discount:25,
    img:"images/wall-lamp-5.webp",
    images:[
      "images/wall-lamp-5.webp",
      "images/wall-lamp-1-2.webp",
      "images/wall-lamp-1-3.webp",
      "images/wall-lamp-1-4.webp",
      "images/wall-lamp-1-5.webp"
    ],
	short:"à¦‡à¦¸à¦²à¦¾à¦®à¦¿à¦• à¦•à§à¦¯à¦¾à¦²à¦¿à¦—à§à¦°à¦¾à¦«à¦¿ à¦¡à¦¿à¦œà¦¾à¦‡à¦¨",
    desc:"à¦¸à§à¦¬à¦¹à¦¾à¦¨-à¦†à¦²à§à¦²à¦¾à¦¹ à¦²à§‡à¦–à¦¾ à¦‰à¦·à§à¦£ lighting-à¦à¦° à¦¸à¦™à§à¦—à§‡ Islamic calligraphy inspired designà¥¤ à¦˜à¦°à§‡à¦° ambience à¦†à¦°à¦“ premium à¦¦à§‡à¦–à¦¾à¦¤à§‡ à¦à¦¬à¦‚ à¦¬à¦¿à¦¶à§‡à¦· à¦®à§à¦¹à§‚à¦°à§à¦¤à§‡ à¦‰à¦ªà¦¹à¦¾à¦° à¦¦à¦¿à¦¤à§‡ à¦à¦‡ designà¦Ÿà¦¿ à¦¦à¦¾à¦°à§à¦£ à¦à¦•à¦Ÿà¦¿ choiceà¥¤",
    features:["Premium PVC body 2mm","à¦†à¦•à¦°à§à¦·à¦£à§€à§Ÿ Islamic Calligraphy","à¦¸à¦¹à¦œà§‡à¦‡ à¦²à¦¾à¦‡à¦Ÿ à¦ªà¦°à¦¿à¦¬à¦°à§à¦¤à¦¨ à¦¸à§à¦¬à§à¦¬à¦¿à¦§à¦¾","à¦¦à§‡à§Ÿà¦¾à¦²à§‡ à¦“ à¦Ÿà§‡à¦¬à¦¿à¦²à§‡ à¦¦à§à¦‡à¦­à¦¾à¦¬à§‡à¦‡ à¦®à¦¾à¦¨à¦¿à§Ÿà§‡ à¦¨à§‡à§Ÿ","à§­ à¦•à¦¾à¦²à¦¾à¦° RGB LED light (9wt with 3 mode)","à¦¸à¦¾à¦‡à¦œà¦ƒ- à§ª.à§«à¦‡à¦žà§à¦šà¦¿ à¦ªà¦¾à¦¶ à¦à¦¬à¦‚ à¦‰à¦šà§à¦šà¦¤à¦¾ à§§à§§à¦‡à¦žà§à¦šà¦¿","à§§à¦Ÿà¦¿ à¦¹à§‹à¦²à§à¦¡à¦¾à¦° à¦•à¦¨à¦­à¦¾à¦°à§à¦Ÿà¦¾à¦°","à¦¨à¦°à¦® à¦“ à¦¸à§à¦¨à§à¦¦à¦° lighting effect","à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¨à§‹ à¦“ à¦‰à¦ªà¦¹à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§‹à¦—à§€"]
  },
  {
    id:6,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"à¦†à¦²à¦¹à¦¾à¦®à¦¦à§à¦²à¦¿à¦²à§à¦²à¦¾à¦¹ â€” PVC Wall Lamp",
    cat:"à¦“à§Ÿà¦¾à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª",
    price:650,
    discount:25,
    img:"images/wall-lamp-6.webp",
    images:[
      "images/wall-lamp-6.webp",
      "images/wall-lamp-1-2.webp",
      "images/wall-lamp-1-3.webp",
      "images/wall-lamp-1-4.webp",
      "images/wall-lamp-1-5.webp"
    ],
	short:"à¦‡à¦¸à¦²à¦¾à¦®à¦¿à¦• à¦•à§à¦¯à¦¾à¦²à¦¿à¦—à§à¦°à¦¾à¦«à¦¿ à¦¡à¦¿à¦œà¦¾à¦‡à¦¨",
    desc:"à¦†à¦²à¦¹à¦¾à¦®à¦¦à§à¦²à¦¿à¦²à§à¦²à¦¾à¦¹ à¦²à§‡à¦–à¦¾ à¦‰à¦·à§à¦£ lighting-à¦à¦° à¦¸à¦™à§à¦—à§‡ Islamic calligraphy inspired designà¥¤ à¦˜à¦°à§‡à¦° ambience à¦†à¦°à¦“ premium à¦¦à§‡à¦–à¦¾à¦¤à§‡ à¦à¦¬à¦‚ à¦¬à¦¿à¦¶à§‡à¦· à¦®à§à¦¹à§‚à¦°à§à¦¤à§‡ à¦‰à¦ªà¦¹à¦¾à¦° à¦¦à¦¿à¦¤à§‡ à¦à¦‡ designà¦Ÿà¦¿ à¦¦à¦¾à¦°à§à¦£ à¦à¦•à¦Ÿà¦¿ choiceà¥¤",
    features:["Premium PVC body 2mm","à¦†à¦•à¦°à§à¦·à¦£à§€à§Ÿ Islamic Calligraphy","à¦¸à¦¹à¦œà§‡à¦‡ à¦²à¦¾à¦‡à¦Ÿ à¦ªà¦°à¦¿à¦¬à¦°à§à¦¤à¦¨ à¦¸à§à¦¬à§à¦¬à¦¿à¦§à¦¾","à¦¦à§‡à§Ÿà¦¾à¦²à§‡ à¦“ à¦Ÿà§‡à¦¬à¦¿à¦²à§‡ à¦¦à§à¦‡à¦­à¦¾à¦¬à§‡à¦‡ à¦®à¦¾à¦¨à¦¿à§Ÿà§‡ à¦¨à§‡à§Ÿ","à§­ à¦•à¦¾à¦²à¦¾à¦° RGB LED light (9wt with 3 mode)","à¦¸à¦¾à¦‡à¦œà¦ƒ- à§ª.à§«à¦‡à¦žà§à¦šà¦¿ à¦ªà¦¾à¦¶ à¦à¦¬à¦‚ à¦‰à¦šà§à¦šà¦¤à¦¾ à§§à§§à¦‡à¦žà§à¦šà¦¿","à§§à¦Ÿà¦¿ à¦¹à§‹à¦²à§à¦¡à¦¾à¦° à¦•à¦¨à¦­à¦¾à¦°à§à¦Ÿà¦¾à¦°","à¦¨à¦°à¦® à¦“ à¦¸à§à¦¨à§à¦¦à¦° lighting effect","à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¨à§‹ à¦“ à¦‰à¦ªà¦¹à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§‹à¦—à§€"]
  },
  {
    id:7,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"à¦®à¦¾à¦›à¦°à¦¾à¦™à§à¦—à¦¾ â€” PVC Wall Lamp",
    cat:"à¦“à§Ÿà¦¾à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª",
    price:650,
    discount:25,
    img:"images/wall-lamp-7.webp",
    images:[
      "images/wall-lamp-7.webp",
      "images/wall-lamp-1-2.webp",
      "images/wall-lamp-1-3.webp",
      "images/wall-lamp-1-4.webp",
      "images/wall-lamp-1-5.webp"
    ],
	short:"à¦®à¦¾à¦›à¦°à¦¾à¦™à§à¦—à¦¾ à¦“ à¦ªà¦¦à§à¦® à¦«à§à¦²à§‡à¦° à¦‰à¦·à§à¦£ à¦†à¦²à§‹",
    desc:"à¦®à¦¾à¦›à¦°à¦¾à¦™à§à¦—à¦¾ à¦“ à¦ªà¦¦à§à¦® à¦«à§à¦² à¦à¦° à¦‰à¦·à§à¦£ lighting-à¦à¦° à¦¸à¦™à§à¦—à§‡ inspired designà¥¤ à¦˜à¦°à§‡à¦° ambience à¦†à¦°à¦“ premium à¦¦à§‡à¦–à¦¾à¦¤à§‡ à¦à¦¬à¦‚ à¦¬à¦¿à¦¶à§‡à¦· à¦®à§à¦¹à§‚à¦°à§à¦¤à§‡ à¦‰à¦ªà¦¹à¦¾à¦° à¦¦à¦¿à¦¤à§‡ à¦à¦‡ designà¦Ÿà¦¿ à¦¦à¦¾à¦°à§à¦£ à¦à¦•à¦Ÿà¦¿ choiceà¥¤",
    features:["Premium PVC body 2mm","à¦¸à¦¹à¦œà§‡à¦‡ à¦²à¦¾à¦‡à¦Ÿ à¦ªà¦°à¦¿à¦¬à¦°à§à¦¤à¦¨ à¦¸à§à¦¬à§à¦¬à¦¿à¦§à¦¾","à¦¦à§‡à§Ÿà¦¾à¦²à§‡ à¦“ à¦Ÿà§‡à¦¬à¦¿à¦²à§‡ à¦¦à§à¦‡à¦­à¦¾à¦¬à§‡à¦‡ à¦®à¦¾à¦¨à¦¿à§Ÿà§‡ à¦¨à§‡à§Ÿ","à§­ à¦•à¦¾à¦²à¦¾à¦° RGB LED light (9wt with 3 mode)","à¦¸à¦¾à¦‡à¦œà¦ƒ- à§ª.à§«à¦‡à¦žà§à¦šà¦¿ à¦ªà¦¾à¦¶ à¦à¦¬à¦‚ à¦‰à¦šà§à¦šà¦¤à¦¾ à§§à§§à¦‡à¦žà§à¦šà¦¿","à§§à¦Ÿà¦¿ à¦¹à§‹à¦²à§à¦¡à¦¾à¦° à¦•à¦¨à¦­à¦¾à¦°à§à¦Ÿà¦¾à¦°","à¦¨à¦°à¦® à¦“ à¦¸à§à¦¨à§à¦¦à¦° lighting effect","à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¨à§‹ à¦“ à¦‰à¦ªà¦¹à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§‹à¦—à§€"]
  },
  {
    id:8,
	stock:false,
	//trending: true,
	//isNew: true,
    name:"à¦¸à§‚à¦°à§à¦¯à¦®à§à¦–à§€ â€” PVC Wall Lamp",
    cat:"à¦“à§Ÿà¦¾à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª",
    price:650,
    discount:25,
    img:"images/wall-lamp-8.webp",
    images:[
      "images/wall-lamp-8.webp",
      "images/wall-lamp-1-2.webp",
      "images/wall-lamp-1-3.webp",
      "images/wall-lamp-1-4.webp",
      "images/wall-lamp-1-5.webp"
    ],
	short:"à¦¸à§‚à¦°à§à¦¯à¦®à§à¦–à§€ à¦«à§à¦²à§‡à¦° à¦‰à¦·à§à¦£ à¦†à¦²à§‹à¦° à¦¡à¦¿à¦œà¦¾à¦‡à¦¨",
    desc:"à¦¸à§‚à¦°à§à¦¯à¦®à§à¦–à§€ à¦«à§à¦²à§‡à¦° à¦‰à¦·à§à¦£ lighting-à¦à¦° à¦¸à¦™à§à¦—à§‡ inspired designà¥¤ à¦˜à¦°à§‡à¦° ambience à¦†à¦°à¦“ premium à¦¦à§‡à¦–à¦¾à¦¤à§‡ à¦à¦¬à¦‚ à¦¬à¦¿à¦¶à§‡à¦· à¦®à§à¦¹à§‚à¦°à§à¦¤à§‡ à¦‰à¦ªà¦¹à¦¾à¦° à¦¦à¦¿à¦¤à§‡ à¦à¦‡ designà¦Ÿà¦¿ à¦¦à¦¾à¦°à§à¦£ à¦à¦•à¦Ÿà¦¿ choiceà¥¤",
    features:["Premium PVC body 2mm","à¦¸à¦¹à¦œà§‡à¦‡ à¦²à¦¾à¦‡à¦Ÿ à¦ªà¦°à¦¿à¦¬à¦°à§à¦¤à¦¨ à¦¸à§à¦¬à§à¦¬à¦¿à¦§à¦¾","à¦¦à§‡à§Ÿà¦¾à¦²à§‡ à¦“ à¦Ÿà§‡à¦¬à¦¿à¦²à§‡ à¦¦à§à¦‡à¦­à¦¾à¦¬à§‡à¦‡ à¦®à¦¾à¦¨à¦¿à§Ÿà§‡ à¦¨à§‡à§Ÿ","à§­ à¦•à¦¾à¦²à¦¾à¦° RGB LED light (9wt with 3 mode)","à¦¸à¦¾à¦‡à¦œà¦ƒ- à§ª.à§«à¦‡à¦žà§à¦šà¦¿ à¦ªà¦¾à¦¶ à¦à¦¬à¦‚ à¦‰à¦šà§à¦šà¦¤à¦¾ à§§à§§à¦‡à¦žà§à¦šà¦¿","à§§à¦Ÿà¦¿ à¦¹à§‹à¦²à§à¦¡à¦¾à¦° à¦•à¦¨à¦­à¦¾à¦°à§à¦Ÿà¦¾à¦°","à¦¨à¦°à¦® à¦“ à¦¸à§à¦¨à§à¦¦à¦° lighting effect","à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¨à§‹ à¦“ à¦‰à¦ªà¦¹à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§‹à¦—à§€"]
  },
  {
    id:9,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"à¦—à§‹à¦²à¦¾à¦ª à¦«à§à¦² â€” PVC Wall Lamp",
    cat:"à¦“à§Ÿà¦¾à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª",
    price:650,
    discount:25,
    img:"images/wall-lamp-9.webp",
    images:[
      "images/wall-lamp-9.webp",
      "images/wall-lamp-1-2.webp",
      "images/wall-lamp-1-3.webp",
      "images/wall-lamp-1-4.webp",
      "images/wall-lamp-1-5.webp"
    ],
	short:"à¦—à§‹à¦²à¦¾à¦ªà§‡à¦° à¦‰à¦·à§à¦£ à¦†à¦²à§‹à¦° à¦¡à¦¿à¦œà¦¾à¦‡à¦¨",
    desc:"à¦‰à¦·à§à¦£ à¦—à§‹à¦²à¦¾à¦ªà§‡à¦° lighting-à¦à¦° à¦¸à¦™à§à¦—à§‡ inspired designà¥¤ à¦˜à¦°à§‡à¦° ambience à¦†à¦°à¦“ premium à¦¦à§‡à¦–à¦¾à¦¤à§‡ à¦à¦¬à¦‚ à¦¬à¦¿à¦¶à§‡à¦· à¦®à§à¦¹à§‚à¦°à§à¦¤à§‡ à¦‰à¦ªà¦¹à¦¾à¦° à¦¦à¦¿à¦¤à§‡ à¦à¦‡ designà¦Ÿà¦¿ à¦¦à¦¾à¦°à§à¦£ à¦à¦•à¦Ÿà¦¿ choiceà¥¤",
    features:["Premium PVC body 2mm","à¦¸à¦¹à¦œà§‡à¦‡ à¦²à¦¾à¦‡à¦Ÿ à¦ªà¦°à¦¿à¦¬à¦°à§à¦¤à¦¨ à¦¸à§à¦¬à§à¦¬à¦¿à¦§à¦¾","à¦¦à§‡à§Ÿà¦¾à¦²à§‡ à¦“ à¦Ÿà§‡à¦¬à¦¿à¦²à§‡ à¦¦à§à¦‡à¦­à¦¾à¦¬à§‡à¦‡ à¦®à¦¾à¦¨à¦¿à§Ÿà§‡ à¦¨à§‡à§Ÿ","à§­ à¦•à¦¾à¦²à¦¾à¦° RGB LED light (9wt with 3 mode)","à¦¸à¦¾à¦‡à¦œà¦ƒ- à§ª.à§«à¦‡à¦žà§à¦šà¦¿ à¦ªà¦¾à¦¶ à¦à¦¬à¦‚ à¦‰à¦šà§à¦šà¦¤à¦¾ à§§à§§à¦‡à¦žà§à¦šà¦¿","à§§à¦Ÿà¦¿ à¦¹à§‹à¦²à§à¦¡à¦¾à¦° à¦•à¦¨à¦­à¦¾à¦°à§à¦Ÿà¦¾à¦°","à¦¨à¦°à¦® à¦“ à¦¸à§à¦¨à§à¦¦à¦° lighting effect","à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¨à§‹ à¦“ à¦‰à¦ªà¦¹à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§‹à¦—à§€"]
  },
  {
    id:10,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"à¦—à§à¦°à¦¾à¦®à§€à¦£ à¦ªà¦°à¦¿à¦¬à§‡à¦¶ â€” PVC Wall Lamp",
    cat:"à¦“à§Ÿà¦¾à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª",
    price:650,
    discount:23,
    img:"images/wall-lamp-10.webp",
    images:[
      "images/wall-lamp-10.webp",
      "images/wall-lamp-10-2.webp",
      "images/wall-lamp-1-2.webp",
      "images/wall-lamp-1-4.webp",
      "images/wall-lamp-1-5.webp"
    ],
	short:"à¦—à§à¦°à¦¾à¦®à§‡à¦° à¦‰à¦·à§à¦£ à¦†à¦²à§‹à¦° à¦›à§‹à¦à§Ÿà¦¾",
    desc:"à¦—à§à¦°à¦¾à¦®à§€à¦£ à¦ªà¦°à¦¿à¦¬à§‡à¦¶à§‡à¦° inspired designà¥¤ à¦˜à¦°à§‡à¦° ambience à¦†à¦°à¦“ premium à¦¦à§‡à¦–à¦¾à¦¤à§‡ à¦à¦¬à¦‚ à¦¬à¦¿à¦¶à§‡à¦· à¦®à§à¦¹à§‚à¦°à§à¦¤à§‡ à¦‰à¦ªà¦¹à¦¾à¦° à¦¦à¦¿à¦¤à§‡ à¦à¦‡ designà¦Ÿà¦¿ à¦¦à¦¾à¦°à§à¦£ à¦à¦•à¦Ÿà¦¿ choiceà¥¤",
    features:["Premium PVC body 2mm","à¦†à¦•à¦°à§à¦·à¦£à§€à§Ÿ design","à¦¸à¦¹à¦œà§‡à¦‡ à¦²à¦¾à¦‡à¦Ÿ à¦ªà¦°à¦¿à¦¬à¦°à§à¦¤à¦¨ à¦¸à§à¦¬à§à¦¬à¦¿à¦§à¦¾","à¦¦à§‡à§Ÿà¦¾à¦²à§‡ à¦“ à¦Ÿà§‡à¦¬à¦¿à¦²à§‡ à¦¦à§à¦‡à¦­à¦¾à¦¬à§‡à¦‡ à¦®à¦¾à¦¨à¦¿à§Ÿà§‡ à¦¨à§‡à§Ÿ","à§­ à¦•à¦¾à¦²à¦¾à¦° RGB LED light (9wt with 3 mode)","à¦¸à¦¾à¦‡à¦œà¦ƒ- à§ª.à§«à¦‡à¦žà§à¦šà¦¿ à¦ªà¦¾à¦¶ à¦à¦¬à¦‚ à¦‰à¦šà§à¦šà¦¤à¦¾ à§§à§§à¦‡à¦žà§à¦šà¦¿","à§§à¦Ÿà¦¿ à¦¹à§‹à¦²à§à¦¡à¦¾à¦° à¦•à¦¨à¦­à¦¾à¦°à§à¦Ÿà¦¾à¦°","à¦¨à¦°à¦® à¦“ à¦¸à§à¦¨à§à¦¦à¦° lighting effect","à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¨à§‹ à¦“ à¦‰à¦ªà¦¹à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§‹à¦—à§€"]
  },
  {
    id:11,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"à¦ªà¦¦à§à¦® à¦«à§à¦² â€” PVC Wall Lamp",
    cat:"à¦“à§Ÿà¦¾à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª",
    price:650,
    discount:25,
    img:"images/wall-lamp-11.webp",
    images:[
      "images/wall-lamp-11.webp",
      "images/wall-lamp-1-2.webp",
      "images/wall-lamp-1-3.webp",
      "images/wall-lamp-1-4.webp",
      "images/wall-lamp-1-5.webp"
    ],
	short:"à¦ªà¦¦à§à¦® à¦«à§à¦²à§‡à¦° à¦‰à¦·à§à¦£ à¦†à¦²à§‹à¦° à¦¡à¦¿à¦œà¦¾à¦‡à¦¨",
    desc:"à¦ªà¦¦à§à¦® à¦«à§à¦²à§‡à¦° à¦‰à¦·à§à¦£ lighting-à¦à¦° à¦¸à¦™à§à¦—à§‡ inspired designà¥¤ à¦˜à¦°à§‡à¦° ambience à¦†à¦°à¦“ premium à¦¦à§‡à¦–à¦¾à¦¤à§‡ à¦à¦¬à¦‚ à¦¬à¦¿à¦¶à§‡à¦· à¦®à§à¦¹à§‚à¦°à§à¦¤à§‡ à¦‰à¦ªà¦¹à¦¾à¦° à¦¦à¦¿à¦¤à§‡ à¦à¦‡ designà¦Ÿà¦¿ à¦¦à¦¾à¦°à§à¦£ à¦à¦•à¦Ÿà¦¿ choiceà¥¤",
    features:["Premium PVC body 2mm","à¦¸à¦¹à¦œà§‡à¦‡ à¦²à¦¾à¦‡à¦Ÿ à¦ªà¦°à¦¿à¦¬à¦°à§à¦¤à¦¨ à¦¸à§à¦¬à§à¦¬à¦¿à¦§à¦¾","à¦¦à§‡à§Ÿà¦¾à¦²à§‡ à¦“ à¦Ÿà§‡à¦¬à¦¿à¦²à§‡ à¦¦à§à¦‡à¦­à¦¾à¦¬à§‡à¦‡ à¦®à¦¾à¦¨à¦¿à§Ÿà§‡ à¦¨à§‡à§Ÿ","à§­ à¦•à¦¾à¦²à¦¾à¦° RGB LED light (9wt with 3 mode)","à¦¸à¦¾à¦‡à¦œà¦ƒ- à§ª.à§«à¦‡à¦žà§à¦šà¦¿ à¦ªà¦¾à¦¶ à¦à¦¬à¦‚ à¦‰à¦šà§à¦šà¦¤à¦¾ à§§à§§à¦‡à¦žà§à¦šà¦¿","à§§à¦Ÿà¦¿ à¦¹à§‹à¦²à§à¦¡à¦¾à¦° à¦•à¦¨à¦­à¦¾à¦°à§à¦Ÿà¦¾à¦°","à¦¨à¦°à¦® à¦“ à¦¸à§à¦¨à§à¦¦à¦° lighting effect","à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¨à§‹ à¦“ à¦‰à¦ªà¦¹à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§‹à¦—à§€"]
  },
  {
    id:12,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"à¦†à¦²à¦¹à¦¾à¦®à¦¦à§à¦²à¦¿à¦²à§à¦²à¦¾à¦¹-à§¨ â€” PVC Wall Lamp",
    cat:"à¦“à§Ÿà¦¾à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª",
    price:650,
    discount:25,
    img:"images/wall-lamp-12.webp",
    images:[
      "images/wall-lamp-12.webp",
      "images/wall-lamp-1-2.webp",
      "images/wall-lamp-1-3.webp",
      "images/wall-lamp-1-4.webp",
      "images/wall-lamp-1-5.webp"
    ],
	short:"à¦‡à¦¸à¦²à¦¾à¦®à¦¿à¦• à¦•à§à¦¯à¦¾à¦²à¦¿à¦—à§à¦°à¦¾à¦«à¦¿à¦• à¦‰à¦·à§à¦£ à¦†à¦²à§‹",
    desc:"à¦†à¦²à¦¹à¦¾à¦®à¦¦à§à¦²à¦¿à¦²à§à¦²à¦¾à¦¹ à¦²à§‡à¦–à¦¾ à¦‰à¦·à§à¦£ lighting-à¦à¦° à¦¸à¦™à§à¦—à§‡ Islamic calligraphy inspired designà¥¤ à¦˜à¦°à§‡à¦° ambience à¦†à¦°à¦“ premium à¦¦à§‡à¦–à¦¾à¦¤à§‡ à¦à¦¬à¦‚ à¦¬à¦¿à¦¶à§‡à¦· à¦®à§à¦¹à§‚à¦°à§à¦¤à§‡ à¦‰à¦ªà¦¹à¦¾à¦° à¦¦à¦¿à¦¤à§‡ à¦à¦‡ designà¦Ÿà¦¿ à¦¦à¦¾à¦°à§à¦£ à¦à¦•à¦Ÿà¦¿ choiceà¥¤",
    features:["Premium PVC body 2mm","à¦†à¦•à¦°à§à¦·à¦£à§€à§Ÿ Islamic Calligraphy","à¦¸à¦¹à¦œà§‡à¦‡ à¦²à¦¾à¦‡à¦Ÿ à¦ªà¦°à¦¿à¦¬à¦°à§à¦¤à¦¨ à¦¸à§à¦¬à§à¦¬à¦¿à¦§à¦¾","à¦¦à§‡à§Ÿà¦¾à¦²à§‡ à¦“ à¦Ÿà§‡à¦¬à¦¿à¦²à§‡ à¦¦à§à¦‡à¦­à¦¾à¦¬à§‡à¦‡ à¦®à¦¾à¦¨à¦¿à§Ÿà§‡ à¦¨à§‡à§Ÿ","à§­ à¦•à¦¾à¦²à¦¾à¦° RGB LED light (9wt with 3 mode)","à¦¸à¦¾à¦‡à¦œà¦ƒ- à§ª.à§«à¦‡à¦žà§à¦šà¦¿ à¦ªà¦¾à¦¶ à¦à¦¬à¦‚ à¦‰à¦šà§à¦šà¦¤à¦¾ à§§à§§à¦‡à¦žà§à¦šà¦¿","à§§à¦Ÿà¦¿ à¦¹à§‹à¦²à§à¦¡à¦¾à¦° à¦•à¦¨à¦­à¦¾à¦°à§à¦Ÿà¦¾à¦°","à¦¨à¦°à¦® à¦“ à¦¸à§à¦¨à§à¦¦à¦° lighting effect","à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¨à§‹ à¦“ à¦‰à¦ªà¦¹à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§‹à¦—à§€"]
  },
  {
    id:13,
	stock:false,
	//trending: true,
	//isNew: true,
    name:"à¦Ÿà¦¿à¦‰à¦²à¦¿à¦ª à¦«à§à¦² â€” PVC Wall Lamp",
    cat:"à¦“à§Ÿà¦¾à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª",
    price:650,
    discount:25,
    img:"images/wall-lamp-13.webp",
    images:[
      "images/wall-lamp-13.webp",
      "images/wall-lamp-1-2.webp",
      "images/wall-lamp-1-3.webp",
      "images/wall-lamp-1-4.webp",
      "images/wall-lamp-1-5.webp"
    ],
	short:"à¦Ÿà¦¿à¦‰à¦²à¦¿à¦ª à¦«à§à¦²à§‡à¦° à¦‰à¦·à§à¦£ à¦†à¦²à§‹",
    desc:"à¦Ÿà¦¿à¦‰à¦²à¦¿à¦ª à¦«à§à¦²à§‡à¦° à¦‰à¦·à§à¦£ à¦—à§‹à¦²à§à¦¡à§‡à¦¨ lighting-à¦à¦° à¦¸à¦™à§à¦—à§‡ inspired designà¥¤ à¦˜à¦°à§‡à¦° ambience à¦†à¦°à¦“ premium à¦¦à§‡à¦–à¦¾à¦¤à§‡ à¦à¦¬à¦‚ à¦¬à¦¿à¦¶à§‡à¦· à¦®à§à¦¹à§‚à¦°à§à¦¤à§‡ à¦‰à¦ªà¦¹à¦¾à¦° à¦¦à¦¿à¦¤à§‡ à¦à¦‡ designà¦Ÿà¦¿ à¦¦à¦¾à¦°à§à¦£ à¦à¦•à¦Ÿà¦¿ choiceà¥¤",
    features:["Premium PVC body 2mm","à¦¸à¦¹à¦œà§‡à¦‡ à¦²à¦¾à¦‡à¦Ÿ à¦ªà¦°à¦¿à¦¬à¦°à§à¦¤à¦¨ à¦¸à§à¦¬à§à¦¬à¦¿à¦§à¦¾","à¦¦à§‡à§Ÿà¦¾à¦²à§‡ à¦“ à¦Ÿà§‡à¦¬à¦¿à¦²à§‡ à¦¦à§à¦‡à¦­à¦¾à¦¬à§‡à¦‡ à¦®à¦¾à¦¨à¦¿à§Ÿà§‡ à¦¨à§‡à§Ÿ","à§­ à¦•à¦¾à¦²à¦¾à¦° RGB LED light (9wt with 3 mode)","à¦¸à¦¾à¦‡à¦œà¦ƒ- à§ª.à§«à¦‡à¦žà§à¦šà¦¿ à¦ªà¦¾à¦¶ à¦à¦¬à¦‚ à¦‰à¦šà§à¦šà¦¤à¦¾ à§§à§§à¦‡à¦žà§à¦šà¦¿","à§§à¦Ÿà¦¿ à¦¹à§‹à¦²à§à¦¡à¦¾à¦° à¦•à¦¨à¦­à¦¾à¦°à§à¦Ÿà¦¾à¦°","à¦¨à¦°à¦® à¦“ à¦¸à§à¦¨à§à¦¦à¦° lighting effect","à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¨à§‹ à¦“ à¦‰à¦ªà¦¹à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§‹à¦—à§€"]
  },
  {
    id:14,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"à¦†à¦²à¦¹à¦¾à¦®à¦¦à§à¦²à¦¿à¦²à§à¦²à¦¾à¦¹-à§© â€” PVC Wall Lamp",
    cat:"à¦“à§Ÿà¦¾à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª",
    price:650,
    discount:25,
    img:"images/wall-lamp-14.webp",
    images:[
      "images/wall-lamp-14.webp",
      "images/wall-lamp-1-2.webp",
      "images/wall-lamp-1-3.webp",
      "images/wall-lamp-1-4.webp",
      "images/wall-lamp-1-5.webp"
    ],
	short:"à¦†à¦²à¦¹à¦¾à¦®à¦¦à§à¦²à¦¿à¦²à§à¦²à¦¾à¦¹ à¦²à§‡à¦–à¦¾ à¦•à§à¦¯à¦¾à¦²à¦¿à¦—à§à¦°à¦¾à¦«à¦¿à¦• à¦¡à¦¿à¦œà¦¾à¦‡à¦¨",
    desc:"à¦†à¦²à¦¹à¦¾à¦®à¦¦à§à¦²à¦¿à¦²à§à¦²à¦¾à¦¹ à¦²à§‡à¦–à¦¾ à¦‰à¦·à§à¦£ lighting-à¦à¦° à¦¸à¦™à§à¦—à§‡ Islamic calligraphy inspired designà¥¤ à¦˜à¦°à§‡à¦° ambience à¦†à¦°à¦“ premium à¦¦à§‡à¦–à¦¾à¦¤à§‡ à¦à¦¬à¦‚ à¦¬à¦¿à¦¶à§‡à¦· à¦®à§à¦¹à§‚à¦°à§à¦¤à§‡ à¦‰à¦ªà¦¹à¦¾à¦° à¦¦à¦¿à¦¤à§‡ à¦à¦‡ designà¦Ÿà¦¿ à¦¦à¦¾à¦°à§à¦£ à¦à¦•à¦Ÿà¦¿ choiceà¥¤",
    features:["Premium PVC body 2mm","à¦†à¦•à¦°à§à¦·à¦£à§€à§Ÿ Islamic Calligraphy","à¦¸à¦¹à¦œà§‡à¦‡ à¦²à¦¾à¦‡à¦Ÿ à¦ªà¦°à¦¿à¦¬à¦°à§à¦¤à¦¨ à¦¸à§à¦¬à§à¦¬à¦¿à¦§à¦¾","à¦¦à§‡à§Ÿà¦¾à¦²à§‡ à¦“ à¦Ÿà§‡à¦¬à¦¿à¦²à§‡ à¦¦à§à¦‡à¦­à¦¾à¦¬à§‡à¦‡ à¦®à¦¾à¦¨à¦¿à§Ÿà§‡ à¦¨à§‡à§Ÿ","à§­ à¦•à¦¾à¦²à¦¾à¦° RGB LED light (9wt with 3 mode)","à¦¸à¦¾à¦‡à¦œà¦ƒ- à§ª.à§«à¦‡à¦žà§à¦šà¦¿ à¦ªà¦¾à¦¶ à¦à¦¬à¦‚ à¦‰à¦šà§à¦šà¦¤à¦¾ à§§à§§à¦‡à¦žà§à¦šà¦¿","à§§à¦Ÿà¦¿ à¦¹à§‹à¦²à§à¦¡à¦¾à¦° à¦•à¦¨à¦­à¦¾à¦°à§à¦Ÿà¦¾à¦°","à¦¨à¦°à¦® à¦“ à¦¸à§à¦¨à§à¦¦à¦° lighting effect","à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¨à§‹ à¦“ à¦‰à¦ªà¦¹à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§‹à¦—à§€"]
  },
  {
    id:15,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"à¦®à§à¦¹à¦¾à¦®à§à¦®à¦¦ ï·º â€” PVC Wall Lamp Design 2",
    cat:"à¦“à§Ÿà¦¾à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª",
    price:650,
    discount:25,
    img:"images/wall-lamp-15.webp",
    images:[
      "images/wall-lamp-15.webp",
      "images/wall-lamp-1-2.webp",
      "images/wall-lamp-1-3.webp",
      "images/wall-lamp-1-4.webp",
      "images/wall-lamp-1-5.webp"
    ],
	short:"à¦®à§à¦¹à¦¾à¦®à§à¦®à¦¦ ï·º à¦²à§‡à¦–à¦¾ à¦•à§à¦¯à¦¾à¦²à¦¿à¦—à§à¦°à¦¾à¦«à¦¿à¦• à¦¡à¦¿à¦œà¦¾à¦‡à¦¨",
    desc:"à¦®à§à¦¹à¦¾à¦®à§à¦®à¦¦ ï·º à¦²à§‡à¦–à¦¾ à¦‰à¦·à§à¦£ lighting-à¦à¦° à¦¸à¦™à§à¦—à§‡ Islamic calligraphy inspired designà¥¤ à¦˜à¦°à§‡à¦° ambience à¦†à¦°à¦“ premium à¦¦à§‡à¦–à¦¾à¦¤à§‡ à¦à¦¬à¦‚ à¦¬à¦¿à¦¶à§‡à¦· à¦®à§à¦¹à§‚à¦°à§à¦¤à§‡ à¦‰à¦ªà¦¹à¦¾à¦° à¦¦à¦¿à¦¤à§‡ à¦à¦‡ designà¦Ÿà¦¿ à¦¦à¦¾à¦°à§à¦£ à¦à¦•à¦Ÿà¦¿ choiceà¥¤",
    features:["Premium PVC body 2mm","à¦†à¦•à¦°à§à¦·à¦£à§€à§Ÿ Islamic Calligraphy","à¦¸à¦¹à¦œà§‡à¦‡ à¦²à¦¾à¦‡à¦Ÿ à¦ªà¦°à¦¿à¦¬à¦°à§à¦¤à¦¨ à¦¸à§à¦¬à§à¦¬à¦¿à¦§à¦¾","à¦¦à§‡à§Ÿà¦¾à¦²à§‡ à¦“ à¦Ÿà§‡à¦¬à¦¿à¦²à§‡ à¦¦à§à¦‡à¦­à¦¾à¦¬à§‡à¦‡ à¦®à¦¾à¦¨à¦¿à§Ÿà§‡ à¦¨à§‡à§Ÿ","à§­ à¦•à¦¾à¦²à¦¾à¦° RGB LED light (9wt with 3 mode)","à¦¸à¦¾à¦‡à¦œà¦ƒ- à§©à¦‡à¦žà§à¦šà¦¿ à¦ªà¦¾à¦¶ à¦à¦¬à¦‚ à¦‰à¦šà§à¦šà¦¤à¦¾ à§§à§¦à¦‡à¦žà§à¦šà¦¿","à§§à¦Ÿà¦¿ à¦¹à§‹à¦²à§à¦¡à¦¾à¦° à¦•à¦¨à¦­à¦¾à¦°à§à¦Ÿà¦¾à¦°","à¦¨à¦°à¦® à¦“ à¦¸à§à¦¨à§à¦¦à¦° lighting effect","à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¨à§‹ à¦“ à¦‰à¦ªà¦¹à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§‹à¦—à§€"]
  },
  {
    id:16,
	stock:false,
	//trending: true,
	//isNew: true,
    name:"à¦¬à¦¾à¦¶-à¦ªà¦¾à¦¤à¦¾ â€” PVC Wall Lamp",
    cat:"à¦“à§Ÿà¦¾à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª",
    price:650,
    discount:25,
    img:"images/wall-lamp-16.webp",
    images:[
      "images/wall-lamp-16.webp",
      "images/wall-lamp-1-2.webp",
      "images/wall-lamp-1-3.webp",
      "images/wall-lamp-1-4.webp",
      "images/wall-lamp-1-5.webp"
    ],
	short:"à¦¬à¦¾à¦¶-à¦ªà¦¾à¦¤à¦¾ à¦¡à¦¿à¦œà¦¾à¦‡à¦¨",
    desc:"à¦¬à¦¾à¦¶-à¦ªà¦¾à¦¤à¦¾à¦° à¦‰à¦·à§à¦£ lighting-à¦à¦° à¦¸à¦™à§à¦—à§‡ inspired designà¥¤ à¦˜à¦°à§‡à¦° ambience à¦†à¦°à¦“ premium à¦¦à§‡à¦–à¦¾à¦¤à§‡ à¦à¦¬à¦‚ à¦¬à¦¿à¦¶à§‡à¦· à¦®à§à¦¹à§‚à¦°à§à¦¤à§‡ à¦‰à¦ªà¦¹à¦¾à¦° à¦¦à¦¿à¦¤à§‡ à¦à¦‡ designà¦Ÿà¦¿ à¦¦à¦¾à¦°à§à¦£ à¦à¦•à¦Ÿà¦¿ choiceà¥¤",
    features:["Premium PVC body 2mm","à¦¸à¦¹à¦œà§‡à¦‡ à¦²à¦¾à¦‡à¦Ÿ à¦ªà¦°à¦¿à¦¬à¦°à§à¦¤à¦¨ à¦¸à§à¦¬à§à¦¬à¦¿à¦§à¦¾","à¦¦à§‡à§Ÿà¦¾à¦²à§‡ à¦“ à¦Ÿà§‡à¦¬à¦¿à¦²à§‡ à¦¦à§à¦‡à¦­à¦¾à¦¬à§‡à¦‡ à¦®à¦¾à¦¨à¦¿à§Ÿà§‡ à¦¨à§‡à§Ÿ","à§­ à¦•à¦¾à¦²à¦¾à¦° RGB LED light (9wt with 3 mode)","à¦¸à¦¾à¦‡à¦œà¦ƒ- à§©à¦‡à¦žà§à¦šà¦¿ à¦ªà¦¾à¦¶ à¦à¦¬à¦‚ à¦‰à¦šà§à¦šà¦¤à¦¾ à§§à§¦à¦‡à¦žà§à¦šà¦¿","à§§à¦Ÿà¦¿ à¦¹à§‹à¦²à§à¦¡à¦¾à¦° à¦•à¦¨à¦­à¦¾à¦°à§à¦Ÿà¦¾à¦°","à¦¨à¦°à¦® à¦“ à¦¸à§à¦¨à§à¦¦à¦° lighting effect","à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¨à§‹ à¦“ à¦‰à¦ªà¦¹à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§‹à¦—à§€"]
  },
  {
    id:17,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"à¦†à¦²à§à¦²à¦¾à¦¹à§ â€” PVC Wall Lamp Design 2",
    cat:"à¦“à§Ÿà¦¾à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª",
    price:650,
    discount:25,
    img:"images/wall-lamp-17.webp",
    images:[
      "images/wall-lamp-17.webp",
      "images/wall-lamp-1-2.webp",
      "images/wall-lamp-1-3.webp",
      "images/wall-lamp-1-4.webp",
      "images/wall-lamp-1-5.webp"
    ],
	short:"à¦†à¦²à§à¦²à¦¾à¦¹à§ à¦²à§‡à¦–à¦¾ à¦•à§à¦¯à¦¾à¦²à¦¿à¦—à§à¦°à¦¾à¦«à¦¿à¦• à¦¡à¦¿à¦œà¦¾à¦‡à¦¨",
    desc:"à¦†à¦²à§à¦²à¦¾à¦¹à§ à¦†à¦²à§‹à¦° à¦†à¦•à¦°à§à¦·à¦£à§€à§Ÿ presentation-à¦à¦° à¦¸à¦™à§à¦—à§‡ Islamic calligraphy inspired designà¥¤ à¦˜à¦°à§‡à¦° ambience à¦†à¦°à¦“ premium à¦¦à§‡à¦–à¦¾à¦¤à§‡ à¦à¦¬à¦‚ à¦¬à¦¿à¦¶à§‡à¦· à¦®à§à¦¹à§‚à¦°à§à¦¤à§‡ à¦‰à¦ªà¦¹à¦¾à¦° à¦¦à¦¿à¦¤à§‡ à¦à¦‡ designà¦Ÿà¦¿ à¦¦à¦¾à¦°à§à¦£ à¦à¦•à¦Ÿà¦¿ choiceà¥¤",
    features:["Premium PVC body 2mm","à¦†à¦•à¦°à§à¦·à¦£à§€à§Ÿ Islamic Calligraphy","à¦¸à¦¹à¦œà§‡à¦‡ à¦²à¦¾à¦‡à¦Ÿ à¦ªà¦°à¦¿à¦¬à¦°à§à¦¤à¦¨ à¦¸à§à¦¬à§à¦¬à¦¿à¦§à¦¾","à¦¦à§‡à§Ÿà¦¾à¦²à§‡ à¦“ à¦Ÿà§‡à¦¬à¦¿à¦²à§‡ à¦¦à§à¦‡à¦­à¦¾à¦¬à§‡à¦‡ à¦®à¦¾à¦¨à¦¿à§Ÿà§‡ à¦¨à§‡à§Ÿ","à§­ à¦•à¦¾à¦²à¦¾à¦° RGB LED light (9wt with 3 mode)","à¦¸à¦¾à¦‡à¦œà¦ƒ- à§©à¦‡à¦žà§à¦šà¦¿ à¦ªà¦¾à¦¶ à¦à¦¬à¦‚ à¦‰à¦šà§à¦šà¦¤à¦¾ à§§à§¦à¦‡à¦žà§à¦šà¦¿","à§§à¦Ÿà¦¿ à¦¹à§‹à¦²à§à¦¡à¦¾à¦° à¦•à¦¨à¦­à¦¾à¦°à§à¦Ÿà¦¾à¦°","à¦¨à¦°à¦® à¦“ à¦¸à§à¦¨à§à¦¦à¦° lighting effect","à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¨à§‹ à¦“ à¦‰à¦ªà¦¹à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§‹à¦—à§€"]
  },
  {
    id:18,
	//stock:false,
	//trending: true,
	isNew: true,
    name:"Couple Name Design (Custom) â€” PVC Wall Lamp",
    cat:"à¦“à§Ÿà¦¾à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª",
    price:650,
    discount:22,
    img:"images/wall-lamp-18.webp",
    images:[
      "images/wall-lamp-18.webp",
      "images/wall-lamp-1-2.webp",
      "images/wall-lamp-1-3.webp",
      "images/wall-lamp-1-4.webp",
      "images/wall-lamp-1-5.webp"
    ],
	short:"à¦ªà§à¦°à¦¿à¦®à¦¿à§Ÿà¦¾à¦® à¦•à¦¾à¦ªà¦² à¦¨à§‡à¦® à¦•à¦¾à¦¸à§à¦Ÿà¦® à¦²à§à¦¯à¦¾à¦®à§à¦ª",
    desc:"à¦†à¦ªà¦¨à¦¾à¦° à¦ªà§à¦°à¦¿à§Ÿ à¦®à¦¾à¦¨à§à¦·à¦Ÿà¦¿à¦° à¦¨à¦¾à¦®à¦•à§‡ à¦†à¦°à¦“ à¦¬à¦¿à¦¶à§‡à¦· à¦“ à¦¸à§à¦®à¦°à¦£à§€à§Ÿ à¦•à¦°à§‡ à¦¤à§à¦²à¦¤à§‡ à¦¤à§ˆà¦°à¦¿ Premium Couple Name Decorative Lampà¥¤ à¦¬à¦¿à¦¬à¦¾à¦¹à¦¬à¦¾à¦°à§à¦·à¦¿à¦•à§€, à¦œà¦¨à§à¦®à¦¦à¦¿à¦¨, à¦¬à¦¿à§Ÿà§‡, à¦­à¦¾à¦²à§‹à¦¬à¦¾à¦¸à¦¾à¦° à¦¬à¦¿à¦¶à§‡à¦· à¦¦à¦¿à¦¨ à¦¬à¦¾ à¦ªà§à¦°à¦¿à§Ÿà¦œà¦¨à¦•à§‡ à¦‰à¦ªà¦¹à¦¾à¦° à¦¦à§‡à¦“à§Ÿà¦¾à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§à¦•à§à¦¤à¥¤ à¦²à§à¦¯à¦¾à¦®à§à¦ªà¦Ÿà¦¿à¦° à¦•à¦¾à¦²à§‹ à¦¬à¦¡à¦¿à¦° à¦“à¦ªà¦° à¦°à§‹à¦®à¦¾à¦¨à§à¦Ÿà¦¿à¦• à¦•à¦¾à¦ªà¦² à¦¡à¦¿à¦œà¦¾à¦‡à¦¨, à¦¹à¦¾à¦°à§à¦Ÿ à¦“ à¦«à§à¦²à§‡à¦° à¦¨à¦¾à¦¨à§à¦¦à¦¨à¦¿à¦• à¦•à¦¾à¦Ÿà¦¿à¦‚ à¦à¦¬à¦‚ â€œà¦†à¦ªà¦¨à¦¾à¦¦à§‡à¦°â€ à¦¨à¦¾à¦®à§‡à¦° à¦†à¦²à§‹à¦•à¦¿à¦¤ à¦¡à¦¿à¦œà¦¾à¦‡à¦¨ à¦à¦•à§‡ à¦•à¦°à§‡ à¦¤à§à¦²à¦¬à§‡ à¦…à¦¸à¦¾à¦§à¦¾à¦°à¦£ à¦à¦•à¦Ÿà¦¿ à¦•à¦¾à¦¸à§à¦Ÿà¦® à¦¡à§‡à¦•à§‹à¦°à§‡à¦¶à¦¨ à¦ªà¦¿à¦¸à¥¤ à¦†à¦²à§‹ à¦œà§à¦¬à¦¾à¦²à¦¾à¦²à§‡ à¦ªà§à¦°à§‹ à¦¡à¦¿à¦œà¦¾à¦‡à¦¨à¦Ÿà¦¿ à¦‰à¦·à§à¦£ à¦…à§à¦¯à¦¾à¦®à§à¦¬à¦¾à¦° à¦†à¦²à§‹à§Ÿ à¦¸à§à¦¨à§à¦¦à¦°à¦­à¦¾à¦¬à§‡ à¦«à§à¦Ÿà§‡ à¦“à¦ à§‡à¥¤",
    features:["à¦•à¦¾à¦ªà¦² à¦¥à¦¿à¦®à§‡à¦° à¦†à¦•à¦°à§à¦·à¦£à§€à§Ÿ à¦¡à¦¿à¦œà¦¾à¦‡à¦¨","à¦¦à§à¦‡à¦œà¦¨à§‡à¦° à¦¨à¦¾à¦® à¦•à¦¾à¦¸à§à¦Ÿà¦®à¦¾à¦‡à¦œ à¦•à¦°à¦¾à¦° à¦¸à§à¦¬à¦¿à¦§à¦¾","à¦¸à¦¹à¦œà§‡à¦‡ à¦²à¦¾à¦‡à¦Ÿ à¦ªà¦°à¦¿à¦¬à¦°à§à¦¤à¦¨ à¦¸à§à¦¬à§à¦¬à¦¿à¦§à¦¾","à¦¦à§‡à§Ÿà¦¾à¦²à§‡ à¦“ à¦Ÿà§‡à¦¬à¦¿à¦²à§‡ à¦¦à§à¦‡à¦­à¦¾à¦¬à§‡à¦‡ à¦®à¦¾à¦¨à¦¿à§Ÿà§‡ à¦¨à§‡à§Ÿ","à§­ à¦•à¦¾à¦²à¦¾à¦° RGB LED light (9wt with 3 mode)","à¦¸à¦¾à¦‡à¦œà¦ƒ- à§©à¦‡à¦žà§à¦šà¦¿ à¦ªà¦¾à¦¶ à¦à¦¬à¦‚ à¦‰à¦šà§à¦šà¦¤à¦¾ à§§à§¦à¦‡à¦žà§à¦šà¦¿","à¦†à¦²à§‹ à¦œà§à¦¬à¦¾à¦²à¦¾à¦²à§‡ à¦¨à¦¾à¦® à¦“ à¦¡à¦¿à¦œà¦¾à¦‡à¦¨ à¦¸à§à¦¨à§à¦¦à¦°à¦­à¦¾à¦¬à§‡ à¦†à¦²à§‹à¦•à¦¿à¦¤ à¦¹à§Ÿ","à¦¨à¦°à¦® à¦“ à¦¸à§à¦¨à§à¦¦à¦° lighting effect","à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¨à§‹ à¦“ à¦‰à¦ªà¦¹à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§‹à¦—à§€","à¦à¦•à¦Ÿà¦¿ à¦²à§à¦¯à¦¾à¦®à§à¦ª, à¦¦à§à¦Ÿà¦¿ à¦¨à¦¾à¦®â€”à¦†à¦° à¦…à¦¸à¦‚à¦–à§à¦¯ à¦¸à§à¦¨à§à¦¦à¦° à¦¸à§à¦®à§ƒà¦¤à¦¿à¥¤"]
  },
  {
    id:19,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"à¦¸à§à¦¬à¦¹à¦¾à¦¨-à¦†à¦²à§à¦²à¦¾à¦¹ PVC à¦Ÿà§‡à¦¬à¦¿à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª â€” Black & Silver",
    cat:"à¦Ÿà§‡à¦¬à¦¿à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª",
    price:720,
    discount:17,
    img:"images/table-lamp-1.webp",
    images:[
      "images/table-lamp-1.webp",
      "images/table-lamp-1-2.webp",
      "images/table-lamp-1-3.webp",
      "images/table-lamp-1-4.webp",
      "images/table-lamp-1-5.webp"
    ],
    short:"à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¤à§‡ à¦‡à¦¸à¦²à¦¾à¦®à¦¿à¦• à¦†à¦²à§‹à¦° à¦¡à¦¿à¦œà¦¾à¦‡à¦¨",
    desc:"à¦‰à¦·à§à¦£ à¦—à§‹à¦²à§à¦¡à§‡à¦¨ lighting-à¦à¦° à¦¸à¦™à§à¦—à§‡ Islamic calligraphy inspired designà¥¤ à¦˜à¦°à§‡à¦° ambience à¦†à¦°à¦“ premium à¦¦à§‡à¦–à¦¾à¦¤à§‡ à¦à¦¬à¦‚ à¦¬à¦¿à¦¶à§‡à¦· à¦®à§à¦¹à§‚à¦°à§à¦¤à§‡ à¦‰à¦ªà¦¹à¦¾à¦° à¦¦à¦¿à¦¤à§‡ à¦à¦‡ designà¦Ÿà¦¿ à¦¦à¦¾à¦°à§à¦£ à¦à¦•à¦Ÿà¦¿ choiceà¥¤",
    features:["Premium PVC body 2mm","à¦†à¦•à¦°à§à¦·à¦£à§€à§Ÿ Islamic Calligraphy","à¦¸à¦¹à¦œà§‡à¦‡ à¦²à¦¾à¦‡à¦Ÿ à¦ªà¦°à¦¿à¦¬à¦°à§à¦¤à¦¨ à¦¸à§à¦¬à§à¦¬à¦¿à¦§à¦¾","à§­ à¦•à¦¾à¦²à¦¾à¦° RGB LED light (9wt with 3 mode)","à¦¸à¦¾à¦‡à¦œà¦ƒ- à§ª.à§«à¦‡à¦žà§à¦šà¦¿ à¦ªà¦¾à¦¶ à¦à¦¬à¦‚ à¦‰à¦šà§à¦šà¦¤à¦¾ à§§à§§à¦‡à¦žà§à¦šà¦¿","à§§à¦Ÿà¦¿ à¦¹à§‹à¦²à§à¦¡à¦¾à¦° à¦•à¦¨à¦­à¦¾à¦°à§à¦Ÿà¦¾à¦°","à¦¨à¦°à¦® à¦“ à¦¸à§à¦¨à§à¦¦à¦° lighting effect","à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¨à§‹ à¦“ à¦‰à¦ªà¦¹à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§‹à¦—à§€"]
  },
  {
    id:20,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"à¦†à¦²à¦¹à¦¾à¦®à¦¦à§à¦²à¦¿à¦²à§à¦²à¦¾à¦¹ PVC à¦Ÿà§‡à¦¬à¦¿à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª â€” Black & Silver",
    cat:"à¦Ÿà§‡à¦¬à¦¿à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª",
    price:720,
    discount:17,
    img:"images/table-lamp-2.webp",
    images:[
      "images/table-lamp-2.webp",
      "images/table-lamp-1-2.webp",
      "images/table-lamp-1-3.webp",
      "images/table-lamp-1-4.webp",
      "images/table-lamp-1-5.webp"
    ],
    short:"à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¤à§‡ à¦‡à¦¸à¦²à¦¾à¦®à¦¿à¦• à¦†à¦²à§‹à¦° à¦¡à¦¿à¦œà¦¾à¦‡à¦¨",
    desc:"à¦‰à¦·à§à¦£ à¦—à§‹à¦²à§à¦¡à§‡à¦¨ lighting-à¦à¦° à¦¸à¦™à§à¦—à§‡ Islamic calligraphy inspired designà¥¤ à¦˜à¦°à§‡à¦° ambience à¦†à¦°à¦“ premium à¦¦à§‡à¦–à¦¾à¦¤à§‡ à¦à¦¬à¦‚ à¦¬à¦¿à¦¶à§‡à¦· à¦®à§à¦¹à§‚à¦°à§à¦¤à§‡ à¦‰à¦ªà¦¹à¦¾à¦° à¦¦à¦¿à¦¤à§‡ à¦à¦‡ designà¦Ÿà¦¿ à¦¦à¦¾à¦°à§à¦£ à¦à¦•à¦Ÿà¦¿ choiceà¥¤",
    features:["Premium PVC body 2mm","à¦†à¦•à¦°à§à¦·à¦£à§€à§Ÿ Islamic Calligraphy","à¦¸à¦¹à¦œà§‡à¦‡ à¦²à¦¾à¦‡à¦Ÿ à¦ªà¦°à¦¿à¦¬à¦°à§à¦¤à¦¨ à¦¸à§à¦¬à§à¦¬à¦¿à¦§à¦¾","à§­ à¦•à¦¾à¦²à¦¾à¦° RGB LED light (9wt with 3 mode)","à¦¸à¦¾à¦‡à¦œà¦ƒ- à§ª.à§«à¦‡à¦žà§à¦šà¦¿ à¦ªà¦¾à¦¶ à¦à¦¬à¦‚ à¦‰à¦šà§à¦šà¦¤à¦¾ à§§à§§à¦‡à¦žà§à¦šà¦¿","à§§à¦Ÿà¦¿ à¦¹à§‹à¦²à§à¦¡à¦¾à¦° à¦•à¦¨à¦­à¦¾à¦°à§à¦Ÿà¦¾à¦°","à¦¨à¦°à¦® à¦“ à¦¸à§à¦¨à§à¦¦à¦° lighting effect","à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¨à§‹ à¦“ à¦‰à¦ªà¦¹à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§‹à¦—à§€"]
  },
  {
    id:21,
	//stock:false,
	trending: true,
	//isNew: true,
    name:"à¦¸à§‚à¦°à§à¦¯à¦®à§à¦–à§€ à¦«à§à¦² PVC à¦Ÿà§‡à¦¬à¦¿à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª â€” Black & Silver",
    cat:"à¦Ÿà§‡à¦¬à¦¿à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª",
    price:720,
    discount:18,
    img:"images/table-lamp-3.webp",
    images:[
      "images/table-lamp-3.webp",
      "images/table-lamp-3-2.webp",
      "images/table-lamp-3-3.webp",
      "images/table-lamp-3-4.webp",
      "images/table-lamp-3-5.webp"
    ],
    short:"à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¤à§‡ à¦¸à§‚à¦°à§à¦¯à¦®à§à¦–à§€ à¦«à§à¦²à§‡à¦° à¦¡à¦¿à¦œà¦¾à¦‡à¦¨",
    desc:"à¦‰à¦·à§à¦£ à¦—à§‹à¦²à§à¦¡à§‡à¦¨ lighting-à¦à¦° à¦¸à¦™à§à¦—à§‡ à¦¸à§‚à¦°à§à¦¯à¦®à§à¦–à§€ à¦«à§à¦²à§‡à¦° à¦¡à¦¿à¦œà¦¾à¦‡à¦¨à¥¤ à¦˜à¦°à§‡à¦° ambience à¦†à¦°à¦“ premium à¦¦à§‡à¦–à¦¾à¦¤à§‡ à¦à¦¬à¦‚ à¦¬à¦¿à¦¶à§‡à¦· à¦®à§à¦¹à§‚à¦°à§à¦¤à§‡ à¦‰à¦ªà¦¹à¦¾à¦° à¦¦à¦¿à¦¤à§‡ à¦à¦‡ designà¦Ÿà¦¿ à¦¦à¦¾à¦°à§à¦£ à¦à¦•à¦Ÿà¦¿ choiceà¥¤",
    features:["Premium PVC body 2mm","à¦¸à¦¹à¦œà§‡à¦‡ à¦²à¦¾à¦‡à¦Ÿ à¦ªà¦°à¦¿à¦¬à¦°à§à¦¤à¦¨ à¦¸à§à¦¬à§à¦¬à¦¿à¦§à¦¾","à§­ à¦•à¦¾à¦²à¦¾à¦° RGB LED light (9wt with 3 mode)","à¦¸à¦¾à¦‡à¦œà¦ƒ- à§ª.à§«à¦‡à¦žà§à¦šà¦¿ à¦ªà¦¾à¦¶ à¦à¦¬à¦‚ à¦‰à¦šà§à¦šà¦¤à¦¾ à§§à§§à¦‡à¦žà§à¦šà¦¿","à§§à¦Ÿà¦¿ à¦¹à§‹à¦²à§à¦¡à¦¾à¦° à¦•à¦¨à¦­à¦¾à¦°à§à¦Ÿà¦¾à¦°","à¦¨à¦°à¦® à¦“ à¦¸à§à¦¨à§à¦¦à¦° lighting effect","à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¨à§‹ à¦“ à¦‰à¦ªà¦¹à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§‹à¦—à§€"]
  },
  {
    id:22,
	stock:false,
	trending: true,
	//isNew: true,
    name:"à¦—à§à¦°à¦¾à¦®à§€à¦£ à¦ªà¦°à¦¿à¦¬à§‡à¦¶, à¦˜à¦° à¦“ à¦—à¦¾à¦› PVC à¦Ÿà§‡à¦¬à¦¿à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª â€” Black & Silver",
    cat:"à¦Ÿà§‡à¦¬à¦¿à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª",
    price:720,
    discount:15,
    img:"images/table-lamp-4.webp",
    images:[
      "images/table-lamp-4.webp",
      "images/table-lamp-4-2.webp",
      "images/table-lamp-4-3.webp",
      "images/table-lamp-4-4.webp",
      "images/table-lamp-4-5.webp"
    ],
    short:"à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¤à§‡ à¦—à§à¦°à¦¾à¦®à§€à¦£ à¦ªà¦°à¦¿à¦¬à§‡à¦¶à§‡",
    desc:"à¦—à§à¦°à¦¾à¦®à§€à¦£ à¦ªà¦°à¦¿à¦¬à§‡à¦¶à§‡à¦° inspired designà¥¤ à¦˜à¦°à§‡à¦° ambience à¦†à¦°à¦“ premium à¦¦à§‡à¦–à¦¾à¦¤à§‡ à¦à¦¬à¦‚ à¦¬à¦¿à¦¶à§‡à¦· à¦®à§à¦¹à§‚à¦°à§à¦¤à§‡ à¦‰à¦ªà¦¹à¦¾à¦° à¦¦à¦¿à¦¤à§‡ à¦à¦‡ designà¦Ÿà¦¿ à¦¦à¦¾à¦°à§à¦£ à¦à¦•à¦Ÿà¦¿ choiceà¥¤",
    features:["Premium PVC body 2mm","à¦¸à¦¹à¦œà§‡à¦‡ à¦²à¦¾à¦‡à¦Ÿ à¦ªà¦°à¦¿à¦¬à¦°à§à¦¤à¦¨ à¦¸à§à¦¬à§à¦¬à¦¿à¦§à¦¾","à§­ à¦•à¦¾à¦²à¦¾à¦° RGB LED light (9wt with 3 mode)","à¦¸à¦¾à¦‡à¦œà¦ƒ- à§ª.à§«à¦‡à¦žà§à¦šà¦¿ à¦ªà¦¾à¦¶ à¦à¦¬à¦‚ à¦‰à¦šà§à¦šà¦¤à¦¾ à§§à§§à¦‡à¦žà§à¦šà¦¿","à§§à¦Ÿà¦¿ à¦¹à§‹à¦²à§à¦¡à¦¾à¦° à¦•à¦¨à¦­à¦¾à¦°à§à¦Ÿà¦¾à¦°","à¦¨à¦°à¦® à¦“ à¦¸à§à¦¨à§à¦¦à¦° lighting effect","à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¨à§‹ à¦“ à¦‰à¦ªà¦¹à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§‹à¦—à§€"]
  },
  {
    id:23,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"à¦—à§‹à¦²à¦¾à¦ª à¦«à§à¦² PVC à¦Ÿà§‡à¦¬à¦¿à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª â€” Black & Silver",
    cat:"à¦Ÿà§‡à¦¬à¦¿à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª",
    price:720,
    discount:18,
    img:"images/table-lamp-5.webp",
    images:[
      "images/table-lamp-5.webp",
      "images/table-lamp-5-2.webp",
      "images/table-lamp-5-3.webp",
      "images/table-lamp-5-4.webp",
      "images/table-lamp-5-5.webp"
    ],
    short:"à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¤à§‡ à¦—à§‹à¦²à¦¾à¦ªà§‡à¦° à¦†à¦²à§‹à¦°",
    desc:"à¦—à§‹à¦²à¦¾à¦ª à¦«à§à¦²à§‡à¦° à¦†à¦²à§‹à§Ÿ à¦°à¦¾à¦¤ à¦¹à§‹à¦• à¦†à¦²à§‹à¦•à¦¿à¦¤à¥¤ à¦˜à¦°à§‡à¦° ambience à¦†à¦°à¦“ premium à¦¦à§‡à¦–à¦¾à¦¤à§‡ à¦à¦¬à¦‚ à¦¬à¦¿à¦¶à§‡à¦· à¦®à§à¦¹à§‚à¦°à§à¦¤à§‡ à¦‰à¦ªà¦¹à¦¾à¦° à¦¦à¦¿à¦¤à§‡ à¦à¦‡ designà¦Ÿà¦¿ à¦¦à¦¾à¦°à§à¦£ à¦à¦•à¦Ÿà¦¿ choiceà¥¤",
    features:["Premium PVC body 2mm","à¦¸à¦¹à¦œà§‡à¦‡ à¦²à¦¾à¦‡à¦Ÿ à¦ªà¦°à¦¿à¦¬à¦°à§à¦¤à¦¨ à¦¸à§à¦¬à§à¦¬à¦¿à¦§à¦¾","à§­ à¦•à¦¾à¦²à¦¾à¦° RGB LED light (9wt with 3 mode)","à¦¸à¦¾à¦‡à¦œà¦ƒ- à§ª.à§«à¦‡à¦žà§à¦šà¦¿ à¦ªà¦¾à¦¶ à¦à¦¬à¦‚ à¦‰à¦šà§à¦šà¦¤à¦¾ à§§à§§à¦‡à¦žà§à¦šà¦¿","à§§à¦Ÿà¦¿ à¦¹à§‹à¦²à§à¦¡à¦¾à¦° à¦•à¦¨à¦­à¦¾à¦°à§à¦Ÿà¦¾à¦°","à¦¨à¦°à¦® à¦“ à¦¸à§à¦¨à§à¦¦à¦° lighting effect","à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¨à§‹ à¦“ à¦‰à¦ªà¦¹à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§‹à¦—à§€"]
  },
  {
    id:24,
	stock:false,
	//trending: true,
	//isNew: true,
    name:"à¦®à§à¦¹à¦¾à¦®à§à¦®à¦¦ ï·º à¦²à§‡à¦–à¦¾ PVC à¦Ÿà§‡à¦¬à¦¿à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª â€” Black & Gold",
    cat:"à¦Ÿà§‡à¦¬à¦¿à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª",
    price:780,
    discount:18,
    img:"images/table-lamp-6.webp",
    images:[
      "images/table-lamp-6.webp",
      "images/table-lamp-6-2.webp",
      "images/table-lamp-6-3.webp",
      "images/table-lamp-6-4.webp",
      "images/table-lamp-6-5.webp"
    ],
    short:"à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¤à§‡ à¦‡à¦¸à¦²à¦¾à¦®à¦¿à¦• à¦†à¦²à§‹à¦° à¦¡à¦¿à¦œà¦¾à¦‡à¦¨",
    desc:"à¦‰à¦·à§à¦£ à¦—à§‹à¦²à§à¦¡à§‡à¦¨ lighting-à¦à¦° à¦¸à¦™à§à¦—à§‡ Islamic calligraphy inspired designà¥¤ à¦˜à¦°à§‡à¦° ambience à¦†à¦°à¦“ premium à¦¦à§‡à¦–à¦¾à¦¤à§‡ à¦à¦¬à¦‚ à¦¬à¦¿à¦¶à§‡à¦· à¦®à§à¦¹à§‚à¦°à§à¦¤à§‡ à¦‰à¦ªà¦¹à¦¾à¦° à¦¦à¦¿à¦¤à§‡ à¦à¦‡ designà¦Ÿà¦¿ à¦¦à¦¾à¦°à§à¦£ à¦à¦•à¦Ÿà¦¿ choiceà¥¤",
    features:["Premium PVC body 2mm","à¦†à¦•à¦°à§à¦·à¦£à§€à§Ÿ Islamic Calligraphy","à¦¸à¦¹à¦œà§‡à¦‡ à¦²à¦¾à¦‡à¦Ÿ à¦ªà¦°à¦¿à¦¬à¦°à§à¦¤à¦¨ à¦¸à§à¦¬à§à¦¬à¦¿à¦§à¦¾","à§­ à¦•à¦¾à¦²à¦¾à¦° RGB LED light (9wt with 3 mode)","à¦¸à¦¾à¦‡à¦œà¦ƒ- à§ª.à§«à¦‡à¦žà§à¦šà¦¿ à¦ªà¦¾à¦¶ à¦à¦¬à¦‚ à¦‰à¦šà§à¦šà¦¤à¦¾ à§§à§§à¦‡à¦žà§à¦šà¦¿","à§§à¦Ÿà¦¿ à¦¹à§‹à¦²à§à¦¡à¦¾à¦° à¦•à¦¨à¦­à¦¾à¦°à§à¦Ÿà¦¾à¦°","à¦¨à¦°à¦® à¦“ à¦¸à§à¦¨à§à¦¦à¦° lighting effect","à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¨à§‹ à¦“ à¦‰à¦ªà¦¹à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§‹à¦—à§€"]
  },
  {
    id:25,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"à¦†à¦²à§à¦²à¦¾à¦¹à§ à¦²à§‡à¦–à¦¾ PVC à¦Ÿà§‡à¦¬à¦¿à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª â€” Black & Gold",
    cat:"à¦Ÿà§‡à¦¬à¦¿à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª",
    price:780,
    discount:18,
    img:"images/table-lamp-7.webp",
    images:[
      "images/table-lamp-7.webp",
      "images/table-lamp-7-2.webp",
      "images/table-lamp-7-3.webp",
      "images/table-lamp-7-4.webp",
      "images/table-lamp-7-5.webp"
    ],
    short:"à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¤à§‡ à¦‡à¦¸à¦²à¦¾à¦®à¦¿à¦• à¦†à¦²à§‹à¦° à¦¡à¦¿à¦œà¦¾à¦‡à¦¨",
    desc:"à¦‰à¦·à§à¦£ à¦—à§‹à¦²à§à¦¡à§‡à¦¨ lighting-à¦à¦° à¦¸à¦™à§à¦—à§‡ Islamic calligraphy inspired designà¥¤ à¦˜à¦°à§‡à¦° ambience à¦†à¦°à¦“ premium à¦¦à§‡à¦–à¦¾à¦¤à§‡ à¦à¦¬à¦‚ à¦¬à¦¿à¦¶à§‡à¦· à¦®à§à¦¹à§‚à¦°à§à¦¤à§‡ à¦‰à¦ªà¦¹à¦¾à¦° à¦¦à¦¿à¦¤à§‡ à¦à¦‡ designà¦Ÿà¦¿ à¦¦à¦¾à¦°à§à¦£ à¦à¦•à¦Ÿà¦¿ choiceà¥¤",
    features:["Premium PVC body 2mm","à¦†à¦•à¦°à§à¦·à¦£à§€à§Ÿ Islamic Calligraphy","à¦¸à¦¹à¦œà§‡à¦‡ à¦²à¦¾à¦‡à¦Ÿ à¦ªà¦°à¦¿à¦¬à¦°à§à¦¤à¦¨ à¦¸à§à¦¬à§à¦¬à¦¿à¦§à¦¾","à§­ à¦•à¦¾à¦²à¦¾à¦° RGB LED light (9wt with 3 mode)","à¦¸à¦¾à¦‡à¦œà¦ƒ- à§ª.à§«à¦‡à¦žà§à¦šà¦¿ à¦ªà¦¾à¦¶ à¦à¦¬à¦‚ à¦‰à¦šà§à¦šà¦¤à¦¾ à§§à§§à¦‡à¦žà§à¦šà¦¿","à§§à¦Ÿà¦¿ à¦¹à§‹à¦²à§à¦¡à¦¾à¦° à¦•à¦¨à¦­à¦¾à¦°à§à¦Ÿà¦¾à¦°","à¦¨à¦°à¦® à¦“ à¦¸à§à¦¨à§à¦¦à¦° lighting effect","à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¨à§‹ à¦“ à¦‰à¦ªà¦¹à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§‹à¦—à§€"]
  },
  {
    id:26,
	stock:false,
	trending: true,
	//isNew: true,
    name:"à¦®à§à¦¹à¦¾à¦®à§à¦®à¦¦ ï·º à¦²à§‡à¦–à¦¾ PVC à¦Ÿà§‡à¦¬à¦¿à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª â€” Design-2 Black & Silver",
    cat:"à¦Ÿà§‡à¦¬à¦¿à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª",
    price:780,
    discount:18,
    img:"images/table-lamp-8.webp",
    images:[
      "images/table-lamp-8.webp",
      "images/table-lamp-1-2.webp",
      "images/table-lamp-3-3.webp",
      "images/table-lamp-3-4.webp",
      "images/table-lamp-3-5.webp"
    ],
    short:"à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¤à§‡ à¦‡à¦¸à¦²à¦¾à¦®à¦¿à¦• à¦†à¦²à§‹à¦° à¦¡à¦¿à¦œà¦¾à¦‡à¦¨",
    desc:"à¦‰à¦·à§à¦£ à¦—à§‹à¦²à§à¦¡à§‡à¦¨ lighting-à¦à¦° à¦¸à¦™à§à¦—à§‡ Islamic calligraphy inspired designà¥¤ à¦˜à¦°à§‡à¦° ambience à¦†à¦°à¦“ premium à¦¦à§‡à¦–à¦¾à¦¤à§‡ à¦à¦¬à¦‚ à¦¬à¦¿à¦¶à§‡à¦· à¦®à§à¦¹à§‚à¦°à§à¦¤à§‡ à¦‰à¦ªà¦¹à¦¾à¦° à¦¦à¦¿à¦¤à§‡ à¦à¦‡ designà¦Ÿà¦¿ à¦¦à¦¾à¦°à§à¦£ à¦à¦•à¦Ÿà¦¿ choiceà¥¤",
    features:["Premium PVC body 2mm","à¦†à¦•à¦°à§à¦·à¦£à§€à§Ÿ Islamic Calligraphy","à¦¸à¦¹à¦œà§‡à¦‡ à¦²à¦¾à¦‡à¦Ÿ à¦ªà¦°à¦¿à¦¬à¦°à§à¦¤à¦¨ à¦¸à§à¦¬à§à¦¬à¦¿à¦§à¦¾","à§­ à¦•à¦¾à¦²à¦¾à¦° RGB LED light (9wt with 3 mode)","à¦¸à¦¾à¦‡à¦œà¦ƒ- à§ª.à§«à¦‡à¦žà§à¦šà¦¿ à¦ªà¦¾à¦¶ à¦à¦¬à¦‚ à¦‰à¦šà§à¦šà¦¤à¦¾ à§§à§§à¦‡à¦žà§à¦šà¦¿","à§§à¦Ÿà¦¿ à¦¹à§‹à¦²à§à¦¡à¦¾à¦° à¦•à¦¨à¦­à¦¾à¦°à§à¦Ÿà¦¾à¦°","à¦¨à¦°à¦® à¦“ à¦¸à§à¦¨à§à¦¦à¦° lighting effect","à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¨à§‹ à¦“ à¦‰à¦ªà¦¹à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§‹à¦—à§€"]
  },
  {
    id:27,
	stock:false,
	//trending: true,
	//isNew: true,
    name:"à¦Ÿà¦¿à¦‰à¦²à¦¿à¦ª à¦«à§à¦² PVC à¦Ÿà§‡à¦¬à¦¿à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª â€” Black & Silver",
    cat:"à¦Ÿà§‡à¦¬à¦¿à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª",
    price:720,
    discount:18,
    img:"images/table-lamp-9.webp",
    images:[
      "images/table-lamp-9.webp",
      "images/table-lamp-3-2.webp",
      "images/table-lamp-3-3.webp",
      "images/table-lamp-3-4.webp",
      "images/table-lamp-3-5.webp"
    ],
    short:"à¦Ÿà¦¿à¦‰à¦²à¦¿à¦ª à¦«à§à¦²à§‡à¦° à¦‰à¦·à§à¦£ à¦†à¦²à§‹à¦° à¦¡à¦¿à¦œà¦¾à¦‡à¦¨",
    desc:"à¦Ÿà¦¿à¦‰à¦²à¦¿à¦ª à¦«à§à¦²à§‡à¦° à¦‰à¦·à§à¦£ à¦—à§‹à¦²à§à¦¡à§‡à¦¨ lighting-à¦à¦° à¦¸à¦™à§à¦—à§‡ inspired designà¥¤ à¦˜à¦°à§‡à¦° ambience à¦†à¦°à¦“ premium à¦¦à§‡à¦–à¦¾à¦¤à§‡ à¦à¦¬à¦‚ à¦¬à¦¿à¦¶à§‡à¦· à¦®à§à¦¹à§‚à¦°à§à¦¤à§‡ à¦‰à¦ªà¦¹à¦¾à¦° à¦¦à¦¿à¦¤à§‡ à¦à¦‡ designà¦Ÿà¦¿ à¦¦à¦¾à¦°à§à¦£ à¦à¦•à¦Ÿà¦¿ choiceà¥¤",
    features:["Premium PVC body 2mm","à¦†à¦•à¦°à§à¦·à¦£à§€à§Ÿ Islamic Calligraphy","à¦¸à¦¹à¦œà§‡à¦‡ à¦²à¦¾à¦‡à¦Ÿ à¦ªà¦°à¦¿à¦¬à¦°à§à¦¤à¦¨ à¦¸à§à¦¬à§à¦¬à¦¿à¦§à¦¾","à§­ à¦•à¦¾à¦²à¦¾à¦° RGB LED light (9wt with 3 mode)","à¦¸à¦¾à¦‡à¦œà¦ƒ- à§ª.à§«à¦‡à¦žà§à¦šà¦¿ à¦ªà¦¾à¦¶ à¦à¦¬à¦‚ à¦‰à¦šà§à¦šà¦¤à¦¾ à§§à§§à¦‡à¦žà§à¦šà¦¿","à§§à¦Ÿà¦¿ à¦¹à§‹à¦²à§à¦¡à¦¾à¦° à¦•à¦¨à¦­à¦¾à¦°à§à¦Ÿà¦¾à¦°","à¦¨à¦°à¦® à¦“ à¦¸à§à¦¨à§à¦¦à¦° lighting effect","à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¨à§‹ à¦“ à¦‰à¦ªà¦¹à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§‹à¦—à§€"]
  },
  {
    id:28,
	stock:false,
	//trending: true,
	//isNew: true,
    name:"à¦†à¦²à§à¦²à¦¾à¦¹à§ à¦²à§‡à¦–à¦¾ PVC à¦Ÿà§‡à¦¬à¦¿à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª â€” Design-2 Black & Silver",
    cat:"à¦Ÿà§‡à¦¬à¦¿à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª",
    price:725,
    discount:18,
    img:"images/table-lamp-10.webp",
    images:[
      "images/table-lamp-10.webp",
      "images/table-lamp-1-2.webp",
      "images/table-lamp-3-3.webp",
      "images/table-lamp-3-4.webp",
      "images/table-lamp-3-5.webp"
    ],
    short:"à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¤à§‡ à¦‡à¦¸à¦²à¦¾à¦®à¦¿à¦• à¦†à¦²à§‹à¦° à¦¡à¦¿à¦œà¦¾à¦‡à¦¨",
    desc:"à¦‰à¦·à§à¦£ à¦—à§‹à¦²à§à¦¡à§‡à¦¨ lighting-à¦à¦° à¦¸à¦™à§à¦—à§‡ Islamic calligraphy inspired designà¥¤ à¦˜à¦°à§‡à¦° ambience à¦†à¦°à¦“ premium à¦¦à§‡à¦–à¦¾à¦¤à§‡ à¦à¦¬à¦‚ à¦¬à¦¿à¦¶à§‡à¦· à¦®à§à¦¹à§‚à¦°à§à¦¤à§‡ à¦‰à¦ªà¦¹à¦¾à¦° à¦¦à¦¿à¦¤à§‡ à¦à¦‡ designà¦Ÿà¦¿ à¦¦à¦¾à¦°à§à¦£ à¦à¦•à¦Ÿà¦¿ choiceà¥¤",
    features:["Premium PVC body 2mm","à¦†à¦•à¦°à§à¦·à¦£à§€à§Ÿ Islamic Calligraphy","à¦¸à¦¹à¦œà§‡à¦‡ à¦²à¦¾à¦‡à¦Ÿ à¦ªà¦°à¦¿à¦¬à¦°à§à¦¤à¦¨ à¦¸à§à¦¬à§à¦¬à¦¿à¦§à¦¾","à§­ à¦•à¦¾à¦²à¦¾à¦° RGB LED light (9wt with 3 mode)","à¦¸à¦¾à¦‡à¦œà¦ƒ- à§ª.à§«à¦‡à¦žà§à¦šà¦¿ à¦ªà¦¾à¦¶ à¦à¦¬à¦‚ à¦‰à¦šà§à¦šà¦¤à¦¾ à§§à§§à¦‡à¦žà§à¦šà¦¿","à§§à¦Ÿà¦¿ à¦¹à§‹à¦²à§à¦¡à¦¾à¦° à¦•à¦¨à¦­à¦¾à¦°à§à¦Ÿà¦¾à¦°","à¦¨à¦°à¦® à¦“ à¦¸à§à¦¨à§à¦¦à¦° lighting effect","à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¨à§‹ à¦“ à¦‰à¦ªà¦¹à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§‹à¦—à§€"]
  },
  {
    id:29,
	stock:false,
	//trending: true,
	//isNew: true,
    name:"à¦†à¦²à§à¦²à¦¾à¦¹à§ à¦²à§‡à¦–à¦¾ PVC à¦Ÿà§‡à¦¬à¦¿à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª â€” Design-3 Black & Silver",
    cat:"à¦Ÿà§‡à¦¬à¦¿à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª",
    price:720,
    discount:18,
    img:"images/table-lamp-11.webp",
    images:[
      "images/table-lamp-11.webp",
      "images/table-lamp-1-2.webp",
      "images/table-lamp-3-3.webp",
      "images/table-lamp-3-4.webp",
      "images/table-lamp-3-5.webp"
    ],
    short:"à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¤à§‡ à¦‡à¦¸à¦²à¦¾à¦®à¦¿à¦• à¦¡à¦¿à¦œà¦¾à¦‡à¦¨",
    desc:"à¦‰à¦·à§à¦£ à¦—à§‹à¦²à§à¦¡à§‡à¦¨ lighting-à¦à¦° à¦¸à¦™à§à¦—à§‡ Islamic calligraphy inspired designà¥¤ à¦˜à¦°à§‡à¦° ambience à¦†à¦°à¦“ premium à¦¦à§‡à¦–à¦¾à¦¤à§‡ à¦à¦¬à¦‚ à¦¬à¦¿à¦¶à§‡à¦· à¦®à§à¦¹à§‚à¦°à§à¦¤à§‡ à¦‰à¦ªà¦¹à¦¾à¦° à¦¦à¦¿à¦¤à§‡ à¦à¦‡ designà¦Ÿà¦¿ à¦¦à¦¾à¦°à§à¦£ à¦à¦•à¦Ÿà¦¿ choiceà¥¤",
    features:["Premium PVC body 2mm","à¦†à¦•à¦°à§à¦·à¦£à§€à§Ÿ Islamic Calligraphy","à¦¸à¦¹à¦œà§‡à¦‡ à¦²à¦¾à¦‡à¦Ÿ à¦ªà¦°à¦¿à¦¬à¦°à§à¦¤à¦¨ à¦¸à§à¦¬à§à¦¬à¦¿à¦§à¦¾","à§­ à¦•à¦¾à¦²à¦¾à¦° RGB LED light (9wt with 3 mode)","à¦¸à¦¾à¦‡à¦œà¦ƒ- à§ª.à§«à¦‡à¦žà§à¦šà¦¿ à¦ªà¦¾à¦¶ à¦à¦¬à¦‚ à¦‰à¦šà§à¦šà¦¤à¦¾ à§§à§§à¦‡à¦žà§à¦šà¦¿","à§§à¦Ÿà¦¿ à¦¹à§‹à¦²à§à¦¡à¦¾à¦° à¦•à¦¨à¦­à¦¾à¦°à§à¦Ÿà¦¾à¦°","à¦¨à¦°à¦® à¦“ à¦¸à§à¦¨à§à¦¦à¦° lighting effect","à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¨à§‹ à¦“ à¦‰à¦ªà¦¹à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§‹à¦—à§€"]
  },
  {
    id:30,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"à¦¡à§‡à¦•à§‹à¦°à§‡à¦Ÿà¦¿à¦­ à¦²à¦¾à¦‡à¦Ÿ â€” Design 01",
    cat:"à¦¡à§‡à¦•à§‹à¦°à§‡à¦Ÿà¦¿à¦­ à¦†à¦‡à¦Ÿà§‡à¦®",
    price:650,
    discount:15,
    img:"images/decorative-items-1.webp",
    images:[
      "images/decorative-items-1.webp",
      "images/decorative-items-1.webp",
      "images/decorative-items-1.webp",
      "images/decorative-items-1.webp",
      "images/decorative-items-1.webp"
    ],
    short:"à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¤à§‡ à¦ªà§à¦°à¦¿à¦®à¦¿à§Ÿà¦¾à¦® à¦¡à¦¿à¦œà¦¾à¦‡à¦¨",
    desc:"à¦‰à¦·à§à¦£ lighting-à¦à¦° à¦¸à¦™à§à¦—à§‡ à¦ªà§à¦°à¦¿à¦®à¦¿à§Ÿà¦¾à¦® à¦¡à¦¿à¦œà¦¾à¦‡à¦¨à¥¤ à¦˜à¦°à§‡à¦° ambience à¦†à¦°à¦“ premium à¦¦à§‡à¦–à¦¾à¦¤à§‡ à¦à¦¬à¦‚ à¦¬à¦¿à¦¶à§‡à¦· à¦®à§à¦¹à§‚à¦°à§à¦¤à§‡ à¦‰à¦ªà¦¹à¦¾à¦° à¦¦à¦¿à¦¤à§‡ à¦à¦‡ designà¦Ÿà¦¿ à¦¦à¦¾à¦°à§à¦£ à¦à¦•à¦Ÿà¦¿ choiceà¥¤",
    features:["Premium PVC body 2mm","à¦¨à¦°à¦® à¦“ à¦¸à§à¦¨à§à¦¦à¦° lighting effect","à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¨à§‹ à¦“ à¦‰à¦ªà¦¹à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§‹à¦—à§€"]
  },
  {
    id:31,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"à¦¡à§‡à¦•à§‹à¦°à§‡à¦Ÿà¦¿à¦­ à¦²à¦¾à¦‡à¦Ÿ â€” Design 02",
    cat:"à¦¡à§‡à¦•à§‹à¦°à§‡à¦Ÿà¦¿à¦­ à¦†à¦‡à¦Ÿà§‡à¦®",
    price:650,
    discount:14,
    img:"images/decorative-items-2.webp",
    images:[
      "images/decorative-items-2.webp",
      "images/decorative-items-2.webp",
      "images/decorative-items-2.webp",
      "images/decorative-items-2.webp",
      "images/decorative-items-2.webp"
    ],
    short:"à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¤à§‡ à¦ªà§à¦°à¦¿à¦®à¦¿à§Ÿà¦¾à¦® à¦¡à¦¿à¦œà¦¾à¦‡à¦¨",
    desc:"à¦‰à¦·à§à¦£ lighting-à¦à¦° à¦¸à¦™à§à¦—à§‡ à¦ªà§à¦°à¦¿à¦®à¦¿à§Ÿà¦¾à¦® à¦¡à¦¿à¦œà¦¾à¦‡à¦¨à¥¤ à¦˜à¦°à§‡à¦° ambience à¦†à¦°à¦“ premium à¦¦à§‡à¦–à¦¾à¦¤à§‡ à¦à¦¬à¦‚ à¦¬à¦¿à¦¶à§‡à¦· à¦®à§à¦¹à§‚à¦°à§à¦¤à§‡ à¦‰à¦ªà¦¹à¦¾à¦° à¦¦à¦¿à¦¤à§‡ à¦à¦‡ designà¦Ÿà¦¿ à¦¦à¦¾à¦°à§à¦£ à¦à¦•à¦Ÿà¦¿ choiceà¥¤",
    features:["Premium PVC body 2mm","à¦¨à¦°à¦® à¦“ à¦¸à§à¦¨à§à¦¦à¦° lighting effect","à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¨à§‹ à¦“ à¦‰à¦ªà¦¹à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§‹à¦—à§€"]
  },
  {
    id:32,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"à¦¡à§‡à¦•à§‹à¦°à§‡à¦Ÿà¦¿à¦­ à¦˜à§œà¦¿ â€” Design 01",
    cat:"à¦¡à§‡à¦•à§‹à¦°à§‡à¦Ÿà¦¿à¦­ à¦†à¦‡à¦Ÿà§‡à¦®",
    price:2300,
    discount:14,
    img:"images/decorative-items-3.webp",
    images:[
      "images/decorative-items-3.webp",
      "images/decorative-items-3.webp",
      "images/decorative-items-3.webp",
      "images/decorative-items-3.webp",
      "images/decorative-items-3.webp"
    ],
    short:"à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¤à§‡ à¦ªà§à¦°à¦¿à¦®à¦¿à§Ÿà¦¾à¦® à¦¡à¦¿à¦œà¦¾à¦‡à¦¨",
    desc:"à¦‰à¦·à§à¦£ lighting-à¦à¦° à¦¸à¦™à§à¦—à§‡ à¦ªà§à¦°à¦¿à¦®à¦¿à§Ÿà¦¾à¦® à¦¡à¦¿à¦œà¦¾à¦‡à¦¨à¥¤ à¦˜à¦°à§‡à¦° ambience à¦†à¦°à¦“ premium à¦¦à§‡à¦–à¦¾à¦¤à§‡ à¦à¦¬à¦‚ à¦¬à¦¿à¦¶à§‡à¦· à¦®à§à¦¹à§‚à¦°à§à¦¤à§‡ à¦‰à¦ªà¦¹à¦¾à¦° à¦¦à¦¿à¦¤à§‡ à¦à¦‡ designà¦Ÿà¦¿ à¦¦à¦¾à¦°à§à¦£ à¦à¦•à¦Ÿà¦¿ choiceà¥¤",
    features:["Premium PVC body 2mm","à¦¨à¦°à¦® à¦“ à¦¸à§à¦¨à§à¦¦à¦° lighting effect","à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¨à§‹ à¦“ à¦‰à¦ªà¦¹à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§‹à¦—à§€"]
  },
  {
    id:33,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"à¦¡à§‡à¦•à§‹à¦°à§‡à¦Ÿà¦¿à¦­ à¦²à¦¾à¦‡à¦Ÿ â€” Design 04",
    cat:"à¦¡à§‡à¦•à§‹à¦°à§‡à¦Ÿà¦¿à¦­ à¦†à¦‡à¦Ÿà§‡à¦®",
    price:630,
    discount:13,
    img:"images/decorative-items-4.webp",
    images:[
      "images/decorative-items-4.webp",
      "images/decorative-items-4.webp",
      "images/decorative-items-4.webp",
      "images/decorative-items-4.webp",
      "images/decorative-items-4.webp"
    ],
    short:"à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¤à§‡ à¦ªà§à¦°à¦¿à¦®à¦¿à§Ÿà¦¾à¦® à¦¡à¦¿à¦œà¦¾à¦‡à¦¨",
    desc:"à¦‰à¦·à§à¦£ lighting-à¦à¦° à¦¸à¦™à§à¦—à§‡ à¦ªà§à¦°à¦¿à¦®à¦¿à§Ÿà¦¾à¦® à¦¡à¦¿à¦œà¦¾à¦‡à¦¨à¥¤ à¦˜à¦°à§‡à¦° ambience à¦†à¦°à¦“ premium à¦¦à§‡à¦–à¦¾à¦¤à§‡ à¦à¦¬à¦‚ à¦¬à¦¿à¦¶à§‡à¦· à¦®à§à¦¹à§‚à¦°à§à¦¤à§‡ à¦‰à¦ªà¦¹à¦¾à¦° à¦¦à¦¿à¦¤à§‡ à¦à¦‡ designà¦Ÿà¦¿ à¦¦à¦¾à¦°à§à¦£ à¦à¦•à¦Ÿà¦¿ choiceà¥¤",
    features:["Premium PVC body 2mm","à¦¨à¦°à¦® à¦“ à¦¸à§à¦¨à§à¦¦à¦° lighting effect","à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¨à§‹ à¦“ à¦‰à¦ªà¦¹à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§‹à¦—à§€"]
  },
  {
    id:34,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"à¦¡à§‡à¦•à§‹à¦°à§‡à¦Ÿà¦¿à¦­ à¦²à¦¾à¦‡à¦Ÿ â€” Design 05",
    cat:"à¦¡à§‡à¦•à§‹à¦°à§‡à¦Ÿà¦¿à¦­ à¦†à¦‡à¦Ÿà§‡à¦®",
    price:1280,
    discount:19,
    img:"images/decorative-items-5.webp",
    images:[
      "images/decorative-items-5.webp",
      "images/decorative-items-5.webp",
      "images/decorative-items-5.webp",
      "images/decorative-items-5.webp",
      "images/decorative-items-5.webp"
    ],
    short:"à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¤à§‡ à¦ªà§à¦°à¦¿à¦®à¦¿à§Ÿà¦¾à¦® à¦¡à¦¿à¦œà¦¾à¦‡à¦¨",
    desc:"à¦‰à¦·à§à¦£ lighting-à¦à¦° à¦¸à¦™à§à¦—à§‡ à¦ªà§à¦°à¦¿à¦®à¦¿à§Ÿà¦¾à¦® à¦¡à¦¿à¦œà¦¾à¦‡à¦¨à¥¤ à¦˜à¦°à§‡à¦° ambience à¦†à¦°à¦“ premium à¦¦à§‡à¦–à¦¾à¦¤à§‡ à¦à¦¬à¦‚ à¦¬à¦¿à¦¶à§‡à¦· à¦®à§à¦¹à§‚à¦°à§à¦¤à§‡ à¦‰à¦ªà¦¹à¦¾à¦° à¦¦à¦¿à¦¤à§‡ à¦à¦‡ designà¦Ÿà¦¿ à¦¦à¦¾à¦°à§à¦£ à¦à¦•à¦Ÿà¦¿ choiceà¥¤",
    features:["Premium PVC body 2mm","à¦¨à¦°à¦® à¦“ à¦¸à§à¦¨à§à¦¦à¦° lighting effect","à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¨à§‹ à¦“ à¦‰à¦ªà¦¹à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§‹à¦—à§€"]
  },
  {
    id:35,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"à¦¡à§‡à¦•à§‹à¦°à§‡à¦Ÿà¦¿à¦­ à¦²à¦¾à¦‡à¦Ÿ â€” Design 06",
    cat:"à¦¡à§‡à¦•à§‹à¦°à§‡à¦Ÿà¦¿à¦­ à¦†à¦‡à¦Ÿà§‡à¦®",
    price:2230,
    discount:17,
    img:"images/decorative-items-6.webp",
    images:[
      "images/decorative-items-6.webp",
      "images/decorative-items-6.webp",
      "images/decorative-items-6.webp",
      "images/decorative-items-6.webp",
      "images/decorative-items-6.webp"
    ],
    short:"à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¤à§‡ à¦ªà§à¦°à¦¿à¦®à¦¿à§Ÿà¦¾à¦® à¦¡à¦¿à¦œà¦¾à¦‡à¦¨",
    desc:"à¦‰à¦·à§à¦£ lighting-à¦à¦° à¦¸à¦™à§à¦—à§‡ à¦ªà§à¦°à¦¿à¦®à¦¿à§Ÿà¦¾à¦® à¦¡à¦¿à¦œà¦¾à¦‡à¦¨à¥¤ à¦˜à¦°à§‡à¦° ambience à¦†à¦°à¦“ premium à¦¦à§‡à¦–à¦¾à¦¤à§‡ à¦à¦¬à¦‚ à¦¬à¦¿à¦¶à§‡à¦· à¦®à§à¦¹à§‚à¦°à§à¦¤à§‡ à¦‰à¦ªà¦¹à¦¾à¦° à¦¦à¦¿à¦¤à§‡ à¦à¦‡ designà¦Ÿà¦¿ à¦¦à¦¾à¦°à§à¦£ à¦à¦•à¦Ÿà¦¿ choiceà¥¤",
    features:["Premium PVC body 2mm","à¦¨à¦°à¦® à¦“ à¦¸à§à¦¨à§à¦¦à¦° lighting effect","à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¨à§‹ à¦“ à¦‰à¦ªà¦¹à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§‹à¦—à§€"]
  },
  {
    id:36,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"à¦¡à§‡à¦•à§‹à¦°à§‡à¦Ÿà¦¿à¦­ à¦˜à§œà¦¿ â€” Design 02",
    cat:"à¦¡à§‡à¦•à§‹à¦°à§‡à¦Ÿà¦¿à¦­ à¦†à¦‡à¦Ÿà§‡à¦®",
    price:2150,
    discount:20,
    img:"images/decorative-items-7.webp",
    images:[
      "images/decorative-items-7.webp",
      "images/decorative-items-7.webp",
      "images/decorative-items-7.webp",
      "images/decorative-items-7.webp",
      "images/decorative-items-7.webp"
    ],
    short:"à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¤à§‡ à¦ªà§à¦°à¦¿à¦®à¦¿à§Ÿà¦¾à¦® à¦¡à¦¿à¦œà¦¾à¦‡à¦¨",
    desc:"à¦‰à¦·à§à¦£ lighting-à¦à¦° à¦¸à¦™à§à¦—à§‡ à¦ªà§à¦°à¦¿à¦®à¦¿à§Ÿà¦¾à¦® à¦¡à¦¿à¦œà¦¾à¦‡à¦¨à¥¤ à¦˜à¦°à§‡à¦° ambience à¦†à¦°à¦“ premium à¦¦à§‡à¦–à¦¾à¦¤à§‡ à¦à¦¬à¦‚ à¦¬à¦¿à¦¶à§‡à¦· à¦®à§à¦¹à§‚à¦°à§à¦¤à§‡ à¦‰à¦ªà¦¹à¦¾à¦° à¦¦à¦¿à¦¤à§‡ à¦à¦‡ designà¦Ÿà¦¿ à¦¦à¦¾à¦°à§à¦£ à¦à¦•à¦Ÿà¦¿ choiceà¥¤",
    features:["Premium PVC body 2mm","à¦¨à¦°à¦® à¦“ à¦¸à§à¦¨à§à¦¦à¦° lighting effect","à¦˜à¦° à¦¸à¦¾à¦œà¦¾à¦¨à§‹ à¦“ à¦‰à¦ªà¦¹à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§‹à¦—à§€"]
  },
  {
    id:37,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"RGBIC Neon Strip Light",
    cat:"à¦…à§à¦¯à¦¾à¦•à§à¦¸à§‡à¦¸à¦°à¦¿à¦¸",
    price:1650,
    discount:23,
    img:"images/neon-strip-light-1.webp",
    images:[
      "images/neon-strip-light-1.webp",
      "images/neon-strip-light-2.webp",
      "images/neon-strip-light-1.webp",
      "images/neon-strip-light-2.webp",
      "images/neon-strip-light-1.webp"
    ],
    short:"à¦°à¦¿à¦®à§‹à¦°à§à¦Ÿ à¦“ à¦®à§‹à¦¬à¦¾à¦‡à¦² à¦…à§à¦¯à¦¾à¦ª à¦¦à¦¿à§Ÿà§‡ à¦•à¦¾à¦²à¦¾à¦° à¦•à¦¨à§à¦Ÿà§à¦°à§‹à¦²",
    desc:"à¦®à§‹à¦¬à¦¾à¦‡à¦² à¦…à§à¦¯à¦¾à¦ª à¦à¦¬à¦‚ à¦°à¦¿à¦®à§‹à¦°à§à¦Ÿ à¦¦à¦¿à§Ÿà§‡ à¦¸à¦¹à¦œà§‡à¦‡ à¦•à¦¾à¦²à¦¾à¦° à¦•à¦¨à§à¦Ÿà§à¦°à§‹à¦² à¦¸à§à¦¬à¦¿à¦§à¦¾à¥¤ à¦˜à¦°à§‡à¦° ambience à¦†à¦°à¦“ premium à¦¦à§‡à¦–à¦¾à¦¤à§‡ à¦à¦¬à¦‚ à¦¬à¦¿à¦¶à§‡à¦· à¦®à§à¦¹à§‚à¦°à§à¦¤à§‡à¦° à¦œà¦¨à§à¦¯ à¦¦à¦¾à¦°à§à¦£ à¦à¦•à¦Ÿà¦¿ choiceà¥¤",
    features:["à¦°à¦¿à¦®à§‹à¦°à§à¦Ÿ à¦“ à¦®à§‹à¦¬à¦¾à¦‡à¦² à¦…à§à¦¯à¦¾à¦ª à¦¦à¦¿à§Ÿà§‡ à¦•à¦¾à¦²à¦¾à¦° à¦•à¦¨à§à¦Ÿà§à¦°à§‹à¦²","à¦¸à¦¹à¦œà§‡à¦‡ à¦•à¦¾à¦²à¦¾à¦° à¦ªà¦°à¦¿à¦¬à¦°à§à¦¤à¦¨ à¦¸à§à¦¬à§à¦¬à¦¿à¦§à¦¾","à§­ à¦•à¦¾à¦²à¦¾à¦° RGB LED light (9wt with multi mode)","Bluetooth app control","Remote control","Music sync","Diy Cuttable & USB Powered"]
  },
  {
    id:38,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"Pendant Pin Type Holder",
    cat:"à¦…à§à¦¯à¦¾à¦•à§à¦¸à§‡à¦¸à¦°à¦¿à¦¸",
    price:40,
    discount:10,
    img:"images/holdar-pin-1.webp",
    images:[
      "images/holdar-pin-1.webp",
      "images/holdar-pin-2.webp",
      "images/holdar-pin-1.webp",
      "images/holdar-pin-2.webp",
      "images/holdar-pin-1.webp"
    ],
    short:"à¦à§à¦²à¦¨à§à¦¤ à¦¹à§‹à¦²à§à¦¡à¦¾à¦° à¦ªà¦¿à¦¨ à¦¸à¦¿à¦¸à§à¦Ÿà§‡à¦®",
    desc:"Pendant Pin Type Holder- à¦à§à¦²à¦¨à§à¦¤ à¦¹à§‹à¦²à§à¦¡à¦¾à¦° à¦ªà¦¿à¦¨ à¦¸à¦¿à¦¸à§à¦Ÿà§‡à¦® à¦à¦¤à§‡ à¦•à¦¨à¦­à¦¾à¦°à§à¦Ÿà¦¾à¦° à¦¬à§à¦¯à¦¾à¦¬à¦¹à¦¾à¦° à¦•à¦°à¦¤à§‡ à¦ªà¦¾à¦°à¦¬à§‡à¦¨à¥¤",
    features:["à¦à§à¦²à¦¨à§à¦¤ à¦¹à§‹à¦²à§à¦¡à¦¾à¦° à¦ªà¦¿à¦¨ à¦¸à¦¿à¦¸à§à¦Ÿà§‡à¦®","Pendant Pin Type Holder"]
  },
  {
    id:39,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"RGB LED Light",
    cat:"à¦…à§à¦¯à¦¾à¦•à§à¦¸à§‡à¦¸à¦°à¦¿à¦¸",
    price:130,
    discount:16,
    img:"images/rgb-leb-light-1.webp",
    images:[
      "images/rgb-leb-light-1.webp",
      "images/rgb-leb-light-1.webp",
      "images/rgb-leb-light-1.webp",
      "images/rgb-leb-light-1.webp",
      "images/rgb-leb-light-1.webp"
    ],
    short:"à§­ à¦•à¦¾à¦²à¦¾à¦° RGB LED light with multi mode",
    desc:"à¦¸à§à¦‡à¦š à¦…à¦«-à¦…à¦¨ à¦à¦° à¦®à¦¾à¦§à§à¦¯à¦®à§‡ à¦¸à¦¹à¦œà§‡à¦‡ à¦•à¦¾à¦²à¦¾à¦° à¦•à¦¨à§à¦Ÿà§à¦°à§‹à¦² à¦¸à§à¦¬à¦¿à¦§à¦¾à¥¤ à¦˜à¦°à§‡à¦° ambience à¦†à¦°à¦“ premium à¦¦à§‡à¦–à¦¾à¦¤à§‡ à¦à¦¬à¦‚ à¦¬à¦¿à¦¶à§‡à¦· à¦®à§à¦¹à§‚à¦°à§à¦¤à§‡à¦° à¦œà¦¨à§à¦¯ à¦¦à¦¾à¦°à§à¦£ à¦à¦•à¦Ÿà¦¿ choiceà¥¤",
    features:["à¦¸à§à¦‡à¦š à¦…à¦«-à¦…à¦¨ à¦à¦° à¦®à¦¾à¦§à§à¦¯à¦®à§‡ à¦•à¦¾à¦²à¦¾à¦° à¦•à¦¨à§à¦Ÿà§à¦°à§‹à¦²","à¦¸à¦¹à¦œà§‡à¦‡ à¦•à¦¾à¦²à¦¾à¦° à¦ªà¦°à¦¿à¦¬à¦°à§à¦¤à¦¨ à¦¸à§à¦¬à§à¦¬à¦¿à¦§à¦¾","à§­ à¦•à¦¾à¦²à¦¾à¦° RGB LED light (9wt with multi mode)"]
  },
  {
    id:40,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"Patch-type pendant holder",
    cat:"à¦…à§à¦¯à¦¾à¦•à§à¦¸à§‡à¦¸à¦°à¦¿à¦¸",
    price:40,
    discount:10,
    img:"images/holdar-patch-1.webp",
    images:[
      "images/holdar-patch-1.webp",
      "images/holdar-patch-2.webp",
      "images/holdar-patch-1.webp",
      "images/holdar-patch-2.webp",
      "images/holdar-patch-1.webp"
    ],
    short:"à¦à§à¦²à¦¨à§à¦¤ à¦¹à§‹à¦²à§à¦¡à¦¾à¦° à¦ªà§à¦¯à¦¾à¦à¦š à¦¸à¦¿à¦¸à§à¦Ÿà§‡à¦®",
    desc:"Pendant Patch-type Holder- à¦à§à¦²à¦¨à§à¦¤ à¦¹à§‹à¦²à§à¦¡à¦¾à¦° à¦ªà§à¦¯à¦¾à¦à¦š à¦¸à¦¿à¦¸à§à¦Ÿà§‡à¦® à¦à¦¤à§‡ à¦•à¦¨à¦­à¦¾à¦°à§à¦Ÿà¦¾à¦° à¦¬à§à¦¯à¦¾à¦¬à¦¹à¦¾à¦° à¦•à¦°à¦¤à§‡ à¦ªà¦¾à¦°à¦¬à§‡à¦¨à¥¤",
    features:["à¦à§à¦²à¦¨à§à¦¤ à¦¹à§‹à¦²à§à¦¡à¦¾à¦° à¦ªà§à¦¯à¦¾à¦à¦š à¦¸à¦¿à¦¸à§à¦Ÿà§‡à¦®","Pendant Patch-type Holder"]
  },
  {
    id:41,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"AC power cord",
    cat:"à¦…à§à¦¯à¦¾à¦•à§à¦¸à§‡à¦¸à¦°à¦¿à¦¸",
    price:50,
    discount:17,
    img:"images/ac-power-cord-1.webp",
    images:[
      "images/ac-power-cord-1.webp",
      "images/ac-power-cord-2.webp",
      "images/ac-power-cord-1.webp",
      "images/ac-power-cord-2.webp",
      "images/ac-power-cord-1.webp"
    ],
    short:"AC à¦ªà¦¾à¦“à§Ÿà¦¾à¦° à¦•à¦°à§à¦¡",
    desc:"AC power cord à¦¸à¦°à¦¾à¦¸à¦°à¦¿ à¦¬à¦¿à¦¦à§à¦¯à§à§Ž à¦¹à¦¤à§‡ à¦šà¦¾à¦°à§à¦œà¦¾à¦° à¦²à¦¾à¦‡à¦Ÿ à¦…à¦¥à¦¾à¦¬à¦¾ à¦šà¦¾à¦°à§à¦œà¦¾à¦° à¦«à§à¦¯à¦¾à¦¨ à¦à¦° à¦¸à¦¾à¦¥à§‡ à¦•à¦¾à¦¨à§‡à¦•à§à¦Ÿ à¦•à¦°à§‡ à¦šà¦¾à¦°à§à¦œ à¦•à¦°à¦¾à¦° à¦¸à§à¦¬à¦¿à¦§à¦¾à¦°",
    features:["à¦šà¦¾à¦°à§à¦œà¦¾à¦° à¦²à¦¾à¦‡à¦Ÿ à¦…à¦¥à¦¾à¦¬à¦¾ à¦šà¦¾à¦°à§à¦œà¦¾à¦° à¦«à§à¦¯à¦¾à¦¨ à¦à¦° à¦œà¦¨à§à¦¯","220 volt AC power cord","With female port"]
  },
  {
    id:42,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"à¦«à¦¾à¦‡à¦¬à¦¾à¦° à¦ªà§‡à¦ªà¦¾à¦° (à¦®à¦¿à¦¡à¦¿à¦¯à¦¼à¦¾à¦® à¦•à§‹à¦¯à¦¼à¦¾à¦²à¦¿à¦Ÿà¦¿) Siz- 12inc x 40inc",
    cat:"à¦…à§à¦¯à¦¾à¦•à§à¦¸à§‡à¦¸à¦°à¦¿à¦¸",
    price:85,
    discount:15,
    img:"images/fiber-paper-1.webp",
    images:[
      "images/fiber-paper-1.webp",
      "images/fiber-paper-2.webp",
      "images/fiber-paper-3.webp",
      "images/fiber-paper-4.webp",
      "images/fiber-paper-5.webp"
    ],
    short:"à¦«à¦¾à¦‡à¦¬à¦¾à¦° à¦ªà§‡à¦ªà¦¾à¦° à¦ªà¦¾à¦°à¦«à§‡à¦•à§à¦Ÿ à¦¥à¦¿à¦•à¦¨à§‡à¦¸",
    desc:"à¦¨à¦¿à¦œà§‡à¦° à¦®à¦¤à§‹ à¦•à¦°à§‡ à¦¨à¦¾à¦¨à§à¦¦à¦¨à¦¿à¦• à¦“ à¦†à¦§à§à¦¨à¦¿à¦• à¦²à§à¦¯à¦¾à¦®à§à¦ª à¦¤à§ˆà¦°à¦¿ à¦•à¦°à¦¤à§‡ à¦šà¦¾à¦¨? à¦†à¦®à¦¾à¦¦à§‡à¦° à¦ªà§à¦°à¦¿à¦®à¦¿à¦¯à¦¼à¦¾à¦® à¦•à§‹à¦¯à¦¼à¦¾à¦²à¦¿à¦Ÿà¦¿à¦° à¦«à¦¾à¦‡à¦¬à¦¾à¦° à¦ªà§‡à¦ªà¦¾à¦° à¦†à¦ªà¦¨à¦¾à¦° à¦¹à§‹à¦® à¦¡à§‡à¦•à¦° à¦“ à¦²à¦¾à¦‡à¦Ÿà¦¿à¦‚ à¦ªà§à¦°à¦œà§‡à¦•à§à¦Ÿà¦•à§‡ à¦¦à§‡à¦¬à§‡ à¦à¦•à¦Ÿà¦¿ à¦¨à¦¿à¦–à§à¦à¦¤ à¦“ à¦ªà§à¦°à¦«à§‡à¦¶à¦¨à¦¾à¦² à¦²à§à¦•à¥¤ à¦Ÿà§‡à¦¬à¦¿à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª à¦¥à§‡à¦•à§‡ à¦¶à§à¦°à§ à¦•à¦°à§‡ à¦“à¦¯à¦¼à¦¾à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ªâ€”à¦¯à§‡à¦•à§‹à¦¨à§‹ à¦†à¦²à§‹à¦° à¦¸à¦¾à¦œà§‡ à¦à¦Ÿà¦¿ à¦…à¦¤à§à¦¯à¦¨à§à¦¤ à¦‰à¦ªà¦¯à§‹à¦—à§€!",
    features:["à¦ªà§à¦°à§‹à¦¡à¦¾à¦•à§à¦Ÿ: à¦«à¦¾à¦‡à¦¬à¦¾à¦° à¦ªà§‡à¦ªà¦¾à¦° (à¦®à¦¿à¦¡à¦¿à¦¯à¦¼à¦¾à¦® à¦•à§‹à¦¯à¦¼à¦¾à¦²à¦¿à¦Ÿà¦¿)","à¦¸à¦¾à¦‡à¦œ: à§§à§¨ à¦‡à¦žà§à¦šà¦¿ à¦¬à¦¾à¦‡ à§ªà§¦ à¦‡à¦žà§à¦šà¦¿","à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦°: à¦Ÿà§‡à¦¬à¦¿à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª, à¦“à¦¯à¦¼à¦¾à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª à¦à¦¬à¦‚ à¦¬à¦¿à¦­à¦¿à¦¨à§à¦¨ à¦•à§à¦°à¦¿à¦¯à¦¼à§‡à¦Ÿà¦¿à¦­ à¦¡à¦¿à¦†à¦‡à¦“à§Ÿà¦¾à¦‡ (DIY) à¦²à¦¾à¦‡à¦Ÿà¦¿à¦‚ à¦ªà§à¦°à¦œà§‡à¦•à§à¦Ÿà¥¤"]
  },
  {
    id:43,
	//stock:false,
	trending: true,
	//isNew: true,
    name:"Mini Honey Nut Box à¦ªà¦¾à¦‡à¦•à¦¾à¦°à¦¿â€“ à§§à§¯ à¦—à§à¦°à¦¾à¦® +-à§§à¦—à§à¦°à¦¾à¦® ",
    cat:"à¦…à¦°à§à¦—à¦¾à¦¨à¦¿à¦• à¦«à§à¦¡",
    price:20,
    discount:15,
    img:"images/mini-honey-nut-mixd-1.webp",
    images:[
      "images/mini-honey-nut-mixd-1.webp",
      "images/mini-honey-nut-mixd-2.webp",
      "images/mini-honey-nut-mixd-3.webp",
      "images/mini-honey-nut-mixd-4.webp",
      "images/mini-honey-nut-mixd-5.webp"
    ],
    short:"à¦¹à¦¾à¦¨à¦¿ à¦¨à¦¾à¦Ÿ 19gm mini Box à¦ªà¦¾à¦‡à¦•à¦¾à¦°à¦¿ à¦¸à¦°à§à¦¬à¦¨à¦¿à¦®à§à¦¨ à¦…à¦°à§à¦¡à¦¾à¦° à§«à§¦à¦ªà¦¿à¦¸",
    desc:"à¦¹à¦¾à¦¨à¦¿ à¦¨à¦¾à¦Ÿ 19m mini Box à¦ªà¦¾à¦‡à¦•à¦¾à¦°à¦¿ à¦¸à¦°à§à¦¬à¦¨à¦¿à¦®à§à¦¨ à¦…à¦°à§à¦¡à¦¾à¦° à§«à§¦à¦ªà¦¿à¦¸à¥¤ à¦›à§‹à¦Ÿà§à¦Ÿ à¦ªà§à¦¯à¦¾à¦•à§‡à¦Ÿà§‡ à¦ªà§à¦°à¦¾à¦•à§ƒà¦¤à¦¿à¦• à¦®à¦§à§à¦° à¦®à¦¿à¦·à§à¦Ÿà¦¤à¦¾ à¦†à¦° à¦¬à¦¿à¦­à¦¿à¦¨à§à¦¨ à¦¬à¦¾à¦¦à¦¾à¦® à¦“ à¦¬à§€à¦œà§‡à¦° à¦ªà§à¦·à§à¦Ÿà¦¿à¦—à§à¦£à§‡à¦° à¦¦à¦¾à¦°à§à¦£ à¦¸à¦®à¦¨à§à¦¬à§Ÿà¥¤ à¦•à¦¾à¦œà§à¦¬à¦¾à¦¦à¦¾à¦®, à¦•à¦¾à¦ à¦¬à¦¾à¦¦à¦¾à¦®, à¦ªà§‡à¦¸à§à¦¤à¦¾à¦¬à¦¾à¦¦à¦¾à¦®, à¦šà¦¿à¦¨à¦¾à¦¬à¦¾à¦¦à¦¾à¦®, à¦¦à§‡à¦¶à¦¿à¦¬à¦¾à¦¦à¦¾à¦®, à¦šà¦¿à§Ÿà¦¾ à¦¸à¦¿à¦¡, à¦¤à¦¿à¦², à¦•à§à¦®à§œà¦¾à¦¬à¦¿à¦œ à¦“ à¦•à¦¿à¦›à¦®à¦¿à¦› à¦à¦¬à¦‚ à¦²à¦¿à¦šà§ à¦«à§à¦²à§‡à¦° à¦®à¦§à§à¦¸à¦¹ à¦ªà§à¦·à§à¦Ÿà¦¿à¦•à¦° à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à§‡à¦° à¦¸à¦®à¦¾à¦¹à¦¾à¦°à¥¤ ðŸ’š AL-BARAKAH â€“ à¦›à§‹à¦Ÿ à¦ªà§à¦¯à¦¾à¦•à§‡à¦Ÿ, à¦¬à§œ à¦ªà§à¦·à§à¦Ÿà¦¿à¦° à¦†à¦¨à¦¨à§à¦¦à¥¤",
    features:["à¦¶à¦°à§€à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦ªà§à¦°à§Ÿà§‹à¦œà¦¨à§€à§Ÿ à¦ªà§à¦·à§à¦Ÿà¦¿ à¦“ à¦à¦¨à¦¾à¦°à§à¦œà¦¿ à¦ªà§‡à¦¤à§‡ à¦¸à¦¹à¦¾à§Ÿà¦•","à¦¬à¦¾à¦¦à¦¾à¦® à¦“ à¦¬à§€à¦œà§‡à¦° à¦ªà§à¦°à¦¾à¦•à§ƒà¦¤à¦¿à¦• à¦ªà§à¦°à§‹à¦Ÿà¦¿à¦¨, à¦­à¦¾à¦²à§‹ à¦«à§à¦¯à¦¾à¦Ÿ, à¦«à¦¾à¦‡à¦¬à¦¾à¦° à¦“ à¦¬à¦¿à¦­à¦¿à¦¨à§à¦¨ à¦®à¦¾à¦‡à¦•à§à¦°à§‹à¦¨à¦¿à¦‰à¦Ÿà§à¦°à¦¿à§Ÿà§‡à¦¨à§à¦Ÿà§‡à¦° à¦‰à§Žà¦¸","à¦•à§à¦·à§à¦§à¦¾à¦° à¦¸à¦®à§Ÿ à¦›à§‹à¦Ÿ à¦“ à¦¸à¦¹à¦œ à¦à¦•à¦Ÿà¦¿ à¦¸à§à¦¨à§à¦¯à¦¾à¦•à¦¸","à¦…à¦«à¦¿à¦¸, à¦¸à§à¦•à§à¦², à¦­à§à¦°à¦®à¦£ à¦¬à¦¾ à¦¬à§à¦¯à¦¸à§à¦¤ à¦¸à¦®à§Ÿà§‡ à¦¸à¦™à§à¦—à§‡ à¦°à¦¾à¦–à¦¾ à¦¸à¦¹à¦œ","à¦ªà§à¦°à¦¤à¦¿à¦¦à¦¿à¦¨à§‡à¦° à¦–à¦¾à¦¦à§à¦¯à¦¤à¦¾à¦²à¦¿à¦•à¦¾à§Ÿ à¦ªà§à¦·à§à¦Ÿà¦¿à¦•à¦° à¦¬à§ˆà¦šà¦¿à¦¤à§à¦°à§à¦¯ à¦¯à§‹à¦— à¦•à¦°à¦¤à§‡ à¦ªà¦¾à¦°à§‡"]
  },
  {
    id:44,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"à¦ªà§à¦°à¦¿à¦®à¦¿à§Ÿà¦¾à¦® à§«à§¦à§¦ à¦—à§à¦°à¦¾à¦® à¦®à¦¿à¦•à§à¦¸à¦¡ à¦®à¦§à§",
    cat:"à¦…à¦°à§à¦—à¦¾à¦¨à¦¿à¦• à¦«à§à¦¡",
    price:960,
    discount:20,
    img:"images/mixed-honey-1.webp",
    images:[
      "images/mixed-honey-1.webp",
      "images/mixed-honey-2.webp",
      "images/mixed-honey-1.webp",
      "images/mixed-honey-2.webp",
      "images/mixed-honey-2.webp"
    ],
    short:"à§«à§¦à§¦ à¦—à§à¦°à¦¾à¦® à¦®à¦¿à¦•à§à¦¸à¦¡ à¦®à¦§à§ à¦ªà§à¦°à¦•à§ƒà¦¤à¦¿à¦° à¦®à¦¿à¦·à§à¦Ÿà¦¤à¦¾ðŸ¯â¤ï¸",
    desc:"à¦ªà§à¦°à¦•à§ƒà¦¤à¦¿à¦° à¦®à¦¿à¦·à§à¦Ÿà¦¿ à¦‰à¦ªà¦¹à¦¾à¦°â€”à¦–à¦¾à¦à¦Ÿà¦¿ à¦®à¦§à§à¥¤ à¦ªà§à¦°à¦¤à¦¿à¦¦à¦¿à¦¨à§‡à¦° à¦–à¦¾à¦¬à¦¾à¦°à§‡à¦° à¦¤à¦¾à¦²à¦¿à¦•à¦¾à§Ÿ à¦ªà§à¦°à¦¾à¦•à§ƒà¦¤à¦¿à¦• à¦®à¦¿à¦·à§à¦Ÿà¦¤à¦¾ à¦“ à¦ªà§à¦·à§à¦Ÿà¦¿à¦—à§à¦£ à¦¯à§‹à¦— à¦•à¦°à¦¤à§‡ à¦†à¦®à¦¾à¦¦à§‡à¦° à§«à§¦à§¦ à¦—à§à¦°à¦¾à¦® à¦®à¦§à§ à¦¹à¦¤à§‡ à¦ªà¦¾à¦°à§‡ à¦¦à¦¾à¦°à§à¦£ à¦à¦•à¦Ÿà¦¿ à¦ªà¦›à¦¨à§à¦¦à¥¤ ðŸ¥„ à¦–à¦¾à¦“à§Ÿà¦¾à¦° à¦¸à¦¹à¦œ à¦¨à¦¿à§Ÿà¦®: à¦¸à¦°à¦¾à¦¸à¦°à¦¿ à§§â€“à§¨ à¦šà¦¾ à¦šà¦¾à¦®à¦š à¦–à§‡à¦¤à§‡ à¦ªà¦¾à¦°à§‡à¦¨ à¦…à¦¥à¦¬à¦¾ à¦•à§à¦¸à§à¦® à¦—à¦°à¦® à¦ªà¦¾à¦¨à¦¿/à¦¦à§à¦§à§‡à¦° à¦¸à¦™à§à¦—à§‡ à¦®à¦¿à¦¶à¦¿à§Ÿà§‡ à¦¨à¦¿à¦¤à§‡ à¦ªà¦¾à¦°à§‡à¦¨à¥¤",
    features:["à¦ªà§à¦°à¦¾à¦•à§ƒà¦¤à¦¿à¦•à¦­à¦¾à¦¬à§‡ à¦®à¦¿à¦·à§à¦Ÿà¦¿ à¦“ à¦¸à§à¦¸à§à¦¬à¦¾à¦¦à§","à¦¶à¦°à§€à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦ªà§à¦°à§Ÿà§‹à¦œà¦¨à§€à§Ÿ à¦¬à¦¿à¦­à¦¿à¦¨à§à¦¨ à¦ªà§à¦·à§à¦Ÿà¦¿ à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à§‡à¦° à¦‰à§Žà¦¸","à¦¸à¦•à¦¾à¦²à§‡ à¦¬à¦¾ à¦¦à¦¿à¦¨à§‡à¦° à¦¯à§‡à¦•à§‹à¦¨à§‹ à¦¸à¦®à§Ÿ à¦–à¦¾à¦“à§Ÿà¦¾ à¦¯à¦¾à§Ÿ","à¦šà¦¾, à¦¦à§à¦§, à¦°à§à¦Ÿà¦¿, à¦ªà¦¾à¦‰à¦°à§à¦Ÿà¦¿ à¦•à¦¿à¦‚à¦¬à¦¾ à¦¬à¦¿à¦­à¦¿à¦¨à§à¦¨ à¦–à¦¾à¦¬à¦¾à¦°à§‡à¦° à¦¸à¦™à§à¦—à§‡ à¦¸à¦¹à¦œà§‡à¦‡ à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦°à¦¯à§‹à¦—à§à¦¯","à¦ªà¦°à¦¿à¦¬à¦¾à¦°à§‡à¦° à¦¦à§ˆà¦¨à¦¨à§à¦¦à¦¿à¦¨ à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦¸à§à¦¬à¦¿à¦§à¦¾à¦œà¦¨à¦• à§«à§¦à§¦ à¦—à§à¦°à¦¾à¦® à¦œà¦¾à¦°"]
  },
  {
    id:45,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"AL-BARAKAH Honey Nut Mixed â€“ 250 à¦—à§à¦°à¦¾à¦®",
    cat:"à¦…à¦°à§à¦—à¦¾à¦¨à¦¿à¦• à¦«à§à¦¡",
    price:266,
    discount:16,
    img:"images/honey-nut-mixd-5.webp",
    images:[
      "images/honey-nut-mixd-5.webp",
      "images/honey-nut-mixd-2.webp",
      "images/honey-nut-mixd-4.webp",
      "images/honey-nut-mixd-5.webp",
      "images/honey-nut-mixd-5.webp"
    ],
    short:"à¦¹à¦¾à¦¨à¦¿ à¦¨à¦¾à¦Ÿ 250 gm",
    desc:"à¦ªà§à¦°à¦¾à¦•à§ƒà¦¤à¦¿à¦• à¦®à¦§à§à¦° à¦®à¦¿à¦·à§à¦Ÿà¦¤à¦¾ à¦†à¦° à¦¬à¦¿à¦­à¦¿à¦¨à§à¦¨ à¦¬à¦¾à¦¦à¦¾à¦® à¦“ à¦¬à§€à¦œà§‡à¦° à¦ªà§à¦·à§à¦Ÿà¦¿à¦—à§à¦£à§‡à¦° à¦¦à¦¾à¦°à§à¦£ à¦¸à¦®à¦¨à§à¦¬à§Ÿà¥¤ à¦•à¦¾à¦œà§à¦¬à¦¾à¦¦à¦¾à¦®, à¦•à¦¾à¦ à¦¬à¦¾à¦¦à¦¾à¦®, à¦ªà§‡à¦¸à§à¦¤à¦¾à¦¬à¦¾à¦¦à¦¾à¦®, à¦šà¦¿à¦¨à¦¾à¦¬à¦¾à¦¦à¦¾à¦®, à¦¦à§‡à¦¶à¦¿à¦¬à¦¾à¦¦à¦¾à¦®, à¦šà¦¿à§Ÿà¦¾ à¦¸à¦¿à¦¡, à¦¤à¦¿à¦², à¦•à§à¦®à§œà¦¾à¦¬à¦¿à¦œ à¦“ à¦•à¦¿à¦›à¦®à¦¿à¦›à¦¸à¦¹ à¦ªà§à¦·à§à¦Ÿà¦¿à¦•à¦° à¦‰à¦ªà¦¾à¦¦à¦¾à¦¨à§‡à¦° à¦¸à¦®à¦¾à¦¹à¦¾à¦°à¥¤ ðŸ’š AL-BARAKAH â€“ à¦¬à§œ à¦ªà§à¦·à§à¦Ÿà¦¿à¦° à¦†à¦¨à¦¨à§à¦¦à¥¤",
    features:["à¦¶à¦°à§€à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦ªà§à¦°à§Ÿà§‹à¦œà¦¨à§€à§Ÿ à¦ªà§à¦·à§à¦Ÿà¦¿ à¦“ à¦à¦¨à¦¾à¦°à§à¦œà¦¿ à¦ªà§‡à¦¤à§‡ à¦¸à¦¹à¦¾à§Ÿà¦•","à¦¬à¦¾à¦¦à¦¾à¦® à¦“ à¦¬à§€à¦œà§‡à¦° à¦ªà§à¦°à¦¾à¦•à§ƒà¦¤à¦¿à¦• à¦ªà§à¦°à§‹à¦Ÿà¦¿à¦¨, à¦­à¦¾à¦²à§‹ à¦«à§à¦¯à¦¾à¦Ÿ, à¦«à¦¾à¦‡à¦¬à¦¾à¦° à¦“ à¦¬à¦¿à¦­à¦¿à¦¨à§à¦¨ à¦®à¦¾à¦‡à¦•à§à¦°à§‹à¦¨à¦¿à¦‰à¦Ÿà§à¦°à¦¿à§Ÿà§‡à¦¨à§à¦Ÿà§‡à¦° à¦‰à§Žà¦¸","à¦•à§à¦·à§à¦§à¦¾à¦° à¦¸à¦®à§Ÿ à¦¸à¦¹à¦œ à¦à¦•à¦Ÿà¦¿ à¦¸à§à¦¨à§à¦¯à¦¾à¦•à¦¸","à¦ªà§à¦°à¦¤à¦¿à¦¦à¦¿à¦¨à§‡à¦° à¦–à¦¾à¦¦à§à¦¯à¦¤à¦¾à¦²à¦¿à¦•à¦¾à§Ÿ à¦ªà§à¦·à§à¦Ÿà¦¿à¦•à¦° à¦¬à§ˆà¦šà¦¿à¦¤à§à¦°à§à¦¯ à¦¯à§‹à¦— à¦•à¦°à¦¤à§‡ à¦ªà¦¾à¦°à§‡"]
  },
  {
    id:46,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"Zatax Attar 8ml",
    cat:"à¦ªà§à¦°à¦¸à¦¾à¦§à¦¨à§€",
    price:120,
    discount:13,
    img:"images/zatax-attar-1.webp",
    images:[
      "images/zatax-attar-1.webp",
      "images/zatax-attar-2.webp",
      "images/zatax-attar-3.webp",
      "images/zatax-attar-1.webp",
      "images/zatax-attar-2.webp"
    ],
    short:"à¦ªà§à¦°à¦¿à¦®à¦¿à§Ÿà¦¾à¦® à¦ªà¦¾à¦°à¦«à¦¿à¦‰à¦® à¦¸à§à¦—à¦¨à§à¦§à§€",
    desc:"Alif Zatax 8ml-à¦à¦° à¦ªà§à¦°à¦¸à§à¦¤à§à¦¤à¦•à¦¾à¦°à¦•à§‡à¦° à¦¤à¦¥à§à¦¯ à¦…à¦¨à§à¦¯à¦¾à§Ÿà§€ à¦à¦Ÿà¦¿ à¦à¦•à¦Ÿà¦¿ Unisex oil perfume, à¦¯à¦¾à¦° à¦˜à§à¦°à¦¾à¦£à§‡ Patchouli, Amber, Vanilla à¦“ Sandalwood-à¦à¦° à¦¸à¦®à¦¨à§à¦¬à§Ÿ à¦°à§Ÿà§‡à¦›à§‡à¥¤ à¦à¦Ÿà¦¿ à¦…à§à¦¯à¦¾à¦²à¦•à§‹à¦¹à¦²à¦®à§à¦•à§à¦¤ à¦†à¦¤à¦° à¦¹à¦¿à¦¸à§‡à¦¬à§‡ à¦¬à¦¾à¦œà¦¾à¦°à¦œà¦¾à¦¤ à¦•à¦°à¦¾ à¦¹à§Ÿà¥¤ Zatax Attar 8ml à¦à¦•à¦Ÿà¦¿ à¦ªà§à¦°à¦¿à¦®à¦¿à§Ÿà¦¾à¦® à¦“ à¦†à¦•à¦°à§à¦·à¦£à§€à§Ÿ à¦¸à§à¦—à¦¨à§à¦§à¦¿à¦° à¦†à¦¤à¦°, à¦¯à¦¾ à¦ªà§à¦°à§à¦· à¦“ à¦¨à¦¾à¦°à§€ à¦‰à¦­à§Ÿà§‡à¦° à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦°à§‡à¦° à¦‰à¦ªà¦¯à§‹à¦—à§€à¥¤ à¦à¦° à¦‰à¦¡à¦¿, à¦…à§à¦¯à¦¾à¦®à§à¦¬à¦¾à¦° à¦“ à¦®à¦¿à¦·à§à¦Ÿà¦¿ à¦­à§à¦¯à¦¾à¦¨à¦¿à¦²à¦¾ à¦˜à§à¦°à¦¾à¦£ à¦¬à§à¦¯à¦•à§à¦¤à¦¿à¦¤à§à¦¬à§‡ à¦†à¦¨à§‡ à¦°à§à¦šà¦¿à¦¶à§€à¦²à¦¤à¦¾ à¦“ à¦†à¦•à¦°à§à¦·à¦£à§€à§Ÿ à¦…à¦¨à§à¦­à§‚à¦¤à¦¿à¥¤ à¦¦à§ˆà¦¨à¦¨à§à¦¦à¦¿à¦¨ à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦°, à¦…à¦«à¦¿à¦¸, à¦­à§à¦°à¦®à¦£ à¦•à¦¿à¦‚à¦¬à¦¾ à¦¬à¦¿à¦¶à§‡à¦· à¦…à¦¨à§à¦·à§à¦ à¦¾à¦¨à§‡ à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à¦¾ à¦¯à¦¾à§Ÿà¥¤",
    features:["à§®ml à¦•à¦®à¦ªà§à¦¯à¦¾à¦•à§à¦Ÿ à¦“ à¦¸à¦¹à¦œà§‡ à¦¬à¦¹à¦¨à¦¯à§‹à¦—à§à¦¯ à¦¬à§‹à¦¤à¦²","Unisex â€” à¦¨à¦¾à¦°à§€ à¦“ à¦ªà§à¦°à§à¦· à¦‰à¦­à§Ÿà§‡à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§‹à¦—à§€","à¦…à§à¦¯à¦¾à¦²à¦•à§‹à¦¹à¦²à¦®à§à¦•à§à¦¤ à¦†à¦¤à¦°","Long-lasting fragrance","Roll-on à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦°à§‡à¦° à¦¸à§à¦¬à¦¿à¦§à¦¾","Patchouli, Amber, Vanilla à¦“ Sandalwood-à¦à¦° à¦®à¦¨à§‹à¦®à§à¦—à§à¦§à¦•à¦° à¦˜à§à¦°à¦¾à¦£à§‡à¦° à¦¸à¦®à¦¨à§à¦¬à§Ÿ","à¦¦à§ˆà¦¨à¦¨à§à¦¦à¦¿à¦¨ à¦“ à¦¬à¦¿à¦¶à§‡à¦· à¦…à¦¨à§à¦·à§à¦ à¦¾à¦¨à§‡ à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦°à§‡à¦° à¦‰à¦ªà¦¯à§‹à¦—à§€","à¦…à¦²à§à¦ª à¦ªà¦°à¦¿à¦®à¦¾à¦£à§‡à¦‡ à¦®à¦¨à§‹à¦°à¦® à¦¸à§à¦—à¦¨à§à¦§à¦¿ à¦‰à¦ªà¦­à§‹à¦—à§‡à¦° à¦¸à§à¦¬à¦¿à¦§à¦¾"]
  },
  {
    id:47,
	//stock:false,
	//trending: true,
	//isNew: true,
    name:"Vampire Blood Attar 8ml",
    cat:"à¦ªà§à¦°à¦¸à¦¾à¦§à¦¨à§€",
    price:120,
    discount:13,
    img:"images/vampire-blood-attar-1.webp",
    images:[
      "images/vampire-blood-attar-1.webp",
      "images/vampire-blood-attar-2.webp",
      "images/vampire-blood-attar-3.webp",
      "images/vampire-blood-attar-1.webp",
      "images/vampire-blood-attar-2.webp"
    ],
    short:"à¦°à¦¹à¦¸à§à¦¯à¦®à§Ÿ à¦“ à¦†à¦•à¦°à§à¦·à¦£à§€à§Ÿ à¦¸à§à¦—à¦¨à§à¦§à¦¿à¦° à¦à¦• à¦…à¦¨à¦¨à§à¦¯ à¦…à¦¨à§à¦­à§‚à¦¤à¦¿",
    desc:"à¦¨à¦¾à¦®à§‡à¦° à¦®à¦¤à§‹à¦‡ à¦à¦° à¦˜à§à¦°à¦¾à¦£à§‡ à¦°à§Ÿà§‡à¦›à§‡ à¦à¦• à¦§à¦°à¦¨à§‡à¦° à¦°à¦¹à¦¸à§à¦¯, à¦—à¦­à§€à¦°à¦¤à¦¾ à¦“ à¦†à¦•à¦°à§à¦·à¦£à¥¤ Vampire Blood Attar à¦®à§‚à¦²à¦¤ à¦®à¦¿à¦·à§à¦Ÿà¦¿ à¦“ à¦¡à¦¾à¦°à§à¦• à¦«à§à¦°à§à¦Ÿà¦¿ à¦˜à§à¦°à¦¾à¦£à§‡à¦° à¦¸à¦™à§à¦—à§‡ à¦«à§à¦²à§‹à¦°à¦¾à¦² à¦à¦¬à¦‚ à¦®à¦¸à§à¦•à¦¿ à¦¨à§‹à¦Ÿà§‡à¦° à¦¸à§à¦¨à§à¦¦à¦° à¦¸à¦®à¦¨à§à¦¬à§Ÿâ€”à¦¯à¦¾ à¦¸à¦¾à¦§à¦¾à¦°à¦£ à¦¸à§à¦—à¦¨à§à¦§à¦¿ à¦¥à§‡à¦•à§‡ à¦à¦•à¦Ÿà§ à¦­à¦¿à¦¨à§à¦¨ à¦§à¦°à¦¨à§‡à¦° à¦ªà¦¾à¦°à¦«à¦¿à¦‰à¦® à¦ªà¦›à¦¨à§à¦¦ à¦•à¦°à§‡à¦¨ à¦¤à¦¾à¦¦à§‡à¦° à¦œà¦¨à§à¦¯ à¦¦à¦¾à¦°à§à¦£ à¦à¦•à¦Ÿà¦¿ à¦ªà¦›à¦¨à§à¦¦à¥¤ ðŸŒ¹ à¦˜à§à¦°à¦¾à¦£à§‡à¦° à¦§à¦°à¦¨: Dark Fruity â€¢ Sweet â€¢ Floral â€¢ Musky â€¢ Mysterious. à¦ªà§à¦°à¦¥à¦®à§‡ à¦ªà¦¾à¦“à§Ÿà¦¾ à¦¯à¦¾à§Ÿ à¦®à¦¿à¦·à§à¦Ÿà¦¿ à¦“ à¦œà§à¦¸à¦¿ à¦«à¦²à§‡à¦° à¦˜à§à¦°à¦¾à¦£, à¦à¦°à¦ªà¦° à¦§à§€à¦°à§‡ à¦§à§€à¦°à§‡ à¦«à§à¦Ÿà§‡ à¦“à¦ à§‡ à¦«à§à¦²à§‹à¦°à¦¾à¦² à¦¨à§‹à¦Ÿ à¦à¦¬à¦‚ à¦¶à§‡à¦·à§‡ à¦¥à¦¾à¦•à§‡ à¦¨à¦°à¦® à¦®à¦¸à§à¦•à¦¿, à¦‰à¦·à§à¦£ à¦“ à¦—à¦­à§€à¦° à¦à¦•à¦Ÿà¦¿ à¦¬à§‡à¦¸â€”à¦¯à¦¾ à¦ªà§à¦°à§‹ à¦¸à§à¦—à¦¨à§à¦§à¦¿à¦Ÿà¦¿à¦•à§‡ à¦•à¦°à§‡ à¦¤à§‹à¦²à§‡ à¦†à¦°à¦“ à¦†à¦•à¦°à§à¦·à¦£à§€à§Ÿ à¦“ à¦¸à§à¦®à¦°à¦£à§€à§Ÿà¥¤ ðŸ’Ž à¦•à¦¾à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§à¦•à§à¦¤: à¦¯à¦¾à¦°à¦¾ à¦®à¦¿à¦·à§à¦Ÿà¦¿, à¦«à§à¦°à§à¦Ÿà¦¿, à¦à¦•à¦Ÿà§ à¦¡à¦¾à¦°à§à¦• à¦“ à¦°à¦¹à¦¸à§à¦¯à¦®à§Ÿ à¦§à¦°à¦¨à§‡à¦° à¦¸à§à¦—à¦¨à§à¦§à¦¿ à¦ªà¦›à¦¨à§à¦¦ à¦•à¦°à§‡à¦¨ à¦à¦¬à¦‚ à¦ªà§à¦°à¦šà¦²à¦¿à¦¤ à¦†à¦¤à¦°à§‡à¦° à¦¬à¦¾à¦‡à¦°à§‡ à¦à¦•à¦Ÿà§ à¦†à¦²à¦¾à¦¦à¦¾ signature scent à¦–à§à¦à¦œà¦›à§‡à¦¨, à¦¤à¦¾à¦¦à§‡à¦° à¦œà¦¨à§à¦¯ Vampire Blood Attar à¦¹à¦¤à§‡ à¦ªà¦¾à¦°à§‡ à¦šà¦®à§Žà¦•à¦¾à¦° à¦à¦•à¦Ÿà¦¿ à¦ªà¦›à¦¨à§à¦¦à¥¤",
    features:["à§®ml à¦•à¦®à¦ªà§à¦¯à¦¾à¦•à§à¦Ÿ à¦“ à¦¸à¦¹à¦œà§‡ à¦¬à¦¹à¦¨à¦¯à§‹à¦—à§à¦¯ à¦¬à§‹à¦¤à¦²","à¦¡à¦¾à¦°à§à¦• à¦«à§à¦°à§à¦Ÿà¦¿ à¦…à§à¦¯à¦¾à¦°à§‹à¦®à¦¾ â€” Black Cherry, Red Berries à¦“ Plum-à¦à¦° à¦®à¦¿à¦·à§à¦Ÿà¦¿-à¦«à§à¦°à§à¦Ÿà¦¿ à¦…à¦¨à§à¦­à§‚à¦¤à¦¿","à¦«à§à¦²à§‹à¦°à¦¾à¦² à¦Ÿà¦¾à¦š â€” Jasmine à¦“ à¦…à¦¨à§à¦¯à¦¾à¦¨à§à¦¯ à¦«à§à¦²à§‡à¦° à¦¨à¦°à¦® à¦˜à§à¦°à¦¾à¦£","à¦®à¦¾à¦¸à§à¦•à¦¿ à¦“ à¦‰à¦¡à¦¿ à¦¬à§‡à¦¸ â€” à¦˜à§à¦°à¦¾à¦£à§‡ à¦¯à§‹à¦— à¦•à¦°à§‡ à¦—à¦­à§€à¦°à¦¤à¦¾ à¦“ à¦†à¦•à¦°à§à¦·à¦£","à¦®à¦¿à¦·à§à¦Ÿà¦¿ à¦“ à¦‰à¦·à§à¦£ à¦…à¦¨à§à¦­à§‚à¦¤à¦¿ â€” Vanilla, Amber à¦¬à¦¾ à¦…à¦¨à§à¦°à§‚à¦ª à¦‰à¦·à§à¦£ à¦¨à§‹à¦Ÿà§‡à¦° à¦•à¦¾à¦°à¦£à§‡ à¦˜à§à¦°à¦¾à¦£à¦Ÿà¦¿ à¦†à¦°à¦“ à¦¸à¦®à§ƒà¦¦à§à¦§ à¦²à¦¾à¦—à§‡","à¦¨à¦¾à¦°à§€ à¦“ à¦ªà§à¦°à§à¦· à¦‰à¦­à§Ÿà§‡à¦° à¦œà¦¨à§à¦¯ à¦‰à¦ªà¦¯à§‹à¦—à§€","Evening & Night Wear â€” à¦¸à¦¨à§à¦§à§à¦¯à¦¾, à¦°à¦¾à¦¤, à¦ªà¦¾à¦°à§à¦Ÿà¦¿ à¦“ à¦¬à¦¿à¦¶à§‡à¦· à¦…à¦¨à§à¦·à§à¦ à¦¾à¦¨à§‡à¦° à¦œà¦¨à§à¦¯ à¦¬à¦¿à¦¶à§‡à¦·à¦­à¦¾à¦¬à§‡ à¦®à¦¾à¦¨à¦¾à¦¨à¦¸à¦‡","Concentrated Attar/Perfume Oil â€” à¦…à¦²à§à¦ª à¦ªà¦°à¦¿à¦®à¦¾à¦£à§‡à¦‡ à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à¦¾ à¦¯à¦¾à§Ÿ; à¦¤à¦¬à§‡ à¦¸à§à¦¥à¦¾à§Ÿà¦¿à¦¤à§à¦¬ à¦¤à§à¦¬à¦•, à¦†à¦¬à¦¹à¦¾à¦“à§Ÿà¦¾ à¦“ à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦°à§‡à¦° à¦ªà¦°à¦¿à¦®à¦¾à¦£à§‡à¦° à¦“à¦ªà¦° à¦¨à¦¿à¦°à§à¦­à¦° à¦•à¦°à§‡à¥¤"]
  }
];

let cart=JSON.parse(localStorage.getItem("albarakah_cart")||"[]"),active="à¦¸à¦¬";
let currentProduct=null,currentImage=0;
const money=n=>"à§³"+Number(n).toLocaleString("bn-BD");
// ===== PRODUCT PRICE SETTINGS =====
// à¦ªà§à¦°à¦¤à¦¿à¦Ÿà¦¿ à¦ªà¦£à§à¦¯à§‡ à¦¶à§à¦§à§ price (à¦®à§‚à¦² à¦¦à¦¾à¦®) à¦à¦¬à¦‚ discount (%) à¦²à¦¿à¦–à¦²à§‡à¦‡ à¦¹à¦¬à§‡à¥¤
// Current Price à¦“ à¦•à¦¤ à¦Ÿà¦¾à¦•à¦¾ Save à¦¹à¦¬à§‡â€”à¦¦à§à¦Ÿà¦¿à¦‡ à¦…à¦Ÿà§‹à¦®à§‡à¦Ÿà¦¿à¦• à¦¹à¦¿à¦¸à¦¾à¦¬ à¦¹à¦¬à§‡à¥¤
function discountAmount(p){
  const base=Number(p.price)||0;
  const percent=Number(p.discount)||0;
  return Math.round(base*percent/100);
}
function currentPrice(p){
  return Math.max(0,(Number(p.price)||0)-discountAmount(p));
}
function priceHTML(p){
  const base=Number(p.price)||0;
  const save=discountAmount(p);
  const current=currentPrice(p);
  const hasDiscount=Number(p.discount)>0 && save>0;
  return `<div class="price-box">${hasDiscount?`<span class="old-price">à¦®à§‚à¦² à¦®à§‚à¦²à§à¦¯: <s>${money(base)}</s></span><span class="discount-badge">${money(save)} SAVE</span>`:''}<strong class="current-price">${money(current)}</strong></div>`;
}
function save(){localStorage.setItem("albarakah_cart",JSON.stringify(cart));count()}
function count(){document.getElementById("cartCount").textContent=cart.reduce((a,b)=>a+b.qty,0)}
function ensureStickyCategory(){
  const el=document.getElementById("categories");
  if(!el)return;
  el.classList.add("alba-sticky-category");
}
function scrollActiveCategoryIntoView(){
  const el = document.getElementById("categories");

  if(!el) return;

  /*
   * Mobile-à¦ category à¦•à¦–à¦¨à§‹ automatically center à¦¹à¦¬à§‡ à¦¨à¦¾à¥¤
   * à¦¸à¦¬à¦¸à¦®à§Ÿ à¦ªà§à¦°à¦¥à¦®à§‡ "à¦¸à¦¬" category à¦¥à§‡à¦•à§‡à¦‡ à¦¶à§à¦°à§ à¦¹à¦¬à§‡à¥¤
   */

  if(window.innerWidth <= 650){

    requestAnimationFrame(() => {

      el.scrollTo({
        left: 0,
        behavior: "instant"
      });

    });

  }
}
function categoryImage(cat){
  const item = cat === "à¦¸à¦¬"
    ? products[0]
    : products.find(x => x.cat === cat);
  return item && (item.img || (item.images && item.images[0]))
    ? (item.img || item.images[0])
    : "images/logo.webp";
}

function goToCategory(cat){
  closeMobileMenu();
  if(IS_PRODUCT_PAGE){
    window.location.href = "index.html?category=" + encodeURIComponent(cat) + "#products";
    return;
  }
  const search = new URLSearchParams(window.location.search);
  search.set("category", cat);
  const newUrl = window.location.pathname + "?" + search.toString() + "#products";
  history.replaceState(null, "", newUrl);
  active = cat;
  categories();
  renderProducts();
  document.getElementById("products")?.scrollIntoView({behavior:"smooth", block:"start"});
}

function renderMenuCategories(){
  const menu = document.getElementById("menuCategoryLinks");
  if(!menu) return;

  const categoryList = ["à¦¸à¦¬", ...new Set(products.map(x => x.cat))];

  menu.innerHTML = categoryList.map(cat => `
    <button type="button"
      class="menu-category-card ${cat === active ? "active" : ""}"
      onclick='goToCategory(${JSON.stringify(cat)})'>
      <img src="${categoryImage(cat)}" alt="${cat}" loading="lazy">
      <span>${cat}</span>
    </button>
  `).join("");
}

function categories(){

  const original = document.getElementById("categories");

  if(!original) return;


  // =====================================================
  // CATEGORY OUTSIDE ARROW WRAPPER
  // =====================================================

  let shell = original.parentElement;

  if(!shell || !shell.classList.contains("category-scroll-shell")){

    shell = document.createElement("div");

    shell.className = "category-scroll-shell";

    original.parentNode.insertBefore(
      shell,
      original
    );

    shell.appendChild(original);


    // -------------------------------------------------
    // Right fade - scroll area-à¦à¦° à¦¬à¦¾à¦‡à¦°à§‡
    // -------------------------------------------------

    const fade = document.createElement("div");

    fade.className = "category-scroll-fade";

    fade.setAttribute(
      "aria-hidden",
      "true"
    );

    shell.appendChild(fade);


    // -------------------------------------------------
    // Arrow - IMPORTANT
    // à¦à¦Ÿà¦¾ #categories-à¦à¦° à¦­à¦¿à¦¤à¦°à§‡ à¦¨à§Ÿ
    // shell-à¦à¦° à¦†à¦²à¦¾à¦¦à¦¾ element
    // -------------------------------------------------

    const arrow = document.createElement("div");

    arrow.className =
      "category-scroll-arrow";

    arrow.innerHTML = "â€º";

    arrow.setAttribute(
      "aria-hidden",
      "true"
    );

    shell.appendChild(arrow);


    // -------------------------------------------------
    // First time swipe hint
    // -------------------------------------------------

    const hint = document.createElement("div");

    hint.className =
      "category-scroll-hint";

    hint.innerHTML =
      '<span class="hint-hand">ðŸ‘‰</span>' +
      '<span>à¦†à¦°à¦“ à¦•à§à¦¯à¦¾à¦Ÿà¦¾à¦—à¦°à¦¿ à¦¦à§‡à¦–à¦¤à§‡ à¦¡à¦¾à¦¨à§‡ à¦¸à§‹à§Ÿà¦¾à¦‡à¦ª à¦•à¦°à§à¦¨</span>' +
      '<span class="hint-arrow">â†’</span>';

    shell.appendChild(hint);


    // =================================================
    // CATEGORY INDICATOR UPDATE
    // =================================================

    const updateIndicator = () => {

      const max =
        Math.max(
          0,
          original.scrollWidth -
          original.clientWidth
        );

      const hasOverflow = max > 4;

      shell.classList.toggle(
        "has-overflow",
        hasOverflow
      );

      shell.classList.toggle(
        "no-overflow",
        !hasOverflow
      );


      // Category-à¦à¦° à¦†à¦° scroll à¦•à¦°à¦¾à¦° à¦œà¦¾à§Ÿà¦—à¦¾ à¦¨à¦¾ à¦¥à¦¾à¦•à¦²à§‡
      // Arrow à¦ªà§à¦°à§‹à¦ªà§à¦°à¦¿ à¦¬à¦¨à§à¦§
      if(!hasOverflow){

        arrow.classList.remove("show");

        return;
      }


      // à¦à¦•à¦¦à¦® à¦¡à¦¾à¦¨ à¦ªà¦¾à¦¶à§‡ à¦ªà§Œà¦à¦›à§‡ à¦—à§‡à¦²à§‡ Arrow à¦¬à¦¨à§à¦§
      const atEnd =
        original.scrollLeft >= max - 3;

      arrow.classList.toggle(
        "show",
        !atEnd
      );

    };


    // =================================================
    // USER CATEGORY SCROLL
    // =================================================

    original.addEventListener(
      "scroll",
      () => {

        updateIndicator();

        // User swipe à¦¶à§à¦°à§ à¦•à¦°à¦²à§‡ hint à¦¬à¦¨à§à¦§
        if(original.scrollLeft > 5){

          hint.classList.remove("show");

        }

      },
      {
        passive:true
      }
    );


    // Screen resize à¦¹à¦²à§‡ indicator update
    window.addEventListener(
      "resize",
      updateIndicator,
      {
        passive:true
      }
    );


    // =================================================
    // FIRST TIME CATEGORY VIEW HINT
    // =================================================

    if(window.IntersectionObserver){

      const observer =
        new IntersectionObserver(
          entries => {

            if(!entries[0].isIntersecting){
              return;
            }


            if(
              window.innerWidth <= 650 &&
              localStorage.getItem(
                "albarakah_category_swipe_hint_seen"
              ) !== "1"
            ){

              hint.classList.add("show");


              // User à¦à¦•à¦¬à¦¾à¦° Hint à¦¦à§‡à¦–à§‡ à¦«à§‡à¦²à§‡à¦›à§‡
              localStorage.setItem(
                "albarakah_category_swipe_hint_seen",
                "1"
              );


              // à§© à¦¸à§‡à¦•à§‡à¦¨à§à¦¡ à¦ªà¦°à§‡ Hint à¦šà¦²à§‡ à¦¯à¦¾à¦¬à§‡
              setTimeout(
                () => {

                  hint.classList.remove(
                    "show"
                  );

                },
                3000
              );

            }


            observer.disconnect();

          },
          {
            threshold:0.35
          }
        );


      observer.observe(shell);

    }


    // à¦ªà§à¦°à¦¥à¦®à¦¬à¦¾à¦° indicator update
    requestAnimationFrame(
      updateIndicator
    );

  }


  // =====================================================
  // CATEGORY BUTTON GENERATE
  // =====================================================

  const categoryList = [
    "à¦¸à¦¬",
    ...new Set(
      products.map(x => x.cat)
    )
  ];


  original.innerHTML =
    categoryList.map(
      x =>
        `<button class="cat ${
          x === active ? "active" : ""
        }"
        onclick='setCat(${JSON.stringify(x)})'>
          <img class="cat-image" src="${categoryImage(x)}" alt="${x}" loading="lazy">
          <span class="cat-name">${x}</span>
        </button>`
    ).join("");

  renderMenuCategories();


  // =====================================================
  // MOBILE INITIAL POSITION
  // =====================================================

  if(window.innerWidth <= 650){

    requestAnimationFrame(() => {

      // à¦¸à¦¬à¦¸à¦®à§Ÿ à¦ªà§à¦°à¦¥à¦®à§‡ à¦¬à¦¾à¦® à¦¦à¦¿à¦• à¦¥à§‡à¦•à§‡ à¦¶à§à¦°à§ à¦¹à¦¬à§‡
      original.scrollLeft = 0;


      const arrow =
        shell.querySelector(
          ".category-scroll-arrow"
        );


      if(arrow){

        const max =
          Math.max(
            0,
            original.scrollWidth -
            original.clientWidth
          );


        arrow.classList.toggle(
          "show",
          max > 4
        );

      }

    });

  }

}
function setCat(x){
  active=x;
  categories();
  renderProducts();
  renderMenuCategories();
}
function isStockOut(p){
  const s=p && p.stock;
  return s===false || s===0 || String(s).trim().toLowerCase() === "out" ||
         String(s).trim().toLowerCase() === "stock out" ||
         String(s).trim().toLowerCase() === "stockout";
}

function stockStatusHTML(p){
  return isStockOut(p)
    ? '<span class="stock-status stock-out">ðŸ”´ Stock Out</span>'
    : '<span class="stock-status stock-in">ðŸŸ¢ In Stock</span>';
}

function isInStock(p){
  return !isStockOut(p);
}

function setProductStock(id, inStock){
  const p=products.find(x=>x.id===id);
  if(p) p.stock=!!inStock;
  renderProducts();
  if(currentProduct && currentProduct.id===id) renderProductModal();
}

function renderFeaturedProducts(){
  const trendingEl=document.getElementById("trendingProducts");
  const arrivalsEl=document.getElementById("newArrivalsProducts");
  if(!trendingEl || !arrivalsEl) return;

  // Manual selection: no automatic discount ranking or array-tail guessing.
  // Accept boolean true (recommended), numeric 1, or text "true" for flags.
  // A manually tagged Trending product remains visible even when out of stock;
  // its cart/order buttons stay disabled by the existing stock checks below.
  const isManualFlagEnabled=(p,key)=>{
    const value=p ? p[key] : undefined;
    return value===true || value===1 || String(value).trim().toLowerCase()==="true";
  };
  const trending=products.filter(p=>isManualFlagEnabled(p,"trending")).slice(0,4);
  const arrivals=products.filter(p=>isManualFlagEnabled(p,"isNew")).reverse().slice(0,4);
  const cardHTML=(p,label)=>`<article class="product featured-product-card" onclick="openProduct(${p.id})">
    <div class="pimg"><img src="${p.img}" alt="${p.name}" loading="lazy"><span class="featured-tag">${label}</span></div>
    <div class="pinfo"><span class="p-cat">${p.cat}</span><h3>${p.name}</h3><p>${p.short||""}</p><div class="product-bottom">
    <div class="stock-row">${stockStatusHTML(p)}</div>${priceHTML(p)}
    <div class="product-actions"><button class="add" ${isStockOut(p)?'disabled aria-disabled="true"':''} onclick="event.stopPropagation();${isStockOut(p)?'':'add('+p.id+')'}">ðŸ›’ à¦•à¦¾à¦°à§à¦Ÿ +</button>
    <button class="add order-btn" ${isStockOut(p)?'disabled aria-disabled="true"':''} onclick="event.stopPropagation();${isStockOut(p)?'':'orderNow('+p.id+')'}">âš¡ à¦…à¦°à§à¦¡à¦¾à¦° à¦•à¦°à§à¦¨</button></div>
    </div></div></article>`;
  trendingEl.innerHTML=trending.map(p=>cardHTML(p,"ðŸ”¥ TRENDING")).join("")||"<p>à¦¶à§€à¦˜à§à¦°à¦‡ à¦œà¦¨à¦ªà§à¦°à¦¿à§Ÿ à¦ªà¦£à§à¦¯ à¦¯à§à¦•à§à¦¤ à¦¹à¦¬à§‡à¥¤</p>";
  arrivalsEl.innerHTML=arrivals.map(p=>cardHTML(p,"âœ¨ NEW ARRIVAL")).join("")||"<p>à¦¨à¦¤à§à¦¨ à¦ªà¦£à§à¦¯ à¦¶à§€à¦˜à§à¦°à¦‡ à¦†à¦¸à¦›à§‡à¥¤</p>";
}

function addPremiumTrustAndSupport(){
  if(!document.getElementById("albaTrustStrip")){
    const strip=document.createElement("section");
    strip.id="albaTrustStrip"; strip.className="alba-trust-strip";
    strip.innerHTML='<div class="alba-trust-item"><span>âœ“</span><div><strong>à¦¬à¦¿à¦¶à§à¦¬à¦¸à§à¦¤ à¦¸à§‡à¦¬à¦¾</strong><small>à¦•à¦¾à¦¸à§à¦Ÿà¦®à¦¾à¦°-à¦•à§‡à¦¨à§à¦¦à§à¦°à¦¿à¦• à¦¸à¦¹à¦¾à§Ÿà¦¤à¦¾</small></div></div><div class="alba-trust-item"><span>ðŸ”’</span><div><strong>à¦¨à¦¿à¦°à¦¾à¦ªà¦¦ à¦…à¦°à§à¦¡à¦¾à¦°</strong><small>à¦¸à¦¹à¦œ à¦“ à¦¨à¦¿à¦°à§à¦­à¦°à¦¯à§‹à¦—à§à¦¯ à¦…à¦°à§à¦¡à¦¾à¦° à¦ªà§à¦°à¦•à§à¦°à¦¿à§Ÿà¦¾</small></div></div><div class="alba-trust-item"><span>ðŸ“¦</span><div><strong>à¦¯à¦¤à§à¦¨à¦¸à¦¹à¦•à¦¾à¦°à§‡ à¦ªà§à¦¯à¦¾à¦•à¦¿à¦‚</strong><small>à¦ªà¦£à§à¦¯ à¦ªà§Œà¦à¦›à¦¾à¦¨à§‹ à¦ªà¦°à§à¦¯à¦¨à§à¦¤ à¦—à§à¦°à§à¦¤à§à¦¬</small></div></div><div class="alba-trust-item"><span>ðŸ’¬</span><div><strong>à¦¸à¦°à¦¾à¦¸à¦°à¦¿ à¦¸à¦¾à¦ªà§‹à¦°à§à¦Ÿ</strong><small>à¦ªà§à¦°à§Ÿà§‹à¦œà¦¨à§‡ à¦†à¦®à¦¾à¦¦à§‡à¦° à¦¸à¦¾à¦¥à§‡ à¦¯à§‹à¦—à¦¾à¦¯à§‹à¦—</small></div></div>';
    const main=document.querySelector("main");
    if(main) main.insertAdjacentElement("afterend",strip);
  }
  if(!document.getElementById("albaFloatingSupport")){
    const link=document.createElement("a");
    link.id="albaFloatingSupport"; link.className="alba-floating-support";
    link.href="https://wa.me/8801670455526"; link.target="_blank"; link.rel="noopener noreferrer";
    link.setAttribute("aria-label","WhatsApp-à¦ à¦¯à§‹à¦—à¦¾à¦¯à§‹à¦— à¦•à¦°à§à¦¨");
    link.innerHTML='<span class="support-wa-icon">â˜</span><span class="support-label"><strong>à¦¸à¦¾à¦¹à¦¾à¦¯à§à¦¯ à¦²à¦¾à¦—à¦¬à§‡?</strong><small>WhatsApp-à¦ à¦•à¦¥à¦¾ à¦¬à¦²à§à¦¨</small></span>';
    document.body.appendChild(link);
  }
}

function renderProducts(){
  const q=document.getElementById("search").value.toLowerCase().trim();
  const a=products.filter(x=>(active==="à¦¸à¦¬"||x.cat===active)&&(!q||x.name.toLowerCase().includes(q)||x.cat.toLowerCase().includes(q)||x.short.toLowerCase().includes(q)));
  document.getElementById("productGrid").innerHTML=a.map(x=>{
    const out=isStockOut(x);
    return `<article class="product ${out?'is-stock-out':''}" onclick="openProduct(${x.id})">
      <div class="pimg"><img src="${x.img}" alt="${x.name}"><span class="view-badge">${money(discountAmount(x))} SAVE</span></div>
      <div class="pinfo"><span class="p-cat">${x.cat}</span><h3>${x.name}</h3><p>${x.short}</p><div class="product-bottom">
        <div class="stock-row">${stockStatusHTML(x)}</div>
        ${priceHTML(x)}
        <div class="product-actions">
          <button class="add" ${out?'disabled aria-disabled="true"':''} onclick="event.stopPropagation();${out?'':'add('+x.id+')'}">ðŸ›’ à¦•à¦¾à¦°à§à¦Ÿ +</button>
          <button class="add order-btn" ${out?'disabled aria-disabled="true"':''} onclick="event.stopPropagation();${out?'':'orderNow('+x.id+')'}">âš¡ à¦…à¦°à§à¦¡à¦¾à¦° à¦•à¦°à§à¦¨</button>
        </div>
      </div></div>
    </article>`;
  }).join("")||"<p>à¦•à§‹à¦¨à§‹ à¦ªà¦£à§à¦¯ à¦ªà¦¾à¦“à§Ÿà¦¾ à¦¯à¦¾à§Ÿà¦¨à¦¿à¥¤</p>"
}
function openProduct(id){
  const p=products.find(x=>x.id===id);
  if(!p)return;

  if(!IS_PRODUCT_PAGE){
    const url="product.html?id="+encodeURIComponent(id);
    window.location.href=url;
    return;
  }

  currentProduct=p;
  currentImage=0;
  renderProductModal();
}
function closeProduct(e){
  if(IS_PRODUCT_PAGE){
    window.location.href="index.html#products";
    return;
  }
  if(!e||e.target.id==="productModal"){
    document.getElementById("productModal")?.classList.remove("show");
    document.body.classList.remove("modal-open");
  }
}
function renderProductModal(){
  if(!currentProduct)return;
  const p=currentProduct;
  document.getElementById("modalImage").src=p.images[currentImage];
  document.getElementById("modalImage").alt=p.name;
  const photoCount=document.getElementById("photoCount");
  if(photoCount) photoCount.textContent=(p.images.length||0)+"à¦Ÿà¦¿ à¦›à¦¬à¦¿";
  document.getElementById("modalThumbs").innerHTML=p.images.map((src,i)=>`<button class="thumb-btn ${i===currentImage?'active':''}" onclick="selectProductImage(${i})"><img src="${src}" alt="à¦›à¦¬à¦¿ ${i+1}"></button>`).join("");
  document.getElementById("modalTitle").textContent=p.name;
  document.getElementById("modalCategory").textContent=p.cat;
  document.getElementById("modalPrice").innerHTML=priceHTML(p); const modalStock=document.getElementById("modalStockStatus"); if(modalStock) modalStock.innerHTML=stockStatusHTML(p); const modalBtns=document.querySelectorAll("#productModal .modal-actions .btn"); if(modalBtns.length>=2){ modalBtns[0].disabled=isStockOut(p); modalBtns[1].disabled=isStockOut(p); modalBtns[0].setAttribute("aria-disabled",isStockOut(p)); modalBtns[1].setAttribute("aria-disabled",isStockOut(p)); }
  document.getElementById("modalDesc").textContent=p.desc;
  document.getElementById("modalFeatures").innerHTML=p.features.map(f=>`<li>âœ“ ${f}</li>`).join("");
  renderRelatedProducts();
}

function renderRelatedProducts(){
  const section=document.getElementById("relatedProductsSection");
  const grid=document.getElementById("relatedProductsGrid");
  const title=document.getElementById("relatedProductsTitle");
  const subtitle=document.getElementById("relatedProductsSubtitle");

  if(!section || !grid || !currentProduct){
    return;
  }

  const related=products.filter(x =>
    x.cat === currentProduct.cat &&
    x.id !== currentProduct.id
  );

  // If there are no other products in this category, keep the page unchanged.
  if(!related.length){
    section.style.display="none";
    return;
  }

  section.style.display="";
  title.textContent=`${currentProduct.cat} â€” à¦†à¦°à¦“ à¦ªà¦£à§à¦¯`;
  subtitle.textContent=`${currentProduct.cat} à¦•à§à¦¯à¦¾à¦Ÿà¦¾à¦—à¦°à¦¿à¦° à¦†à¦°à¦“ ${related.length}à¦Ÿà¦¿ à¦ªà¦£à§à¦¯ à¦¦à§‡à¦–à§à¦¨à¥¤`;

  grid.innerHTML=related.map(x=>{
    const out=isStockOut(x);

    return `<article class="product related-product-card ${out?'is-stock-out':''}" onclick="window.location.href='product.html?id=${encodeURIComponent(x.id)}'">
      <div class="pimg">
        <img src="${x.img}" alt="${x.name}" loading="lazy">
        <span class="view-badge">${money(discountAmount(x))} SAVE</span>
      </div>
      <div class="pinfo">
        <span class="p-cat">${x.cat}</span>
        <h3>${x.name}</h3>
        <p>${x.short}</p>
        <div class="product-bottom">
          <div class="stock-row">${stockStatusHTML(x)}</div>
          ${priceHTML(x)}
          <div class="product-actions">
            <button class="add" ${out?'disabled aria-disabled="true"':''} onclick="event.stopPropagation();${out?'':'add('+x.id+')'}">ðŸ›’ à¦•à¦¾à¦°à§à¦Ÿ +</button>
            <button class="add order-btn" ${out?'disabled aria-disabled="true"':''} onclick="event.stopPropagation();${out?'':'orderNow('+x.id+')'}">âš¡ à¦…à¦°à§à¦¡à¦¾à¦° à¦•à¦°à§à¦¨</button>
          </div>
        </div>
      </div>
    </article>`;
  }).join("");
}
function selectProductImage(i){currentImage=i;renderProductModal()}
function nextProductImage(){if(!currentProduct)return;currentImage=(currentImage+1)%currentProduct.images.length;renderProductModal()}
function prevProductImage(){if(!currentProduct)return;currentImage=(currentImage-1+currentProduct.images.length)%currentProduct.images.length;renderProductModal()}
function add(id){
  let p=products.find(a=>a.id===id);
  if(!p)return;

  let x=cart.find(a=>a.id===id);

  if(x){
    x.qty++;
  }else{
    cart.push({
      id:id,
      qty:1
    });
  }

  save();
  renderCart();
  openCart();
}

function orderNow(id){
  let p=products.find(a=>a.id===id);

  if(!p){
    alert("à¦ªà¦£à§à¦¯à¦Ÿà¦¿ à¦ªà¦¾à¦“à§Ÿà¦¾ à¦¯à¦¾à¦šà§à¦›à§‡ à¦¨à¦¾à¥¤");
    return;
  }

  let x=cart.find(a=>a.id===id);

  if(x){
    x.qty++;
  }else{
    cart.push({
      id:id,
      qty:1
    });
  }

  save();
  renderCart();

  if(!IS_PRODUCT_PAGE){
    closeProduct();
  }

  openCart();
}

function total(){
  return cart.reduce((s,x)=>{
    let p=products.find(p=>p.id===x.id);
    return s+(p?currentPrice(p)*x.qty:0);
  },0);
}
function change(id,d){let x=cart.find(a=>a.id===id);if(!x)return;x.qty+=d;if(x.qty<1)cart=cart.filter(a=>a.id!==id);save();renderCart();renderCheckout()}
function renderCart(){let e=document.getElementById("cartItems");if(!cart.length){e.innerHTML="<p style='color:#888'>à¦•à¦¾à¦°à§à¦Ÿ à¦–à¦¾à¦²à¦¿à¥¤</p>";document.getElementById("cartTotal").textContent=money(0);return}e.innerHTML=cart.map(x=>{let p=products.find(a=>a.id===x.id);if(!p)return "";return `<div class="cart-row"><div class="thumb"><img src="${p.img}"></div><div><h4>${p.name}</h4><small>${money(currentPrice(p))}</small><div class="qty"><button onclick="change(${p.id},-1)">âˆ’</button><b>${x.qty}</b><button onclick="change(${p.id},1)">+</button></div></div><button class="remove" onclick="removeItem(${p.id})">âœ•</button></div>`}).join("");document.getElementById("cartTotal").textContent=money(total())}
function removeItem(id){cart=cart.filter(x=>x.id!==id);save();renderCart();renderCheckout()}
function openCart(){
  document.getElementById("cartOverlay").classList.add("show");
  renderCart();

  albaOpenOverlay("cart");
}
function closeCart(e){if(!e||e.target.id==="cartOverlay")document.getElementById("cartOverlay").classList.remove("show")}
function openCheckout(){

  if(!cart || !cart.length){
    alert("à¦†à¦—à§‡ à¦à¦•à¦Ÿà¦¿ à¦ªà¦£à§à¦¯ à¦•à¦¾à¦°à§à¦Ÿà§‡ à¦¯à§‹à¦— à¦•à¦°à§à¦¨à¥¤");
    return;
  }

  const cartOverlay=document.getElementById("cartOverlay");
  const checkoutOverlay=document.getElementById("checkoutOverlay");

  if(cartOverlay){
    cartOverlay.classList.remove("show");
  }

  if(checkoutOverlay){
    checkoutOverlay.classList.add("show");
  }

  renderCheckout();
}


async function openCheckout(){

  if(!cart || !cart.length){
    alert("à¦†à¦—à§‡ à¦à¦•à¦Ÿà¦¿ à¦ªà¦£à§à¦¯ à¦•à¦¾à¦°à§à¦Ÿà§‡ à¦¯à§‹à¦— à¦•à¦°à§à¦¨à¥¤");
    return;
  }

  // Flash Offer-à¦à¦° à¦¸à¦®à§Ÿ à¦¨à¦¿à¦¶à§à¦šà¦¿à¦¤ à¦•à¦°à¦¾
  if(
    typeof albaEnsureTimeSynced === "function" &&
    typeof ALBA_OFFER !== "undefined" &&
    ALBA_OFFER.enabled
  ){
    await albaEnsureTimeSynced();
  }

  const cartOverlay =
    document.getElementById("cartOverlay");

  const checkoutOverlay =
    document.getElementById("checkoutOverlay");

  if(cartOverlay){
    cartOverlay.classList.remove("show");
  }

  if(checkoutOverlay){
    checkoutOverlay.classList.add("show");
  }

  renderCheckout();
}



function closeCheckout(e){if(!e||e.target.id==="checkoutOverlay")document.getElementById("checkoutOverlay").classList.remove("show")}


function getDeliveryCharge(){

  const area =
    document.getElementById("deliveryArea")?.value ||
    "dhaka";

  // Flash Offer active à¦¹à¦²à§‡ Free Delivery
  if(
    typeof albaIsOfferActive === "function" &&
    albaIsOfferActive() &&
    ALBA_OFFER.type === "free_delivery"
  ){

    const subtotal = albaEligibleSubtotal();
    const minimum = Number(ALBA_OFFER.minOrder) || 0;

    if(
      albaAllCartProductsEligible() &&
      (minimum <= 0 || subtotal >= minimum)
    ){
      return 0;
    }
  }

  // à¦¸à§à¦¬à¦¾à¦­à¦¾à¦¬à¦¿à¦• Delivery Charge
  const weight = 1;

  const base =
    area === "outside"
      ? 130
      : 70;

  const extraKg =
    weight > 1
      ? Math.ceil(weight - 1)
      : 0;

  return base + (extraKg * 20);
}


function renderCheckout(){

  const d =
    getDeliveryCharge();

  document.getElementById("delivery").value =
    d;


  const e =
    document.getElementById("checkoutSummary");


  const area =
    document.getElementById("deliveryArea")?.value === "outside"
      ? "à¦¢à¦¾à¦•à¦¾à¦° à¦¬à¦¾à¦‡à¦°à§‡"
      : "à¦¢à¦¾à¦•à¦¾à¦° à¦­à§‡à¦¤à¦°";


  const weight = 1;


  const subtotal =
    total();


  const offerDiscount =
    typeof albaOfferDiscount === "function"
      ? albaOfferDiscount()
      : 0;


  const finalSubtotal =
    Math.max(
      0,
      subtotal - offerDiscount
    );


  const offerActive =
    typeof albaIsOfferActive === "function"
      ? albaIsOfferActive()
      : false;


  let html =
    cart.map(x => {

      let p =
        products.find(
          a => a.id === x.id
        );

      return p
        ? `
          <div>
            <span>
              ${p.name} Ã— ${x.qty}
            </span>

            <b>
              ${money(
                currentPrice(p) * x.qty
              )}
            </b>
          </div>
        `
        : "";

    }).join("");


  html += `
    <hr>

    <div>
      <b>à¦ªà¦£à§à¦¯ à¦®à§‹à¦Ÿ</b>
      <b>${money(subtotal)}</b>
    </div>
  `;


  // Extra Discount
  if(offerDiscount > 0){

    html += `
      <div class="checkout-offer-row">
        <span>
          ðŸŽ à¦…à¦«à¦¾à¦° à¦›à¦¾à§œ
        </span>

        <b>
          -${money(offerDiscount)}
        </b>
      </div>
    `;

  }


  // Delivery
  if(
    offerActive &&
    ALBA_OFFER.type === "free_delivery" &&
    d === 0
  ){

    html += `
      <div class="checkout-offer-row">
        <span>
          ðŸšš Free Delivery
        </span>

        <b>
          FREE
        </b>
      </div>
    `;

  }else{

    html += `
      <div>
        <span>
          à¦¡à§‡à¦²à¦¿à¦­à¦¾à¦°à¦¿ (${area}, ${weight} à¦•à§‡à¦œà¦¿)
        </span>

        <b>
          ${money(d)}
        </b>
      </div>
    `;

  }


  const grandTotal =
    finalSubtotal + d;


  html += `
    <div>
      <strong>à¦¸à¦°à§à¦¬à¦®à§‹à¦Ÿ</strong>

      <strong>
        ${money(grandTotal)}
      </strong>
    </div>
  `;


  e.innerHTML = html;
}


async function saveOrderToGoogleSheet(orderData){
  if(!APPS_SCRIPT_URL){
    throw new Error("Order backend URL is not configured.");
  }

  const response = await fetch(APPS_SCRIPT_URL,{
    method:"POST",
    mode:"no-cors",
    headers:{"Content-Type":"text/plain;charset=utf-8"},
    body:JSON.stringify(orderData)
  });

  // no-cors returns an opaque response by design. A resolved fetch means the
  // browser successfully handed the request to the configured endpoint.
  return response;
}



async function placeOrder(ev){
  ev.preventDefault();

  if(!cart || !cart.length){
    alert("à¦†à¦—à§‡ à¦à¦•à¦Ÿà¦¿ à¦ªà¦£à§à¦¯ à¦•à¦¾à¦°à§à¦Ÿà§‡ à¦¯à§‹à¦— à¦•à¦°à§à¦¨à¥¤");
    return;
  }

  const form = ev.target;
  const submitBtn = form?.querySelector('button[type="submit"]');
  if(submitBtn?.dataset.submitting === "1") return;

  const name = document.getElementById("name")?.value.trim() || "";
  const phone = document.getElementById("phone")?.value.trim() || "";
  const address = document.getElementById("address")?.value.trim() || "";
  const area = document.getElementById("deliveryArea")?.value || "dhaka";
  const paymentMethod = document.querySelector('input[name="paymentMethod"]:checked')?.value || "cod";

  if(!name || !phone || !address){
    alert("à¦…à¦¨à§à¦—à§à¦°à¦¹ à¦•à¦°à§‡ à¦ªà§à¦°à§Ÿà§‹à¦œà¦¨à§€à§Ÿ à¦¤à¦¥à§à¦¯à¦—à§à¦²à§‹ à¦ªà§‚à¦°à¦£ à¦•à¦°à§à¦¨à¥¤");
    return;
  }

  const weight = 1;
  const d = getDeliveryCharge();
  const subtotal = total();
  const offerDiscount = typeof albaOfferDiscount === "function" ? albaOfferDiscount() : 0;
  const finalSubtotal = Math.max(0, subtotal - offerDiscount);
  const grandTotal = finalSubtotal + d;
  const order = "ALB-" + Date.now().toString().slice(-8);

  if(
    typeof ALBA_OFFER !== "undefined" &&
    ALBA_OFFER.enabled &&
    typeof albaEnsureTimeSynced === "function" &&
    !albaTimeSynced
  ){
    const synced = await albaEnsureTimeSynced();
    if(!synced){
      alert("à¦…à¦«à¦¾à¦°à§‡à¦° à¦¸à¦®à§Ÿ à¦¯à¦¾à¦šà¦¾à¦‡ à¦•à¦°à¦¾ à¦¯à¦¾à¦šà§à¦›à§‡ à¦¨à¦¾à¥¤ à¦‡à¦¨à§à¦Ÿà¦¾à¦°à¦¨à§‡à¦Ÿ à¦¸à¦‚à¦¯à§‹à¦— à¦ªà¦°à§€à¦•à§à¦·à¦¾ à¦•à¦°à§‡ à¦†à¦¬à¦¾à¦° à¦šà§‡à¦·à§à¦Ÿà¦¾ à¦•à¦°à§à¦¨à¥¤");
      return;
    }
  }

  const items = cart.map(x => {
    const p = products.find(a => a.id === x.id);
    return {
      id: p?.id || x.id,
      name: p?.name || "Unknown Product",
      category: p?.cat || "",
      qty: x.qty,
      unitPrice: Number(p ? currentPrice(p) : 0),
      lineTotal: Number(p ? currentPrice(p) * x.qty : 0)
    };
  });

  let offerText = "";
  if(typeof albaIsOfferActive === "function" && albaIsOfferActive() && typeof ALBA_OFFER !== "undefined"){
    if(ALBA_OFFER.type === "free_delivery" && d === 0) offerText = "FREE DELIVERY";
    if(ALBA_OFFER.type === "extra_discount" && offerDiscount > 0){
      offerText = (ALBA_OFFER.extraDiscountPercent || "") + "% EXTRA DISCOUNT";
    }
  }

  const orderData = {
    orderNo: order,
    orderTime: new Date().toISOString(),
    name,
    phone,
    address,
    deliveryArea: area,
    paymentMethod,
    weight,
    items,
    subtotal,
    offer: offerText,
    offerDiscount,
    delivery: d,
    grandTotal,
    source: "AL-BARAKAH Website"
  };

  if(submitBtn){
    submitBtn.dataset.submitting = "1";
    submitBtn.disabled = true;
    submitBtn.textContent = "â³ à¦…à¦°à§à¦¡à¦¾à¦° à¦•à¦¨à¦«à¦¾à¦°à§à¦® à¦¹à¦šà§à¦›à§‡...";
  }

  try{
    await saveOrderToGoogleSheet(orderData);

    // Customer never needs to know about Google Sheets or Telegram.
    cart = [];
    save();
    renderCart();
    renderCheckout();
    closeCheckout();
    showOrderSuccess(order, grandTotal);
  }catch(err){
    console.error("Order submission failed:", err);
    alert("à¦…à¦°à§à¦¡à¦¾à¦° à¦•à¦¨à¦«à¦¾à¦°à§à¦® à¦•à¦°à¦¾ à¦¯à¦¾à§Ÿà¦¨à¦¿à¥¤ à¦…à¦¨à§à¦—à§à¦°à¦¹ à¦•à¦°à§‡ à¦•à¦¿à¦›à§à¦•à§à¦·à¦£ à¦ªà¦° à¦†à¦¬à¦¾à¦° à¦šà§‡à¦·à§à¦Ÿà¦¾ à¦•à¦°à§à¦¨à¥¤");
  }finally{
    if(submitBtn){
      submitBtn.dataset.submitting = "0";
      submitBtn.disabled = false;
      submitBtn.textContent = "ðŸ›ï¸ à¦…à¦°à§à¦¡à¦¾à¦° à¦•à¦¨à¦«à¦¾à¦°à§à¦® à¦•à¦°à§à¦¨";
    }
  }
}

function showOrderSuccess(orderNo, grandTotal, customMessage){
  const modal = document.getElementById("orderSuccessOverlay");
  if(!modal) return;
  const no = document.getElementById("successOrderNo");
  const totalEl = document.getElementById("successOrderTotal");
  if(no) no.textContent = orderNo;
  if(totalEl) totalEl.textContent = grandTotal > 0 ? money(grandTotal) : "à¦—à§à¦°à¦¹à¦£ à¦•à¦°à¦¾ à¦¹à§Ÿà§‡à¦›à§‡";
  const desc = modal.querySelector(".order-success-card > p");
  if(desc) desc.textContent = customMessage || "à¦†à¦ªà¦¨à¦¾à¦° à¦…à¦°à§à¦¡à¦¾à¦°à¦Ÿà¦¿ à¦†à¦®à¦°à¦¾ à¦ªà§‡à§Ÿà§‡à¦›à¦¿à¥¤ à¦ªà§à¦°à§Ÿà§‹à¦œà¦¨ à¦…à¦¨à§à¦¯à¦¾à§Ÿà§€ à¦†à¦®à¦¾à¦¦à§‡à¦° à¦ªà§à¦°à¦¤à¦¿à¦¨à¦¿à¦§à¦¿ à¦†à¦ªà¦¨à¦¾à¦° à¦¸à¦¾à¦¥à§‡ à¦¯à§‹à¦—à¦¾à¦¯à§‹à¦— à¦•à¦°à¦¬à§‡à¦¨à¥¤";
  modal.classList.add("show");
  document.body.classList.add("modal-open");
}

function closeOrderSuccess(){
  const modal = document.getElementById("orderSuccessOverlay");
  if(modal) modal.classList.remove("show");
  document.body.classList.remove("modal-open");
}


document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeProduct();closeCart();closeCheckout()}if(currentProduct&&document.getElementById("productModal").classList.contains("show")){if(e.key==="ArrowRight")nextProductImage();if(e.key==="ArrowLeft")prevProductImage()}});
// ===== CUSTOM DESIGN / WHOLESALE =====
let businessType="custom";
function openBusinessForm(type){
  businessType=type||"custom";
  const custom=businessType==="custom";
  const title=document.getElementById("businessTitle");
  const desc=document.getElementById("businessDescription");
  const eyebrow=document.getElementById("businessEyebrow");
  const qtyLabel=document.getElementById("businessQtyLabel");
  if(!title||!desc)return;
  eyebrow.textContent=custom?"CUSTOM DESIGN":"WHOLESALE ORDER";
  title.textContent=custom?"à¦•à¦¾à¦¸à§à¦Ÿà¦® à¦¡à¦¿à¦œà¦¾à¦‡à¦¨":"à¦ªà¦¾à¦‡à¦•à¦¾à¦°à¦¿ à¦…à¦°à§à¦¡à¦¾à¦°";
  desc.textContent=custom?"à¦†à¦ªà¦¨à¦¾à¦° à¦ªà¦›à¦¨à§à¦¦à§‡à¦° à¦¡à¦¿à¦œà¦¾à¦‡à¦¨ à¦¬à¦¾ à¦ªà§à¦°à§Ÿà§‹à¦œà¦¨ à¦…à¦¨à§à¦¯à¦¾à§Ÿà§€ à¦•à¦¾à¦¸à§à¦Ÿà¦® à¦²à§à¦¯à¦¾à¦®à§à¦ª à¦¨à¦¿à§Ÿà§‡ à¦¸à¦°à¦¾à¦¸à¦°à¦¿ à¦•à¦¥à¦¾ à¦¬à¦²à§à¦¨à¥¤":"à¦¬à¦¾à¦²à§à¦•/à¦ªà¦¾à¦‡à¦•à¦¾à¦°à¦¿ à¦…à¦°à§à¦¡à¦¾à¦°à§‡à¦° à¦œà¦¨à§à¦¯ à¦ªà§à¦°à§Ÿà§‹à¦œà¦¨à§€à§Ÿ à¦ªà¦°à¦¿à¦®à¦¾à¦£ à¦“ à¦¬à¦¿à¦¸à§à¦¤à¦¾à¦°à¦¿à¦¤ à¦œà¦¾à¦¨à¦¿à§Ÿà§‡ à¦†à¦®à¦¾à¦¦à§‡à¦° à¦¸à¦¾à¦¥à§‡ à¦¸à¦°à¦¾à¦¸à¦°à¦¿ à¦•à¦¥à¦¾ à¦¬à¦²à§à¦¨à¥¤";
  qtyLabel.firstChild.textContent=custom?"à¦ªà§à¦°à§Ÿà§‹à¦œà¦¨à§€à§Ÿ à¦ªà¦°à¦¿à¦®à¦¾à¦£":"à¦…à¦°à§à¦¡à¦¾à¦°à§‡à¦° à¦ªà¦°à¦¿à¦®à¦¾à¦£";
  document.getElementById("businessOverlay").classList.add("show");
  document.body.classList.add("modal-open");
  setTimeout(()=>document.getElementById("businessName")?.focus(),80);
}
function closeBusinessForm(e){
  if(e && e.target!==document.getElementById("businessOverlay"))return;
  document.getElementById("businessOverlay")?.classList.remove("show");
  document.body.classList.remove("modal-open");
}
async function submitBusinessForm(e){
  e.preventDefault();

  const form=e.target;
  const submitBtn=form?.querySelector('button[type="submit"]');
  if(submitBtn?.dataset.submitting === "1") return;

  const name=document.getElementById("businessName")?.value.trim() || "";
  const phone=document.getElementById("businessPhone")?.value.trim() || "";
  const qty=Number(document.getElementById("businessQty")?.value || 1);
  const details=document.getElementById("businessDetails")?.value.trim() || "";
  const type=businessType==="custom"?"à¦•à¦¾à¦¸à§à¦Ÿà¦® à¦¡à¦¿à¦œà¦¾à¦‡à¦¨":"à¦ªà¦¾à¦‡à¦•à¦¾à¦°à¦¿ à¦…à¦°à§à¦¡à¦¾à¦°";
  const order="ALB-SP-"+Date.now().toString().slice(-8);

  if(!name || !phone || !details){
    alert("à¦…à¦¨à§à¦—à§à¦°à¦¹ à¦•à¦°à§‡ à¦ªà§à¦°à§Ÿà§‹à¦œà¦¨à§€à§Ÿ à¦¤à¦¥à§à¦¯à¦—à§à¦²à§‹ à¦ªà§‚à¦°à¦£ à¦•à¦°à§à¦¨à¥¤");
    return;
  }

  if(submitBtn){
    submitBtn.dataset.submitting="1";
    submitBtn.disabled=true;
    submitBtn.textContent="â³ à¦…à¦¨à§à¦°à§‹à¦§ à¦ªà¦¾à¦ à¦¾à¦¨à§‹ à¦¹à¦šà§à¦›à§‡...";
  }

  try{
    await saveOrderToGoogleSheet({
      orderNo:order,
      orderTime:new Date().toISOString(),
      orderType:type,
      name,
      phone,
      address:"â€”",
      deliveryArea:"â€”",
      paymentMethod:"â€”",
      weight:1,
      quantity:qty,
      details,
      items:[{name:type, qty, unitPrice:0, lineTotal:0}],
      subtotal:0,
      offer:"",
      offerDiscount:0,
      delivery:0,
      grandTotal:0,
      source:"AL-BARAKAH Website"
    });

    closeBusinessForm();
    showOrderSuccess(order, 0, type + " à¦…à¦¨à§à¦°à§‹à¦§ à¦¸à¦«à¦²à¦­à¦¾à¦¬à§‡ à¦—à§à¦°à¦¹à¦£ à¦•à¦°à¦¾ à¦¹à§Ÿà§‡à¦›à§‡à¥¤");
  }catch(err){
    console.error("Special order submission failed:",err);
    alert("à¦…à¦¨à§à¦°à§‹à¦§ à¦ªà¦¾à¦ à¦¾à¦¨à§‹ à¦¯à¦¾à§Ÿà¦¨à¦¿à¥¤ à¦…à¦¨à§à¦—à§à¦°à¦¹ à¦•à¦°à§‡ à¦•à¦¿à¦›à§à¦•à§à¦·à¦£ à¦ªà¦° à¦†à¦¬à¦¾à¦° à¦šà§‡à¦·à§à¦Ÿà¦¾ à¦•à¦°à§à¦¨à¥¤");
  }finally{
    if(submitBtn){
      submitBtn.dataset.submitting="0";
      submitBtn.disabled=false;
      submitBtn.textContent="ðŸ“¨ à¦…à¦¨à§à¦°à§‹à¦§ à¦ªà¦¾à¦ à¦¾à¦¨";
    }
  }
}

const yearEl=document.getElementById("year"); if(yearEl) yearEl.textContent=new Date().getFullYear();
if(!IS_PRODUCT_PAGE){
  const requestedCategory = new URLSearchParams(window.location.search).get("category");
  if(requestedCategory && products.some(x => x.cat === requestedCategory)){
    active = requestedCategory;
  }
  categories();
  renderProducts();
  renderFeaturedProducts();
  renderCart();
} else {
  renderMenuCategories();
}
count();
addPremiumTrustAndSupport();

// ===== V12: AUTO PRODUCT MAIN-IMAGE SLIDER =====
let heroIndex = 0;
let heroTimer = null;

const MAX_HERO_DOTS = 7;

function renderHeroDots(){
  const dots = document.getElementById('heroDots');
  if(!dots || !products.length) return;

  const total = products.length;

  // à§­à¦Ÿà¦¿à¦° à¦•à¦®/à¦¸à¦®à¦¾à¦¨ Product à¦¹à¦²à§‡ à¦¸à¦¬ dot à¦¦à§‡à¦–à¦¾à¦¬à§‡
  if(total <= MAX_HERO_DOTS){
    dots.innerHTML = products.map((p,i) =>
      `<button
        class="hero-dot ${i === heroIndex ? 'active' : ''}"
        type="button"
        onclick="event.stopPropagation();heroGo(${i})"
        aria-label="à¦›à¦¬à¦¿ ${i+1}">
      </button>`
    ).join('');

    return;
  }

  // à¦¸à¦°à§à¦¬à§‹à¦šà§à¦š à§­à¦Ÿà¦¿ dot-à¦à¦° active window
  let start;

  if(heroIndex <= 3){
    // à¦¶à§à¦°à§à¦¤à§‡ à¦ªà§à¦°à¦¥à¦® à§­à¦Ÿà¦¿
    start = 0;
  }else if(heroIndex >= total - 4){
    // à¦¶à§‡à¦·à§‡ à¦¶à§‡à¦· à§­à¦Ÿà¦¿
    start = total - MAX_HERO_DOTS;
  }else{
    // à¦®à¦¾à¦à¦–à¦¾à¦¨à§‡ active dot-à¦•à§‡ à¦•à§‡à¦¨à§à¦¦à§à¦° à¦•à¦°à§‡
    start = heroIndex - 3;
  }

  const end = Math.min(start + MAX_HERO_DOTS, total);

  let html = '';

  for(let i = start; i < end; i++){
    html += `
      <button
        class="hero-dot ${i === heroIndex ? 'active' : ''}"
        type="button"
        onclick="event.stopPropagation();heroGo(${i})"
        aria-label="à¦›à¦¬à¦¿ ${i+1}">
      </button>
    `;
  }

  dots.innerHTML = html;
}

function initHeroSlider(){
  const track = document.getElementById('heroSlideTrack');
  const dots = document.getElementById('heroDots');

  if(!track || !dots || !products.length) return;

  // à¦¸à¦¬ Product Slider-à¦ à¦¥à¦¾à¦•à¦¬à§‡
  track.innerHTML = products.map((p,i) =>
    `<div
      class="hero-slide"
      onclick="openProduct(${p.id})"
      role="button"
      tabindex="0"
      aria-label="${p.name} à¦¬à¦¿à¦¸à§à¦¤à¦¾à¦°à¦¿à¦¤ à¦¦à§‡à¦–à§à¦¨">

      <img
        src="${p.img}"
        alt="${p.name}"
        loading="${i === 0 ? 'eager' : 'lazy'}">

      <div class="hero-slide-info">
        <strong>${p.name}</strong>
        <small>${p.discount}% à¦›à¦¾à§œ â€¢ ${money(p.price)}</small>
      </div>

    </div>`
  ).join('');

  renderHeroDots();
  heroUpdate();
  heroStart();

  const slider = document.getElementById('heroSlider');

  if(slider){
    slider.addEventListener('mouseenter', heroPause);
    slider.addEventListener('mouseleave', heroStart);
    slider.addEventListener('touchstart', heroPause, {passive:true});
    slider.addEventListener('touchend', heroStart, {passive:true});
  }
}

function heroUpdate(){
  const track = document.getElementById('heroSlideTrack');

  if(!track) return;

  // Slider-à¦à¦° à¦¸à¦¬ Product à¦†à¦—à§‡à¦° à¦®à¦¤à§‹à¦‡ à¦¥à¦¾à¦•à¦¬à§‡
  track.style.transform =
    `translate3d(-${heroIndex * 100}%,0,0)`;

  // à¦¶à§à¦§à§ à¦¸à¦°à§à¦¬à§‹à¦šà§à¦š à§­à¦Ÿà¦¿ dot à¦¦à§‡à¦–à¦¾à¦¬à§‡
  renderHeroDots();
}

function heroGo(i){
  if(!products.length) return;

  heroIndex = (i + products.length) % products.length;

  heroUpdate();
  heroStart();
}

function heroNext(){
  if(!products.length) return;

  heroIndex = (heroIndex + 1) % products.length;

  heroUpdate();
  heroStart();
}

function heroPrev(){
  if(!products.length) return;

  heroIndex =
    (heroIndex - 1 + products.length) % products.length;

  heroUpdate();
  heroStart();
}

function heroStart(){
  clearInterval(heroTimer);
  heroTimer = setInterval(heroNext, 3500);
}

function heroPause(){
  clearInterval(heroTimer);
}

initHeroSlider();


// =====================================================
// AL-BARAKAH MOBILE BACK BUTTON / OVERLAY HISTORY FIX
// =====================================================

(function () {

  let albaBackLock = false;

  function getOverlayState() {
    const product = document.getElementById("productModal");
    const cart = document.getElementById("cartOverlay");
    const checkout = document.getElementById("checkoutOverlay");
    const business = document.getElementById("businessFormOverlay");

    if (checkout && checkout.classList.contains("show")) {
      return "checkout";
    }

    if (cart && cart.classList.contains("show")) {
      return "cart";
    }

    if (product && product.classList.contains("show")) {
      return "product";
    }

    if (business && business.classList.contains("show")) {
      return "business";
    }

    return null;
  }

  function pushOverlayState(type) {
    if (albaBackLock) return;

    const current = history.state;

    if (!current || !current.albaOverlay) {
      history.pushState(
        { albaOverlay: type },
        "",
        window.location.href.split("#")[0]
      );
    } else {
      history.replaceState(
        { albaOverlay: type },
        "",
        window.location.href.split("#")[0]
      );
    }
  }

  function closeCurrentOverlay() {

    const checkout = document.getElementById("checkoutOverlay");
    const cart = document.getElementById("cartOverlay");
    const product = document.getElementById("productModal");
    const business = document.getElementById("businessFormOverlay");

    if (checkout && checkout.classList.contains("show")) {
      checkout.classList.remove("show");
      return true;
    }

    if (cart && cart.classList.contains("show")) {
      cart.classList.remove("show");
      return true;
    }

    if (product && product.classList.contains("show")) {
      product.classList.remove("show");
      document.body.classList.remove("modal-open");
      return true;
    }

    if (business && business.classList.contains("show")) {
      business.classList.remove("show");
      return true;
    }

    return false;
  }

  window.addEventListener("popstate", function () {

    albaBackLock = true;

    const closed = closeCurrentOverlay();

    albaBackLock = false;

    if (!closed) {
      // à¦•à§‹à¦¨à§‹ popup à¦–à§‹à¦²à¦¾ à¦¨à¦¾ à¦¥à¦¾à¦•à¦²à§‡ browser-à¦à¦° à¦¸à§à¦¬à¦¾à¦­à¦¾à¦¬à¦¿à¦• Back à¦•à¦¾à¦œ à¦•à¦°à¦¬à§‡
      return;
    }

    // Overlay à¦¬à¦¨à§à¦§ à¦¹à¦“à§Ÿà¦¾à¦° à¦ªà¦° history state à¦ªà¦°à¦¿à¦·à§à¦•à¦¾à¦° à¦•à¦°à¦¾
    if (history.state && history.state.albaOverlay) {
      history.replaceState(
        null,
        "",
        window.location.href.split("#")[0]
      );
    }
  });

  // Overlay open à¦¹à¦²à§‡ history state à¦¤à§ˆà¦°à¦¿
  window.albaOpenOverlay = function (type) {
    pushOverlayState(type);
  };

})();


// =====================================================
// AL-BARAKAH MOBILE CATEGORY SWIPE HINT
// à¦ªà§à¦°à¦¥à¦®à¦¬à¦¾à¦° Category à¦¦à§‡à¦–à¦¾à¦° à¦¸à¦®à§Ÿ à§© à¦¸à§‡à¦•à§‡à¦¨à§à¦¡à§‡à¦° Hint
// =====================================================

(function () {

  const HINT_KEY = "albarakah_category_swipe_hint_seen";

  function showCategorySwipeHint() {

    // à¦†à¦—à§‡ à¦¦à§‡à¦–à¦¾à¦¨à§‹ à¦¹à§Ÿà§‡ à¦¥à¦¾à¦•à¦²à§‡ à¦†à¦° à¦¦à§‡à¦–à¦¾à¦¬à§‡ à¦¨à¦¾
    if (localStorage.getItem(HINT_KEY) === "1") {
      return;
    }

    const categories = document.getElementById("categories");

    if (!categories) return;

    // à¦¶à§à¦§à§ Mobile-à¦à¦° à¦œà¦¨à§à¦¯
    if (window.innerWidth > 650) return;

    // à¦à¦•à¦‡ hint à¦à¦•à¦¾à¦§à¦¿à¦•à¦¬à¦¾à¦° à¦¤à§ˆà¦°à¦¿ à¦¹à¦“à§Ÿà¦¾ à¦¬à¦¨à§à¦§
    if (document.getElementById("albaCategorySwipeHint")) {
      return;
    }

    // Category wrapper à¦¤à§ˆà¦°à¦¿
    let wrapper = categories.parentElement;

    if (!wrapper.classList.contains("alba-category-wrap")) {

      const newWrapper = document.createElement("div");

      newWrapper.className = "alba-category-wrap";

      categories.parentNode.insertBefore(
        newWrapper,
        categories
      );

      newWrapper.appendChild(categories);

      wrapper = newWrapper;
    }

    // Hint à¦¤à§ˆà¦°à¦¿
    const hint = document.createElement("div");

    hint.id = "albaCategorySwipeHint";

    hint.innerHTML = `
      <span class="alba-hint-icon">ðŸ‘‰</span>
      <span>à¦†à¦°à¦“ à¦•à§à¦¯à¦¾à¦Ÿà¦¾à¦—à¦°à¦¿ à¦¦à§‡à¦–à¦¤à§‡ à¦¡à¦¾à¦¨à§‡ à¦¸à§‹à§Ÿà¦¾à¦‡à¦ª à¦•à¦°à§à¦¨</span>
      <span class="alba-hint-arrow">â†’</span>
    `;

    wrapper.appendChild(hint);

    // Hint à¦¦à§‡à¦–à¦¾à¦¨à§‹à¦° animation
    requestAnimationFrame(() => {
      hint.classList.add("show");
    });

    // à¦à¦•à¦¬à¦¾à¦° à¦¦à§‡à¦–à¦¾à¦¨à§‹ à¦¹à§Ÿà§‡à¦›à§‡ â€” à¦®à¦¨à§‡ à¦°à¦¾à¦–à¦¬à§‡
    localStorage.setItem(HINT_KEY, "1");

    // à§© à¦¸à§‡à¦•à§‡à¦¨à§à¦¡ à¦ªà¦°à§‡ à¦šà¦²à§‡ à¦¯à¦¾à¦¬à§‡
    setTimeout(() => {

      hint.classList.remove("show");

      setTimeout(() => {
        hint.remove();
      }, 350);

    }, 3000);
  }


  // Category viewport-à¦ à¦†à¦¸à¦²à§‡ Hint à¦¦à§‡à¦–à¦¾à¦¬à§‡
  function initCategorySwipeHint() {

    const categories = document.getElementById("categories");

    if (!categories) {
      setTimeout(initCategorySwipeHint, 500);
      return;
    }

    // à¦†à¦—à§‡ à¦¦à§‡à¦–à¦¾à¦¨à§‹ à¦¹à§Ÿà§‡ à¦¥à¦¾à¦•à¦²à§‡ observer-à¦à¦° à¦ªà§à¦°à§Ÿà§‹à¦œà¦¨ à¦¨à§‡à¦‡
    if (localStorage.getItem(HINT_KEY) === "1") {
      return;
    }

    // Mobile à¦›à¦¾à§œà¦¾ Hint à¦¨à§Ÿ
    if (window.innerWidth > 650) {
      return;
    }

    const observer = new IntersectionObserver(
      function (entries) {

        entries.forEach(function (entry) {

          if (entry.isIntersecting) {

            showCategorySwipeHint();

            observer.disconnect();

          }

        });

      },
      {
        threshold: 0.35
      }
    );

    observer.observe(categories);
  }


  // Page load à¦¹à¦“à§Ÿà¦¾à¦° à¦ªà¦°à§‡ à¦¶à§à¦°à§
  if (document.readyState === "loading") {

    document.addEventListener(
      "DOMContentLoaded",
      initCategorySwipeHint
    );

  } else {

    initCategorySwipeHint();

  }

})();


// =====================================================
// AL-BARAKAH SMART CATEGORY SWIPE INDICATOR
// User swipe à¦•à¦°à¦²à§‡ hint permanently hide
// =====================================================

(function(){

  function initSmartCategory(){

    const categories =
      document.getElementById("categories");

    const hint =
      document.getElementById("albaCategorySwipeHint");

    if(!categories) return;

    let hasInteracted = false;

    categories.addEventListener(
      "scroll",
      function(){

        if(hasInteracted) return;

        hasInteracted = true;

        if(hint){

          hint.classList.remove("show");

          setTimeout(function(){

            if(hint && hint.parentNode){
              hint.remove();
            }

          },350);

        }

      },
      {
        passive:true
      }
    );

  }


  if(document.readyState === "loading"){

    document.addEventListener(
      "DOMContentLoaded",
      initSmartCategory
    );

  }else{

    initSmartCategory();

  }

})();

// =====================================================
// AL-BARAKAH UNIVERSAL MOBILE KEYBOARD FIX
// Chrome + Facebook In-App Browser + Android WebView
// =====================================================

(function(){

  let initialHeight = window.innerHeight;
  let keyboardOpen = false;

  function getActiveField(){

    const el = document.activeElement;

    if(!el) return null;

    if(
      el.tagName === "INPUT" ||
      el.tagName === "TEXTAREA" ||
      el.tagName === "SELECT"
    ){
      return el;
    }

    return null;
  }


  function isKeyboardOpen(){

    let currentHeight = window.innerHeight;

    // visualViewport à¦¥à¦¾à¦•à¦²à§‡ à¦¸à§‡à¦Ÿà¦¾à¦° height à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦°
    if(window.visualViewport){
      currentHeight = Math.min(
        window.innerHeight,
        window.visualViewport.height
      );
    }

    return (
      initialHeight - currentHeight > 120
    );
  }


  function findOpenPopup(){

    const ids = [
      "checkoutOverlay",
      "cartOverlay",
      "productModal",
      "businessOverlay",
      "businessFormOverlay"
    ];

    for(let i=0;i<ids.length;i++){

      const el=document.getElementById(ids[i]);

      if(
        el &&
        el.classList.contains("show")
      ){
        return el;
      }

    }

    return null;
  }


  function moveFieldAboveKeyboard(){

    const field = getActiveField();

    if(!field) return;

    const popup = findOpenPopup();

    setTimeout(function(){

      // -----------------------------------------
      // à¦ªà§à¦°à¦¥à¦® à¦šà§‡à¦·à§à¦Ÿà¦¾: scrollIntoView
      // -----------------------------------------

      try{

        field.scrollIntoView({
          behavior:"smooth",
          block:"center",
          inline:"nearest"
        });

      }catch(err){}


      // -----------------------------------------
      // à¦¦à§à¦¬à¦¿à¦¤à§€à§Ÿ à¦šà§‡à¦·à§à¦Ÿà¦¾: popup-à¦à¦° à¦­à¦¿à¦¤à¦°à§‡ scroll
      // Facebook WebView-à¦à¦° à¦œà¦¨à§à¦¯ à¦—à§à¦°à§à¦¤à§à¦¬à¦ªà§‚à¦°à§à¦£
      // -----------------------------------------

      if(popup){

        setTimeout(function(){

          try{

            const fieldRect =
              field.getBoundingClientRect();

            const popupRect =
              popup.getBoundingClientRect();

            const viewportHeight =
              window.visualViewport
                ? window.visualViewport.height
                : window.innerHeight;

            // Keyboard-à¦à¦° à¦‰à¦ªà¦°à§‡à¦° à¦¨à¦¿à¦°à¦¾à¦ªà¦¦ à¦œà¦¾à§Ÿà¦—à¦¾
            const safeBottom =
              viewportHeight - 30;

            // Field à¦¨à¦¿à¦šà§‡ à¦šà¦²à§‡ à¦—à§‡à¦²à§‡
            if(fieldRect.bottom > safeBottom){

              const difference =
                fieldRect.bottom - safeBottom;

              popup.scrollTop += difference + 30;

            }

            // Field popup-à¦à¦° à¦‰à¦ªà¦°à§‡à¦° à¦¬à¦¾à¦‡à¦°à§‡ à¦šà¦²à§‡ à¦—à§‡à¦²à§‡
            if(fieldRect.top < popupRect.top){

              popup.scrollTop -=
                (popupRect.top - fieldRect.top) + 20;

            }

          }catch(err){}

        },150);

      }

    },250);

  }


  // =================================================
  // INPUT / TEXTAREA FOCUS
  // =================================================

  document.addEventListener(
    "focusin",
    function(e){

      const el=e.target;

      if(
        el.tagName === "INPUT" ||
        el.tagName === "TEXTAREA" ||
        el.tagName === "SELECT"
      ){

        setTimeout(function(){

          moveFieldAboveKeyboard();

        },200);

        setTimeout(function(){

          moveFieldAboveKeyboard();

        },600);

        setTimeout(function(){

          moveFieldAboveKeyboard();

        },1000);

      }

    },
    true
  );


  // =================================================
  // VISUAL VIEWPORT
  // Chrome + newer WebView
  // =================================================

  if(window.visualViewport){

    window.visualViewport.addEventListener(
      "resize",
      function(){

        if(isKeyboardOpen()){

          keyboardOpen=true;

          moveFieldAboveKeyboard();

        }else{

          keyboardOpen=false;

        }

      }
    );


    window.visualViewport.addEventListener(
      "scroll",
      function(){

        if(keyboardOpen){

          moveFieldAboveKeyboard();

        }

      }
    );

  }


  // =================================================
  // WINDOW RESIZE
  // Facebook In-App Browser fallback
  // =================================================

  window.addEventListener(
    "resize",
    function(){

      if(isKeyboardOpen()){

        keyboardOpen=true;

        setTimeout(function(){

          moveFieldAboveKeyboard();

        },100);

      }else{

        keyboardOpen=false;

      }

    }
  );


  // =================================================
  // PAGE LOAD HEIGHT
  // =================================================

  window.addEventListener(
    "load",
    function(){

      setTimeout(function(){

        initialHeight=window.innerHeight;

      },500);

    }
  );


  // =================================================
  // ORIENTATION CHANGE
  // =================================================

  window.addEventListener(
    "orientationchange",
    function(){

      setTimeout(function(){

        initialHeight=window.innerHeight;

      },500);

    }
  );


})();










// =====================================================
// AL-BARAKAH PREMIUM FLASH OFFER SYSTEM
// SECURE FIXED-TIME COUNTDOWN
// BANGLADESH TIME + ONLINE TIME SYNC
// =====================================================

const ALBA_OFFER = {
	
  // ===================================================
  // true  = Offer à¦šà¦¾à¦²à§
  // false = Offer à¦¬à¦¨à§à¦§
  // ===================================================
  enabled: true,

  // ===================================================
  // OFFER START AND END TIME
  // Bangladesh Time (UTC +6)
  // ===================================================
  startTime: "2026-09-11T00:00:00+06:00",
  endTime:   "2026-09-11T23:59:59+06:00",


  // ===================================================
  // CAMPAIGN ID
  // à¦¨à¦¤à§à¦¨ Campaign à¦šà¦¾à¦²à§ à¦•à¦°à¦²à§‡ ID à¦ªà¦°à¦¿à¦¬à¦°à§à¦¤à¦¨ à¦•à¦°à¦¬à§‡à¦¨
  // ===================================================
  campaignId: "free-delivery-campaign-3",


  // ===================================================
  // OFFER TYPE
  // free_delivery
  // extra_discount
  // ===================================================
  type: "free_delivery",


  // ===================================================
  // EXTRA DISCOUNT
  // ===================================================
  extraDiscountPercent: 5,


  // ===================================================
  // OFFER PRODUCT CATEGORIES
  // à¦à¦–à¦¾à¦¨à§‡ à¦¯à§‡à¦¸à¦¬ category à¦¦à§‡à¦¬à§‡à¦¨, à¦…à¦«à¦¾à¦° à¦¶à§à¦§à§ à¦¸à§‡à¦‡ category-à¦à¦°
  // product-à¦à¦° à¦‰à¦ªà¦° à¦ªà§à¦°à¦¯à§‹à¦œà§à¦¯ à¦¹à¦¬à§‡à¥¤
  // [] à¦¦à¦¿à¦²à§‡ à¦¸à¦¬ category-à¦à¦° product eligible à¦¹à¦¬à§‡à¥¤
  // à¦‰à¦¦à¦¾à¦¹à¦°à¦£: ["à¦“à§Ÿà¦¾à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª", "à¦Ÿà§‡à¦¬à¦¿à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª"]
  // ===================================================
  categories: ["à¦“à§Ÿà¦¾à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª", "à¦Ÿà§‡à¦¬à¦¿à¦² à¦²à§à¦¯à¦¾à¦®à§à¦ª", "à¦¡à§‡à¦•à§‹à¦°à§‡à¦Ÿà¦¿à¦­ à¦†à¦‡à¦Ÿà§‡à¦®"],

  // ===================================================
  // MINIMUM ORDER
  // 0 = à¦•à§‹à¦¨à§‹ minimum à¦¨à§‡à¦‡
  // ===================================================
  minOrder: 0
};



// =====================================================
// TIME API
// =====================================================
//
// Online server time à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦•à¦°à¦¾ à¦¹à¦¬à§‡à¥¤
// à¦¤à¦¾à¦‡ visitor-à¦à¦° mobile/computer clock
// à¦ªà¦°à¦¿à¦¬à¦°à§à¦¤à¦¨ à¦•à¦°à¦²à§‡à¦“ countdown à¦¸à§‡à¦‡ clock à¦…à¦¨à§à¦¸à¦°à¦£ à¦•à¦°à¦¬à§‡ à¦¨à¦¾.
//
// =====================================================

const ALBA_TIME_APIS = [
  "https://timeapi.io/api/Time/current/zone?timeZone=Asia%2FDhaka",
  "https://worldtimeapi.org/api/timezone/Asia/Dhaka"
];


// =====================================================
// SERVER TIME VARIABLES
// =====================================================

let albaServerTimeAtSync = null;

let albaClientTimeAtSync = null;

let albaTimeSynced = false;

let albaTimeSyncTimer = null;


// =====================================================
// GET TRUSTED CURRENT TIME
// =====================================================
//
// Server à¦¥à§‡à¦•à§‡ à¦ªà¦¾à¦“à§Ÿà¦¾ à¦¸à¦®à§Ÿà§‡à¦° à¦¸à¦™à§à¦—à§‡
// client-à¦à¦° elapsed time à¦¯à§‹à¦— à¦•à¦°à§‡ à¦¬à¦°à§à¦¤à¦®à¦¾à¦¨ à¦¸à¦®à§Ÿ
// à¦¬à§‡à¦° à¦•à¦°à¦¾ à¦¹à¦¬à§‡à¥¤
//
// à¦«à¦²à§‡ à¦ªà§à¦°à¦¤à¦¿ à¦¸à§‡à¦•à§‡à¦¨à§à¦¡à§‡ API call à¦•à¦°à¦¾à¦° à¦ªà§à¦°à§Ÿà§‹à¦œà¦¨ à¦¨à§‡à¦‡à¥¤
//
// =====================================================

function albaGetTrustedNow(){

  // ===================================================
  // Server time à¦à¦–à¦¨à§‹ à¦ªà¦¾à¦“à§Ÿà¦¾ à¦¯à¦¾à§Ÿà¦¨à¦¿
  // ===================================================

  if(
    albaServerTimeAtSync === null ||
    albaClientTimeAtSync === null
  ){

    return null;
  }


  // ===================================================
  // Server sync à¦¹à¦“à§Ÿà¦¾à¦° à¦ªà¦° client-à¦ à¦¯à¦¤ à¦¸à¦®à§Ÿ à¦—à§‡à¦›à§‡
  // ===================================================

  const elapsed =
    performance.now() -
    albaClientTimeAtSync;


  return (
    albaServerTimeAtSync +
    elapsed
  );
}


// =====================================================
// SYNC WITH ONLINE TIME
// =====================================================

async function albaSyncServerTime(){

  // à¦à¦•à¦¾à¦§à¦¿à¦• trusted online time source à¦šà§‡à¦·à§à¦Ÿà¦¾ à¦•à¦°à¦¾ à¦¹à¦¬à§‡à¥¤
  // à¦•à§‹à¦¨à§‹ source à¦¬à§à¦¯à¦°à§à¦¥ à¦¹à¦²à§‡ à¦ªà¦°à§‡à¦° source à¦¬à§à¦¯à¦¬à¦¹à¦¾à¦° à¦¹à¦¬à§‡à¥¤
  for(const apiUrl of ALBA_TIME_APIS){
    try{
      const requestStart = performance.now();
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 7000);

      let response;
      try{
        response = await fetch(apiUrl, {
          method: "GET",
          cache: "no-store",
          signal: controller.signal
        });
      }finally{
        clearTimeout(timeoutId);
      }

      if(!response.ok) throw new Error("Time API request failed: " + response.status);

      const data = await response.json();
      const requestEnd = performance.now();
      let serverTime = NaN;

      // timeapi.io returns dateTime; worldtimeapi returns unixtime.
      if(typeof data.unixtime === "number"){
        serverTime = data.unixtime * 1000;
      }else if(typeof data.dateTime === "string"){
        const dateTime = data.dateTime.trim();
        // API timestamp-à¦ timezone offset à¦¨à¦¾ à¦¥à¦¾à¦•à¦²à§‡ Bangladesh (+06:00) à¦¯à§‹à¦— à¦•à¦°à¦¾ à¦¹à¦¬à§‡à¥¤
        const hasTimezone = /(?:Z|[+-]\d{2}:?\d{2})$/i.test(dateTime);
        serverTime = new Date(hasTimezone ? dateTime : dateTime + "+06:00").getTime();
      }

      if(!Number.isFinite(serverTime)) throw new Error("Invalid time response");

      // Network latency-à¦à¦° à¦…à¦°à§à¦§à§‡à¦• à¦¯à§‹à¦— à¦•à¦°à§‡ à¦†à¦¨à§à¦®à¦¾à¦¨à¦¿à¦• midpoint timeà¥¤
      albaServerTimeAtSync = serverTime + ((requestEnd - requestStart) / 2);
      albaClientTimeAtSync = performance.now();
      albaTimeSynced = true;
      return true;

    }catch(error){
      console.warn("AL-BARAKAH time source failed:", apiUrl, error);
    }
  }

  albaTimeSynced = false;
  albaServerTimeAtSync = null;
  albaClientTimeAtSync = null;
  console.error("AL-BARAKAH: à¦¸à¦¬ online time source à¦¬à§à¦¯à¦°à§à¦¥ à¦¹à§Ÿà§‡à¦›à§‡; countdown à¦¨à¦¿à¦°à¦¾à¦ªà¦¤à§à¦¤à¦¾à¦° à¦œà¦¨à§à¦¯ à¦²à§à¦•à¦¾à¦¨à§‹ à¦†à¦›à§‡à¥¤");
  return false;
}

// =====================================================
// OFFER START TIMESTAMP
// =====================================================

function albaGetOfferStart(){

  return new Date(
    ALBA_OFFER.startTime
  ).getTime();

}


// =====================================================
// OFFER END TIMESTAMP
// =====================================================

function albaGetOfferEnd(){

  return new Date(
    ALBA_OFFER.endTime
  ).getTime();

}


// =====================================================
// OFFER ACTIVE?
// =====================================================

function albaIsOfferActive(){

  if(!ALBA_OFFER.enabled){

    return false;
  }


  const now =
    albaGetTrustedNow();


  if(now === null){

    return false;
  }


  const start =
    albaGetOfferStart();


  const end =
    albaGetOfferEnd();


  return (
    now >= start &&
    now < end
  );

}


// =====================================================
// OFFER UPCOMING?
// =====================================================

function albaIsOfferUpcoming(){

  const now =
    albaGetTrustedNow();


  if(now === null){

    return true;
  }


  return (
    now <
    albaGetOfferStart()
  );

}


// =====================================================
// OFFER EXPIRED?
// =====================================================

function albaIsOfferExpired(){

  const now =
    albaGetTrustedNow();


  if(now === null){

    return false;
  }


  return (
    now >=
    albaGetOfferEnd()
  );

}


// =====================================================
// OFFER PRODUCT CATEGORY FILTER
// =====================================================

function albaIsOfferProductEligible(p){
  if(!p) return false;
  const allowed=Array.isArray(ALBA_OFFER.categories) ? ALBA_OFFER.categories : [];
  if(allowed.length===0) return true;
  return allowed.some(cat => String(cat).trim() === String(p.cat || "").trim());
}

function albaEligibleSubtotal(){
  if(typeof cart === "undefined" || !Array.isArray(cart)) return 0;
  return cart.reduce((sum,item)=>{
    const p=products.find(x=>x.id===item.id);
    if(!p || !albaIsOfferProductEligible(p)) return sum;
    return sum + currentPrice(p) * (Number(item.qty)||0);
  },0);
}

function albaAllCartProductsEligible(){
  if(!Array.isArray(cart) || cart.length===0) return false;
  return cart.every(item=>{
    const p=products.find(x=>x.id===item.id);
    return !!p && albaIsOfferProductEligible(p);
  });
}

// =====================================================
// OFFER DISCOUNT
// =====================================================

function albaOfferDiscount(){

  if(
    !albaIsOfferActive()
  ){

    return 0;
  }


  if(
    ALBA_OFFER.type !==
    "extra_discount"
  ){

    return 0;
  }


  const subtotal = albaEligibleSubtotal();


  if(
    ALBA_OFFER.minOrder > 0 &&
    subtotal <
    ALBA_OFFER.minOrder
  ){

    return 0;
  }


  const percent =
    Number(
      ALBA_OFFER.extraDiscountPercent
    ) || 0;


  return Math.round(
    subtotal *
    percent /
    100
  );

}


// =====================================================
// DELIVERY CHARGE
// =====================================================

function albaGetDeliveryCharge(){

  // ===================================================
  // FREE DELIVERY
  // ===================================================

  if(
    albaIsOfferActive() &&
    ALBA_OFFER.type ===
    "free_delivery"
  ){

    const subtotal = albaEligibleSubtotal();

    // Free Delivery à¦à¦•à¦Ÿà¦¿ order-level benefit à¦¹à¦“à§Ÿà¦¾à§Ÿ mixed cart-à¦
    // ineligible product à¦¥à¦¾à¦•à¦²à§‡ à¦à¦Ÿà¦¿ à¦¦à§‡à¦“à§Ÿà¦¾ à¦¹à¦¬à§‡ à¦¨à¦¾à¥¤
    if(
      albaAllCartProductsEligible() &&
      (ALBA_OFFER.minOrder <= 0 ||
       subtotal >= ALBA_OFFER.minOrder)
    ){
      return 0;
    }

  }


  // ===================================================
  // EXISTING DELIVERY SYSTEM
  // ===================================================

  const area =
    document.getElementById(
      "deliveryArea"
    )?.value ||
    "dhaka";


  const weight = 1;


  const base =
    area === "outside"
      ? 130
      : 70;


  const extraKg =
    weight > 1
      ? Math.ceil(
          weight - 1
        )
      : 0;


  return (
    base +
    extraKg * 20
  );

}


// =====================================================
// UPDATE OFFER UI
// =====================================================

function albaUpdateOffer(){

  const section =
    document.getElementById(
      "albaFlashOffer"
    );


  if(!section){

    return;
  }


  // ===================================================
  // OFFER DISABLED
  // ===================================================

  if(!ALBA_OFFER.enabled){

    section.style.display =
      "none";

    return;
  }


  // ===================================================
  // TIME NOT SYNCED
  // ===================================================

  if(!albaTimeSynced){

    // à¦¨à¦¿à¦°à¦¾à¦ªà¦¤à§à¦¤à¦¾à¦° à¦œà¦¨à§à¦¯ countdown à¦¦à§‡à¦–à¦¾à¦¬à§‡ à¦¨à¦¾
    // à¦¯à¦¤à¦•à§à¦·à¦£ trusted time à¦ªà¦¾à¦“à§Ÿà¦¾ à¦¨à¦¾ à¦¯à¦¾à§Ÿ

    section.style.display =
      "none";

    return;
  }


  const now =
    albaGetTrustedNow();


  const start =
    albaGetOfferStart();


  const end =
    albaGetOfferEnd();

  // à¦­à§à¦²/à¦…à¦¬à§ˆà¦§ campaign date à¦¥à¦¾à¦•à¦²à§‡ timer à¦¦à§‡à¦–à¦¾à¦¨à§‹ à¦¹à¦¬à§‡ à¦¨à¦¾à¥¤
  if(!Number.isFinite(start) || !Number.isFinite(end) || end <= start){
    section.style.display = "none";
    console.error("AL-BARAKAH: Offer startTime/endTime à¦­à§à¦²à¦­à¦¾à¦¬à§‡ à¦¸à§‡à¦Ÿ à¦•à¦°à¦¾ à¦¹à§Ÿà§‡à¦›à§‡à¥¤");
    return;
  }


  // ===================================================
  // OFFER NOT STARTED
  // ===================================================

  if(now < start){

    section.style.display =
      "none";

    return;
  }


  // ===================================================
  // OFFER EXPIRED
  // ===================================================

  if(now >= end){

    clearInterval(
      albaOfferTimer
    );


    section.style.display =
      "none";

    return;
  }


  // ===================================================
  // OFFER ACTIVE
  // ===================================================

  section.style.display =
    "";


  // ===================================================
  // REMAINING TIME
  // ===================================================

  const remaining =
    end -
    now;


  if(remaining <= 0){

    section.style.display =
      "none";

    return;
  }


  // ===================================================
  // TIME CALCULATION
  // ===================================================

  const totalSeconds =
    Math.floor(
      remaining /
      1000
    );


  const days =
    Math.floor(
      totalSeconds /
      86400
    );


  const hours =
    Math.floor(
      (
        totalSeconds %
        86400
      ) /
      3600
    );


  const minutes =
    Math.floor(
      (
        totalSeconds %
        3600
      ) /
      60
    );


  const seconds =
    totalSeconds %
    60;


  // ===================================================
  // HTML ELEMENTS
  // ===================================================

  const dayEl =
    document.getElementById(
      "offerDays"
    );


  const hourEl =
    document.getElementById(
      "offerHours"
    );


  const minuteEl =
    document.getElementById(
      "offerMinutes"
    );


  const secondEl =
    document.getElementById(
      "offerSeconds"
    );


  // ===================================================
  // DAYS
  // ===================================================

  if(dayEl){

    dayEl.textContent =
      String(days)
        .padStart(
          2,
          "0"
        );
  }


  // ===================================================
  // HOURS
  // ===================================================

  if(hourEl){

    hourEl.textContent =
      String(hours)
        .padStart(
          2,
          "0"
        );
  }


  // ===================================================
  // MINUTES
  // ===================================================

  if(minuteEl){

    minuteEl.textContent =
      String(minutes)
        .padStart(
          2,
          "0"
        );
  }


  // ===================================================
  // SECONDS
  // ===================================================

  if(secondEl){

    secondEl.textContent =
      String(seconds)
        .padStart(
          2,
          "0"
        );
  }


  // ===================================================
  // OFFER TEXT
  // ===================================================

  const title =
    document.getElementById(
      "offerTitle"
    );


  const description =
    document.getElementById(
      "offerDescription"
    );


  const benefit =
    document.getElementById(
      "offerBenefit"
    );


  // ===================================================
  // FREE DELIVERY
  // ===================================================

  if(
    ALBA_OFFER.type ===
    "free_delivery"
  ){

    if(title){

      title.textContent =
        "à¦¬à¦¿à¦¶à§‡à¦· Free Delivery Offer!";
    }


    if(description){

      description.textContent =
        "à¦…à¦«à¦¾à¦° à¦¶à§‡à¦· à¦¹à¦“à§Ÿà¦¾à¦° à¦†à¦—à§‡à¦‡ à¦…à¦°à§à¦¡à¦¾à¦° à¦•à¦°à§à¦¨ à¦à¦¬à¦‚ à¦¡à§‡à¦²à¦¿à¦­à¦¾à¦°à¦¿ à¦šà¦¾à¦°à§à¦œ à¦›à¦¾à§œà¦¾à¦‡ à¦ªà¦£à§à¦¯ à¦¨à¦¿à¦¨à¥¤";
    }


    if(benefit){

      benefit.innerHTML =
        "ðŸšš <strong>FREE DELIVERY</strong>";
    }

  }


  // ===================================================
  // EXTRA DISCOUNT
  // ===================================================

  if(
    ALBA_OFFER.type ===
    "extra_discount"
  ){

    if(title){

      title.textContent =
        "à¦¨à¦¿à¦°à§à¦¦à¦¿à¦·à§à¦Ÿ à¦ªà¦£à§à¦¯à§‡à¦° à¦‰à¦ªà§œ à¦¬à¦¿à¦¶à§‡à¦· à¦›à¦¾à§œ!";
    }


    if(description){

      description.textContent =
        "à¦…à¦«à¦¾à¦° à¦¶à§‡à¦· à¦¹à¦“à§Ÿà¦¾à¦° à¦†à¦—à§‡ à¦…à¦°à§à¦¡à¦¾à¦° à¦•à¦°à¦²à§‡ à¦…à¦¤à¦¿à¦°à¦¿à¦•à§à¦¤ " +
        ALBA_OFFER.extraDiscountPercent +
        "% à¦›à¦¾à§œ à¦ªà¦¾à¦¬à§‡à¦¨à¥¤";
    }


    if(benefit){

      benefit.innerHTML =
        "ðŸ”¥ <strong>" +
        ALBA_OFFER.extraDiscountPercent +
        "% EXTRA DISCOUNT</strong>";
    }

  }

}


// =====================================================
// OFFER TIMER
// =====================================================

let albaOfferTimer =
  null;


// =====================================================
// START COUNTDOWN
// =====================================================

function albaStartOfferTimer(){

  clearInterval(
    albaOfferTimer
  );


  albaUpdateOffer();


  albaOfferTimer =
    setInterval(
      albaUpdateOffer,
      250
    );

}


// =====================================================
// PERIODIC TIME RESYNC
// =====================================================
//
// à¦ªà§à¦°à¦¤à¦¿ 5 à¦®à¦¿à¦¨à¦¿à¦Ÿà§‡ à¦†à¦¬à¦¾à¦° server time à¦¨à§‡à¦“à§Ÿà¦¾ à¦¹à¦¬à§‡à¥¤
// à¦à¦¤à§‡ à¦¦à§€à¦°à§à¦˜à¦¸à¦®à§Ÿ page à¦–à§‹à¦²à¦¾ à¦¥à¦¾à¦•à¦²à§‡à¦“ clock drift à¦•à¦® à¦¥à¦¾à¦•à¦¬à§‡à¥¤
//
// =====================================================

async function albaStartTimeSync(){

  const synced =
    await albaSyncServerTime();


  if(synced){

    albaStartOfferTimer();
  }


  clearInterval(
    albaTimeSyncTimer
  );


  albaTimeSyncTimer =
    setInterval(
      async function(){

        const success =
          await albaSyncServerTime();


        if(success){

          albaUpdateOffer();
        }

      },
      5 * 60 * 1000
    );

}


// =====================================================
// INIT OFFER
// =====================================================

async function albaInitOffer(){

  const section =
    document.getElementById(
      "albaFlashOffer"
    );


  // ===================================================
  // OFFER OFF
  // ===================================================

  if(!ALBA_OFFER.enabled){

    if(section){

      section.style.display =
        "none";
    }

    return;
  }


  // ===================================================
  // INITIAL HIDE
  // ===================================================

  if(section){

    section.style.display =
      "none";
  }


  // ===================================================
  // GET TRUSTED TIME
  // ===================================================

  await albaStartTimeSync();

}


// =====================================================
// START
// =====================================================

if(
  document.readyState ===
  "loading"
){

  document.addEventListener(
    "DOMContentLoaded",
    albaInitOffer
  );

}else{

  albaInitOffer();

}


/* ===== AL-BARAKAH MOBILE MENU â€” UI ONLY ===== */
function toggleMobileMenu(){
  const overlay=document.getElementById("mobileMenuOverlay");
  const btn=document.querySelector(".mobile-menu-btn");
  if(!overlay)return;
  const show=!overlay.classList.contains("show");
  overlay.classList.toggle("show",show);
  document.body.classList.toggle("mobile-menu-open",show);
  if(btn) btn.setAttribute("aria-expanded",show?"true":"false");
}

function closeMobileMenu(e){
  if(e && e.target && e.target.id!=="mobileMenuOverlay") return;
  const overlay=document.getElementById("mobileMenuOverlay");
  const btn=document.querySelector(".mobile-menu-btn");
  if(!overlay)return;
  overlay.classList.remove("show");
  document.body.classList.remove("mobile-menu-open");
  if(btn) btn.setAttribute("aria-expanded","false");
}

document.addEventListener("keydown",function(e){
  if(e.key==="Escape") closeMobileMenu();
});
