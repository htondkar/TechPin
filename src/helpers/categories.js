const categories = [
  "E-Commerce",
  "Application",
  "Tourism",
  "Communication",
  "Fashion",
  "VC",
  "classifieds",
  "Advertising",
  "Retail",
  "Marketing",
  "Investment Management",
  "Marketplace",
  "Transportation",
  "Food",
  "HR",
  "Learning",
  "Entertainment",
  "Music",
  "Fintech",
  "news",
  "Real Estate",
  "Art & Culture",
  "Cloud Services",
  "Hardware",
  "IoT",
  "SaaS",
  "Productivity",
  "Accelerator"
].map((item, i) => {return {name_en: item, id: i}});

module.exports = categories;
