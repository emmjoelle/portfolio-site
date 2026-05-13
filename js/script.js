// ===== Data Sets =====

// Featured items
const featured = [
  { id: "f1", title: "Held in Quiet, 2023", type: "portfolio", thumb: "images/boat couple.jpg", img: "images/boat couple.jpg", alt: "Black-and-white photo of a couple leaning together on a ferry.", content: "“Held in Quiet” captures an intimate pause amid motion — two figures leaning into stillness as the ferry drifts forward. The gentle placement of a hand conveys both tenderness and protection, blurring the boundary between affection and contemplation. Shot in black and white, the absence of color heightens the emotional tone, focusing attention on gesture, light, and atmosphere. This photograph reflects themes of connection, transience, and the quiet language of human touch — moments that speak not in words, but in weight and warmth." },
  { id: "f2", title: "Freeloader, 2025", type: "studio", thumb: "images/babynut.jpg", img: "images/babynut.jpg", alt: "Acrylic painting of a cat peeking from beneath tan blankets.", excerpt: "An intimate acrylic study of everyday comfort and quiet companionship.", content: "This intimate acrylic painting captures quiet domestic warmth through texture and subtle color contrast. The piece focuses on the play of texture—the folds of fabric, the gentle highlights of the bedding, and the small but expressive presence of the cat’s eyes. By emphasizing muted browns and creams, the work evokes a sense of comfort and stillness, transforming an everyday moment into a quiet study of warmth and observation. The painting reflects my interest in finding emotional resonance in ordinary spaces, using restrained color and brushwork to create intimacy and familiarity." },
  { id: "f3", title: "Bluebell & Bow Logo", type: "portfolio", thumb: "images/Bluebell&Bow_oval_final.png", img: "images/Bluebell&Bow_oval_final.png", alt: "Pale blue floral emblem with a bouquet tied in a bow.", excerpt: "A boutique brand mark capturing delicate, heirloom-inspired charm.", content: "Bluebell & Bow is a brand identity created to capture the feeling of delicate sophistication and heritage-inspired beauty. The logo features a hand-illustrated bouquet of bluebells, carnations, and wild blooms tied with a bow, framed within an oval reminiscent of antique cameo designs. Rendered in a soft periwinkle blue, the composition balances tradition with modern clarity, giving the brand a graceful, boutique quality. This design emphasizes the brand’s values of artistry, care, and detail — combining romantic illustration with restrained typography for a look that feels both bespoke and enduring." },
  { id: "f4", title: "PBJ Bears", type: "studio", thumb: "images/pbj-bears.jpg", img: "images/pbj-bears.jpg", alt: "Toast topped with peanut butter bear faces and jelly squares.", excerpt: "A playful breakfast experiment turning PB&J into character-based food art.", content: "This piece transforms a simple slice of peanut butter and jelly toast into a whimsical work of edible art. Using peanut butter shaped into small bear faces and jelly as a contrasting background, the design balances composition, color, and texture. Each bear face was sculpted with attention to expression and symmetry, creating a grid-like pattern that merges cuteness with visual structure. The piece reflects an interest in elevating the ordinary—turning a familiar, comforting food into a medium for playful experimentation and aesthetic joy." }
];

// Galleries
const galleries = {
  Ads: [
    { id: "ad1", title: "NDLC Volunteer Tutor Campaign", thumb: "images/DNC.png", img: "images/DNC.png", alt: "Colorful flyer with a tutor helping a student illustration.", excerpt: "Campaign design for the 2025 Rochester Community Choice Awards aimed at recruiting volunteers for tutoring.", content: "This promotional design for Notre Dame Learning Center was adapted for both print (featured in the Democrat & Chronicle newspaper) and digital use across social media and the website. I used bright colors and friendly illustrations to help attract new volunteer tutors. Created in Canva, this was also the first real graphic design piece I created professionally during my internship at NDLC." },
    { id: "ad2", title: "NDLC Golfing for Good 2026", thumb: "images/golf.jpg", img: "images/golf.jpg", alt: "Golf tournament poster with a golfer mid-swing.", excerpt: "Promotional Save the Date flyer for NDLC’s annual charity golf tournament fundraiser.", content: "This design promotes the 2026 “Golfing for Good” tournament, using an action photo of a golfer mid-swing to create a sense of movement and excitement. Designed in Canva, the details are clearly framed within a golf-inspired layout, with a bold, on-theme title to match. The featured photo was taken by me at the 2025 tournament." },
    { id: "ad3", title: "NDLC Golf Tournament Raffle Flyer", thumb: "images/raffle.png", img: "images/raffle.png", alt: "Raffle flyer with illustrated tickets and star motifs.", excerpt: "Fundraising poster designed to spark excitement and awareness for NDLC’s raffle at the 2025 Golfing for Good event.", content: "Designed to capture excitement, this raffle flyer promotes NDLC’s gift basket fundraiser with clear pricing tiers and bold, easy-to-read layout; while the composition balances whimsy with professionalism. Made in Canva." },
    { id: "ad4", title: "NDLC Thanks for Giving Raffle", thumb: "images/thanks.jpg", img: "images/thanks.jpg", alt: "Autumn raffle poster with fall colors and a QR code.", excerpt: "Digital ad promoting ticket sales for a month-long fall raffle.", content: "Created in Canva for social media and website use, this design uses warm reds and golds paired with ticket illustrations to evoke an autumnal feel. It’s festive but still balanced, reinforcing NDLC’s message of thankfulness and impact during the Thanksgiving season." }   
  ],
  Logo: [
    { id: "l1", title: "Black Cat Coffee Logo", thumb: "images/blackcatcoffee.png", img: "images/blackcatcoffee.png", alt: "Logo with a black cat silhouette behind a coffee cup.", excerpt: "A brand identity case study exploring cozy, slightly mysterious coffee shop vibes.", content: "This logo design merges the silhouette of a curled cat with a coffee cup, forming a cohesive black-and-white mark. Its bold, geometric balance and rounded typeface suggest both friendliness and sophistication. The clean vector style ensures versatility across packaging, signage, and merchandise, giving the brand a recognizable and modern identity. It was created using Adobe Illustrator." },
    { id: "l2", title: "Bluebell & Bow Logo", thumb: "images/Bluebell&Bow_oval_final.png", img: "images/Bluebell&Bow_oval_final.png", alt: "Pale blue floral emblem with a bouquet tied in a bow.", excerpt: "An elegant, vintage-inspired floral logo for a small sewing business based in the UK.", content: "This logo was created for an Upwork client in Adobe Illustrator. The intricate design uses soft blue tones and a delicate bouquet illustration to reflect the business’s craftsmanship and sense of grace, aligning with its refined aesthetic. Classic serif typography complements the ornate illustration, giving the logo a timeless, upscale feel. A small sewing needle is subtly included, adding an extra layer of personality and character." },
    { id: "l3", title: "Kora Academy Logo", thumb: "images/Kora logo bg 2.png", img: "images/Kora logo bg 2.png", alt: "Pastel logo with 'Kora Academy' text and a shooting star.", excerpt: "Brand mark for a small K-pop dance studio, designed to feel creative and fun.", content: "I refreshed this existing logo by refining the shapes and overall flow, making it feel smoother and more cohesive. I also introduced a more fun, colorful palette to bring everything together. The soft pastel tones and star imagery evoke imagination and growth, while the sweeping star trail adds a sense of movement and optimism- perfect for the energy of a dance studio. The final design feels especially fitting for youth-focused programs and creative arts. Created in Procreate." },
    { id: "l4", title: "Lazy Acre Alpacas Logo", thumb: "images/lazy acre alpacas circle.png", img: "images/lazy acre alpacas circle.png", alt: "Round logo with alpacas on green hills at sunrise.", excerpt: "Alpaca farm logo crafted to communicate warmth, approachability, and handmade care.", content: "This logo was created as a practice piece, inspired by an existing business whose branding I wanted to revitalize. It uses soft, natural tones to evoke the comfort of country living. Designed in Adobe Illustrator, its minimal composition and harmonious palette make it versatile for farm signage, labels, and handmade product branding." },
    { id: "l5", title: "Garden Club Logo", thumb: "images/gardenclub_logo.png", img: "images/gardenclub_logo.png", alt: "Round logo with flowers and garden tools.", excerpt: "First logo of the Hubbard Springs Garden Club of Chili", content: "Made in Canva, this logo was designed based on the client’s inspiration from the brochure I created for them previously. They wanted a calm, watercolor feel, all contained neatly within a circular shape. Its simplicity keeps it clean and easy to recognize." },
    { id: "l6", title: "CompassCare Summer Logo", thumb: "images/Compasscare_summerlogo.png", img: "images/Compasscare_summerlogo.png", alt: "CompassCare logo with illustration of wilderness scene inside", excerpt: "Summer version of CompassCare logo", content: "This is an alternate illustrated version of the CompassCare logo created in Adobe Illustrator, that the client requested to use on merch for a summer launch. A camping theme was chosen to appeal to women and men, and a tent was designed to replace the CompassCare logo's original needle." },
    { id: "l7", title: "Hudson Valley Logo", thumb: "images/hudson_valley_final.jpg", img: "images/hudson_valley_final.jpg", alt: "Orange logo with a tree ", excerpt: "Logo designed for a hotel", content: "Created in Adobe Illustrator as an assignment for university, this logo is designed to emphasize the company's famous autumnal valley location and sophistication." },
    { id: "l8", title: "Lemon Tree Logo", thumb: "images/lemontree logo 2.png", img: "images/lemontree logo 2.png", alt: "Green logo with a lemon as the o in LEMON", excerpt: "Logo designed for a clean clothing company", content: "Created in Adobe Illustrator, this logo was created as branding practice. The logo is simplistic to capture the minimal materials used, and green to emphasize the naturalness." },
    { id: "l9", title: "Rookie of the Year Graphic", thumb: "images/rookie of the year final.png", img: "images/rookie of the year final.png", alt: "blue and black logo with 'rookie of the year, 24, kit' text", excerpt: "Logo designed for a child's birthday party", content: "Design created for an Upwork client for their child's birthday, from an existing graphic they provided. The whole graphic was recreated, and the name and year were updated while keeping the same style." },
    { id: "l10", title: "CompassCare Walk for Life Logo", thumb: "images/CClogo1_bg.jpg", img: "images/CClogo1_bg.jpg", alt: "logo of one orange foot and one blue foot, with a smaller negative space version in the center", excerpt: "Logo created for CompassCare's biggest annual fundraising event", content: "Created in Procreate, this logo was made to represent CompassCare's Walk for Life, a fundraiser where everyone walks together to raise money to help women with unplanned pregnancies. The big feet represent the walk, while the smaller feet represent the babies they are supporting. The feet are together in such a way to form a shape similar to a heart." }    
  ],
  Print: [
    { id: "p1", title: "NDLC Student Calendar Print Ad", thumb: "images/calendar.png", img: "images/calendar.png", alt: "Calendar flyer featuring photos of NDLC students.", excerpt: "Printed sign for an event, promoting the sale of the calendar fundraiser.", content: "This design was made in Canva and highlights the NDLC 2026 Student Calendar, featuring a picture of the product with lots of emphasis and energy." },
    { id: "p2", title: "Harvest Moon Festival Poster", thumb: "images/harvest.jpg", img: "images/harvest.jpg", alt: "Harvest festival poster with hanging lantern graphics.", excerpt: "Event poster created as a practice study to promote a community celebration of the Harvest Moon Festival.", content: "Created in Adobe Illustrator, this festival poster uses warm tones of orange, gold, and cream to contrast with a deep teal background while evoking an evening vibe. The minimalist lantern graphics and geometric lettering recall mid-century poster design, balancing tradition with modernity." },
    { id: "p3", title: "K-Pop Dance Classes Poster", thumb: "images/koraflyer.png", img: "images/koraflyer.png", alt: "K-pop dance flyer with pastel figures and star accents.", excerpt: "Promotional flyer inviting people to join K-pop dance classes at Kora Academy.", content: "This promotional design merges playful illustration with dreamy gradients to capture the spirit of K-pop culture. The color palette of lavender, blush, and gold conveys energy and positivity while enhancing the youthful aesthetic." },
    { id: "p4", title: "LNY Calendar Poster", thumb: "images/LNYcalendar.png", img: "images/LNYcalendar.png", alt: "Poster with a ink painted horse and 2026 calendar.", excerpt: "Poster created to pass out at the 2026 APAPA Lunar New Year Festival.", content: "This poster was created to promote the 2026 Rochester Lunar New Year Festival while also serving as a full-year calendar. It features a hand-painted horse inspired by traditional East Asian brushwork, paired with a soft, minimal background to keep the focus on the artwork and typography. It uses a clean calendar layout and subtle cultural details to maintain both usability and visual impact." }
    
  ],
  Port: [
    { id: "po1", title: "Man's Best Friend", thumb: "images/daddog.JPG", img: "images/daddog.JPG", alt: "Man sitting on stone steps beside a golden retriever.", excerpt: "A moment of companionship captured in the stillness of autumn woods.", content: "This portrait depicts a man and his golden retriever resting on stone steps, surrounded by autumn leaves at Letchworth State Park. It's a quiet celebration of loyalty, peace, and shared time in nature." },
    { id: "po2", title: "Winter Walk", thumb: "images/franzi.jpg", 
      images: [
        "images/franzi.jpg",
        "images/franzi2.jpg"
      ], 
        alt: "Family walking along a snowy path in winter.", excerpt: "Family portrait capturing a candid moment during a winter outing.", content: "This family portrait was taken for the client's Christmas cards. The natural composition, with parents holding and carrying their children, conveys tenderness, love, and the fleeting beauty of shared moments in everyday life." },
    { id: "po3", title: "Graduating Focus", thumb: "images/saragrad.jpg", img: "images/saragrad.jpg", alt: "Graduate in cap and gown reading a book in a library aisle.", excerpt: "A quiet celebration of accomplishment in the calm of a library.", content: "This portrait was taken as a part of a series of university graduation photos. The composition emphasizes intellect and introspection rather than ceremony, evoking calm pride. It's a portrait not just of graduation, but of continued curiosity- a reminder that learning never truly ends." }
   ],
  Street: [
    { id: "st1", title: "Crossing at Dusk", thumb: "images/bike.jpg", img: "images/bike.jpg", alt: "Person standing with a bicycle at dusk under streetlights.", excerpt: "Street photograph taken in South Korea of a cyclist at a busy intersection.", content: "This moody urban photograph explores the contrast between the woman’s stillness and the passing traffic, emphasizing solitude within a crowded city rhythm. The greenish tones of the streetlights mix with warm reflections from passing cars. The subdued palette and exposure give the image a tired and meditative feel." },
    { id: "st2", title: "Wall Walk", thumb: "images/iconicwalk.JPG", img: "images/iconicwalk.JPG", alt: "Woman walking along a sunlit brick wall street.", excerpt: "Urban photograph taken of a stranger against palace walls in South Korea.", content: "This photo captures a person walking through a traditional district in late-afternoon light. She anchors the image, giving scale and movement to an otherwise still scene. It’s an interplay between tradition and modernity- becoming a visual dialogue about continuity within urban transformation." },
    { id: "st3", title: "Blossoming Café", thumb: "images/storefront.JPG", img: "images/storefront.JPG", alt: "Café entrance framed by blooming cherry blossoms.", excerpt: "Spring photograph turning a simple storefront into a soft and dreamlike moment.", content: "This photograph celebrates the seasonal beauty of South Korea even in an urban setting. The cafe’s facade is partially hidden behind a cascade of cherry blossoms, the sunlight filtering through the petals casting a delicate pattern of shadows. The image combines architectural geometry with organic softness. It evokes a feeling of nostalgia, my memory of Hongdae suspended in time." }
  ],
  Nature: [
    { id: "n1", title: "Bottom of The Canyon", thumb: "images/canyon.jpg", img: "images/canyon.jpg", alt: "Sunlit sandstone canyon with smooth red and orange curves.", excerpt: "Landscape photograph taken of the light streaming in from the top of Antelope Canyon in Lechee, Arizona.", content: "This photograph captures the flowing rocking formations of the Antelope Canyons, where erosion has carved organic curves into the walls. The warm red and orange hues, softened by a sliver of sunlight from above, emphasizes the canyon’s texture and depth- creating an almost abstract rhythm of color and shape."},
    { id: "n2", title: "Forest Camouflage", thumb: "images/leaffrog.JPG", img: "images/leaffrog.JPG", alt: "Small toad camouflaged among brown oak leaves.", excerpt: "Nature photograph highlighting the challenge of spotting small creatures in their natural homes.", content: "This photograph highlights the quiet art of camouflage in nature. A small toad, nearly indistinguishable from the oak leaves surrounding it, demonstrates how texture and tone can serve as protection. The focus draws the eye subtly toward the creature, rewarding careful observation with the discovery of life hidden in stillness. It’s a lesson to the viewer and the photographer about slowing down and observing- the art of noticing."},
    { id: "n3", title: "Curious Gaze", thumb: "images/monkey.JPG", img: "images/monkey.JPG", alt: "Close-up of a squirrel monkey looking toward the camera.", excerpt: "Animal portrait emphasizing expression, eye contact, and quiet curiosity.", content: "This portrait captures the expressive gaze of a squirrel monkey, its alert eyes reflecting light and curiosity. The shallow focus isolates the subject against a blurred natural backdrop, emphasizing emotion. The photograph balances technical precision with emotional resonance." },
    { id: "n4", title: "Path Through Pines", thumb: "images/path.jpg", img: "images/path.jpg", alt: "Misty forest path winding between tall trees.", excerpt: "Atmospheric woodland scene taken in the midst of forests of bamboo.", content: "This image explores solitude in nature. It’s eerie but also sparks curiosity- it invites the viewer to imagine themselves walking into the fog. The forest path curves gently into the distance, leading the viewer through soft mist and filtered light. The tall, dark trunks frame a sense of depth and mystery, while the cool greens evoke calm. It’s a visual metaphor for discovery and introspection."}
  ],
  Event: [
    { id: "e1", title: "change me", thumb: "images/canyon.jpg", img: "images/canyon.jpg", alt: "Sunlit sandstone canyon with smooth red and orange curves.", excerpt: "Landscape photograph taken of the light streaming in from the top of Antelope Canyon in Lechee, Arizona.", content: "This photograph captures the flowing rocking formations of the Antelope Canyons, where erosion has carved organic curves into the walls. The warm red and orange hues, softened by a sliver of sunlight from above, emphasizes the canyon’s texture and depth- creating an almost abstract rhythm of color and shape."},
    { id: "e2", title: "change me", thumb: "images/leaffrog.JPG", img: "images/leaffrog.JPG", alt: "Small toad camouflaged among brown oak leaves.", excerpt: "Nature photograph highlighting the challenge of spotting small creatures in their natural homes.", content: "This photograph highlights the quiet art of camouflage in nature. A small toad, nearly indistinguishable from the oak leaves surrounding it, demonstrates how texture and tone can serve as protection. The focus draws the eye subtly toward the creature, rewarding careful observation with the discovery of life hidden in stillness. It’s a lesson to the viewer and the photographer about slowing down and observing- the art of noticing."},
    { id: "e3", title: "change", thumb: "images/monkey.JPG", img: "images/monkey.JPG", alt: "Close-up of a squirrel monkey looking toward the camera.", excerpt: "Animal portrait emphasizing expression, eye contact, and quiet curiosity.", content: "This portrait captures the expressive gaze of a squirrel monkey, its alert eyes reflecting light and curiosity. The shallow focus isolates the subject against a blurred natural backdrop, emphasizing emotion. The photograph balances technical precision with emotional resonance." },
    { id: "e4", title: "change", thumb: "images/path.jpg", img: "images/path.jpg", alt: "Misty forest path winding between tall trees.", excerpt: "Atmospheric woodland scene taken in the midst of forests of bamboo.", content: "This image explores solitude in nature. It’s eerie but also sparks curiosity- it invites the viewer to imagine themselves walking into the fog. The forest path curves gently into the distance, leading the viewer through soft mist and filtered light. The tall, dark trunks frame a sense of depth and mystery, while the cool greens evoke calm. It’s a visual metaphor for discovery and introspection."}
  ],
  Digital: [
    { id: "d1", title: "Cat Nap", thumb: "images/sleep.jpg", img: "images/sleep.jpg", alt: "Purple illustration of a girl sleeping with a cat on her pillow.", excerpt: "Digital illustration depicting a cozy night and the comfort of pets.", content: "This digital piece, illustrated in Procreate, depicts a girl sleeping with her cat curled above her on the pillow, drawn in a unified violet palette. The limited color scheme and simplified shapes create a gentle, dreamlike quality that emphasizes the mood. The composition balances symmetry and softness." },
    { id: "d2", title: "Love You ForNEVER", thumb: "images/loveyoufornever.jpg", img: "images/loveyoufornever.jpg", alt: "Digital illustration of scissors cutting a love letter.", excerpt: "Conceptual piece about breakups, using a cut-up love letter as a visual metaphor.", content: "This piece, created in Procreate, uses digital painting to transform everyday objects into a visual metaphor for emotional conflict. The phrase “Love You Forever” becomes fragmented as “Never” is cut apart, representing the tension between sentiment and separation. The work explores how simple imagery and subdued color can communicate emotion with quiet intensity." },
    { id: "d3", title: "Orange Grove", thumb: "images/orangegrove.jpg", img: "images/orangegrove.jpg", alt: "Digital painting of an orange grove under a bright sky.", excerpt: "Digital landscape painting focused on light, color harmony, and atmosphere.", content: "This digital painting depicts an orange grove bathed in sunlight, rendered in loose, impressionistic strokes in Procreate. The use of warm greens, golds, and sky blues creates a luminous, airy composition that feels both expansive and serene. Layered digital brushwork mimics the softness of oil paint." },
    { id: "d4", title: "US", thumb: "images/us-sketch.jpg", img: "images/us-sketch.jpg", alt: "Simple cartoon of two people in hoodies with two cats at their feet.", excerpt: "Casual digital sketch capturing my relationship with my boyfriend!", content: "This digital drawing portrays two stylized figures and their cats (us and our children!), rendered in a clean, cartoon-like line style in Procreate. Minimal shading and expressive linework give the composition a casual, sketchbook feel, while the thought bubble adds a playful, narrative touch." }
  ],
   Acrylic: [
    { id: "a1", title: "Trail Ride", thumb: "images/horse-painting.jpg", img: "images/horse-painting.jpg", alt: "Acrylic painting of two riders holding hands on horseback.", excerpt: "Acrylic painting of two horses and their riders on a romantic walk.", content: "Painted with acrylic on canvas, the piece uses saturated greens and rich browns to emphasize sunlight and natural energy. Textural brushwork highlights the horses’ musculature and the tactile feel of their coats. The work combines observational realism with emotional storytelling to portray harmony between people, animals, and their shared environment." },
    { id: "a2", title: "Freeloader, 2025", thumb: "images/babynut.jpg", img: "images/babynut.jpg", alt: "Acrylic painting of a cat peeking from beneath tan blankets.", excerpt: "Small 6x6 painting of my kitten tucked in, napping in my bed.", content: "This intimate acrylic painting captures quiet domestic warmth through texture and subtle color contrast. The piece focuses on the play of texture- the folds of fabric and the small but expressive presence of the cat’s eyes. The painting reflects my interest in finding emotional resonance in ordinary spaces and everyday moments. The title Freeloader comes from the idea that he lives in my space without paying rent." }
   ],
  Trad: [
    { id: "t1", title: "Sister Portrait", thumb: "images/sketch-sara.JPG", img: "images/sketch-sara.JPG", alt: "Pencil sketch of a woman in a hat surrounded by flowers and butterflies.", excerpt: "Sketchbook spread of my sister, combined with other little nature motifs.", content: "This graphite sketch captures a loose portrait of my sister. Subtle shading and confident pencil strokes convey form while preserving the immediacy of a sketchbook drawing- using graphite as a medium to capture both likeness and atmosphere in an intuitive, personal way." },
    { id: "t2", title: "Man in Water", thumb: "images/sketch-jinyoung.jpg", img: "images/sketch-jinyoung.jpg", alt: "Graphite drawing of a young man with wet hair standing in shallow water.", excerpt: "Graphite portrait study exploring gesture, with an emphasis on how water interacts with the hair and clothing.", content: "This graphite drawing captures a man submerged in water, built up through soft shading and fine linework. I focused on pushing realism while still keeping it within my style, and using that balance to carry the mood. The wet hair, gentle ripples, and downward gaze create a quiet, introspective feeling. It’s a more minimal piece, where I relied on light and texture to suggest emotion- something calm, still, and a little vulnerable." },
    { id: "t3", title: "Renaissance Study", thumb: "images/raphael.jpg", img: "images/raphael.jpg", alt: "Graphite studies of classical heads and hands on a sketchbook page.", excerpt: "Classical study in graphite created to practice proportion  and Renaissance-style shading.", content: "This graphite study reinterprets figures from one of Raphael’s preparatory sketches for Transfiguration. Through the process, I explored traditional techniques- hatching, cross-contour shading, and edge variation- to better understand how value and line work together to create presence and emotion. The piece reflects my interest in classical study as a foundation for more expressive, contemporary drawing." },
    { id: "t4", title: "Noah Kahan", thumb: "images/sketch-noahkahan.JPG", img: "images/sketch-noahkahan.JPG", alt: "Profile graphite portrait of a bearded man with long hair and lyrics around him.", excerpt: "Side-profile portrait sketch of Noah Kahan, paired with handwritten favorite lyrics.", content: "This graphite drawing captures a side-profile portrait of Noah Kahan, built with controlled linework and subtle tonal shifts. The phrase “one day I’ll be gone” curves gently through the composition, adding a quiet emotional layer. I focused on balancing observational accuracy with atmosphere, using minimal marks and soft value changes to keep the piece feeling intimate and understated." }
  ],
  Watercolor: [
    { id: "wa1", title: "Bird Study", thumb: "images/watercolor-birds.jpg", img: "images/watercolor-birds.jpg", alt: "Watercolor studies of four labeled birds on branches.", excerpt: "Watercolor page created to practice bird anatomy, markings, and color variation.", content: "This watercolor piece depicts four species of North American birds- the Mountain Chickadee, Baltimore Oriole, Pyrrhuloxia, and Blue Jay- each rendered with attention to texture, color, and posture. The work focuses on observing and translating the delicate patterns of feathers, light, and anatomy through transparent layers of pigment using watercolor paint. The piece reflects my interest in both scientific observation and artistic interpretation. The birds were watercolored on individual pages and then digitally rendered together afterward." },
    { id: "wa2", title: "Cozy Coffee Hamster", thumb: "images/watercolor-hamster.jpg", img: "images/watercolor-hamster.jpg", alt: "Watercolor hamster in a striped sweater holding a steaming mug.", excerpt: "Small character illustration with a cozy winter vibe.", content: "This watercolor illustration depicts a cozy winter scene featuring a hamster wrapped in a striped sweater, scarf, and mittens, clutching a warm drink. The soft washes of pink, gray, and blue create a calm, comforting mood. It invites the viewer to connect with the warmth and quietness of the moment. This work reflects my interest in character-based illustration and emotional storytelling through minimal composition, soft palettes, and tactile brushwork." },
    { id: "wa3", title: "Pajama Party", thumb: "images/watercolor-sleepover.jpg", img: "images/watercolor-sleepover.jpg", alt: "Watercolor cat and dog in oversized pajamas holding hands.", excerpt: "Whimsical mini watercolor painting about friendship and matching pajamas.", content: "This small watercolor painting depicts a cat and dog dressed in soft pastel pajamas, standing hand in hand. The simplified forms and soft edges create a nostalgic, storybook-like feeling, while the warm palette emphasizes emotional warmth and companionship." }
  ],              
  Wearable: [
    { id: "w1", title: "Cat Applique Sweater", thumb: "images/cat_shirt.JPG", img: "images/cat_shirt.JPG", alt: "Black sweatshirt with an reddish appliqué of a calico cat.", excerpt: "Upcycled sweatshirt project combining thrifted fabrics and slow, hand-stitched applique.", content: "This sweatshirt features a hand-stitched applique created from thrifted fabric, giving new life to secondhand materials through slow, intentional craftsmanship. Each piece of fabric was carefully selected for its texture and color, then cut and sewn by hand using a needle and thread to form the detailed cat design following the patterns of my boyfriend’s cat’s fur. The completed patch was securely sewn onto a Gildan sweatshirt. The piece highlights sustainability, individuality, and the tactile charm of hand-sewn work- turning an ordinary garment into a one-of-a-kind piece of wearable art." },
    { id: "w2", title: "Dragonfly Hoodie", thumb: "images/dragonfly_hoodie.JPG", img: "images/dragonfly_hoodie.JPG", alt: "Navy hoodie with a large bleach-painted dragonfly on the back.", excerpt: "Wearable art piece bleach painted onto the back of a zip-up hoodie.", content: "This hoodie features a hand-painted dragonfly design created using a bleach painting technique on fabric. The design was applied with precision using diluted bleach and fine brushes to capture the intricate details of the wings and body. The result reveals warm pink and tan tones that contrast against the dark fabric, emphasizing the organic beauty and symmetry of the dragonfly form." },
    { id: "w3", title: "Orchid Embroidered Beanie", thumb: "images/orchid_beanie.jpeg", img: "images/orchid_beanie.jpeg", alt: "Lilac beanie embroidered with purple flowers around the logo patch.", excerpt: "Hand-embroidered beanie project softening a workwear brand with floral motifs.", content: "This piece- along with the rest of my embroidered beanies- reimagines a classic Carhartt beanie through hand embroidery. Using needle and floss, I stitched small purple orchid flowers around the logo, creating a subtle but intentional contrast between the brand’s structured, industrial feel and the softness of the organic imagery." },
    { id: "w4", title: "Embroidered Nike Socks", thumb: "images/embroidery-socks.jpeg", img: "images/embroidery-socks.jpeg", alt: "Three pairs of Nike socks embroidered with moons, clouds, and vines.", excerpt: "Set of custom embroidered socks turning everyday basics into tiny artworks.", content: "This project reimagines simple Nike socks through the addition of hand-embroidered details inspired by nature. Each pair was colored with fabric dye and then customized with a needle and embroidery floss- stars and moon on navy, clouds and sky on blue, and greenery on white. Together, the series explores the balance between branding and individuality, turning mass-produced items into small expressions of creativity, care, and visual storytelling." }
  ],
  Pottery: [
    { id: "c1", title: "Hopping Bunnies Dish", thumb: "images/pottery-bunnies.jpg", img: "images/pottery-bunnies.jpg", alt: "Cream ceramic bowl with blue line-drawn bunnies inside.", excerpt: "Wheel-thrown bowl with a playful blue bunny illustration.", content: "This ceramic bowl was hand-thrown on the wheel and finished with a minimalist line illustration painted in cobalt blue underglaze, finished with a clear glaze. The design features a pair of stylized bunnies that curve with the form of the bowl, creating a sense of motion and continuity within the circular shape. The simplicity of the linework contrasts with the natural texture of the clay, highlighting both the handmade process and the organic imperfections of the material." },
    { id: "c2", title: "Floral Car Coasters", thumb: "images/pottery-coasters.jpg", img: "images/pottery-coasters.jpg", alt: "Green ceramic coasters painted with white daisies.", excerpt: "Functional ceramic coasters designed to bring a small touch of florals into a car interior.", content: "This pair of ceramic car coasters was handbuilt and then hand-painted with a botanical design using underglaze and fine brushes. It was left ungazed and unsealed in order to be able to soak up sweat from cups. The paint was applied with attention to flow and repetition, allowing the organic forms to complement the circular shape of the pieces. These coasters transform a small utilitarian object into a piece of handcrafted decoration." },
    { id: "c3", title: "Star Planter & Tray", thumb: "images/pottery-planter.jpg", img: "images/pottery-planter.jpg", alt: "Green ceramic planter and tray with bold yellow stars.", excerpt: "Playful planter set using bold stars to make a plant pot feel special.", content: "This ceramic planter and matching tray were hand-thrown on the wheel and decorated using Stroke & Coat Wonderglazes. The pattern wraps around the form, emphasizing movement and repetition while maintaining a balance between boldness and simplicity. Designed to be both functional and decorative, this piece explores the intersection of utility and creativity." },
    { id: "c4", title: "Cat Ash Tray", thumb: "images/pottery-match.jpg", img: "images/pottery-match.jpg", alt: "Small cream ceramic dish with a tiny cat perched on the rim.", excerpt: "Small ceramic ash tray (or match holder) with a small cat perched on the rim.", content: "The form was shaped and refined by hand, and then painted with Stroke & Coat Wonderglaze. The figure’s expressive posture adds charm and character. This project reflects an interest in merging form and function, where everyday items are reimagined through a personal, handcrafted lens that emphasizes individuality." },
    { id: "c5", title: "Cloud Travel Mug", thumb: "images/pottery-travelmug.jpg", img: "images/pottery-travelmug.jpg", alt: "Cream ceramic travel mug with raised cloud shapes and a lid.", excerpt: "Hand-built cloud-themed ceramic travel mug.", content: "This travel mug was hand-built using slab construction and designed with an integrated lid for daily use. The surface was decorated using a wax-resist glazing technique, the clouds revealed through the resist process, creating a visual contrast between the white glaze and the natural tone of the clay, as well as a contrast from the rougher texture of the clay body and the smoother, polished texture of the glaze. The piece balances simplicity and whimsy, with gentle, rounded forms that evoke calm and lightness." },
    { id: "c6", title: "Mini Moon Jar", thumb: "images/pottery-moonjar.jpg", img: "images/pottery-moonjar.jpg", alt: "White moon jar with blue and yellow wavy patterns around the surface.", excerpt: "Wheel-thrown moon jar exploring loose, gestural underglaze marks on a classic form.", content: "This moon jar was thrown on the pottery wheel in two pieces and then decorated using blue and yellow underglazes applied in freeform, gestural strokes. The fluid pattern wraps around the round body of the vessel, emphasizing its soft curves and balanced proportions. Inspired by traditional moon jar forms, it combines structured craftsmanship with intuitive mark-making to create a vessel that feels both timeless and expressive." }
  ],
  Misc: [
    { id: "m1", title: "Apple & Worm Keychain", thumb: "images/keychain.jpg", img: "images/keychain.jpg", alt: "Felt apple keychain with a stitched face and tiny worm charm.", excerpt: "Hand-sewn felt apple keychain with a Shrinky-dink worm.", content: "This keychain was hand-sewn from layers of felt using simple embroidery and stitching techniques. The design features a stylized apple with a small face, a contrasting button accent, and a pink worm charm that adds a touch of personality and storytelling. Soft color contrasts and visible stitching emphasize the handmade quality of the piece. This work explores character design through textile craft." },
    { id: "m2", title: "Tea Time", thumb: "images/mousetree-paperart.jpg", img: "images/mousetree-paperart.jpg", alt: "Paper collage of a mouse in a green coat sitting on a branch with a striped mug.", excerpt: "Layered paper collage art telling a story about a mouse drinking tea in a tree.", content: "This piece was inspired by another artist’s illustration I saw on Instagram, created entirely from hand-cut colored paper. Assembled into a layered collage, it illustrates a whimsical scene of a mouse perched on a branch, enjoying a cup of tea. Each shape was individually cut and glued to create dimension and personality within the small composition." },
    { id: "m3", title: "PBJ Bears", thumb: "images/pbj-bears.jpg", img: "images/pbj-bears.jpg", alt: "Toast topped with peanut butter bear faces and jelly squares.", excerpt: "Food art piece created for fun, treating my toast as a canvas for repeated bear faces.", content: "This piece transforms a simple slice of peanut butter and jelly toast into a whimsical work of edible art. Using peanut butter and sesame seeds to form small bear faces and jelly as a contrasting background, the design balances composition, color, and texture. The grid-like pattern merges cuteness with visual structure and turns a familiar, comforting food into a medium for playful experimentation and aesthetic joy." },
    { id: "m4", title: "Grocery Cat", thumb: "images/catbag-paperart.jpg", img: "images/catbag-paperart.jpg", alt: "Paper collage of a black cat peeking from a bag of bread and flowers.", excerpt: "Layered paper collage illustration of a mischievous cat in a bag of groceries.", content: "This piece was inspired by another artist’s illustration I saw on Instagram, created entirely from hand-cut colored paper. The design emphasizes shape, color, and composition through precise cutting and assembly, creating depth without the use of linework. Each element was arranged to balance warmth and contrast, with soft pastels offset by rich orange and navy tones." }
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

function openModal(item) {
  const modal = document.getElementById("modal");
  const gallery = document.getElementById("modalGallery");
  const title = document.getElementById("modalTitle");
  const text = document.getElementById("modalText");

  // Open modal
  modal.setAttribute("aria-hidden", "false");

  // Set text content safely
  title.textContent = item.title || item.name || "";
  text.textContent = item.excerpt || item.desc || item.content || "";

  // Clear previous images
  gallery.innerHTML = "";

  // Handle multiple images (collections)
  if (item.images && item.images.length > 0) {
    item.images.forEach(src => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = item.alt || "";
      gallery.appendChild(img);
    });
  } 
  // Fallback for single image
  else if (item.img) {
    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.alt || "";
    gallery.appendChild(img);
  }
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
  if (featuredGrid) {
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
    if (!container) return;

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

    if (btn) {
      const id = btn.getAttribute("data-id");
      item = featured.find(x => x.id === id) || portfolio.find(x => x.id === id) || studio.find(x => x.id === id) || shopItems.find(x => x.id === id);
    } else if (galleryItem) {
      const galleryKey = galleryItem.getAttribute("data-gallery");
      const id = galleryItem.getAttribute("data-id");
      item = galleries[galleryKey]?.find(x => x.id === id);
      if (item) item.img = item.img || item.thumb;
    } else if (projectCard) {
      const id = projectCard.getAttribute("data-id");
      item = portfolio.find(x => x.id === id) || studio.find(x => x.id === id);
    }

    if (item) openModal(item);
  });

// --- Featured Modal Popup (uses existing modal) ---
const modal = document.getElementById("featuredModal");

if (modal) {
  // Handle image clicks in the Featured section
  document.querySelectorAll(".card.featured img").forEach(img => {
    img.addEventListener("click", e => {
      e.stopPropagation();
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

  // Close modal when clicking the X
  const closeBtn = document.getElementById("modalClose");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    });
  }

  // Close modal when clicking outside modal content
  window.addEventListener("click", event => {
    const modalContent = modal.querySelector(".modal-content");
    if (event.target === modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto"; // re-enable scrolling
    }
  });
}

  // --- Cart Actions ---
  document.getElementById("cartToggle")?.addEventListener("click", () => {
    const drawer = document.getElementById("cartDrawer");
    const hidden = drawer.getAttribute("aria-hidden") === "true";
    drawer.setAttribute("aria-hidden", !hidden);
    document.getElementById("cartToggle").setAttribute("aria-expanded", hidden);
  });

  document.getElementById("clearCart")?.addEventListener("click", () => {
    cart = [];
    renderCart();
  });

  document.getElementById("checkoutBtn")?.addEventListener("click", () => {
    alert("Checkout demo — integrate your payment provider here.");
  });

  // --- Contact Form ---
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("contactName").value.trim();
      const email = document.getElementById("contactEmail").value.trim();
      const message = document.getElementById("contactMessage").value.trim();
      if (!email || !message) {
        alert("Please include your email and a message.");
        return;
      }
      alert(`Thanks ${name || "friend"} — your message was received.`);
      contactForm.reset();
    });
  }

  // --- Fade-in Animation ---
  const sections = document.querySelectorAll("section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(sec => observer.observe(sec));

// --- Dropdown Accessibility Script (button version) ---
const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

dropdownToggles.forEach(btn => {
  btn.addEventListener('click', e => {
    const parent = btn.closest('.dropdown');
    const isActive = parent.classList.toggle('active');
    btn.setAttribute('aria-expanded', isActive);

    // Close other dropdowns
    document.querySelectorAll('.dropdown').forEach(other => {
      if (other !== parent) {
        other.classList.remove('active');
        other.querySelector('.dropdown-toggle').setAttribute('aria-expanded', false);
      }
    });
  });

  // Keyboard accessibility (Enter/Space)
  btn.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      btn.click();
    }
  });
});

});

// ==============================
// UNIVERSAL ACCESSIBLE MODAL (Featured + Sketchbook)
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modalContent");
  const modalClose = document.getElementById("modalClose");
  let lastFocusedElement = null;

  // Make all clickable gallery and featured items keyboard-focusable
  const triggers = document.querySelectorAll(".featured-trigger, .gallery-item");
  triggers.forEach(trigger => {
    trigger.setAttribute("tabindex", "0");
    trigger.setAttribute("role", "button");
  });

  // --- OPEN MODAL ---
  function openModal(trigger) {
    lastFocusedElement = document.activeElement;

    const galleryKey = trigger.getAttribute("data-gallery");
    const id = trigger.getAttribute("data-id");
    let item = null;

    // ✅ Find item (gallery or featured)
    if (galleryKey && galleries[galleryKey]) {
      item = galleries[galleryKey].find(x => x.id === id);
    } else if (trigger.classList.contains("featured-trigger")) {
      item = {
        title: trigger.dataset.title,
        excerpt: trigger.dataset.excerpt,
        img: trigger.dataset.img,
        alt: trigger.dataset.alt,
        content: trigger.dataset.content
      };
    }

    if (!item) return;

    // ✅ FIX: Prioritize item.alt (from JS dataset), not the HTML fallback
    const alt = (item && item.alt) || trigger.dataset.alt || item.title || "Artwork image";

    // Build modal content (full details)
    modalContent.innerHTML = `
      <div class="modal-body">
        ${item.img ? `<img src="${item.img}" alt="${alt}" style="max-width:100%; height:auto;">` : ""}
        ${item.title ? `<h2 id="modalTitle">${item.title}</h2>` : ""}
        ${item.excerpt ? `<p class="excerpt">${item.excerpt}</p>` : ""}
        ${item.content ? `<p class="description">${item.content}</p>` : ""}
      </div>
    `;

    // Show modal
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    modal.scrollTop = 0;
    modalClose.focus();

    trapFocus(modal);
  }

  // --- CLOSE MODAL ---
  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    modalContent.innerHTML = "";
    document.body.style.overflow = "auto";
    if (lastFocusedElement) lastFocusedElement.focus();
    document.removeEventListener("keydown", handleTabKey);
  }

  // --- FOCUS TRAP ---
  function trapFocus(container) {
    const focusableSelectors =
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';
    const focusableEls = container.querySelectorAll(focusableSelectors);
    const firstEl = focusableEls[0];
    const lastEl = focusableEls[focusableEls.length - 1];

    document.addEventListener("keydown", handleTabKey);

    function handleTabKey(e) {
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    }

    // Make available to closeModal
    window.handleTabKey = handleTabKey;
  }

  // --- EVENT LISTENERS ---
  // Click / Enter / Space open modal
  document.body.addEventListener("click", e => {
    const trigger = e.target.closest(".featured-trigger, .gallery-item");
    if (trigger) openModal(trigger);
  });

  document.body.addEventListener("keydown", e => {
    if ((e.key === "Enter" || e.key === " ") && e.target.closest(".featured-trigger, .gallery-item")) {
      e.preventDefault();
      openModal(e.target.closest(".featured-trigger, .gallery-item"));
    }
  });

  // Close modal with X, Escape, or outside click
  modalClose.addEventListener("click", closeModal);
  modal.addEventListener("click", e => {
    if (!e.target.closest(".modal-content") && e.target !== modalClose) closeModal();
  });
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
  });
});

window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    var body = document.body;

    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
        body.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
        body.classList.remove("scrolled");
    }
});
