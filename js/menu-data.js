// ==========================================================================
// مشاوي الأصيل - بيانات قائمة الطعام (Menu Data)
// ==========================================================================

export const defaultMenuItems = [
  // --- 1. الأطباق الرئيسية (Main Dishes) ---
  {
    id: "item-1",
    name: "كباب حلبي فاخر",
    category: "main",
    price: 68,
    prepTime: "18 دقيقة",
    badge: "الأكثر طلباً",
    badgeType: "fire",
    image: "https://lh3.googleusercontent.com/aida/ALJJyrDzBMtHRCPK-XPDCjMmyn82fx2MS3rwoBTCGpUl1Vfl2qDp4mh_LHu7r32ArQeS8203lNgnqLMB4_Zo3y8juHfWXu8R8hqYR37Kv0F7FIP3sLqjmVAzZRcVATeTSBcWnMeKII7QoFBXwK0F8uiccEsw7_MMjyoE7BWmS7GdGCYwjjmLi9KVK_ea5Dfqiie5_vfGUwfaB5Sjx5ZlTNAORh53-gk3nsnsLnslioYU4I2LfzyLsIAtmSDrCzr3",
    description: "أسياخ كباب لحم غنم نعيمي طازج مع البهارات الحلبية الأصيلة، مشوية على الفحم وتقدم مع البصل المشوي والطماطم."
  },
  {
    id: "item-2",
    name: "كفتة خشخاش بالصلصة",
    category: "main",
    price: 72,
    prepTime: "20 دقيقة",
    badge: "توصية الشيف",
    badgeType: "chef",
    image: "https://lh3.googleusercontent.com/aida/ALJJyrC1z6N9pPJjy39MaReEXI52E36Beef6Pv12-LxDj_W02XGtBaG4TYOHCJMxLBKl8KFLgB5A1ihnOQTVnUivzk94EaRm7_sJP33pnmEzD6sCvliV3iyMMmP0fKBsNe-1yNW_KBr5mnic56T50R29Nyte8ogP1T9P9QmbAoNPISF1rBrBxpcmR5ipOspvWGepuFphlbDZu-DHiUxlyCA9HEwAQnYs544nORjPzNKp2xPt-IrZpZY8QzPnU5VB8oC_3sI",
    description: "كفتة لحم غنم مشوية على الفحم تعلوها صلصة الطماطم المشوية المهروسة مع الثوم والفلفل الحار والصنوبر المحمص."
  },
  {
    id: "item-3",
    name: "شيش طاووق متبل",
    category: "main",
    price: 58,
    prepTime: "15 دقيقة",
    badge: "دجاج طازج",
    badgeType: "standard",
    image: "https://lh3.googleusercontent.com/aida/ALJJyrCbJaANJMCcaTasOJWmxcJR8zXayv8M_RkSiwG1wnz0yn2mImnmbjfw-GgJA_6SIuhsZjGaooJ9yFxNpbRseWuLdUW-RUxJ7p0sCVU8TQ07gO48G1Z-RxTYLh-t6falS7wQP_eOwTwGGWprufrZ0bU71poIT1hzUcv_s5yKUgJ2JIXA_QNejxBWeEGIRXbIdCoUGEGIhdUPe0o0ymlIhYG2zrXiEmDln5KD9_xE3oXFKERhULwDz64DT9cr",
    description: "مكعبات صدر دجاج متبلة بالزبادي، الليمون، وزيت الزيتون والبهارات الخاصة، مشوية بعناية فائقة مع الثومية الشهية."
  },
  {
    id: "item-4",
    name: "ريش لحم غنم مشوية",
    category: "main",
    price: 94,
    prepTime: "22 دقيقة",
    badge: "قطع ممتازة",
    badgeType: "standard",
    image: "https://lh3.googleusercontent.com/aida/ALJJyrDpRvbbe5-VTCv0_qPG-eWkXtjWkkx3zfwCoMqiuyBXYUF6mMUfupG7P5mwOKJTfZLRT-rX8xgcfJxW4Z8vj0goZUIRzN_F-VSiPcyPj7PMom4bUVLNh7hA7QArtlaSnIryz_3Vq55PQNMuAXRLml6JMxQgevjfUEnW6Ik4U0S_TtKd2vSfK_pIR-wrRnm_v5GV_HI5ZjmHWR1j8UX5WdDLffetjZRasW0pETsW46K7XqrGtE6wh3oiRA",
    description: "4 قطع ريش غنم طرية متبلة بخلطة الأعشاب الجبلية والفلفل الأسود، مكرملة الحواف فوق لهب الجمر المتوهج."
  },

  // --- 2. السندويتشات (Sandwiches) ---
  {
    id: "item-5",
    name: "سندويتش كباب أصيل ع الصاج",
    category: "sandwiches",
    price: 28,
    prepTime: "10 دقائق",
    badge: "خبز صاج طازج",
    badgeType: "standard",
    image: "https://lh3.googleusercontent.com/aida/ALJJyrAdGKLSIatodEtCDiLOFV_XiglKnkZkAI1LKj4QRtNP--Nh7Fuu_Le4MENLMsBDH4uE8p4wNdgtVzK5i4_szA0nZE96HwouCPDfcD3nTVVM8SPzDSuv__5zEGl2JZFYzYg5YMEqCmb_LZZX1fB5RJHB0BnTGW0AfjRrIAS66Q24rd_hIV6rW1PLJ5vvRHFzvQAqy02HbtfoC1tePhdBC09GMV3gzJDN8KqDMyH1lzmls7dXgPZuNHWdhWkwwMvl",
    description: "سيخين كباب لحم طازج ملفوف بخبز الصاج الرقيق مع صلصة الطحينة الملكية، بصل السماق، والمخلل المقرمش."
  },
  {
    id: "item-6",
    name: "ساندوتش شيش طاووق بالثومية",
    category: "sandwiches",
    price: 24,
    prepTime: "10 دقائق",
    badge: "نكهة مميزة",
    badgeType: "standard",
    image: "https://lh3.googleusercontent.com/aida/ALJJyrCbJaANJMCcaTasOJWmxcJR8zXayv8M_RkSiwG1wnz0yn2mImnmbjfw-GgJA_6SIuhsZjGaooJ9yFxNpbRseWuLdUW-RUxJ7p0sCVU8TQ07gO48G1Z-RxTYLh-t6falS7wQP_eOwTwGGWprufrZ0bU71poIT1hzUcv_s5yKUgJ2JIXA_QNejxBWeEGIRXbIdCoUGEGIhdUPe0o0ymlIhYG2zrXiEmDln5KD9_xE3oXFKERhULwDz64DT9cr",
    description: "قطع شيش طاووق متبلة بالثومية والبطاطس المقرمشة مع مخلل الخيار، ملفوفة بالخبز العربي المحمص."
  },

  // --- 3. المشويات بالكيلو (By the Kilo) ---
  {
    id: "item-7",
    name: "مشويات مشكلة (1 كيلو)",
    category: "kilo",
    price: 240,
    prepTime: "25 دقيقة",
    badge: "وليمة عائلية تكفي 4-5",
    badgeType: "fire",
    image: "https://lh3.googleusercontent.com/aida/ALJJyrC79NVPbSHJPwAEw49zX3LnwvYRJf2vLOf7u9TazR3HSLL_YYGnKldw8I4CegMSILDffCR65aydhA7_YHIDJvXUP4lHjef67qXY1s3WUc4ia1oJ9wyEyhP1aEYzvtLsyfWnnrpvdtxpQyWHUkQDChkNdbW0z4zygEg4Jhvqs57gFV0nd-XZ5-ZQjLW0OKEuPcBJ0V5Z34fNcMreciC6PBohqLeUsyT5Q8Ba28ZkpuM8M9FP5k-ZSfEeFCXRoR8",
    description: "تشكيلة غنية: 4 أسياخ كباب نعيمي، 4 أسياخ كفتة، 4 أسياخ أوصال لحم، 4 أسياخ شيش طاووق مع الأرز والصلصات الكاملة."
  },
  {
    id: "item-8",
    name: "كيلو كباب لحم نعيمي بلدي",
    category: "kilo",
    price: 230,
    prepTime: "25 دقيقة",
    badge: "100% نعيمي طازج",
    badgeType: "standard",
    image: "https://lh3.googleusercontent.com/aida/ALJJyrDzBMtHRCPK-XPDCjMmyn82fx2MS3rwoBTCGpUl1Vfl2qDp4mh_LHu7r32ArQeS8203lNgnqLMB4_Zo3y8juHfWXu8R8hqYR37Kv0F7FIP3sLqjmVAzZRcVATeTSBcWnMeKII7QoFBXwK0F8uiccEsw7_MMjyoE7BWmS7GdGCYwjjmLi9KVK_ea5Dfqiie5_vfGUwfaB5Sjx5ZlTNAORh53-gk3nsnsLnslioYU4I2LfzyLsIAtmSDrCzr3",
    description: "16 سيخ كباب لحم غنم نعيمي طازج متبل بالبقدونس والبصل، مشوي على الفحم مع الطماطم والبصل المشوي والسرفيس."
  },

  // --- 4. المقبلات والشوربات (Appetizers & Soups) ---
  {
    id: "item-9",
    name: "حمص باللحمة والصنوبر",
    category: "appetizers",
    price: 36,
    prepTime: "8 دقائق",
    badge: "مقبلات ساخنة",
    badgeType: "standard",
    image: "https://lh3.googleusercontent.com/aida/ALJJyrDniAdH6sXNiFRXAqroT_icUyYcpsEZxRzWVwEbQDRpmvqYnyCvo-p-4bla2dDdtJv582P4ks2v4JLZqiLfNaQlSTdVSNOFNfAKUTalXNy0XVkZ-OIl0UgOOenAR6yCxl8M1UHdPrTLLrlpLxGVy1GI-Ny51M4XamJLnfsRFZpo_yi1je_bLIYj9l7RbKmoWxhXl14cWJtyBNRyWLeoCvmdminnswifwXP5B4hq_ItvFnIOuxaPMsVeL4k",
    description: "حمص ناعم بزيت الزيتون البكر الممتاز، تعلوه قطع لحم الغنم المحمرة بالسمن البلدي ورشة صنوبر ذهبي محمص."
  },
  {
    id: "item-10",
    name: "متبل باذنجان مدخن بالرمان",
    category: "appetizers",
    price: 24,
    prepTime: "8 دقائق",
    badge: "مدخن ع الفحم",
    badgeType: "standard",
    image: "https://lh3.googleusercontent.com/aida/ALJJyrDniAdH6sXNiFRXAqroT_icUyYcpsEZxRzWVwEbQDRpmvqYnyCvo-p-4bla2dDdtJv582P4ks2v4JLZqiLfNaQlSTdVSNOFNfAKUTalXNy0XVkZ-OIl0UgOOenAR6yCxl8M1UHdPrTLLrlpLxGVy1GI-Ny51M4XamJLnfsRFZpo_yi1je_bLIYj9l7RbKmoWxhXl14cWJtyBNRyWLeoCvmdminnswifwXP5B4hq_ItvFnIOuxaPMsVeL4k",
    description: "باذنجان مشوي على الفحم ومهروس مع الطحينة النقية، الثوم، وزيت الزيتون البكر، مزين بحبات الرمان ودبس الرمان."
  },

  // --- 5. المشروبات (Beverages) ---
  {
    id: "item-11",
    name: "موخيتو الرمان الطبيعي",
    category: "beverages",
    price: 22,
    prepTime: "5 دقائق",
    badge: "منعش مع المشاوي",
    badgeType: "standard",
    image: "https://lh3.googleusercontent.com/aida/ALJJyrBOdyy-tctjnBFNZ6MikVWm9d1c90T2vfi1pVLhHuMzi3lK4OG6sTUoZLPIUGy9W_07eAfRDrnHc8eNoWUPZ6hW1-OmzRJso5gKcRjTYTblCIY7FtGbVGFwqhsYBd2bN2Wc1BjzzBaMrmbvsoVipzRZ59yyuqU-1grwSVyg6ARuXt6BL77cAhrnJgOKSVx05_MA7U72-EKYhq2AQ1-OgKvHxIWmo6YT-0fSmuzOBDqoT9MG5HqYRPyqVVLpsCI2Np7M9bE2",
    description: "عصير رمان طبيعي مثلج مع أوراق النعناع الطازجة، شرائح الليمون وماء فوار يروي العطش ويكمل نكهة الشواء."
  },
  {
    id: "item-12",
    name: "لبن عيران بلدي بالنعناع",
    category: "beverages",
    price: 14,
    prepTime: "3 دقائق",
    badge: "تقليدي أصيل",
    badgeType: "standard",
    image: "https://lh3.googleusercontent.com/aida/ALJJyrBOdyy-tctjnBFNZ6MikVWm9d1c90T2vfi1pVLhHuMzi3lK4OG6sTUoZLPIUGy9W_07eAfRDrnHc8eNoWUPZ6hW1-OmzRJso5gKcRjTYTblCIY7FtGbVGFwqhsYBd2bN2Wc1BjzzBaMrmbvsoVipzRZ59yyuqU-1grwSVyg6ARuXt6BL77cAhrnJgOKSVx05_MA7U72-EKYhq2AQ1-OgKvHxIWmo6YT-0fSmuzOBDqoT9MG5HqYRPyqVVLpsCI2Np7M9bE2",
    description: "لبن زبادي طازج مخفوق مع رشة ملح خفيفة والنعناع البري المجفف والثلج، يقدم بارداً ومنعشاً."
  }
];
