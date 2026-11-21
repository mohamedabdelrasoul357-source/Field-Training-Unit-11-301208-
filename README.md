# Field-Training-Unit-11-301208-
A repository for our field training work and projects
# Taste & Co. — Field Training Unit 11

Restaurant landing page built as a 5-member team project following **Field Training Unit 11** .

## Tech Stack & Assets
* **HTML5** & **CSS3** (Flexbox, CSS Grid, `html { scroll-behavior: smooth; }`, `header::before` overlay, fixed schedule background)
* **Google Fonts**: `Quicksand` (`300;400;500;600;700`)
* **Icons**: FontAwesome CDN
* **JavaScript (ES6 Modules)**: `js/utils.js`, `js/ui.js`, `js/main.js`

## Project Structure
```text
project-root/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── utils.js
│   ├── ui.js
│   └── main.js
├── assets/
│   └── images/
└── README.md
​1. كيرلس صبري :شريط التنقل والـ Hero
​ده أول حاجة بتظهر في وش اللي يفتح الموقع (Taste & Co. وروابط Home, About, Menu, Gallery, Contact، وبعدها صورة المطعم الكبيرة وعنوان Fresh Flavors, Warm Moments وزر Explore Menu).  
​المطلوب منها ببساطة:
​تجهز بداية ملف index.html وتربط خط Quicksand وأيقونات FontAwesome، وتعمل الـ CSS reset وhtml { scroll-behavior: smooth; }.  
​تعمل شريط التنقل (Navbar) باللوجو والروابط وزر الموبايل (اللي بيفتح ويقفل القائمة في الموبايل بـ classList.toggle()).  
​تعمل صورة الـ Hero بطول الشاشة (100vh) وعليها طبقة غامقة header::before عشان الكلام الأبيض والزرار البرتقالي يبقوا واضحين ومقروئين.  
​2. منه عماد : كروت التعريف والعروض وبانر المواعيد
​ده الجزء اللي تحت الـ Hero على طول: كارتين جنب بعض (About Us وSpecial Offers)، وتحتهم بانر رمادي مكتوب فيه Daytime Schedule ومواعيد العمل (Open Daily: Sunday - Thursday | 8:00 AM - 6:00 PM).  
​المطلوب منه ببساطة:
​يطلع كارت About Us وكارت Special Offers جنب بعض باستخدام Flexbox، وبشكل مرتب ومتجاوب.  
​يعمل بانر Daytime Schedule بصورة خلفية ثابتة (background-size: cover وbackground-attachment: fixed) وكلام واضح في النص.  
​3. ملك محمد : قائمة الطعام (Special Menu) والفلترة
​ده الجزء اللي فيه عنوان Special Menu، وتحته أزرار الفلترة (All, Breakfast, Mains, Drinks)، وبعدها كروت الأكل في عمودين (Avocado Toast بـ $8.50 وtag Popular، وGrilled Chicken Bowl بـ $13.00 وtag Chef Choice، وهكذا).  
​المطلوب منه ببساطة:
​يبني كروت المنيو في عمودين بالاسم والسعر والفاصل اللي بينهم والـ tag الصغير (زي Popular أو New أو Spicy).  
​يحط data-category على الأزرار وعلى كروت الأكل، ويعمل كود الفلترة بحيث لما تضغط على Breakfast أو Drinks مثلاً يظهر أكل القسم ده بس.  
​4. عزة مسعد : معرض الصور (Food Gallery) ونافذة الـ Lightbox
​ده الجزء اللي فيه عنوان Food Gallery وتحته 4 صور أكل جنب بعض في شبكة.  
​المطلوب منه ببساطة:
​يرص الصور في Grid وتعمل تأثير شفافية (hover opacity) لما الماوس يقف على أي صورة.  
​يعمل نافذة Lightbox مخفية، ولما المستخدم يدوس على أي صورة في المعرض تفتح الصورة كبيرة بملء الشاشة ويقدر يقفلها بسهولة.  
​5. محمد عبدالرسول : قسم التواصل (Contact Us) والتحقق وتقسيم ES6
​ده آخر جزء في الصفحة (Contact Us): على الشمال فورم فيه Name * وEmail * وMessage * وزرار Send Message، وعلى اليمين كارت Visit Us فيه العنوان والتليفون وأيقونات السوشيال ميديا (f، إنستجرام، X).  
​المطلوب منه ببساطة:
​يبني العمودين بتوع الفورم وكارت Visit Us وأيقونات السوشيال ميديا.  
​يعمل التحقق من الفورم: يتأكد إن الحقول المطلوبة مش فاضية، وإن الإيميل مكتوب بصيغة صح، ويطلع رسالة خطأ أو نجاح.  
​يقسّم شغل الجافا سكريبت لملفات ES6 (utils.js للدوال المساعدة، ui.js للواجهة والمودال والفلترة والموبايل، وmain.js لربط الأحداث وتشغيل الكل) ويراجع تجميع المشروع كامل.
