(function(){
 var l=document.createElement('link');l.rel='stylesheet';l.href='fm.css';document.head.appendChild(l);
 var h=`<section class="fm-wrap" id="pricing" aria-labelledby="fm-pricing-h">
  <div class="fm-inner">
    <p class="fm-eyebrow">Pricing</p>
    <h2 class="fm-h2" id="fm-pricing-h">Simple &amp; Clear Packages</h2>
    <p class="fm-sub">Apne budget ke hisab se package chunein. Hosting aur domain ka kharcha alag hota hai, project shuru karne se pehle bata diya jata hai.</p>
    <div class="fm-grid fm-g3" id="fm-pricing-grid"></div>
    <p class="fm-note">Custom kaam chahiye? Neeche form bhar dein, aap ke hisab se quote milega.</p>
  </div>
</section>

<!-- ================= DEMO PROJECTS ================= -->
<section class="fm-wrap fm-alt" id="demos" aria-labelledby="fm-demos-h">
  <div class="fm-inner">
    <p class="fm-eyebrow">Demo Projects</p>
    <h2 class="fm-h2" id="fm-demos-h">Dekhein Kaisa Kaam Hota Hai</h2>
    <p class="fm-sub">Yeh demo projects hain jo mera style dikhane ke liye bane hain, asli clients ke nahi.</p>
    <div class="fm-grid fm-g2" id="fm-demos-grid"></div>
  </div>
</section>

<!-- ================= REVIEWS ================= -->
<section class="fm-wrap" id="reviews" aria-labelledby="fm-rev-h">
  <div class="fm-inner">
    <p class="fm-eyebrow">Client Reviews</p>
    <h2 class="fm-h2" id="fm-rev-h">Clients Kya Kehte Hain</h2>
    <div class="fm-grid fm-g3" id="fm-rev-grid"></div>
  </div>
</section>

<!-- ================= FAQ ================= -->
<section class="fm-wrap fm-alt" id="faq" aria-labelledby="fm-faq-h">
  <div class="fm-inner" style="max-width:800px">
    <p class="fm-eyebrow">FAQ</p>
    <h2 class="fm-h2" id="fm-faq-h">Aam Sawalat</h2>
    <div id="fm-faq-list" style="margin-top:28px"></div>
  </div>
</section>

<!-- ================= INQUIRY FORM ================= -->
<section class="fm-wrap" id="quote" aria-labelledby="fm-quote-h">
  <div class="fm-inner" style="max-width:720px">
    <p class="fm-eyebrow">Request a Quote</p>
    <h2 class="fm-h2" id="fm-quote-h">Apna Project Batayein</h2>
    <p class="fm-sub">Form bharein, WhatsApp khulega aur aap ki details mujhe seedha chali jayengi.</p>
    <form class="fm-form" id="fm-form" novalidate>
      <div class="fm-field"><label for="fm-name">Name</label>
        <input id="fm-name" name="name" type="text" autocomplete="name" required>
        <span class="fm-err" id="fm-name-err"></span></div>
      <div class="fm-field"><label for="fm-phone">WhatsApp Number</label>
        <input id="fm-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="03xx xxxxxxx" required>
        <span class="fm-err" id="fm-phone-err"></span></div>
      <div class="fm-field"><label for="fm-type">Website Type</label>
        <select id="fm-type" name="type"></select></div>
      <div class="fm-field"><label for="fm-budget">Estimated Budget</label>
        <select id="fm-budget" name="budget"></select></div>
      <div class="fm-field"><label for="fm-details">Project Details</label>
        <textarea id="fm-details" name="details" placeholder="Aap ko kis qisam ki website chahiye? Koi example site ya khaas features?"></textarea>
        <span class="fm-err" id="fm-details-err"></span></div>
      <button class="fm-btn" type="submit">Send on WhatsApp</button>
    </form>
  </div>
</section>

<!-- ================= WHATSAPP FLOATING BUTTON ================= -->
<span class="fm-wa-tip" id="fm-wa-tip">Chat on WhatsApp</span>
<a class="fm-wa-float" id="fm-wa-float" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
  <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16.04 3C9.4 3 4 8.4 4 15.03c0 2.37.69 4.58 1.88 6.45L4 29l7.7-1.84a12.02 12.02 0 0 0 4.34.82C22.68 28 28 22.6 28 15.97 28 9.36 22.68 3 16.04 3zm0 22.02c-1.38 0-2.73-.34-3.9-1l-.28-.16-4.57 1.09 1.14-4.45-.18-.3a9.9 9.9 0 0 1-1.52-5.3c0-5.5 4.48-9.98 9.99-9.98 5.5 0 9.97 4.48 9.97 9.98 0 5.5-4.47 10.12-9.65 10.12zm5.47-7.46c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z"/></svg>
</a>`;
 document.body.insertAdjacentHTML('beforeend',h);
})();
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
      { title: "Restaurant Website", tag: "DEMO", liveUrl: "demo-restaurant.html",
        short: "Menu, booking request, WhatsApp order.",
        detail: "Menu categories, table booking request form aur ek click WhatsApp order button." },
      { title: "School Website", tag: "DEMO", liveUrl: "demo-school.html",
        short: "Admissions, notices, student portal demo.",
        detail: "Admission info, notice board, class-wise results aur student portal ka demo page." },
      { title: "Online Store", tag: "DEMO", liveUrl: "demo-store.html",
        short: "Products, cart, checkout.",
        detail: "Product listing, cart, checkout flow aur mobile friendly shopping experience." },
      { title: "Hotel Website", tag: "DEMO", liveUrl: "demo-hotel.html",
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
