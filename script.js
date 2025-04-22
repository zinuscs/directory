const businesses = [
  {
    name: "Amazon USA",
    contact: "888 - 280 - 4331",
    chatLink: "https://amazon.com/contact-us",
    country: "Zinus USA",
    returnPolicy: "100 days from date of delivery on mattresses, 30 days from date of delivery on all other items",
    description: "Pushback once for return request, then assist if customer refuses and/or states that they were not assisted/declined assistance from Amazon"
  },
  {
    name: "Costco",
    contact: "800 - 955 - 2292",
    chatLink: "https://customerservice.costco.com/",
    country: "Zinus USA",
    returnPolicy: "30 days from date of delivery",
    description: "All claims should be redirected to Costco - whether within or outside the return window"
  },
  {
    name: "Home Depot",
    contact: "(Online Orders: 800 - 430 - 3376) (In-store: 800 - 466 - 3337)",
    chatLink: "https://www.homedepot.com/c/customer-service",
    country: "Zinus USA",
    returnPolicy: "30 Days for online, 90 Days for in-store",
    description: "-"
  },
  {
    name: "Bed, Bath & Beyond (Formerly Overstock)",
    contact: "800 - 843 - 2446",
    chatLink: "https://help.bedbathandbeyond.com/help/s/",
    country: "Zinus USA",
    returnPolicy: "30 Days from date of delivery",
    description: "All claims should be redirected to BB&B - whether within or outside the return window"
  },
  {
    name: "Sam's Club",
    contact: "888 - 746 - 7726",
    chatLink: "https://help.samsclub.com/app/chat/chat_launch",
    country: "Zinus USA",
    returnPolicy: "30 Days for online, 90 Days for in-store",
    description: "-"
  },
  {
    name: "Target",
    contact: "800 - 591 - 3869",
    chatLink: "https://contactus.target.com/ContactUs?",
    country: "Zinus USA",
    returnPolicy: "30 Days for online, 90 Days for in-store",
    description: "-"
  },
  {
    name: "Walmart",
    contact: "800 - 925 - 6278",
    chatLink: "https://www.walmart.com/help",
    country: "Zinus USA",
    returnPolicy: "90 Days for both online and in-store purchase",
    description: "Pushback once for return request, then assist if customer refuses and/or states that they were not assisted/declined assistance from Walmart"
  },
  {
    name: "Wayfair",
    contact: "844 - 540 - 1052",
    chatLink: "https://www.wayfair.com/help-and-contact",
    country: "Zinus USA",
    returnPolicy: "No returns. All sales are final.",
    description: "All claims should be redirected to Wayfair - whether within or outside the return window"
  },
  {
    name: "Macy's",
    contact: "800 - 289 - 6229",
    chatLink: "https://customerservice-macys.com/chat",
    country: "Zinus USA",
    returnPolicy: "180 Days from date of purchase",
    description: "-"
  },
  {
    name: "Chewy",
    contact: "800 - 672 - 4399",
    chatLink: "https://www.chewy.com/app/content/contact",
    country: "Zinus USA",
    returnPolicy: "1 Year from date of purchase",
    description: "Resellers specific for any type of pet products. 1 Year warranty applies after the duration of the return window"
  },
  {
    name: "eBay",
    contact: "866 - 540 - 3229",
    chatLink: "https://www.ebay.com/help/",
    country: "Zinus USA",
    returnPolicy: "Usually final sale orders. In some cases, 60 Days from delivery date or as indicated on the listing's agreement",
    description: "<strong>(INTERNAL INFO ONLY)</strong> Most products sold by Zinus under eBay are OSMI (Obsolete and Slow Moving Inventory) products, usually no longer covered by warranty due to the item no longer being manufactured. It is being sold at a low cost due to missing returns and warranty coverage and sold as-is"
  },
  {
    name: "Mattress Firm",
    contact: "877 - 384 - 2903",
    chatLink: "no chat support",
    country: "Zinus USA",
    returnPolicy: "120 Night Trial from delivery date",
    description: "All claims should be redirected to Mattress Firm - whether within or outside the return window"
  },
  {
    name: "BEYOND THIS POINT, STOCK INFORMATION",
    contact: "hello@coffeecorner.com",
    chatLink: "https://wa.me/1234567890",
    country: "USA",
    returnPolicy: "No returns. All sales are final.",
    description: "A cozy café offering organic coffee and pastries."
  },
  {
    name: "Coffee Corner",
    contact: "hello@coffeecorner.com",
    chatLink: "https://wa.me/1234567890",
    country: "USA",
    returnPolicy: "No returns. All sales are final.",
    description: "A cozy café offering organic coffee and pastries."
  },
  {
    name: "Coffee Corner",
    contact: "hello@coffeecorner.com",
    chatLink: "https://wa.me/1234567890",
    country: "USA",
    returnPolicy: "No returns. All sales are final.",
    description: "A cozy café offering organic coffee and pastries."
  },
  {
    name: "Coffee Corner",
    contact: "hello@coffeecorner.com",
    chatLink: "https://wa.me/1234567890",
    country: "USA",
    returnPolicy: "No returns. All sales are final.",
    description: "A cozy café offering organic coffee and pastries."
  },
  {
    name: "Coffee Corner",
    contact: "hello@coffeecorner.com",
    chatLink: "https://wa.me/1234567890",
    country: "USA",
    returnPolicy: "No returns. All sales are final.",
    description: "A cozy café offering organic coffee and pastries."
  },
  {
    name: "Coffee Corner",
    contact: "hello@coffeecorner.com",
    chatLink: "https://wa.me/1234567890",
    country: "USA",
    returnPolicy: "No returns. All sales are final.",
    description: "A cozy café offering organic coffee and pastries."
  },
  {
    name: "Coffee Corner",
    contact: "hello@coffeecorner.com",
    chatLink: "https://wa.me/1234567890",
    country: "USA",
    returnPolicy: "No returns. All sales are final.",
    description: "A cozy café offering organic coffee and pastries."
  },
  {
    name: "Coffee Corner",
    contact: "hello@coffeecorner.com",
    chatLink: "https://wa.me/1234567890",
    country: "USA",
    returnPolicy: "No returns. All sales are final.",
    description: "A cozy café offering organic coffee and pastries."
  },
  {
    name: "Coffee Corner",
    contact: "hello@coffeecorner.com",
    chatLink: "https://wa.me/1234567890",
    country: "USA",
    returnPolicy: "No returns. All sales are final.",
    description: "A cozy café offering organic coffee and pastries."
  },
  {
    name: "Coffee Corner",
    contact: "hello@coffeecorner.com",
    chatLink: "https://wa.me/1234567890",
    country: "USA",
    returnPolicy: "No returns. All sales are final.",
    description: "A cozy café offering organic coffee and pastries."
  },
  {
    name: "Coffee Corner",
    contact: "hello@coffeecorner.com",
    chatLink: "https://wa.me/1234567890",
    country: "USA",
    returnPolicy: "No returns. All sales are final.",
    description: "A cozy café offering organic coffee and pastries."
  },
];

const listElement = document.getElementById("businessList");
const searchInput = document.getElementById("searchInput");
const countryFilter = document.getElementById("countryFilter");

function renderBusinesses() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCountry = countryFilter.value;

  const filtered = businesses.filter(biz => {
    const matchesName = biz.name.toLowerCase().includes(searchTerm);
    const matchesCountry = selectedCountry === "" || biz.country === selectedCountry;
    return matchesName && matchesCountry;
  });

  listElement.innerHTML = "";
  filtered.forEach(biz => {
    const card = document.createElement("div");
    card.className = "business-card";
    card.innerHTML = `
      <strong>${biz.name}</strong><br>
      Contact: ${biz.contact}<br>
      Chat: <a href="${biz.chatLink}" target="_blank">${biz.chatLink}</a><br>
      Country: ${biz.country}<br>
      Return Policy: ${biz.returnPolicy}<br><br>
      Description: ${biz.description}
    `;
    listElement.appendChild(card);
  });
}

function populateCountries() {
  const countries = [...new Set(businesses.map(b => b.country))];
  countries.sort();
  countries.forEach(c => {
    const option = document.createElement("option");
    option.value = c;
    option.textContent = c;
    countryFilter.appendChild(option);
  });
}

searchInput.addEventListener("input", renderBusinesses);
countryFilter.addEventListener("change", renderBusinesses);

populateCountries();
renderBusinesses();
