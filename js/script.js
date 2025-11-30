// ===== Data Sets =====

// Featured items
const featured = [
  { id: "f1", title: "Held in Quiet, 2023", type: "portfolio", thumb: "images/boat couple.jpg", img: "images/boat couple.jpg", excerpt: "A fleeting moment of tenderness captured on the river.", content: "“Held in Quiet” captures an intimate pause amid motion — two figures leaning into stillness as the ferry drifts forward. The gentle placement of a hand conveys both tenderness and protection, blurring the boundary between affection and contemplation. Shot in black and white, the absence of color heightens the emotional tone, focusing attention on gesture, light, and atmosphere. This photograph reflects themes of connection, transience, and the quiet language of human touch — moments that speak not in words, but in weight and warmth." },
  { id: "f2", title: "Freeloader, 2025", type: "studio", thumb: "images/babynut.jpg", img: "images/babynut.jpg", excerpt: "A small acrylic painting portrays a cat peeking from beneath rumpled tan blankets.", content: "This intimate acrylic painting captures quiet domestic warmth through texture and subtle color contrast. The piece focuses on the play of texture—the folds of fabric, the gentle highlights of the bedding, and the small but expressive presence of the cat’s eyes. By emphasizing muted browns and creams, the work evokes a sense of comfort and stillness, transforming an everyday moment into a quiet study of warmth and observation. The painting reflects my interest in finding emotional resonance in ordinary spaces, using restrained color and brushwork to create intimacy and familiarity." },
  { id: "f3", title: "Bluebell & Bow Logo", type: "portfolio", thumb: "images/Bluebell&Bow_oval_final.png", img: "images/Bluebell&Bow_oval_final.png", excerpt: "A refined floral logo for a small sewing business.", content: "Bluebell & Bow is a brand identity created to capture the feeling of delicate sophistication and heritage-inspired beauty. The logo features a hand-illustrated bouquet of bluebells, carnations, and wild blooms tied with a bow, framed within an oval reminiscent of antique cameo designs. Rendered in a soft periwinkle blue, the composition balances tradition with modern clarity, giving the brand a graceful, boutique quality. This design emphasizes the brand’s values of artistry, care, and detail — combining romantic illustration with restrained typography for a look that feels both bespoke and enduring." },
  { id: "f4", title: "PBJ Bears", type: "studio", thumb: "images/pbj-bears.jpg", img: "images/pbj-bears.jpg", excerpt: "A playful food art piece featuring peanut butter bears and jelly squares arranged on toast.", content: "This piece transforms a simple slice of peanut butter and jelly toast into a whimsical work of edible art. Using peanut butter shaped into small bear faces and jelly as a contrasting background, the design balances composition, color, and texture. Each bear face was sculpted with attention to expression and symmetry, creating a grid-like pattern that merges cuteness with visual structure. The piece reflects an interest in elevating the ordinary—turning a familiar, comforting food into a medium for playful experimentation and aesthetic joy." }
];

// Galleries
const galleries = {
  Graphic: [
    { id: "g1", title: "Kora Academy logo", thumb: "images/Kora logo bg 2.png", img: "images/Kora logo bg 2.png", excerpt: "Short description", content: "Full details about Project 1." },
    { id: "g2", title: "Project 2", thumb: "images/project2-thumb.jpg", img: "images/project2-large.jpg", excerpt: "Short description", content: "Full details about Project 2." },
    { id: "g3", title: "Project 3", thumb: "images/project3-thumb.jpg", img: "images/project3-large.jpg", excerpt: "Short description", content: "Full details about Project 3." }
  ],
  Photography: [
    { id: "p1", title: "Portrait Series", thumb: "images/photo1-thumb.jpg", img: "images/photo1-large.jpg", excerpt: "Portrait collection", content: "Photoshoot details" },
    { id: "p2", title: "Editorial Shoot", thumb: "images/photo2-thumb.jpg", img: "images/photo2-large.jpg", excerpt: "Magazine style", content: "More info about the shoot" }
  ],
  Digital: [
    { id: "d1", title: "Sleeping", thumb: "images/sleep.jpg", img: "images/sleep.jpg", excerpt: "A digital illustration of a girl and her cat resting, rendered in soft monochrome tones.", content: "This digital piece depicts a girl sleeping with her cat curled above her on the pillow, drawn in a unified violet palette. The limited color scheme and simplified shapes create a gentle, dreamlike quality that emphasizes mood over detail. The composition balances symmetry and softness, using rounded forms and tonal contrast to convey intimacy and quiet affection. This work reflects an interest in visual storytelling through minimalism—where shape, color, and emotional tone work together to express comfort and companionship." },
    { id: "d2", title: "Love You ForNever", thumb: "images/loveyoufornever.jpg", img: "images/loveyoufornever.jpg", excerpt: "A digital still life of scissors cutting up a love letter, changing the message.", content: "This piece uses digital painting to transform everyday materials—paper, scissors, and handwritten words—into a visual metaphor for emotional conflict. The phrase “Love You Forever” becomes fragmented as “Never” is cut apart, representing the tension between sentiment and separation. A muted rose palette and soft digital brushwork evoke nostalgia and vulnerability, while the composition’s flat perspective draws attention to gesture and texture. The work explores how simple imagery and subdued color can communicate emotion with quiet intensity." },
    { id: "d3", title: "Orange Grove", thumb: "images/orangegrove.jpg", img: "images/orangegrove.jpg", excerpt: "A digital landscape of orange trees capturing sunlight.", content: "This digital painting depicts an orange grove bathed in sunlight, rendered in loose, impressionistic strokes. The use of warm greens, golds, and sky blues creates a luminous, airy composition that feels both expansive and serene. Layered digital brushwork mimics the softness of natural paint, allowing the foliage and fruit to blur into abstract patterns of color. The piece reflects an exploration of light and organic rhythm—translating natural beauty into a calm, painterly digital space." },
    { id: "d4", title: "Us", thumb: "images/us-sketch.jpg", img: "images/us-sketch.jpg", excerpt: "A black-and-white digital illustration of two characters and their cats.", content: "This digital drawing portrays two stylized figures and their cats, rendered in a clean, cartoon-like line style. Minimal shading and expressive linework give the composition a casual, sketchbook feel, while the thought bubble adds a playful, narrative touch. The piece emphasizes character design and emotional storytelling through subtle gestures rather than detail. It reflects a recurring theme in my work—capturing warmth, personality, and human connection in a simple yet expressive visual language." }
  ],
   Acrylic: [
    { id: "a1", title: "Trail Ride", thumb: "images/horse-painting.jpg", img: "images/horse-painting.jpg", excerpt: "A painting depicting two figures on horseback reaching toward each other.", content: "This painting celebrates connection, companionship, and movement through expressive color and light, capturing a fleeting moment of balance and warmth. Painted in acrylic on canvas, the piece uses saturated greens and rich browns to emphasize sunlight and natural energy. Textural brushwork highlights the horses’ musculature and the tactile feel of their coats, contrasting with the smooth fields of background color. The work combines observational realism with emotional storytelling—using color, gesture, and composition to portray harmony between people, animals, and their shared environment." },
    { id: "a2", title: "Freeloader, 2025", thumb: "images/babynut.jpg", img: "images/babynut.jpg", excerpt: "A small acrylic painting portrays a cat peeking from beneath rumpled tan blankets.", content: "This intimate acrylic painting captures quiet domestic warmth through texture and subtle color contrast. The piece focuses on the play of texture—the folds of fabric, the gentle highlights of the bedding, and the small but expressive presence of the cat’s eyes. By emphasizing muted browns and creams, the work evokes a sense of comfort and stillness, transforming an everyday moment into a quiet study of warmth and observation. The painting reflects my interest in finding emotional resonance in ordinary spaces, using restrained color and brushwork to create intimacy and familiarity." }
   ],
  Trad: [
    { id: "t1", title: "Smoke", thumb: "images/sketch-smoke.jpg", img: "images/sketch-smoke.jpg", excerpt: "A graphite portrait exploring smoke-like forms.", content: "This graphite drawing captures a stylized portrait rendered with close attention to value, depth, and gesture. Using layered shading and contrasting tones, the piece creates a strong sense of dimensionality and motion. The swirling smoke-like forms surrounding the subject blur the line between realism and abstraction, adding rhythm and visual energy to the composition. The figure’s confident pose, detailed textures, and dramatic lighting emphasize mood and individuality. This work reflects an exploration of expressive realism—using pencil as a tool to balance precision with intuition, and technical control with emotional tone." },
    { id: "t2", title: "Sister Portrait", thumb: "images/sketch-sara.JPG", img: "images/sketch-sara.JPG", excerpt: "A graphite sketchbook study combining portraiture and natural motifs.", content: "This graphite sketch captures a loose portrait surrounded by organic details such as flowers, butterflies, and gestural linework. The drawing emphasizes expressive mark-making and spontaneity, balancing structural portrait elements with decorative flourishes that suggest motion and liveliness. Subtle shading and confident pencil strokes convey form while preserving the immediacy of a sketchbook drawing. This piece reflects an ongoing exploration of observational drawing and visual storytelling—using graphite as a medium to capture both likeness and atmosphere in an intuitive, personal way." },
    { id: "t3", title: "Man in Water", thumb: "images/sketch-jinyoung.jpg", img: "images/sketch-jinyoung.jpg", excerpt: "A graphite portrait study capturing a man in a body of water.", content: "This graphite drawing portrays a figure immersed in water, rendered with delicate shading and fine linework to convey mood and introspection. The composition emphasizes posture and gesture over detail, allowing the subtle transitions of tone to guide the viewer’s focus. The wet hair, soft ripples, and downward gaze evoke a sense of stillness and contemplation. Through controlled pencil technique and gentle value contrasts, the piece explores emotion through minimalism—using light and texture to express vulnerability and calm." },
    { id: "t4", title: "Transfiguration Study", thumb: "images/raphael.jpg", img: "images/raphael.jpg", excerpt: "A graphite study based on Raphael’s Transfiguration", content: "This graphite study reproduces and interprets figures from Raphael’s School of Athens, focusing on the relationship between structure, proportion, and light. The piece includes detailed renderings of heads and hands, emphasizing the anatomy and gestural qualities that define Renaissance draftsmanship. Careful tonal layering creates depth and realism while preserving the looseness and movement of a sketch. Through this study, I explored traditional drawing techniques—such as hatching, cross-contour shading, and edge variation—to understand how value and line work together to create presence and emotion. The work reflects an appreciation for classical study as a foundation for expressive, modern drawing practice." },
    { id: "t5", title: "Noah Kahan", thumb: "images/sketch-noahkahan.JPG", img: "images/sketch-noahkahan.JPG", excerpt: "A graphite portrait sketch capturing the mood and likeness of singer Noah Kahan.", content: "This graphite drawing portrays a side-profile portrait rendered with controlled lines and subtle tonal variation. The simplicity of the sketch highlights form and proportion, while the soft shading emphasizes the structure of the face and hair. Text reading “one day I’ll be gone” (lyrics from one of his songs) curves gently around the composition, adding a quiet emotional layer that connects the technical study to a sense of narrative and introspection. The piece balances observational accuracy with expressive restraint, using pencil to explore atmosphere, personality, and the understated power of minimal marks." }
  ],
  Watercolor: [
    { id: "wa1", title: "Bird Study", thumb: "images/watercolor-birds.jpg", img: "images/watercolor-birds.jpg", excerpt: "A watercolor study of North American birds.", content: "This watercolor piece depicts four species of North American birds—the Mountain Chickadee, Baltimore Oriole, Pyrrhuloxia, and Blue Jay—each rendered with attention to texture, color, and posture. The work focuses on observing and translating the delicate patterns of feathers, light, and anatomy through transparent layers of pigment. Soft washes and fine line detailing create depth and subtle movement, while the inclusion of handwritten species names adds a personal, illustrative touch. The piece reflects an interest in both scientific observation and artistic interpretation, balancing accuracy with expressive mark-making to celebrate the beauty and individuality of each bird." },
    { id: "wa2", title: "Cozy Hamster", thumb: "images/watercolor-hamster.jpg", img: "images/watercolor-hamster.jpg", excerpt: "A small watercolor illustration of a bundled-up hamster holding a warm drink.", content: "This watercolor illustration depicts a cozy winter scene featuring a hamster wrapped in a striped sweater and scarf, clutching a warm drink. The soft washes of pink, gray, and blue create a calm, comforting mood, while fine pen lines define the form and texture. The small scale of the piece highlights its intimacy and charm—inviting the viewer to connect with the warmth and quietness of the moment. This work reflects an interest in character-based illustration and emotional storytelling through minimal composition, soft palettes, and tactile brushwork." },
    { id: "wa3", title: "Pajama Party", thumb: "images/watercolor-sleepover.jpg", img: "images/watercolor-sleepover.jpg", excerpt: "A watercolor illustration of a cat and dog in oversized pajamas holding hands.", content: "This small watercolor painting depicts a cat and dog dressed in soft pastel pajamas, standing hand in hand against a glowing yellow background. The piece uses gentle washes of color and minimal linework to convey a sense of comfort and companionship. The simplified forms and soft edges create a nostalgic, storybook-like feeling, while the warm palette emphasizes emotional warmth and lightheartedness. This work reflects an interest in small-scale storytelling through character design and color harmony—transforming an everyday moment into a tender, expressive scene." }
  ],              
  Wearable: [
    { id: "w1", title: "Cat Applique Sweater", thumb: "images/cat_shirt.JPG", img: "images/cat_shirt.JPG", excerpt: "A one-of-a-kind sweatshirt featuring a hand-sewn calico cat applique created from reclaimed thrifted fabrics.", content: "This sweatshirt features a hand-stitched applique created from thrifted fabric, giving new life to secondhand materials through slow, intentional craftsmanship. Each piece of fabric was carefully selected for its texture and color, then cut and sewn by hand using a needle and thread to form the detailed cat design. The completed patch was securely sewn onto a Gildan sweatshirt, combining handmade artistry with a comfortable, wearable base. The piece highlights sustainability, individuality, and the tactile charm of hand-sewn work—turning an ordinary garment into a one-of-a-kind piece of wearable art." },
    { id: "w2", title: "Dragonfly Hoodie", thumb: "images/dragonfly_hoodie.JPG", img: "images/dragonfly_hoodie.JPG", excerpt: "A hand-painted dragonfly design created with bleach on fabric.", content: "This hoodie features a hand-painted dragonfly design created using a bleach painting technique on fabric. The design was applied with precision using diluted bleach and fine brushes to capture the intricate details of the wings and body. The result reveals warm copper and tan tones that contrast against the dark fabric, emphasizing the organic beauty and symmetry of the dragonfly form. Painted directly across the back of the hoodie, the piece transforms a simple garment into wearable art—blending sustainability, experimentation, and craftsmanship in a single design." },
    { id: "w3", title: "Orchid Embroidered Beanie", thumb: "images/orchid_beanie.jpeg", img: "images/orchid_beanie.jpeg", excerpt: "A lilac Carhartt beanie embroidered by hand with delicate lavender orchids.", content: "This project transforms a classic Carhartt beanie into a personalized piece through hand embroidery. Using needle and thread, small lavender flowers were stitched around the Carhartt logo, creating a subtle yet striking contrast between the structured industrial brand and the delicate, organic imagery. Each stitch was placed by hand, emphasizing care, patience, and craftsmanship. The piece explores the balance between function and decoration—merging utilitarian workwear with gentle, nature-inspired artistry to create a wearable reflection of individuality and softness." },
    { id: "w3", title: "Embroidered Nike Socks", thumb: "images/embroidery-socks.jpeg", img: "images/embroidery-socks.jpeg", excerpt: "Hand-embroidered Nike socks featuring celestial, cloud, and floral designs.", content: "This project reimagines simple Nike socks through the addition of hand-embroidered details inspired by nature and atmosphere. Using needle and thread, each pair was customized with small, precise stitches depicting three distinct themes—stars and moon on navy, clouds and sky on blue, and delicate greenery on white. The embroidery process emphasized patience and texture, layering thread to build dimension and softness. Together, the series explores the balance between branding and individuality, turning mass-produced items into small expressions of creativity, care, and visual storytelling." }
  ],
  Pottery: [
    { id: "c1", title: "Bunnies Dish", thumb: "images/pottery-bunnies.jpg", img: "images/pottery-bunnies.jpg", excerpt: "A hand-thrown ceramic bowl featuring a playful blue line drawing of bunnies.", content: "This ceramic bowl was hand-thrown on the wheel and finished with a minimalist line illustration painted in cobalt blue underglaze. The design features a pair of stylized bunnies that curve with the form of the bowl, creating a sense of motion and continuity within the circular shape. The simplicity of the linework contrasts with the natural texture of the clay, highlighting both the handmade process and the organic imperfections of the material. This piece reflects an interest in blending functional pottery with whimsical, character-driven imagery—turning a simple vessel into a small, expressive work of art." },
    { id: "c2", title: "Car Coasters", thumb: "images/pottery-coasters.jpg", img: "images/pottery-coasters.jpg", excerpt: "Hand-painted ceramic car coasters featuring delicate white florals on a matte green base.", content: "This pair of ceramic car coasters was handbuilt and then hand-painted with a botanical design using underglaze and fine brushes. Each coaster features a soft green surface adorned with white flowers and branching stems, arranged in a balanced, natural composition. The paint was applied with attention to flow and repetition, allowing the organic forms to complement the circular shape of the pieces. After glazing and firing, the surface reveals a gentle contrast between the smooth finish and the subtle brush texture beneath. These coasters merge everyday functionality with thoughtful design—transforming a small utilitarian object into a piece of handcrafted decoration inspired by nature and simplicity." },
    { id: "c3", title: "Star Planter & Dish", thumb: "images/pottery-planter.jpg", img: "images/pottery-planter.jpg", excerpt: "A hand-thrown ceramic planter and tray set glazed in deep green with bold yellow star motifs.", content: "This ceramic planter and matching tray were hand-thrown on the wheel and decorated using a wax-resist glazing technique. A deep green glaze serves as the base, while bright yellow stars were revealed through the resist process, creating a striking visual contrast between the two tones. The pattern wraps around the form, emphasizing movement and repetition while maintaining a balance between boldness and simplicity. Designed to be both functional and decorative, this piece explores the intersection of utility and creativity—transforming an everyday planter into a vibrant statement of color, texture, and form." },
    { id: "c4", title: "Cat Match Holder", thumb: "images/pottery-match.jpg", img: "images/pottery-match.jpg", excerpt: "A hand-sculpted ceramic match holder featuring a small cat figurine.", content: "This piece is a hand-built ceramic match holder designed with a whimsical sculptural element—a small cat perched on the rim of the dish. The form was shaped and refined by hand, then coated in a glossy clear glaze to highlight the natural tone of the clay and the warm brown and white accents of the cat. The figure’s expressive posture adds charm and character, transforming a simple utilitarian object into a piece of decorative art. This project reflects an interest in merging form and function, where everyday items are reimagined through a personal, handcrafted lens that emphasizes storytelling and individuality." },
    { id: "c5", title: "Travel Mug", thumb: "images/pottery-travelmug.jpg", img: "images/pottery-travelmug.jpg", excerpt: "A hand-built ceramic travel mug with raised cloud motifs and a matching lid.", content: "This travel mug was hand-built using slab construction and designed with an integrated lid for daily use. The surface features raised cloud shapes crafted from the same clay body, creating a subtle tone-on-tone texture that stands out beneath a glossy white glaze. The piece balances simplicity and whimsy, with gentle, rounded forms that evoke calm and lightness. Designed to be both practical and expressive, this mug reflects a focus on tactile design—where surface, shape, and usability work together to create a comforting and personal object." },
    { id: "c6", title: "Moon Jar", thumb: "images/pottery-moonjar.jpg", img: "images/pottery-moonjar.jpg", excerpt: "A wheel-thrown ceramic moon jar decorated with blue and yellow underglaze patterns.", content: "This moon jar was thrown on the pottery wheel and decorated using blue and yellow underglazes applied in freeform, gestural strokes. The fluid pattern wraps around the round body of the vessel, emphasizing its soft curves and balanced proportions. After being coated in a clear glaze and fired, the colors developed a subtle translucency that enhances the depth and movement of the surface. Inspired by traditional moon jar forms, this piece explores the relationship between control and spontaneity—combining structured craftsmanship with intuitive mark-making to create a vessel that feels both timeless and expressive." }
  ],
  Misc: [
    { id: "m1", title: "Apple & Worm Keychain", thumb: "images/keychain.jpg", img: "images/keychain.jpg", excerpt: "A hand-stitched felt apple keychain featuring a sleepy face, button detail, and a playful worm charm.", content: "This keychain was hand-sewn from layers of felt using simple embroidery and stitching techniques. The design features a stylized apple with a small face, a contrasting button accent, and a pink worm charm that adds a touch of humor and personality. Soft color contrasts and visible stitching emphasize the handmade quality of the piece, while the compact form makes it both decorative and functional. This work explores character design through textile craft, transforming familiar materials into a playful, tactile object that carries warmth and individuality." },
    { id: "m2", title: "Tea Time", thumb: "images/mousetree-paperart.jpg", img: "images/mousetree-paperart.jpg", excerpt: "A hand-cut paper collage depicting a mouse sipping tea in a tree.", content: "This piece was created entirely from hand-cut colored paper, assembled into a layered collage illustrating a whimsical scene of a mouse perched on a branch, enjoying a cup of tea. Each shape was individually cut and arranged to create dimension and personality within the small composition. The use of textured cardstock adds depth to the flat forms, while subtle details—like the striped teacup and the mouse’s content expression—bring warmth and character to the piece. This work reflects an interest in narrative illustration and tactile craft, using paper as both a drawing tool and a sculptural medium to convey charm, calmness, and quiet humor." },
    { id: "m3", title: "PBJ Bears", thumb: "images/pbj-bears.jpg", img: "images/pbj-bears.jpg", excerpt: "A playful food art piece featuring peanut butter bears and jelly squares arranged on toast.", content: "This piece transforms a simple slice of peanut butter and jelly toast into a whimsical work of edible art. Using peanut butter shaped into small bear faces and jelly as a contrasting background, the design balances composition, color, and texture. Each bear face was sculpted with attention to expression and symmetry, creating a grid-like pattern that merges cuteness with visual structure. The piece reflects an interest in elevating the ordinary—turning a familiar, comforting food into a medium for playful experimentation and aesthetic joy." },
    { id: "m4", title: "Grocery Cat", thumb: "images/catbag-paperart.jpg", img: "images/catbag-paperart.jpg", excerpt: "A vibrant hand-cut paper collage of a cat nestled among loaves of bread.", content: "This piece was created using hand-cut colored papers, layered to form a stylized illustration of a cat surrounded by bread loaves and flowers. The design emphasizes shape, color, and composition through precise cutting and assembly, creating depth without the use of linework. Each element was arranged to balance warmth and contrast, with soft pastels offset by rich orange and navy tones. The work captures a sense of charm and humor, transforming simple materials into a lively narrative scene. It reflects an ongoing exploration of storytelling through cut-paper techniques—blending flat form, texture, and whimsy into a cohesive visual language." }
  ]
};

// ===== Utilities =====
let cart = [];

function escapeHtml(str){
  if (!str) return "";
  return String(str).replace(/[&<>"'`]/g, function(m){ 
    return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;','`':'&#96;'}[m]; 
  });
}

function cardForProject(p){
  const card = document.createElement("article");
  card.className = "project-card";
  card.setAttribute("data-id", p.id);
  card.innerHTML = `<div class="thumb">${escapeHtml(p.title)}</div>
                    <h4>${escapeHtml(p.title)}</h4>
                    <div class="muted">${escapeHtml(p.excerpt)}</div>`;
  return card;
}

function openModal(item){
  const modal = document.getElementById("modal");
  modal.setAttribute("aria-hidden", "false");
  const content = document.getElementById("modalContent");
  content.innerHTML = `<h2>${escapeHtml(item.title || item.name)}</h2>
    <p class="muted">${escapeHtml(item.excerpt || item.desc || "")}</p>
    <div style="margin-top:12px">${item.img ? `<img src="${item.img}" style="max-width:100%; margin-bottom:16px;">` : ""}${escapeHtml(item.content || "")}</div>
    <div style="margin-top:16px">
      ${ item.price ? `<strong>Price: $${item.price}</strong> <button class="add-btn" data-id="${item.id}">Add to cart</button>` : "" }
    </div>`;
}

function closeModal(){
  const modal = document.getElementById("modal");
  modal.setAttribute("aria-hidden", "true");
  document.getElementById("modalContent").innerHTML = "";
}

function capitalize(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function addToCart(item){
  cart.push(item);
  renderCart();
  document.getElementById("cartCount").textContent = cart.length;
}

function renderCart(){
  const container = document.getElementById("cartItems");
  if (!cart.length) {
    container.innerHTML = "<div>No items</div>";
    document.getElementById("cartCount").textContent = "0";
    return;
  }
  container.innerHTML = "";
  cart.forEach(it => {
    const row = document.createElement("div");
    row.style.display="flex";
    row.style.justifyContent="space-between";
    row.style.padding="6px 0";
    row.innerHTML = `<div>${escapeHtml(it.name)} <small style="color:#666">x1</small></div><div>$${it.price}</div>`;
    container.appendChild(row);
  });
  document.getElementById("cartCount").textContent = cart.length;
}

// ===== DOMContentLoaded =====
document.addEventListener("DOMContentLoaded", () => {

  // --- Featured ---
  const featuredGrid = document.getElementById("featuredGrid");
  if(featuredGrid){
    featured.forEach(item => {
      const el = document.createElement("article");
      el.className = "feature-card";
      el.innerHTML = `<h4>${escapeHtml(item.title)}</h4><p class="muted">${escapeHtml(item.excerpt)}</p>
                      <div class="more"><button class="small-btn" data-id="${item.id}">More</button></div>`;
      featuredGrid.appendChild(el);
    });
  }

  // --- Galleries ---
  Object.keys(galleries).forEach(key => {
    const container = document.getElementById(`gallery${key}`);
    if(!container) return;

    galleries[key].forEach(item => {
      const el = document.createElement("div");
      el.className = "gallery-item";
      el.setAttribute("data-gallery", key);
      el.setAttribute("data-id", item.id);
      el.innerHTML = `<img src="${item.thumb}" alt="${item.title}"><p>${item.title}</p>`;
      container.appendChild(el);
    });
  });

  // --- Modal Click Handler ---
  document.body.addEventListener("click", e => {
    const btn = e.target.closest("button[data-id]");
    const galleryItem = e.target.closest(".gallery-item");
    const projectCard = e.target.closest(".project-card");

    let item = null;

    // Check button (featured / shop)
    if(btn){
      const id = btn.getAttribute("data-id");
      item = featured.find(x=>x.id===id) || portfolio.find(x=>x.id===id) || studio.find(x=>x.id===id) || shopItems.find(x=>x.id===id);
    }

    // Check gallery item
    else if(galleryItem){
      const galleryKey = galleryItem.getAttribute("data-gallery");
      const id = galleryItem.getAttribute("data-id");
      item = galleries[galleryKey]?.find(x=>x.id===id);
      if(item) item.img = item.img || item.thumb;
    }

    // Check project card
    else if(projectCard){
      const id = projectCard.getAttribute("data-id");
      item = portfolio.find(x=>x.id===id) || studio.find(x=>x.id===id);
    }

    if(item) openModal(item);
  });

// --- Featured Modal Popup (uses existing modal) ---
document.querySelectorAll(".card.featured img").forEach(img => {
  img.addEventListener("click", e => {
    e.stopPropagation(); // Prevents click from bubbling up to card
    const card = img.closest(".card.featured");
    const projectId = card.getAttribute("data-id");
    const project = featured.find(p => p.id === projectId);
    if (project) {
      openModal({
        title: project.title,
        img: project.img,
        excerpt: project.excerpt,
        content: project.content
      });
    }
  });
});


  // --- Modal Close ---
  document.getElementById("modalClose")?.addEventListener("click", closeModal);
  document.getElementById("modal")?.addEventListener("click", e => { if(e.target===e.currentTarget) closeModal(); });

  // --- Cart Actions ---
  document.getElementById("cartToggle")?.addEventListener("click", () => {
    const drawer = document.getElementById("cartDrawer");
    const hidden = drawer.getAttribute("aria-hidden") === "true";
    drawer.setAttribute("aria-hidden", !hidden);
    document.getElementById("cartToggle").setAttribute("aria-expanded", hidden);
  });
  document.getElementById("clearCart")?.addEventListener("click", () => { cart=[]; renderCart(); });
  document.getElementById("checkoutBtn")?.addEventListener("click", () => { alert("Checkout demo — integrate your payment provider here."); });

  // --- Contact Form ---
  const contactForm = document.getElementById("contactForm");
  if(contactForm){
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("contactName").value.trim();
      const email = document.getElementById("contactEmail").value.trim();
      const message = document.getElementById("contactMessage").value.trim();
      if(!email || !message){ alert("Please include your email and a message."); return; }
      alert(`Thanks ${name||"friend"} — your message was received.`);
      contactForm.reset();
    });
  }

});

// Simple fade-in animation for sections
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(sec => observer.observe(sec));
});

