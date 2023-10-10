export type ServiceYear = 2020 | 2021 | 2022;
export type ServiceType =
  | 'Photography'
  | 'VideoRecording'
  | 'BlurayPackage'
  | 'TwoDayEvent'
  | 'WeddingSession';

export const updateSelectedServices = (
  previouslySelectedServices: ServiceType[],
  action: { type: 'Select' | 'Deselect'; service: ServiceType }
) => [];

export const calculatePrice = (
  selectedServices: ServiceType[],
  selectedYear: ServiceYear
) => ({ basePrice: 0, finalPrice: 0 });

const serviceCodes = {
  Photography: 1,
  VideoRecording: 2,
  BlurayPackage: 4,
  TwoDayEvent: 8,
  WeddingSession: 16
};

const packageDiscounts = [
  {
    services: ['Photography', 'VideoRecording'],
    value: 1200,
    years: [2020]
  },
  {
    services: ['Photography', 'VideoRecording'],
    value: 1300,
    years: [2021]
  },

  {
    services: ['Photography', 'VideoRecording'],
    value: 1400,
    years: [2022]
  }
];

const discounts = [
  {
    services: ['Photography', 'WeddingSession'],
    years: [],
    value: 300
  },
  {
    services: ['VideoRecording', 'WeddingSession'],
    years: [],
    value: 300
  },
  {
    services: ['Photography', 'WeddingSession'],
    years: [2022],
    value: 600
  }
];

function getDiscountCode(discount) {
  const { services } = discount;

  let result = 0;
  services.forEach((x) => {
    result += serviceCodes[x];
  });

  return result;
}

function isApplicable(discount, selectedServices, year) {
  const { services: discountServices, years: discountYears } = discount;
  const isOnProperYear = !discountYears.length || discountYears.includes(year);

  if (!isOnProperYear) {
    return false;
  }

  const discountCode = getDiscountCode(discount);
  const servicesCode = getDiscountCode({ services: selectedServices });
  const hasProperServices = (discountCode & servicesCode) === discountCode;

  return hasProperServices;
}

function areColliding(discountOne, discountTwo) {
  const codeOne = getDiscountCode(discountOne);
  const codeTwo = getDiscountCode(discountTwo);

  return !!(codeOne & codeTwo);
}

/*
const prices = {
  2020: {
    Photography: 1700,
    VideoRecording: 1700,
    BlurayPackage: 300,
    TwoDayEvent: 400,
    WeddingSession: 600
  },
  2021: {
    Photography: 1800,
    VideoRecording: 1800,
    BlurayPackage: 300,
    TwoDayEvent: 400,
    WeddingSession: 600
  },
  2022: {
    Photography: 1900,
    VideoRecording: 1900,
    BlurayPackage: 300,
    TwoDayEvent: 400,
    WeddingSession: 600
  }
};

type Package = {
  services: ServiceType[];
  year: ServiceYear;
};

type ServicePrice = {
  year: ServiceYear;
  serviceType: ServiceType;
  price: Number;
};

*/

/*


const packages = {
  2020: {
    package: {
      services: ['Photography', 'VideoRecording'],
      price: 2200
    }
  },
  2021: {
    package: {
      services: ['Photography', 'VideoRecording'],
      price: 2300
    }
  },
  2022: {
    package: {
      services: ['Photography', 'VideoRecording'],
      price: 2500
    }
  }
};

const discounts = [
  {
    // name: 'WeddingSessionDiscount',
    services: ['WeddingSession', 'Photography'],
    // requiredServices: ['Photography'],
    years: [],
    value: 300
  },
  {
    // name: 'WeddingSessionDiscount',
    services: ['WeddingSession', 'VideoRecording'],
    // requiredServices: ['VideoRecording'],
    years: [],
    value: 300
  },
  {
    // name: 'WeddingSessionDiscount',
    services: ['WeddingSession', 'Photography'],
    // requiredServices: ['Photography'],
    years: [2022],
    value: 600
  }
];

 */
