export interface Property {
  general: {
    address: {
      street: string;
      city: string;
      state: string;
      zip: number;
      // coordinates: {
      //   latitude: number;
      //   longitude: number;
      // }
    };
    features: {
      homeType: string;
      area: number;
      bedrooms: number;
      bathrooms: number;
      parking: string;
      heating: string;
      cooling: string;
      appliances: [string];
      schoolDistrict: string;
      description: string;
    }
  };

  // financial: {
  //   purchase: number;
  //   estimatedARV: number;
  //   downpayment: number;
  //   closingCost: number;
  //   rehabCost: number;
  //   miscellaneousCost: number;
  //   loanRate: number;
  //   loanTerm: number;
  //   loanAmount: number;
  //   loanPayments: number;
  //   mortgageRate: number;
  //   mortgageTerm: number;
  //   mortgageAmount: number;
  //   mortgagePayment: number;
  //   currentBalance: number;
  // };

  // rehab: {
  //   features: [
  //     {
  //       feature: string;
  //       quantity: number;
  //       material: {
  //         vendor: string;
  //         rate: number;
  //       };
  //       labor: {
  //         vendor: string;
  //         rate: number;
  //       };
  //       totalCost: number;
  //     }
  //   ];
  //   miscellaneousCost: number;
  //   totalCost: number;
  //   scopeDescription: string;
  // };

  // operating: {
  //   maintenance: {
  //     features: [
  //       {
  //         feature: string;
  //         frequency: number;
  //         cost: number;
  //         alerts: {
  //           date: Date;
  //           message: string;
  //         }
  //       }
  //     ];
  //     totalCost: number;
  //   };
  //   taxRate: number;
  //   insurance: number;
  //   associationFees: number;
  //   managementFees: number;
  // };

  // rental: {
  //   currentRate: number;
  //   vacancyRate: number;
  //   tenantInfo: {
  //     currentTenant: {
  //       info: [
  //         {
  //           name: string;
  //           age: number;
  //           gender: string;
  //           creditScore: number;
  //         }
  //       ];
  //       residentCount: number;
  //       rentalTerm: number;
  //       rentalRate: number;
  //     };
  //     previousTenant: [
  //       {
  //         info: [
  //           {
  //             name: string;
  //             age: number;
  //             gender: string;
  //             creditScore: number;
  //           }
  //         ];
  //         residentCount: number;
  //         rentalTerm: number;
  //         rentalRate: number;
  //       }
  //     ]
  //   };
  // };
};
