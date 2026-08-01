export interface Education {
  institution: string;
  degree: string;
  year?: string;
  // Path to a logo image under public/, e.g. "/logos/hcmut.svg". Left
  // unset until a real logo asset is provided.
  logo?: string;
}

export const EDUCATION: Education[] = [
  {
    institution:
      "Ho Chi Minh City University of Technology (HCMUT), VNU-HCM",
    degree: "Bachelor's Degree in Mechatronics Engineering",
    year: "2018",
  },
];
