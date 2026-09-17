const WHATSAPP="8801670455526";
// Google Apps Script Web App URL (your live /exec URL)
const APPS_SCRIPT_URL="https://script.google.com/macros/s/AKfycbx0RZ50jdoUqitqMlvuOEaxp_8wlepyPLT4Q9jT8UVljVkAc9D3dFxqiJgDyVlEYz0M/exec";

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


const products=[
  {
    id:1,
	//stock:false,
    name:"আল্লাহু-আকবার PVC Wall Lamp",
    cat:"ওয়াল ল্যাম্প",
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
    short:"ইসলামিক ক্যালিগ্রাফি ডিজাইন",
    desc:"আল্লাহু-আকবার ক্যালিগ্রাফি সম্বলিত এই Premium Decorative PVC Lamp ঘরের পরিবেশে একটি শান্ত, মার্জিত ও নান্দনিক আবহ তৈরি করতে পারে। বেডরুম, ড্রয়িংরুম, নামাজের স্থান বা বিশেষ উপহার হিসেবে এটি ব্যবহার করা যায়।",
    features:["Premium PVC body 2mm","আকর্ষণীয় Islamic Calligraphy","সহজেই লাইট পরিবর্তন সুব্বিধা","দেয়ালে ও টেবিলে দুইভাবেই মানিয়ে নেয়","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:2,
	//stock:false,
    name:"মাশা-আল্লাহ PVC Wall Lamp",
    cat:"ওয়াল ল্যাম্প",
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
    short:"ইসলামিক ক্যালিগ্রাফি ডিজাইন",
    desc:"মাশা-আল্লাহ ক্যালিগ্রাফির সুন্দর ডিজাইনের এই Decorative Lamp আপনার ঘরের সাজে একটি আলাদা সৌন্দর্য যোগ করবে। Islamic decor পছন্দ করেন এমন প্রিয়জনের জন্যও এটি চমৎকার একটি উপহার।",
    features:["Premium PVC body 2mm","আকর্ষণীয় Islamic Calligraphy","সহজেই লাইট পরিবর্তন সুব্বিধা","দেয়ালে ও টেবিলে দুইভাবেই মানিয়ে নেয়","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:3,
	//stock:false,
    name:"আল্লাহু — PVC Wall Lamp",
    cat:"ওয়াল ল্যাম্প",
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
    short:"ইসলামিক ক্যালিগ্রাফি ডিজাইন",
    desc:"আল্লাহু আলোর আকর্ষণীয় presentation-এর সঙ্গে Islamic decorative design। ঘরের একটি বিশেষ corner, bedside table বা decorative setup-এ আলাদা visual effect তৈরি করতে ব্যবহার করতে পারেন।",
    features:["Premium PVC body 2mm","আকর্ষণীয় Islamic Calligraphy","সহজেই লাইট পরিবর্তন সুব্বিধা","দেয়ালে ও টেবিলে দুইভাবেই মানিয়ে নেয়","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:4,
	//stock:false,
    name:"মুহাম্মদ ﷺ — PVC Wall Lamp",
    cat:"ওয়াল ল্যাম্প",
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
    short:"ইসলামিক ক্যালিগ্রাফি ডিজাইন",
    desc:"মুহাম্মদ ﷺ নামের অনুপ্রেরণায় তৈরি এই decorative lamp-এর সবুজ lighting presentation ঘরে একটি শান্ত ও elegant Islamic decor feeling তৈরি করতে সাহায্য করে।",
    features:["Premium PVC body 2mm","আকর্ষণীয় Islamic Calligraphy","সহজেই লাইট পরিবর্তন সুব্বিধা","দেয়ালে ও টেবিলে দুইভাবেই মানিয়ে নেয়","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:5,
	//stock:false,
    name:"সুবহান-আল্লাহ — PVC Wall Lamp",
    cat:"ওয়াল ল্যাম্প",
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
	short:"ইসলামিক ক্যালিগ্রাফি ডিজাইন",
    desc:"সুবহান-আল্লাহ লেখা উষ্ণ lighting-এর সঙ্গে Islamic calligraphy inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","আকর্ষণীয় Islamic Calligraphy","সহজেই লাইট পরিবর্তন সুব্বিধা","দেয়ালে ও টেবিলে দুইভাবেই মানিয়ে নেয়","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:6,
	//stock:false,
    name:"আলহামদুলিল্লাহ — PVC Wall Lamp",
    cat:"ওয়াল ল্যাম্প",
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
	short:"ইসলামিক ক্যালিগ্রাফি ডিজাইন",
    desc:"আলহামদুলিল্লাহ লেখা উষ্ণ lighting-এর সঙ্গে Islamic calligraphy inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","আকর্ষণীয় Islamic Calligraphy","সহজেই লাইট পরিবর্তন সুব্বিধা","দেয়ালে ও টেবিলে দুইভাবেই মানিয়ে নেয়","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:7,
	//stock:false,
    name:"মাছরাঙ্গা — PVC Wall Lamp",
    cat:"ওয়াল ল্যাম্প",
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
	short:"মাছরাঙ্গা ও পদ্ম ফুলের উষ্ণ আলো",
    desc:"মাছরাঙ্গা ও পদ্ম ফুল এর উষ্ণ lighting-এর সঙ্গে inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","সহজেই লাইট পরিবর্তন সুব্বিধা","দেয়ালে ও টেবিলে দুইভাবেই মানিয়ে নেয়","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:8,
	//stock:false,
    name:"সূর্যমুখী — PVC Wall Lamp",
    cat:"ওয়াল ল্যাম্প",
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
	short:"সূর্যমুখী ফুলের উষ্ণ আলোর ডিজাইন",
    desc:"সূর্যমুখী ফুলের উষ্ণ lighting-এর সঙ্গে inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","সহজেই লাইট পরিবর্তন সুব্বিধা","দেয়ালে ও টেবিলে দুইভাবেই মানিয়ে নেয়","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:9,
	//stock:false,
    name:"গোলাপ ফুল — PVC Wall Lamp",
    cat:"ওয়াল ল্যাম্প",
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
	short:"গোলাপের উষ্ণ আলোর ডিজাইন",
    desc:"উষ্ণ গোলাপের lighting-এর সঙ্গে inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","সহজেই লাইট পরিবর্তন সুব্বিধা","দেয়ালে ও টেবিলে দুইভাবেই মানিয়ে নেয়","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:10,
	//stock:false,
    name:"গ্রামীণ পরিবেশ — PVC Wall Lamp",
    cat:"ওয়াল ল্যাম্প",
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
	short:"গ্রামের উষ্ণ আলোর ছোঁয়া",
    desc:"গ্রামীণ পরিবেশের inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","আকর্ষণীয় design","সহজেই লাইট পরিবর্তন সুব্বিধা","দেয়ালে ও টেবিলে দুইভাবেই মানিয়ে নেয়","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:11,
	//stock:false,
    name:"পদ্ম ফুল — PVC Wall Lamp",
    cat:"ওয়াল ল্যাম্প",
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
	short:"পদ্ম ফুলের উষ্ণ আলোর ডিজাইন",
    desc:"পদ্ম ফুলের উষ্ণ lighting-এর সঙ্গে inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","সহজেই লাইট পরিবর্তন সুব্বিধা","দেয়ালে ও টেবিলে দুইভাবেই মানিয়ে নেয়","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:12,
	//stock:false,
    name:"আলহামদুলিল্লাহ-২ — PVC Wall Lamp",
    cat:"ওয়াল ল্যাম্প",
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
	short:"ইসলামিক ক্যালিগ্রাফিক উষ্ণ আলো",
    desc:"আলহামদুলিল্লাহ লেখা উষ্ণ lighting-এর সঙ্গে Islamic calligraphy inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","আকর্ষণীয় Islamic Calligraphy","সহজেই লাইট পরিবর্তন সুব্বিধা","দেয়ালে ও টেবিলে দুইভাবেই মানিয়ে নেয়","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:13,
	//stock:false,
    name:"টিউলিপ ফুল — PVC Wall Lamp",
    cat:"ওয়াল ল্যাম্প",
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
	short:"টিউলিপ ফুলের উষ্ণ আলো",
    desc:"টিউলিপ ফুলের উষ্ণ গোল্ডেন lighting-এর সঙ্গে inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","সহজেই লাইট পরিবর্তন সুব্বিধা","দেয়ালে ও টেবিলে দুইভাবেই মানিয়ে নেয়","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:14,
	//stock:false,
    name:"আলহামদুলিল্লাহ-৩ — PVC Wall Lamp",
    cat:"ওয়াল ল্যাম্প",
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
	short:"আলহামদুলিল্লাহ লেখা ক্যালিগ্রাফিক ডিজাইন",
    desc:"আলহামদুলিল্লাহ লেখা উষ্ণ lighting-এর সঙ্গে Islamic calligraphy inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","আকর্ষণীয় Islamic Calligraphy","সহজেই লাইট পরিবর্তন সুব্বিধা","দেয়ালে ও টেবিলে দুইভাবেই মানিয়ে নেয়","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:15,
	//stock:false,
    name:"মুহাম্মদ ﷺ — PVC Wall Lamp Design 2",
    cat:"ওয়াল ল্যাম্প",
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
	short:"মুহাম্মদ ﷺ লেখা ক্যালিগ্রাফিক ডিজাইন",
    desc:"মুহাম্মদ ﷺ লেখা উষ্ণ lighting-এর সঙ্গে Islamic calligraphy inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","আকর্ষণীয় Islamic Calligraphy","সহজেই লাইট পরিবর্তন সুব্বিধা","দেয়ালে ও টেবিলে দুইভাবেই মানিয়ে নেয়","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৩ইঞ্চি পাশ এবং উচ্চতা ১০ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:16,
	//stock:false,
    name:"বাশ-পাতা — PVC Wall Lamp",
    cat:"ওয়াল ল্যাম্প",
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
	short:"বাশ-পাতা ডিজাইন",
    desc:"বাশ-পাতার উষ্ণ lighting-এর সঙ্গে inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","সহজেই লাইট পরিবর্তন সুব্বিধা","দেয়ালে ও টেবিলে দুইভাবেই মানিয়ে নেয়","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৩ইঞ্চি পাশ এবং উচ্চতা ১০ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:17,
	//stock:false,
    name:"আল্লাহু — PVC Wall Lamp Design 2",
    cat:"ওয়াল ল্যাম্প",
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
	short:"আল্লাহু লেখা ক্যালিগ্রাফিক ডিজাইন",
    desc:"আল্লাহু আলোর আকর্ষণীয় presentation-এর সঙ্গে Islamic calligraphy inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","আকর্ষণীয় Islamic Calligraphy","সহজেই লাইট পরিবর্তন সুব্বিধা","দেয়ালে ও টেবিলে দুইভাবেই মানিয়ে নেয়","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৩ইঞ্চি পাশ এবং উচ্চতা ১০ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:18,
	//stock:false,
    name:"Couple Name Design (Custom) — PVC Wall Lamp",
    cat:"ওয়াল ল্যাম্প",
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
	short:"প্রিমিয়াম কাপল নেম কাস্টম ল্যাম্প",
    desc:"আপনার প্রিয় মানুষটির নামকে আরও বিশেষ ও স্মরণীয় করে তুলতে তৈরি Premium Couple Name Decorative Lamp। বিবাহবার্ষিকী, জন্মদিন, বিয়ে, ভালোবাসার বিশেষ দিন বা প্রিয়জনকে উপহার দেওয়ার জন্য উপযুক্ত। ল্যাম্পটির কালো বডির ওপর রোমান্টিক কাপল ডিজাইন, হার্ট ও ফুলের নান্দনিক কাটিং এবং “আপনাদের” নামের আলোকিত ডিজাইন একে করে তুলবে অসাধারণ একটি কাস্টম ডেকোরেশন পিস। আলো জ্বালালে পুরো ডিজাইনটি উষ্ণ অ্যাম্বার আলোয় সুন্দরভাবে ফুটে ওঠে।",
    features:["কাপল থিমের আকর্ষণীয় ডিজাইন","দুইজনের নাম কাস্টমাইজ করার সুবিধা","সহজেই লাইট পরিবর্তন সুব্বিধা","দেয়ালে ও টেবিলে দুইভাবেই মানিয়ে নেয়","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৩ইঞ্চি পাশ এবং উচ্চতা ১০ইঞ্চি","আলো জ্বালালে নাম ও ডিজাইন সুন্দরভাবে আলোকিত হয়","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী","একটি ল্যাম্প, দুটি নাম—আর অসংখ্য সুন্দর স্মৃতি।"]
  },
  {
    id:19,
	//stock:false,
    name:"সুবহান-আল্লাহ PVC টেবিল ল্যাম্প — Black & Silver",
    cat:"টেবিল ল্যাম্প",
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
    short:"ঘর সাজাতে ইসলামিক আলোর ডিজাইন",
    desc:"উষ্ণ গোল্ডেন lighting-এর সঙ্গে Islamic calligraphy inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","আকর্ষণীয় Islamic Calligraphy","সহজেই লাইট পরিবর্তন সুব্বিধা","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:20,
	//stock:false,
    name:"আলহামদুলিল্লাহ PVC টেবিল ল্যাম্প — Black & Silver",
    cat:"টেবিল ল্যাম্প",
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
    short:"ঘর সাজাতে ইসলামিক আলোর ডিজাইন",
    desc:"উষ্ণ গোল্ডেন lighting-এর সঙ্গে Islamic calligraphy inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","আকর্ষণীয় Islamic Calligraphy","সহজেই লাইট পরিবর্তন সুব্বিধা","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:21,
	//stock:false,
    name:"সূর্যমুখী ফুল PVC টেবিল ল্যাম্প — Black & Silver",
    cat:"টেবিল ল্যাম্প",
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
    short:"ঘর সাজাতে সূর্যমুখী ফুলের ডিজাইন",
    desc:"উষ্ণ গোল্ডেন lighting-এর সঙ্গে সূর্যমুখী ফুলের ডিজাইন। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","সহজেই লাইট পরিবর্তন সুব্বিধা","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:22,
	//stock:false,
    name:"গ্রামীণ পরিবেশ, ঘর ও গাছ PVC টেবিল ল্যাম্প — Black & Silver",
    cat:"টেবিল ল্যাম্প",
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
    short:"ঘর সাজাতে গ্রামীণ পরিবেশে",
    desc:"গ্রামীণ পরিবেশের inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","সহজেই লাইট পরিবর্তন সুব্বিধা","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:23,
	//stock:false,
    name:"গোলাপ ফুল PVC টেবিল ল্যাম্প — Black & Silver",
    cat:"টেবিল ল্যাম্প",
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
    short:"ঘর সাজাতে গোলাপের আলোর",
    desc:"গোলাপ ফুলের আলোয় রাত হোক আলোকিত। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","সহজেই লাইট পরিবর্তন সুব্বিধা","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:24,
	//stock:false,
    name:"মুহাম্মদ ﷺ লেখা PVC টেবিল ল্যাম্প — Black & Gold",
    cat:"টেবিল ল্যাম্প",
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
    short:"ঘর সাজাতে ইসলামিক আলোর ডিজাইন",
    desc:"উষ্ণ গোল্ডেন lighting-এর সঙ্গে Islamic calligraphy inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","আকর্ষণীয় Islamic Calligraphy","সহজেই লাইট পরিবর্তন সুব্বিধা","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:25,
	//stock:false,
    name:"আল্লাহু লেখা PVC টেবিল ল্যাম্প — Black & Gold",
    cat:"টেবিল ল্যাম্প",
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
    short:"ঘর সাজাতে ইসলামিক আলোর ডিজাইন",
    desc:"উষ্ণ গোল্ডেন lighting-এর সঙ্গে Islamic calligraphy inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","আকর্ষণীয় Islamic Calligraphy","সহজেই লাইট পরিবর্তন সুব্বিধা","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:26,
	//stock:false,
    name:"মুহাম্মদ ﷺ লেখা PVC টেবিল ল্যাম্প — Design-2 Black & Silver",
    cat:"টেবিল ল্যাম্প",
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
    short:"ঘর সাজাতে ইসলামিক আলোর ডিজাইন",
    desc:"উষ্ণ গোল্ডেন lighting-এর সঙ্গে Islamic calligraphy inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","আকর্ষণীয় Islamic Calligraphy","সহজেই লাইট পরিবর্তন সুব্বিধা","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:27,
	//stock:false,
    name:"টিউলিপ ফুল PVC টেবিল ল্যাম্প — Black & Silver",
    cat:"টেবিল ল্যাম্প",
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
    short:"টিউলিপ ফুলের উষ্ণ আলোর ডিজাইন",
    desc:"টিউলিপ ফুলের উষ্ণ গোল্ডেন lighting-এর সঙ্গে inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","আকর্ষণীয় Islamic Calligraphy","সহজেই লাইট পরিবর্তন সুব্বিধা","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:28,
	//stock:false,
    name:"আল্লাহু লেখা PVC টেবিল ল্যাম্প — Design-2 Black & Silver",
    cat:"টেবিল ল্যাম্প",
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
    short:"ঘর সাজাতে ইসলামিক আলোর ডিজাইন",
    desc:"উষ্ণ গোল্ডেন lighting-এর সঙ্গে Islamic calligraphy inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","আকর্ষণীয় Islamic Calligraphy","সহজেই লাইট পরিবর্তন সুব্বিধা","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:29,
	//stock:false,
    name:"আল্লাহু লেখা PVC টেবিল ল্যাম্প — Design-3 Black & Silver",
    cat:"টেবিল ল্যাম্প",
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
    short:"ঘর সাজাতে ইসলামিক ডিজাইন",
    desc:"উষ্ণ গোল্ডেন lighting-এর সঙ্গে Islamic calligraphy inspired design। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","আকর্ষণীয় Islamic Calligraphy","সহজেই লাইট পরিবর্তন সুব্বিধা","৭ কালার RGB LED light (9wt with 3 mode)","সাইজঃ- ৪.৫ইঞ্চি পাশ এবং উচ্চতা ১১ইঞ্চি","১টি হোল্ডার কনভার্টার","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:22,
	//stock:false,
    name:"ডেকোরেটিভ লাইট — Design 01",
    cat:"ডেকোরেটিভ আইটেম",
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
    short:"ঘর সাজাতে প্রিমিয়াম ডিজাইন",
    desc:"উষ্ণ lighting-এর সঙ্গে প্রিমিয়াম ডিজাইন। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:23,
	//stock:false,
    name:"ডেকোরেটিভ লাইট — Design 02",
    cat:"ডেকোরেটিভ আইটেম",
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
    short:"ঘর সাজাতে প্রিমিয়াম ডিজাইন",
    desc:"উষ্ণ lighting-এর সঙ্গে প্রিমিয়াম ডিজাইন। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:24,
	//stock:false,
    name:"ডেকোরেটিভ ঘড়ি — Design 01",
    cat:"ডেকোরেটিভ আইটেম",
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
    short:"ঘর সাজাতে প্রিমিয়াম ডিজাইন",
    desc:"উষ্ণ lighting-এর সঙ্গে প্রিমিয়াম ডিজাইন। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:25,
	//stock:false,
    name:"ডেকোরেটিভ লাইট — Design 04",
    cat:"ডেকোরেটিভ আইটেম",
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
    short:"ঘর সাজাতে প্রিমিয়াম ডিজাইন",
    desc:"উষ্ণ lighting-এর সঙ্গে প্রিমিয়াম ডিজাইন। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:26,
	//stock:false,
    name:"ডেকোরেটিভ লাইট — Design 05",
    cat:"ডেকোরেটিভ আইটেম",
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
    short:"ঘর সাজাতে প্রিমিয়াম ডিজাইন",
    desc:"উষ্ণ lighting-এর সঙ্গে প্রিমিয়াম ডিজাইন। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:27,
	//stock:false,
    name:"ডেকোরেটিভ লাইট — Design 06",
    cat:"ডেকোরেটিভ আইটেম",
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
    short:"ঘর সাজাতে প্রিমিয়াম ডিজাইন",
    desc:"উষ্ণ lighting-এর সঙ্গে প্রিমিয়াম ডিজাইন। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:28,
	//stock:false,
    name:"ডেকোরেটিভ ঘড়ি — Design 02",
    cat:"ডেকোরেটিভ আইটেম",
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
    short:"ঘর সাজাতে প্রিমিয়াম ডিজাইন",
    desc:"উষ্ণ lighting-এর সঙ্গে প্রিমিয়াম ডিজাইন। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তে উপহার দিতে এই designটি দারুণ একটি choice।",
    features:["Premium PVC body 2mm","নরম ও সুন্দর lighting effect","ঘর সাজানো ও উপহারের জন্য উপযোগী"]
  },
  {
    id:29,
	//stock:false,
    name:"RGBIC Neon Strip Light",
    cat:"অ্যাক্সেসরিস",
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
    short:"রিমোর্ট ও মোবাইল অ্যাপ দিয়ে কালার কন্ট্রোল",
    desc:"মোবাইল অ্যাপ এবং রিমোর্ট দিয়ে সহজেই কালার কন্ট্রোল সুবিধা। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তের জন্য দারুণ একটি choice।",
    features:["রিমোর্ট ও মোবাইল অ্যাপ দিয়ে কালার কন্ট্রোল","সহজেই কালার পরিবর্তন সুব্বিধা","৭ কালার RGB LED light (9wt with multi mode)","Bluetooth app control","Remote control","Music sync","Diy Cuttable & USB Powered"]
  },
  {
    id:30,
	//stock:false,
    name:"Pendant Pin Type Holder",
    cat:"অ্যাক্সেসরিস",
    price:35,
    discount:17,
    img:"images/holdar-pin-1.webp",
    images:[
      "images/holdar-pin-1.webp",
      "images/holdar-pin-2.webp",
      "images/holdar-pin-1.webp",
      "images/holdar-pin-2.webp",
      "images/holdar-pin-1.webp"
    ],
    short:"ঝুলন্ত হোল্ডার পিন সিস্টেম",
    desc:"Pendant Pin Type Holder- ঝুলন্ত হোল্ডার পিন সিস্টেম এতে কনভার্টার ব্যাবহার করতে পারবেন।",
    features:["ঝুলন্ত হোল্ডার পিন সিস্টেম","Pendant Pin Type Holder"]
  },
  {
    id:31,
	//stock:false,
    name:"RGB LED Light",
    cat:"অ্যাক্সেসরিস",
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
    short:"৭ কালার RGB LED light with multi mode",
    desc:"সুইচ অফ-অন এর মাধ্যমে সহজেই কালার কন্ট্রোল সুবিধা। ঘরের ambience আরও premium দেখাতে এবং বিশেষ মুহূর্তের জন্য দারুণ একটি choice।",
    features:["সুইচ অফ-অন এর মাধ্যমে কালার কন্ট্রোল","সহজেই কালার পরিবর্তন সুব্বিধা","৭ কালার RGB LED light (9wt with multi mode)"]
  },
  {
    id:32,
	//stock:false,
    name:"Patch-type pendant holder",
    cat:"অ্যাক্সেসরিস",
    price:35,
    discount:17,
    img:"images/holdar-patch-1.webp",
    images:[
      "images/holdar-patch-1.webp",
      "images/holdar-patch-2.webp",
      "images/holdar-patch-1.webp",
      "images/holdar-patch-2.webp",
      "images/holdar-patch-1.webp"
    ],
    short:"ঝুলন্ত হোল্ডার প্যাঁচ সিস্টেম",
    desc:"Pendant Patch-type Holder- ঝুলন্ত হোল্ডার প্যাঁচ সিস্টেম এতে কনভার্টার ব্যাবহার করতে পারবেন।",
    features:["ঝুলন্ত হোল্ডার প্যাঁচ সিস্টেম","Pendant Patch-type Holder"]
  },
  {
    id:33,
	//stock:false,
    name:"AC power cord",
    cat:"অ্যাক্সেসরিস",
    price:33,
    discount:17,
    img:"images/ac-power-cord-1.webp",
    images:[
      "images/ac-power-cord-1.webp",
      "images/ac-power-cord-2.webp",
      "images/ac-power-cord-1.webp",
      "images/ac-power-cord-2.webp",
      "images/ac-power-cord-1.webp"
    ],
    short:"AC পাওয়ার কর্ড",
    desc:"AC power cord সরাসরি বিদ্যুৎ হতে চার্জার লাইট অথাবা চার্জার ফ্যান এর সাথে কানেক্ট করে চার্জ করার সুবিধার",
    features:["চার্জার লাইট অথাবা চার্জার ফ্যান এর জন্য","220 volt AC power cord","With female port"]
  },
  {
    id:34,
	//stock:false,
    name:"AL-BARAKAH Mini Honey Nut Box – ১৫ গ্রাম",
    cat:"অর্গানিক ফুড",
    price:30,
    discount:0,
    img:"images/mini-honey-nut-mixd-1.webp",
    images:[
      "images/mini-honey-nut-mixd-1.webp",
      "images/mini-honey-nut-mixd-2.webp",
      "images/mini-honey-nut-mixd-3.webp",
      "images/mini-honey-nut-mixd-4.webp",
      "images/mini-honey-nut-mixd-5.webp"
    ],
    short:"হানি নাট 15gm mini Box",
    desc:"ছোট্ট প্যাকেটে প্রাকৃতিক মধুর মিষ্টতা আর বিভিন্ন বাদাম ও বীজের পুষ্টিগুণের দারুণ সমন্বয়। কাজুবাদাম, কাঠবাদাম, পেস্তাবাদাম, চিনাবাদাম, দেশিবাদাম, চিয়া সিড, তিল, কুমড়াবিজ ও কিছমিছসহ পুষ্টিকর উপাদানের সমাহার। 💚 AL-BARAKAH – ছোট প্যাকেট, বড় পুষ্টির আনন্দ।",
    features:["শরীরের জন্য প্রয়োজনীয় পুষ্টি ও এনার্জি পেতে সহায়ক","বাদাম ও বীজের প্রাকৃতিক প্রোটিন, ভালো ফ্যাট, ফাইবার ও বিভিন্ন মাইক্রোনিউট্রিয়েন্টের উৎস","ক্ষুধার সময় ছোট ও সহজ একটি স্ন্যাকস","অফিস, স্কুল, ভ্রমণ বা ব্যস্ত সময়ে সঙ্গে রাখা সহজ","প্রতিদিনের খাদ্যতালিকায় পুষ্টিকর বৈচিত্র্য যোগ করতে পারে"]
  },
  {
    id:35,
	//stock:false,
    name:"প্রিমিয়াম ৫০০ গ্রাম মিক্সড মধু",
    cat:"অর্গানিক ফুড",
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
    short:"৫০০ গ্রাম মিক্সড মধু প্রকৃতির মিষ্টতা🍯❤️",
    desc:"প্রকৃতির মিষ্টি উপহার—খাঁটি মধু। প্রতিদিনের খাবারের তালিকায় প্রাকৃতিক মিষ্টতা ও পুষ্টিগুণ যোগ করতে আমাদের ৫০০ গ্রাম মধু হতে পারে দারুণ একটি পছন্দ। 🥄 খাওয়ার সহজ নিয়ম: সরাসরি ১–২ চা চামচ খেতে পারেন অথবা কুসুম গরম পানি/দুধের সঙ্গে মিশিয়ে নিতে পারেন।",
    features:["প্রাকৃতিকভাবে মিষ্টি ও সুস্বাদু","শরীরের জন্য প্রয়োজনীয় বিভিন্ন পুষ্টি উপাদানের উৎস","সকালে বা দিনের যেকোনো সময় খাওয়া যায়","চা, দুধ, রুটি, পাউরুটি কিংবা বিভিন্ন খাবারের সঙ্গে সহজেই ব্যবহারযোগ্য","পরিবারের দৈনন্দিন ব্যবহারের জন্য সুবিধাজনক ৫০০ গ্রাম জার"]
  },
  {
    id:36,
    name:"AL-BARAKAH Honey Nut Mixed – 250 গ্রাম",
    cat:"অর্গানিক ফুড",
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
    short:"হানি নাট 250 gm",
    desc:"প্রাকৃতিক মধুর মিষ্টতা আর বিভিন্ন বাদাম ও বীজের পুষ্টিগুণের দারুণ সমন্বয়। কাজুবাদাম, কাঠবাদাম, পেস্তাবাদাম, চিনাবাদাম, দেশিবাদাম, চিয়া সিড, তিল, কুমড়াবিজ ও কিছমিছসহ পুষ্টিকর উপাদানের সমাহার। 💚 AL-BARAKAH – বড় পুষ্টির আনন্দ।",
    features:["শরীরের জন্য প্রয়োজনীয় পুষ্টি ও এনার্জি পেতে সহায়ক","বাদাম ও বীজের প্রাকৃতিক প্রোটিন, ভালো ফ্যাট, ফাইবার ও বিভিন্ন মাইক্রোনিউট্রিয়েন্টের উৎস","ক্ষুধার সময় সহজ একটি স্ন্যাকস","প্রতিদিনের খাদ্যতালিকায় পুষ্টিকর বৈচিত্র্য যোগ করতে পারে"]
  },
  {
    id:37,
    name:"Zatax Attar 8ml",
    cat:"প্রসাধনী",
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
    short:"প্রিমিয়াম পারফিউম সুগন্ধী",
    desc:"Alif Zatax 8ml-এর প্রস্তুতকারকের তথ্য অনুযায়ী এটি একটি Unisex oil perfume, যার ঘ্রাণে Patchouli, Amber, Vanilla ও Sandalwood-এর সমন্বয় রয়েছে। এটি অ্যালকোহলমুক্ত আতর হিসেবে বাজারজাত করা হয়। Zatax Attar 8ml একটি প্রিমিয়াম ও আকর্ষণীয় সুগন্ধির আতর, যা পুরুষ ও নারী উভয়ের ব্যবহারের উপযোগী। এর উডি, অ্যাম্বার ও মিষ্টি ভ্যানিলা ঘ্রাণ ব্যক্তিত্বে আনে রুচিশীলতা ও আকর্ষণীয় অনুভূতি। দৈনন্দিন ব্যবহার, অফিস, ভ্রমণ কিংবা বিশেষ অনুষ্ঠানে ব্যবহার করা যায়।",
    features:["৮ml কমপ্যাক্ট ও সহজে বহনযোগ্য বোতল","Unisex — নারী ও পুরুষ উভয়ের জন্য উপযোগী","অ্যালকোহলমুক্ত আতর","Long-lasting fragrance","Roll-on ব্যবহারের সুবিধা","Patchouli, Amber, Vanilla ও Sandalwood-এর মনোমুগ্ধকর ঘ্রাণের সমন্বয়","দৈনন্দিন ও বিশেষ অনুষ্ঠানে ব্যবহারের উপযোগী","অল্প পরিমাণেই মনোরম সুগন্ধি উপভোগের সুবিধা"]
  },
  {
    id:38,
    name:"Vampire Blood Attar 8ml",
    cat:"প্রসাধনী",
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
    short:"রহস্যময় ও আকর্ষণীয় সুগন্ধির এক অনন্য অনুভূতি",
    desc:"নামের মতোই এর ঘ্রাণে রয়েছে এক ধরনের রহস্য, গভীরতা ও আকর্ষণ। Vampire Blood Attar মূলত মিষ্টি ও ডার্ক ফ্রুটি ঘ্রাণের সঙ্গে ফ্লোরাল এবং মস্কি নোটের সুন্দর সমন্বয়—যা সাধারণ সুগন্ধি থেকে একটু ভিন্ন ধরনের পারফিউম পছন্দ করেন তাদের জন্য দারুণ একটি পছন্দ। 🌹 ঘ্রাণের ধরন: Dark Fruity • Sweet • Floral • Musky • Mysterious. প্রথমে পাওয়া যায় মিষ্টি ও জুসি ফলের ঘ্রাণ, এরপর ধীরে ধীরে ফুটে ওঠে ফ্লোরাল নোট এবং শেষে থাকে নরম মস্কি, উষ্ণ ও গভীর একটি বেস—যা পুরো সুগন্ধিটিকে করে তোলে আরও আকর্ষণীয় ও স্মরণীয়। 💎 কার জন্য উপযুক্ত: যারা মিষ্টি, ফ্রুটি, একটু ডার্ক ও রহস্যময় ধরনের সুগন্ধি পছন্দ করেন এবং প্রচলিত আতরের বাইরে একটু আলাদা signature scent খুঁজছেন, তাদের জন্য Vampire Blood Attar হতে পারে চমৎকার একটি পছন্দ।",
    features:["৮ml কমপ্যাক্ট ও সহজে বহনযোগ্য বোতল","ডার্ক ফ্রুটি অ্যারোমা — Black Cherry, Red Berries ও Plum-এর মিষ্টি-ফ্রুটি অনুভূতি","ফ্লোরাল টাচ — Jasmine ও অন্যান্য ফুলের নরম ঘ্রাণ","মাস্কি ও উডি বেস — ঘ্রাণে যোগ করে গভীরতা ও আকর্ষণ","মিষ্টি ও উষ্ণ অনুভূতি — Vanilla, Amber বা অনুরূপ উষ্ণ নোটের কারণে ঘ্রাণটি আরও সমৃদ্ধ লাগে","নারী ও পুরুষ উভয়ের জন্য উপযোগী","Evening & Night Wear — সন্ধ্যা, রাত, পার্টি ও বিশেষ অনুষ্ঠানের জন্য বিশেষভাবে মানানসই","Concentrated Attar/Perfume Oil — অল্প পরিমাণেই ব্যবহার করা যায়; তবে স্থায়িত্ব ত্বক, আবহাওয়া ও ব্যবহারের পরিমাণের ওপর নির্ভর করে।"]
  },
  {
    id:39,
	//stock:false,
    name:"ফাইবার পেপার (মিডিয়াম কোয়ালিটি) Siz- 12inc x 40inc",
    cat:"অ্যাক্সেসরিস",
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
    short:"ফাইবার পেপার পারফেক্ট থিকনেস",
    desc:"নিজের মতো করে নান্দনিক ও আধুনিক ল্যাম্প তৈরি করতে চান? আমাদের প্রিমিয়াম কোয়ালিটির ফাইবার পেপার আপনার হোম ডেকর ও লাইটিং প্রজেক্টকে দেবে একটি নিখুঁত ও প্রফেশনাল লুক। টেবিল ল্যাম্প থেকে শুরু করে ওয়াল ল্যাম্প—যেকোনো আলোর সাজে এটি অত্যন্ত উপযোগী!",
    features:["প্রোডাক্ট: ফাইবার পেপার (মিডিয়াম কোয়ালিটি)","সাইজ: ১২ ইঞ্চি বাই ৪০ ইঞ্চি","ব্যবহার: টেবিল ল্যাম্প, ওয়াল ল্যাম্প এবং বিভিন্ন ক্রিয়েটিভ ডিআইওয়াই (DIY) লাইটিং প্রজেক্ট।"]
  }
];

let cart=JSON.parse(localStorage.getItem("albarakah_cart")||"[]"),active="সব";
let currentProduct=null,currentImage=0;
const money=n=>"৳"+Number(n).toLocaleString("bn-BD");
// ===== PRODUCT PRICE SETTINGS =====
// প্রতিটি পণ্যে শুধু price (মূল দাম) এবং discount (%) লিখলেই হবে।
// Current Price ও কত টাকা Save হবে—দুটিই অটোমেটিক হিসাব হবে।
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
  return `<div class="price-box">${hasDiscount?`<span class="old-price">মূল মূল্য: <s>${money(base)}</s></span><span class="discount-badge">${money(save)} SAVE</span>`:''}<strong class="current-price">${money(current)}</strong></div>`;
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
   * Mobile-এ category কখনো automatically center হবে না।
   * সবসময় প্রথমে "সব" category থেকেই শুরু হবে।
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
    // Right fade - scroll area-এর বাইরে
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
    // এটা #categories-এর ভিতরে নয়
    // shell-এর আলাদা element
    // -------------------------------------------------

    const arrow = document.createElement("div");

    arrow.className =
      "category-scroll-arrow";

    arrow.innerHTML = "›";

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
      '<span class="hint-hand">👉</span>' +
      '<span>আরও ক্যাটাগরি দেখতে ডানে সোয়াইপ করুন</span>' +
      '<span class="hint-arrow">→</span>';

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


      // Category-এর আর scroll করার জায়গা না থাকলে
      // Arrow পুরোপুরি বন্ধ
      if(!hasOverflow){

        arrow.classList.remove("show");

        return;
      }


      // একদম ডান পাশে পৌঁছে গেলে Arrow বন্ধ
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

        // User swipe শুরু করলে hint বন্ধ
        if(original.scrollLeft > 5){

          hint.classList.remove("show");

        }

      },
      {
        passive:true
      }
    );


    // Screen resize হলে indicator update
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


              // User একবার Hint দেখে ফেলেছে
              localStorage.setItem(
                "albarakah_category_swipe_hint_seen",
                "1"
              );


              // ৩ সেকেন্ড পরে Hint চলে যাবে
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


    // প্রথমবার indicator update
    requestAnimationFrame(
      updateIndicator
    );

  }


  // =====================================================
  // CATEGORY BUTTON GENERATE
  // =====================================================

  const categoryList = [
    "সব",
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
        onclick="setCat('${x}')">
          ${x}
        </button>`
    ).join("");


  // =====================================================
  // MOBILE INITIAL POSITION
  // =====================================================

  if(window.innerWidth <= 650){

    requestAnimationFrame(() => {

      // সবসময় প্রথমে বাম দিক থেকে শুরু হবে
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
function setCat(x){active=x;categories();renderProducts()}
function isStockOut(p){
  const s=p && p.stock;
  return s===false || s===0 || String(s).trim().toLowerCase() === "out" ||
         String(s).trim().toLowerCase() === "stock out" ||
         String(s).trim().toLowerCase() === "stockout";
}
function stockStatusHTML(p){
  return isStockOut(p)
    ? '<span class="stock-status stock-out">🔴 Stock Out</span>'
    : '<span class="stock-status stock-in">🟢 In Stock</span>';
}
function setProductStock(id, inStock){
  const p=products.find(x=>x.id===id);
  if(p) p.stock=!!inStock;
  renderProducts();
  if(currentProduct && currentProduct.id===id) renderProductModal();
}
function renderProducts(){
  const q=document.getElementById("search").value.toLowerCase().trim();
  const a=products.filter(x=>(active==="সব"||x.cat===active)&&(!q||x.name.toLowerCase().includes(q)||x.cat.toLowerCase().includes(q)||x.short.toLowerCase().includes(q)));
  document.getElementById("productGrid").innerHTML=a.map(x=>{
    const out=isStockOut(x);
    return `<article class="product ${out?'is-stock-out':''}" onclick="openProduct(${x.id})">
      <div class="pimg"><img src="${x.img}" alt="${x.name}"><span class="view-badge">${money(discountAmount(x))} SAVE</span></div>
      <div class="pinfo"><span class="p-cat">${x.cat}</span><h3>${x.name}</h3><p>${x.short}</p><div class="product-bottom">
        <div class="stock-row">${stockStatusHTML(x)}</div>
        ${priceHTML(x)}
        <div class="product-actions">
          <button class="add" ${out?'disabled aria-disabled="true"':''} onclick="event.stopPropagation();${out?'':'add('+x.id+')'}">🛒 কার্ট +</button>
          <button class="add order-btn" ${out?'disabled aria-disabled="true"':''} onclick="event.stopPropagation();${out?'':'orderNow('+x.id+')'}">⚡ অর্ডার করুন</button>
        </div>
      </div></div>
    </article>`;
  }).join("")||"<p>কোনো পণ্য পাওয়া যায়নি।</p>"
}
function openProduct(id){
  currentProduct=products.find(x=>x.id===id);
  currentImage=0;
  if(!currentProduct)return;

  document.getElementById("productModal").classList.add("show");
  renderProductModal();
  document.body.classList.add("modal-open");

  albaOpenOverlay("product");
}
function closeProduct(e){if(!e||e.target.id==="productModal"){document.getElementById("productModal").classList.remove("show");document.body.classList.remove("modal-open")}}
function renderProductModal(){
  if(!currentProduct)return;
  const p=currentProduct;
  document.getElementById("modalImage").src=p.images[currentImage];
  document.getElementById("modalImage").alt=p.name;
  document.getElementById("modalThumbs").innerHTML=p.images.map((src,i)=>`<button class="thumb-btn ${i===currentImage?'active':''}" onclick="selectProductImage(${i})"><img src="${src}" alt="ছবি ${i+1}"></button>`).join("");
  document.getElementById("modalTitle").textContent=p.name;
  document.getElementById("modalCategory").textContent=p.cat;
  document.getElementById("modalPrice").innerHTML=priceHTML(p); const modalStock=document.getElementById("modalStockStatus"); if(modalStock) modalStock.innerHTML=stockStatusHTML(p); const modalBtns=document.querySelectorAll("#productModal .modal-actions .btn"); if(modalBtns.length>=2){ modalBtns[0].disabled=isStockOut(p); modalBtns[1].disabled=isStockOut(p); modalBtns[0].setAttribute("aria-disabled",isStockOut(p)); modalBtns[1].setAttribute("aria-disabled",isStockOut(p)); }
  document.getElementById("modalDesc").textContent=p.desc;
  document.getElementById("modalFeatures").innerHTML=p.features.map(f=>`<li>✓ ${f}</li>`).join("");
}
function selectProductImage(i){currentImage=i;renderProductModal()}
function nextProductImage(){if(!currentProduct)return;currentImage=(currentImage+1)%currentProduct.images.length;renderProductModal()}
function prevProductImage(){if(!currentProduct)return;currentImage=(currentImage-1+currentProduct.images.length)%currentProduct.images.length;renderProductModal()}
function add(id){const p=products.find(a=>a.id===id);if(!p||isStockOut(p))return;let x=cart.find(a=>a.id===id);if(x)x.qty++;else cart.push({id,qty:1});save();renderCart();openCart()}
function orderNow(id){
  let p=products.find(a=>a.id===id);

  if(!isInStock(p)){
    alert("এই পণ্যটি বর্তমানে Stock Out।");
    return;
  }

  let x=cart.find(a=>a.id===id);

  if(x)x.qty++;
  else cart.push({id,qty:1});

  save();
  renderCart();

  document.getElementById("productModal").classList.remove("show");
  document.body.classList.remove("modal-open");

  openCart();
}
function total(){return cart.reduce((s,x)=>{let p=products.find(p=>p.id===x.id);return s+(p?currentPrice(p)*x.qty:0)},0)}
function change(id,d){let x=cart.find(a=>a.id===id);if(!x)return;x.qty+=d;if(x.qty<1)cart=cart.filter(a=>a.id!==id);save();renderCart();renderCheckout()}
function renderCart(){let e=document.getElementById("cartItems");if(!cart.length){e.innerHTML="<p style='color:#888'>কার্ট খালি।</p>";document.getElementById("cartTotal").textContent=money(0);return}e.innerHTML=cart.map(x=>{let p=products.find(a=>a.id===x.id);if(!p)return "";return `<div class="cart-row"><div class="thumb"><img src="${p.img}"></div><div><h4>${p.name}</h4><small>${money(currentPrice(p))}</small><div class="qty"><button onclick="change(${p.id},-1)">−</button><b>${x.qty}</b><button onclick="change(${p.id},1)">+</button></div></div><button class="remove" onclick="removeItem(${p.id})">✕</button></div>`}).join("");document.getElementById("cartTotal").textContent=money(total())}
function removeItem(id){cart=cart.filter(x=>x.id!==id);save();renderCart();renderCheckout()}
function openCart(){
  document.getElementById("cartOverlay").classList.add("show");
  renderCart();

  albaOpenOverlay("cart");
}
function closeCart(e){if(!e||e.target.id==="cartOverlay")document.getElementById("cartOverlay").classList.remove("show")}
function openCheckout(){
  cart=cart.filter(x=>isInStock(products.find(p=>p.id===x.id)));
  save();

  if(!cart.length){
    alert("আগে একটি পণ্য কার্টে যোগ করুন।");
    return;
  }

  document.getElementById("cartOverlay").classList.remove("show");
  document.getElementById("checkoutOverlay").classList.add("show");
  renderCheckout();

  albaOpenOverlay("checkout");
}
function closeCheckout(e){if(!e||e.target.id==="checkoutOverlay")document.getElementById("checkoutOverlay").classList.remove("show")}
function getDeliveryCharge(){
  const area=document.getElementById("deliveryArea")?.value||"dhaka";
  const weight=1;
  const base=area==="outside"?130:70;
  const extraKg=weight>1?Math.ceil(weight-1):0;
  return base+(extraKg*20);
}
function renderCheckout(){
  const d=getDeliveryCharge();
  document.getElementById("delivery").value=d;
  const e=document.getElementById("checkoutSummary");
  const area=document.getElementById("deliveryArea")?.value==="outside"?"ঢাকার বাইরে":"ঢাকার ভেতর";
  const weight=1;
  e.innerHTML=cart.map(x=>{let p=products.find(a=>a.id===x.id);return p?`<div><span>${p.name} × ${x.qty}</span><b>${money(currentPrice(p)*x.qty)}</b></div>`:""}).join("")+`<hr><div><b>পণ্য মোট</b><b>${money(total())}</b></div><div><span>ডেলিভারি (${area}, ${weight} কেজি)</span><b>${money(d)}</b></div><div><strong>সর্বমোট</strong><strong>${money(total()+d)}</strong></div>`}
async function saveOrderToGoogleSheet(orderData){
  if(!APPS_SCRIPT_URL)return;
  try{await fetch(APPS_SCRIPT_URL,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(orderData)});}catch(err){console.log("Google Sheet save skipped:",err)}
}
async function placeOrder(ev){
  ev.preventDefault();if(!cart.length)return;
  let name=document.getElementById("name").value.trim(),phone=document.getElementById("phone").value.trim(),address=document.getElementById("address").value.trim(),area=document.getElementById("deliveryArea").value,weight=1,d=getDeliveryCharge(),order="ALB-"+Date.now().toString().slice(-8);
  let items=cart.map(x=>{let p=products.find(a=>a.id===x.id);return {name:p.name,qty:x.qty,lineTotal:money(currentPrice(p)*x.qty)}});
  const orderData={orderNo:order,name,phone,address,deliveryArea:area,weight,items,subtotal:money(total()),delivery:money(d),grandTotal:money(total()+d)};
  await saveOrderToGoogleSheet(orderData);
  let list=items.map(x=>`• ${x.name} × ${x.qty} = ${x.lineTotal}`).join("\n");
  let areaText=area==="outside"?"ঢাকার বাইরে":"ঢাকার ভেতর";
  let msg=`🛍️ AL-BARAKAH নতুন অর্ডার\n\nঅর্ডার নং: ${order}\nনাম: ${name}\nমোবাইল: ${phone}\nঠিকানা: ${address}\nডেলিভারি এলাকা: ${areaText}\n\nপণ্য:\n${list}\n\nপণ্যের মোট দাম: ${money(total())}\nডেলিভারি: ${money(d)}\nসর্বমোট: ${money(total()+d)}`;
  window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`,"_blank");
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
  title.textContent=custom?"কাস্টম ডিজাইন":"পাইকারি অর্ডার";
  desc.textContent=custom?"আপনার পছন্দের ডিজাইন বা প্রয়োজন অনুযায়ী কাস্টম ল্যাম্প নিয়ে সরাসরি কথা বলুন।":"বাল্ক/পাইকারি অর্ডারের জন্য প্রয়োজনীয় পরিমাণ ও বিস্তারিত জানিয়ে আমাদের সাথে সরাসরি কথা বলুন।";
  qtyLabel.firstChild.textContent=custom?"প্রয়োজনীয় পরিমাণ":"অর্ডারের পরিমাণ";
  document.getElementById("businessOverlay").classList.add("show");
  document.body.classList.add("modal-open");
  setTimeout(()=>document.getElementById("businessName")?.focus(),80);
}
function closeBusinessForm(e){
  if(e && e.target!==document.getElementById("businessOverlay"))return;
  document.getElementById("businessOverlay")?.classList.remove("show");
  document.body.classList.remove("modal-open");
}
function submitBusinessForm(e){
  e.preventDefault();
  const name=document.getElementById("businessName").value.trim();
  const phone=document.getElementById("businessPhone").value.trim();
  const qty=document.getElementById("businessQty").value.trim();
  const details=document.getElementById("businessDetails").value.trim();
  const type=businessType==="custom"?"কাস্টম ডিজাইন":"পাইকারি অর্ডার";
  const text=`আসসালামু আলাইকুম, আমি ${type} সম্পর্কে জানতে চাই।\n\nনাম: ${name}\nমোবাইল: ${phone}\nপরিমাণ: ${qty}\nবিস্তারিত: ${details}`;
  window.open("https://wa.me/"+WHATSAPP+"?text="+encodeURIComponent(text),"_blank");
  closeBusinessForm();
}

document.getElementById("year").textContent=new Date().getFullYear();categories();renderProducts();renderCart();count();

// ===== V12: AUTO PRODUCT MAIN-IMAGE SLIDER =====
let heroIndex = 0;
let heroTimer = null;

const MAX_HERO_DOTS = 7;

function renderHeroDots(){
  const dots = document.getElementById('heroDots');
  if(!dots || !products.length) return;

  const total = products.length;

  // ৭টির কম/সমান Product হলে সব dot দেখাবে
  if(total <= MAX_HERO_DOTS){
    dots.innerHTML = products.map((p,i) =>
      `<button
        class="hero-dot ${i === heroIndex ? 'active' : ''}"
        type="button"
        onclick="event.stopPropagation();heroGo(${i})"
        aria-label="ছবি ${i+1}">
      </button>`
    ).join('');

    return;
  }

  // সর্বোচ্চ ৭টি dot-এর active window
  let start;

  if(heroIndex <= 3){
    // শুরুতে প্রথম ৭টি
    start = 0;
  }else if(heroIndex >= total - 4){
    // শেষে শেষ ৭টি
    start = total - MAX_HERO_DOTS;
  }else{
    // মাঝখানে active dot-কে কেন্দ্র করে
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
        aria-label="ছবি ${i+1}">
      </button>
    `;
  }

  dots.innerHTML = html;
}

function initHeroSlider(){
  const track = document.getElementById('heroSlideTrack');
  const dots = document.getElementById('heroDots');

  if(!track || !dots || !products.length) return;

  // সব Product Slider-এ থাকবে
  track.innerHTML = products.map((p,i) =>
    `<div
      class="hero-slide"
      onclick="openProduct(${p.id})"
      role="button"
      tabindex="0"
      aria-label="${p.name} বিস্তারিত দেখুন">

      <img
        src="${p.img}"
        alt="${p.name}"
        loading="${i === 0 ? 'eager' : 'lazy'}">

      <div class="hero-slide-info">
        <strong>${p.name}</strong>
        <small>${p.discount}% ছাড় • ${money(p.price)}</small>
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

  // Slider-এর সব Product আগের মতোই থাকবে
  track.style.transform =
    `translate3d(-${heroIndex * 100}%,0,0)`;

  // শুধু সর্বোচ্চ ৭টি dot দেখাবে
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
      // কোনো popup খোলা না থাকলে browser-এর স্বাভাবিক Back কাজ করবে
      return;
    }

    // Overlay বন্ধ হওয়ার পর history state পরিষ্কার করা
    if (history.state && history.state.albaOverlay) {
      history.replaceState(
        null,
        "",
        window.location.href.split("#")[0]
      );
    }
  });

  // Overlay open হলে history state তৈরি
  window.albaOpenOverlay = function (type) {
    pushOverlayState(type);
  };

})();


// =====================================================
// AL-BARAKAH MOBILE CATEGORY SWIPE HINT
// প্রথমবার Category দেখার সময় ৩ সেকেন্ডের Hint
// =====================================================

(function () {

  const HINT_KEY = "albarakah_category_swipe_hint_seen";

  function showCategorySwipeHint() {

    // আগে দেখানো হয়ে থাকলে আর দেখাবে না
    if (localStorage.getItem(HINT_KEY) === "1") {
      return;
    }

    const categories = document.getElementById("categories");

    if (!categories) return;

    // শুধু Mobile-এর জন্য
    if (window.innerWidth > 650) return;

    // একই hint একাধিকবার তৈরি হওয়া বন্ধ
    if (document.getElementById("albaCategorySwipeHint")) {
      return;
    }

    // Category wrapper তৈরি
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

    // Hint তৈরি
    const hint = document.createElement("div");

    hint.id = "albaCategorySwipeHint";

    hint.innerHTML = `
      <span class="alba-hint-icon">👉</span>
      <span>আরও ক্যাটাগরি দেখতে ডানে সোয়াইপ করুন</span>
      <span class="alba-hint-arrow">→</span>
    `;

    wrapper.appendChild(hint);

    // Hint দেখানোর animation
    requestAnimationFrame(() => {
      hint.classList.add("show");
    });

    // একবার দেখানো হয়েছে — মনে রাখবে
    localStorage.setItem(HINT_KEY, "1");

    // ৩ সেকেন্ড পরে চলে যাবে
    setTimeout(() => {

      hint.classList.remove("show");

      setTimeout(() => {
        hint.remove();
      }, 350);

    }, 3000);
  }


  // Category viewport-এ আসলে Hint দেখাবে
  function initCategorySwipeHint() {

    const categories = document.getElementById("categories");

    if (!categories) {
      setTimeout(initCategorySwipeHint, 500);
      return;
    }

    // আগে দেখানো হয়ে থাকলে observer-এর প্রয়োজন নেই
    if (localStorage.getItem(HINT_KEY) === "1") {
      return;
    }

    // Mobile ছাড়া Hint নয়
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


  // Page load হওয়ার পরে শুরু
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
// User swipe করলে hint permanently hide
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
