AL-BARAKAH FREE E-COMMERCE — V3

এই version-এ:
- AL-BARAKAH logo
- ৫টি বর্তমান lamp photo
- Product search/category
- Cart + quantity
- Checkout: নাম, মোবাইল, ঠিকানা, delivery charge
- Automatic order number
- WhatsApp order
- Responsive premium design
- পরে আরও product যোগ করার সহজ structure

নতুন Product যোগ করতে script.js-এর products array-তে এই format ব্যবহার করুন:
{id:6,name:"নতুন পণ্যের নাম",cat:"Category",price:1200,img:"images/lamp-06.png",desc:"বর্ণনা"}

ছবিটি images ফোল্ডারে রাখবেন।

GOOGLE SHEETS:
এই version-এ order WhatsApp-এ যায়। Google Sheet-এও অটোমেটিক save করতে চাইলে Google Apps Script-এর Web App URL বসাতে হবে। নিরাপত্তার জন্য আমি কোনো placeholder URL-কে live URL হিসেবে ব্যবহার করিনি। Apps Script endpoint পাওয়ার পর script.js-এ fetch যোগ করা যাবে।

GITHUB PAGES:
1. GitHub-এ public repository তৈরি করুন।
2. এই ZIP-এর সব file/folder upload করুন।
3. Settings > Pages > Deploy from branch > main > root নির্বাচন করুন।
4. GitHub Pages-এর free address ব্যবহার করুন।
