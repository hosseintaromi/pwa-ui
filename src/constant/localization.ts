const localization = {
  app: 'اپ',
  all: 'همه',
  seeAll: 'مشاهده همه',
  admit: 'باشه',
  save: 'ذخیره',
  appSpecial: 'ویژه اپ',
  saveEdit: 'ثبت ویرایش',
  nationalCode: 'کد ملی',
  tenNumberNationalCode: 'کد ملی 10 رقمی',
  email: 'ایمیل',
  road: 'جاده',
  pricePostfix: (price: number | string) => `${price?.toLocaleString()} تومان`,
  kilometerPostfix: (kilometer: number | string) => `${kilometer?.toLocaleString()} کیلومتر`,
  completionPercentPostfix: (percent: number) => `%${percent} تکمیل`,
  inPastThreeMonth: 'در سه ماه گذشته',
  literPostfix: (liter) => `${liter} لیتر`,
  updateKilometer: 'بروزرسانی کیلومتر',
  latestUpdate: 'آخرین بروزرسانی',
  inTwoWeeks: 'در دو هفته',
  cleared: 'تسویه شده',
  noDebt: 'بدون بدهی',
  model: 'مدل',
  inquiryAgain: 'استعلام مجدد',

  maxLengthIs: (length) => `مقدار ماکزیمم ${length} رقم است`,
  minLengthIs: (length) => `مقدار مینیمم ${length} رقم است`,
  activeItem: (count) => `${count} مورد فعال`,

};

export const pageLevelLocalization = {
  home: {
    title: 'اپ',
    description: 'سامانه جامع خدمات',
  },

  terms: {
    appTerms: {
      title: 'قوانین و مقررات اپ',
      terms:[
          'lorem ipsum text'
      ]},
    carpardazTerms: {
      part1Head: 'قوانین و مقررات کارپرداز',
      part1: [
        'lorem ipsum text',
      ],
      part2Head: 'در موارد ذیل کارپرداز هیچ گونه تعهدی ندارد:',
      part2: [
        'lorem ipsum text'
      ],
    },
  },
};
export default localization;
