// All the business details live here, so they only ever need changing in one place.

export const business = {
  name: "PureVue Window Cleaning",
  // TODO: confirm this is the right number. The old site's "Call for a Quote"
  // button dialled 07889 868568, but every number shown on the page was this one.
  phoneDisplay: "075 076 77 222",
  phoneLink: "tel:07507677222",
  phoneInternational: "+447507677222",
  email: "info@purevuewindows.co.uk",
  facebook: "https://www.facebook.com/PureVueWindows",
  directDebit: "https://pay.gocardless.com/AL00043BTKEPB8",
  url: "https://purevuewindows.co.uk",
};

export const towns = [
  { name: "Braintree", postcode: "CM7" },
  { name: "Rayne", postcode: "CM77" },
  { name: "Great Dunmow", postcode: "CM6" },
  { name: "Stansted", postcode: "CM24" },
  { name: "Halstead", postcode: "CO9" },
  { name: "Haverhill", postcode: "CB9" },
  { name: "Steeple Bumpstead", postcode: "CB9" },
  { name: "Sturmer", postcode: "CB9" },
];

// Postcode areas we run regular rounds in (used by the postcode checker)
export const coveredPostcodes = [...new Set(towns.map((town) => town.postcode))];
