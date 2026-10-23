(function () {
  /* ===================== CONFIG (yahan badlein) ===================== */
  var CONFIG = {
    whatsapp: "923101871934",              // 0310 1871934 (country code ke saath, bina + ke)
    fiverr:   "https://www.fiverr.com/fahadmughalf711",
    packages: [
      { name: "Basic Website",   price: "Rs 4,000",  note: "starting",
        features: ["1-3 pages", "Mobile responsive", "Contact form", "Google Maps integration"] },
      { name: "Business Website", price: "Rs 9,000",  note: "starting", popular: true,
        features: ["5-7 pages", "WhatsApp button", "Basic SEO + Google Analytics", "Contact / inquiry form"] },
      { name: "E-commerce Store", price: "Rs 20,000+", note: "depends on features",
        features: ["Products, cart, checkout", "Order management", "Payment integration (as needed)", "WordPress/WooCommerce ya Shopify"] }
    ],
    // liveUrl: asli demo link yahan likhein. "" chhorenge to "Demo coming soon" dikhega.
    demos: [
      { title: "Restaurant Website", tag: "DEMO", liveUrl: "",
        short: "Menu, booking request, WhatsApp order.",
        detail: "Menu categories, table booking request form aur ek click WhatsApp order button." },
      { title: "School Website", tag: "DEMO", liveUrl: "",
        short: "Admissions, notices, student portal demo.",
        detail: "Admission info, notice board, class-wise results aur student portal ka demo page." },
      { title: "Online Store", tag: "DEMO", liveUrl: "",
        short: "Products, cart, checkout.",
        detail: "Product listing, cart, checkout flow aur mobile friendly shopping experience." },
      { title: "Hotel Website", tag: "DEMO", liveUrl: "",
        short: "Rooms, gallery, booking request.",
        detail: "Room types, photo gallery aur booking request form." }
    ],
    // Asli reviews milte hi yahan add karein: { name: "Ali", text: "Bohat acha kaam." }
    reviews: [],
    faqs: [
      ["Website banane mein kitna time lagta hai?", "Basic website aam taur par 1-3 din mein ho jati hai. Bari ya e-commerce site mein zyada waqt lag sakta hai, shuru mein andaza bata diya jata hai."],
      ["Domain aur hosting price mein shamil hain?", "Nahi, domain aur hosting ka kharcha alag hota hai. Project shuru hone se pehle bata diya jata hai, aap chahein to khud bhi kharid sakte hain."],
      ["Kya website mobile par bhi theek chalegi?", "Ji haan, har website mobile, tablet aur computer ke liye responsive banti hai."],
      ["Payment kaise hoti hai?", "Pehle advance, baqi kaam mukammal hone par. Detail kaam shuru karne se pehle tay ho jati hai."],
      ["Banne ke baad changes ho sakte hain?", "Ji, tay shuda revisions free hain. Baad ke naye features alag se quote hote hain."],
      ["Aap se rabta kaise karein?", "WhatsApp (0310 1871934), email (fahadmughalf54@gmail.com) ya Fiverr (@fahadmughalf711) par."]
    ],
    websiteTypes: ["Business Website", "Personal / Portfolio", "E-commerce Store", "Landing Page", "Blog", "School / Institute", "Restaurant / Hotel", "Custom Web App", "Other"],
    budgets: ["Rs 4,000 - 8,000", "Rs 8,000 - 15,000", "Rs 15,000 - 30,000", "Rs 30,000+", "Mujhe andaza nahi"]
  };
  /* ================================================================== */

  function $(id) { return document.getElementById(id); }
  function el(tag, cls, text) { var e = document.createElement(tag); if (cls) e.className = cls; if (text != null) e.textContent = text; return e; }
  function waLink(msg) { return "https://wa.me/" + CONFIG.whatsapp + (msg ? "?text=" + encodeURIComponent(msg) : ""); }
  function goQuote(type) { var s = $("fm-type"); if (type) { for (var i = 0; i < s.options.length; i++) if (s.options[i].value === type) s.selectedIndex = i; } $("quote").scrollIntoView({ behavior: "smooth" }); }

  /* WhatsApp floating button */
  $("fm-wa-float").href = waLink("Assalam o Alaikum Fahad bhai, mujhe website banwani hai.");

  /* Pricing */
  CONFIG.packages.forEach(function (p) {
    var c = el("div", "fm-card" + (p.popular ? " fm-pop" : ""));
    if (p.popular) c.appendChild(el("span", "fm-badge", "Most Popular"));
    c.appendChild(el("h3", "", p.name));
    var pr = el("div", "fm-price", p.price); pr.appendChild(document.createTextNode(" ")); pr.appendChild(el("small", "", p.note)); c.appendChild(pr);
    var ul = el("ul"); p.features.forEach(function (f) { ul.appendChild(el("li", "", f)); }); c.appendChild(ul);
    var row = el("div", "fm-row"); var b = el("button", "fm-btn", "Order This Package"); b.type = "button";
    b.onclick = function () { goQuote(p.name === "E-commerce Store" ? "E-commerce Store" : "Business Website"); };
    row.appendChild(b); c.appendChild(row); $("fm-pricing-grid").appendChild(c);
  });

  /* Demo projects */
  CONFIG.demos.forEach(function (d) {
    var c = el("div", "fm-card");
    c.appendChild(el("span", "fm-tag", d.tag)); c.appendChild(el("h3", "", d.title)); c.appendChild(el("p", "fm-detail fm-open", d.short));
    var more = el("p", "fm-detail", d.detail); c.appendChild(more);
    var row = el("div", "fm-row");
    var live = el("a", "fm-btn", d.liveUrl ? "Live Demo" : "Demo coming soon");
    if (d.liveUrl) { live.href = d.liveUrl; live.target = "_blank"; live.rel = "noopener"; } else { live.setAttribute("aria-disabled", "true"); }
    var vd = el("button", "fm-btn fm-ghost", "View Details"); vd.type = "button"; vd.setAttribute("aria-expanded", "false");
    vd.onclick = function () { var o = more.classList.toggle("fm-open"); vd.setAttribute("aria-expanded", o); vd.textContent = o ? "Hide Details" : "View Details"; };
    row.appendChild(live); row.appendChild(vd); c.appendChild(row); $("fm-demos-grid").appendChild(c);
  });

  /* Reviews */
  if (CONFIG.reviews.length) {
    CONFIG.reviews.forEach(function (r) {
      var c = el("div", "fm-card"); c.appendChild(el("p", "", "“" + r.text + "”")); c.appendChild(el("span", "fm-tag", r.name)); $("fm-rev-grid").appendChild(c);
    });
  } else {
    var e = el("div", "fm-empty", "Pehle clients ke reviews jald yahan nazar aayenge. Aap bhi apna pehla review dene wale ban sakte hain!");
    e.style.gridColumn = "1 / -1"; $("fm-rev-grid").appendChild(e);
  }

  /* FAQ */
  CONFIG.faqs.forEach(function (f) {
    var d = el("details", "fm-faq"); d.appendChild(el("summary", "", f[0])); d.appendChild(el("p", "", f[1])); $("fm-faq-list").appendChild(d);
  });

  /* Form options */
  CONFIG.websiteTypes.forEach(function (t) { var o = el("option", "", t); o.value = t; $("fm-type").appendChild(o); });
  CONFIG.budgets.forEach(function (t) { var o = el("option", "", t); o.value = t; $("fm-budget").appendChild(o); });

  /* Form submit -> WhatsApp */
  $("fm-form").addEventListener("submit", function (ev) {
    ev.preventDefault();
    var name = $("fm-name").value.trim(), phone = $("fm-phone").value.trim(), details = $("fm-details").value.trim(), ok = true;
    $("fm-name-err").textContent = ""; $("fm-phone-err").textContent = ""; $("fm-details-err").textContent = "";
    if (name.length < 2) { $("fm-name-err").textContent = "Apna naam likhein."; ok = false; }
    if (phone.replace(/\D/g, "").length < 10) { $("fm-phone-err").textContent = "Sahi WhatsApp number likhein."; ok = false; }
    if (details.length < 10) { $("fm-details-err").textContent = "Project ke baare mein thori detail likhein."; ok = false; }
    if (!ok) return;
    var msg = "Assalam o Alaikum Fahad bhai,\n\nNew website inquiry:\n" +
      "Name: " + name + "\nWhatsApp: " + phone + "\nWebsite Type: " + $("fm-type").value +
      "\nBudget: " + $("fm-budget").value + "\nDetails: " + details;
    window.open(waLink(msg), "_blank", "noopener");
  });
})();
