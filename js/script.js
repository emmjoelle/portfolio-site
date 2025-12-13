// ===== Data Sets =====

// Featured items
const featured = [
  { id: "f1", title: "Held in Quiet, 2023", type: "portfolio", thumb: "images/boat couple.jpg", img: "images/boat couple.jpg", alt: "Black-and-white photo of a couple leaning together on a ferry.", content: "“Held in Quiet” captures an intimate pause amid motion — two figures leaning into stillness as the ferry drifts forward. The gentle placement of a hand conveys both tenderness and protection, blurring the boundary between affection and contemplation. Shot in black and white, the absence of color heightens the emotional tone, focusing attention on gesture, light, and atmosphere. This photograph reflects themes of connection, transience, and the quiet language of human touch — moments that speak not in words, but in weight and warmth." },
  { id: "f2", title: "Freeloader, 2025", type: "studio", thumb: "images/babynut.jpg", img: "images/babynut.jpg", alt: "Acrylic painting of a cat peeking from beneath tan blankets.", excerpt: "A small acrylic painting portrays a cat peeking from beneath rumpled tan blankets.", content: "This intimate acrylic painting captures quiet domestic warmth through texture and subtle color contrast. The piece focuses on the play of texture—the folds of fabric, the gentle highlights of the bedding, and the small but expressive presence of the cat’s eyes. By emphasizing muted browns and creams, the work evokes a sense of comfort and stillness, transforming an everyday moment into a quiet study of warmth and observation. The painting reflects my interest in finding emotional resonance in ordinary spaces, using restrained color and brushwork to create intimacy and familiarity." },
  { id: "f3", title: "Bluebell & Bow Logo", type: "portfolio", thumb: "images/Bluebell&Bow_oval_final.png", img: "images/Bluebell&Bow_oval_final.png", alt: "Pale blue floral emblem with a bouquet tied in a bow.", excerpt: "A refined floral logo for a small sewing business.", content: "Bluebell & Bow is a brand identity created to capture the feeling of delicate sophistication and heritage-inspired beauty. The logo features a hand-illustrated bouquet of bluebells, carnations, and wild blooms tied with a bow, framed within an oval reminiscent of antique cameo designs. Rendered in a soft periwinkle blue, the composition balances tradition with modern clarity, giving the brand a graceful, boutique quality. This design emphasizes the brand’s values of artistry, care, and detail — combining romantic illustration with restrained typography for a look that feels both bespoke and enduring." },
  { id: "f4", title: "PBJ Bears", type: "studio", thumb: "images/pbj-bears.jpg", img: "images/pbj-bears.jpg", alt: "Toast topped with peanut butter bear faces and jelly squares.", excerpt: "A playful food art piece featuring peanut butter bears and jelly squares arranged on toast.", content: "This piece transforms a simple slice of peanut butter and jelly toast into a whimsical work of edible art. Using peanut butter shaped into small bear faces and jelly as a contrasting background, the design balances composition, color, and texture. Each bear face was sculpted with attention to expression and symmetry, creating a grid-like pattern that merges cuteness with visual structure. The piece reflects an interest in elevating the ordinary—turning a familiar, comforting food into a medium for playful experimentation and aesthetic joy." }
];

// Galleries
const galleries = {
  Ads: [
    { id: "ad1", title: "Volunteer Tutor Campaign", thumb: "images/DNC.png", img: "images/DNC.png", alt: "Flyer for Notre Dame Learning Center encouraging volunteer tutors, with illustration of a tutor helping a child and contact info.", excerpt: "A cheerful campaign inviting volunteers to become tutors and support local students.", content: "This promotional flyer for Notre Dame Learning Center uses bright colors and friendly illustration to attract new volunteer tutors. The bold headline, 'Make a Lasting Impact on a Child’s Life,' highlights the importance of mentorship, while playful typography and a warm palette create a welcoming tone. The design combines clarity, emotion, and accessibility—ideal for community outreach and digital promotion." },
    { id: "ad2", title: "Golfing for Good 2026", thumb: "images/golf.png", img: "images/golf.png", alt: "Poster promoting the 2026 Golfing for Good tournament with golfer in mid-swing and event details at Webster Golf Club.", excerpt: "A bold and energetic event poster for NDLC’s annual charity golf tournament.", content: "This dynamic design announces the 2026 'Golfing for Good' tournament, emphasizing movement and excitement through an action photo of a golfer mid-swing. The typography layers vibrant greens and yellows with high contrast to draw attention to the event date and location. Details like mulligans, foursomes, and contact info are clearly framed, merging professionalism with visual enthusiasm to inspire participation and support NDLC’s mission." },
    { id: "ad3", title: "Enter to Win Raffle", thumb: "images/raffle.png", img: "images/raffle.png", alt: "Colorful raffle flyer for Notre Dame Learning Center with tickets, stars, and event details for themed gift baskets.", excerpt: "A fun, festive flyer inviting community members to enter a raffle supporting education.", content: "Designed to capture excitement and generosity, this raffle poster features playful hand-lettered typography and a bright star-filled background. It promotes NDLC’s gift basket fundraiser with clear pricing tiers and bold, easy-to-read layout. The color palette of reds, yellows, and blues evokes joy and community engagement, while the composition balances whimsy with professionalism—encouraging viewer participation." },
    { id: "ad4", title: "Thanks for Giving Raffle", thumb: "images/thanks.png", img: "images/thanks.png", alt: "Thanksgiving-themed raffle poster with fall colors, tickets, and QR code for online purchase.", excerpt: "A warm, autumn-themed fundraiser poster celebrating community generosity.", content: "This seasonal poster blends gratitude and excitement for NDLC’s November raffle. Warm oranges and golds paired with ticket illustrations evoke fall energy, while clear hierarchy and a centered QR code enhance accessibility. The design feels festive but balanced, reinforcing NDLC’s message of thankfulness and impact during the holiday season." }
  ],
  Logo: [
    { id: "l1", title: "Black Cat Coffee Logo", thumb: "images/blackcatcoffee.png", img: "images/blackcatcoffee.png", alt: "Minimalist black and white logo showing a cat silhouette behind a coffee cup with the text 'black cat coffee.'", excerpt: "A sleek, high-contrast logo combining simplicity with playful character.", content: "This logo design merges the silhouette of a curled cat with a coffee cup, forming a cohesive black-and-white mark. Its bold, geometric balance and rounded typeface suggest both friendliness and sophistication. The clean vector style ensures versatility across packaging, signage, and merchandise, giving the brand a recognizable and modern identity." },
    { id: "l2", title: "Bluebell & Bow Logo", thumb: "images/Bluebell&Bow_oval_final.png", img: "images/Bluebell&Bow_oval_final.png", alt: "Elegant floral emblem logo in blue featuring a bouquet tied with a ribbon inside an oval frame, labeled 'Bluebell & Bow.'", excerpt: "An elegant, vintage-inspired floral logo symbolizing charm and refinement.", content: "This intricate design uses soft blue tones and a delicate bouquet illustration framed by an oval border. The floral motif—complete with bluebells and ribbons—evokes traditional craftsmanship and grace, aligning with the brand’s refined aesthetic. Classic serif typography complements the ornate illustration, creating a logo that feels timeless and upscale." },
    { id: "l3", title: "Kora Academy Logo", thumb: "images/Kora logo bg 2.png", img: "images/Kora logo bg 2.png", alt: "Colorful logo with stylized text 'Kora Academy' surrounded by pastel stars and a shooting star trail.", excerpt: "A bright, whimsical logo full of motion and positivity for a creative academy.", content: "The Kora Academy logo blends playful script with soft pastel hues and star imagery, evoking imagination and growth. The sweeping comet trail adds movement and optimism, while layered colors create depth without losing simplicity. The approachable design is well-suited for youth-oriented education, creative arts, or enrichment programs." },
    { id: "l4", title: "Lazy Acre Alpacas Logo", thumb: "images/lazy acre alpacas circle.png", img: "images/lazy acre alpacas circle.png", alt: "Round logo featuring brown alpacas on rolling green hills with a yellow-orange sunset and script text 'Lazy Acre Alpacas.'", excerpt: "A cozy, pastoral logo radiating warmth and rural calm.", content: "This circular logo uses soft, natural tones to evoke the comfort of countryside living. Two alpacas rest on gentle hills under a warm sunrise gradient, while rounded typography reinforces approachability and charm. Its minimal composition and harmonious palette make it versatile for farm signage, labels, and handmade product branding." }
  ],
  Print: [
    { id: "p1", title: "NDLC 2026 Student Calendar Print Ad", thumb: "images/calendar.png", img: "images/calendar.png", alt: "Flyer advertising the 2026 Notre Dame Learning Center student calendar featuring photos of students and a $15 price tag.", excerpt: "A colorful promotional flyer celebrating NDLC students through an annual photo calendar fundraiser.", content: "This design highlights the 2026 NDLC Student Calendar, featuring photographs of students and emphasizing community spirit. The bright blue grid background and layered collage layout create an energetic yet organized composition. Playful icons and handwritten accents add personality, while clear pricing and QR access ensure ease for viewers. The poster combines warmth and professionalism to invite participation in supporting NDLC programs." },
    { id: "p2", title: "Harvest Moon Festival Poster", thumb: "images/harvest.jpg", img: "images/harvest.jpg", alt: "Poster for a Harvest Moon Festival with hanging lanterns, bold typography, and event details celebrating AAPI heritage.", excerpt: "A bold, retro-inspired poster for a cultural celebration under the Harvest Moon.", content: "This festival poster uses graphic illustration and bold typography to announce the 2024 Harvest Moon Festival. Warm tones of orange, gold, and cream contrast with a deep teal background, evoking evening festivity. The minimalist lantern graphics and geometric lettering recall mid-century poster design, balancing tradition with modernity. The layout emphasizes accessibility and celebration of AAPI heritage through strong color hierarchy and playful energy." },
    { id: "p3", title: "K-Pop Dance Classes Poster", thumb: "images/koraflyer.png", img: "images/koraflyer.png", alt: "Flyer for Kora Academy K-pop dance classes with pastel pink and purple gradients, cartoon figures, and star accents.", excerpt: "A pastel, anime-inspired poster promoting K-pop dance classes at Kora Academy.", content: "This promotional design merges playful illustration with dreamy gradients to capture the spirit of K-pop culture. The color palette of lavender, blush, and gold conveys energy and positivity, while hand-drawn figures and stylized stars enhance the youthful aesthetic. Elegant typography balances structure and fun, presenting clear class information in an engaging, approachable style that resonates with creative and dance-loving audiences." }
  ],
  Port: [
    { id: "po1", title: "Man's Best Friend", thumb: "images/daddog.JPG", img: "images/daddog.JPG", alt: "Photo of a man sitting on stone steps in the woods with a golden retriever beside him.", excerpt: "A moment of companionship captured in the stillness of autumn woods.", content: "This portrait depicts a man and his golden retriever resting on mossy stone steps, surrounded by autumn leaves. The warm tones of the scene echo the golden hues of the dog's coat, emphasizing harmony between subject and setting. The relaxed posture and natural lighting lend the image an authentic, candid quality — a quiet celebration of loyalty, peace, and shared time in nature." },
    { id: "po2", title: "Winter Walk", thumb: "images/franzi.jpg", img: "images/franzi.jpg", alt: "Family of four walking outdoors in winter; father carrying a baby on his shoulders, mother holding a child in a pink coat.", excerpt: "A joyful winter outing captures warmth amidst the chill of a snowy path.", content: "This family portrait captures a candid moment of joy during a winter walk. The overcast light and muted landscape contrast with the bright coats and smiles of the subjects, emphasizing warmth through human connection. The natural composition — with parents holding and carrying their children — conveys tenderness, love, and the fleeting beauty of shared moments in everyday life." },
    { id: "po3", title: "Graduate's Focus", thumb: "images/saragrad.jpg", img: "images/saragrad.jpg", alt: "Portrait of a young woman in a graduation cap and gown reading a book in a library.", excerpt: "A quiet celebration of accomplishment and curiosity framed in the calm of a library.", content: "This portrait blends academic achievement with personal reflection. The graduate stands among shelves of books, deeply absorbed in reading, her tassel and cords marking a milestone. The composition emphasizes intellect and introspection rather than ceremony, using natural light and subdued tones to evoke calm pride. It's a portrait not just of graduation, but of continued curiosity- a reminder that learning never truly ends." }
   ],
  Street: [
    { id: "st1", title: "Crossing at Dusk", thumb: "images/bike.jpg", img: "images/bike.jpg", alt: "Evening street scene with a person standing beside a bicycle under streetlights, cars passing by in the background.", excerpt: "A quiet city moment suspended between motion and stillness.", content: "In this moody urban photograph, a figure pauses beside a bicycle at dusk, their silhouette illuminated by car headlights. The greenish tones of the streetlights mix with warm reflections from passing cars, creating a cinematic tension between stillness and speed. The composition isolates the subject in the foreground, emphasizing solitude within a crowded city rhythm. The subdued palette and careful exposure convey the in-between calm that exists in the transition from day to night." },
    { id: "st2", title: "Iconic Walk", thumb: "images/iconicwalk.JPG", img: "images/iconicwalk.JPG", alt: "A woman walking along a sunlit traditional brick wall street with soft golden light filtering through trees.", excerpt: "Warm sunlight and a solitary figure bring modern motion to a timeless street.", content: "This image captures a person walking through a traditional district bathed in late-afternoon light. The composition balances the geometric lines of the brick wall with the organic softness of sun haze and distant trees. The figure anchors the scene, giving scale and movement to an otherwise still moment. The interplay between tradition and modernity, structure and spontaneity, becomes a visual dialogue about continuity within urban transformation." },
    { id: "st3", title: "Green Light", thumb: "images/itaewon.JPG", img: "images/itaewon.JPG", alt: "Nighttime city scene with a glowing green pedestrian crossing light, stairs in the background, and people waiting near trash bags.", excerpt: "A cinematic slice of city life illuminated by the soft glow of a crossing signal.", content: "This street photograph captures the intersection of urban routine and cinematic mood. A bright green crosswalk signal cuts through the dim evening air, casting neon light over a group of pedestrians. The stairs, graffiti, and scattered trash evoke texture and realism — a glimpse of the city's hidden layers. The subdued teal and orange tones emphasize atmosphere, transforming an ordinary intersection into a study of urban stillness and fleeting human presence." },
    { id: "st4", title: "Spring Café", thumb: "images/storefront.JPG", img: "images/storefront.JPG", alt: "A charming café entrance framed by blooming cherry blossoms in soft sunlight.", excerpt: "Cherry blossoms frame a quiet café, turning an everyday storefront into a dreamlike vignette.", content: "This photograph celebrates seasonal beauty in an urban setting. A cafe's wooden doorway is partially hidden behind a cascade of cherry blossoms, with sunlight filtering through the petals to cast delicate shadows. The image combines architectural geometry with organic softness, emphasizing contrast between permanence and ephemerality. Gentle focus and pastel tones evoke nostalgia — a moment suspended between spring warmth and urban charm." }
  ],
  Nature: [
    { id: "n1",  title: "Canyon Light", thumb: "images/canyon.jpg", img: "images/canyon.jpg", alt: "Photograph of a sandstone canyon interior with smooth red and orange curves and sunlight filtering from above.", excerpt: "Soft light and sculpted sandstone converge in this study of natural form and shadow.", content: "This photograph captures the flowing rock formations of a desert canyon, where years of erosion have carved organic curves into the sandstone walls. The interplay of warm red and orange hues, softened by a sliver of sunlight from above, emphasizes texture and depth. The composition draws attention to the way light transforms stone into something fluid, creating an almost abstract rhythm of color and shape."},
    { id: "n2", title: "Dew on Web", thumb: "images/dewonweb.JPG", img: "images/dewonweb.JPG", alt: "Close-up macro photograph of a spiderweb covered in dew drops, glistening among green grass blades.", excerpt: "A delicate web catches morning dew, transforming into a string of glass beads.", content: "In this macro image, the fine architecture of a spider's web becomes a canvas for morning dew. Each droplet clings to the silken threads, reflecting light in miniature rainbows. The shallow depth of field creates a dreamy, abstract background of green and silver tones. The photograph captures the fragility and symmetry of natural design, transforming an everyday moment into a glittering tapestry of texture and reflection." },
    { id: "n3", title: "Forest Camouflage", thumb: "images/leaffrog.JPG", img: "images/leaffrog.JPG", alt: "Photograph of a small toad blending into a bed of brown oak leaves on the forest floor.", excerpt: "A tiny toad disappears into the muted palette of fallen leaves and forest debris.", content: "This photograph highlights the quiet art of camouflage in nature. A small toad, nearly indistinguishable from the oak leaves surrounding it, demonstrates how texture and tone can serve as protection. The muted browns and grays create a natural monochrome that conceals and reveals at once. The focus draws the eye subtly toward the creature, rewarding careful observation with the discovery of life hidden in stillness." },
    { id: "n4", title: "Curious Gaze", thumb: "images/monkey.JPG", img: "images/monkey.JPG", alt: "Close-up photo of a small monkey looking toward the camera with bright eyes, surrounded by branches.", excerpt: "A moment of quiet curiosity frozen in the eyes of a small monkey.", content: "This portrait captures the expressive gaze of a squirrel monkey, its alert eyes reflecting light and curiosity. The shallow focus isolates the subject against a blurred natural backdrop, emphasizing emotion and personality. The fine detail in the fur and the warm golden tones of its coat create an intimate glimpse into an intelligent, watchful creature. The photograph balances technical precision with emotional resonance." },
    { id: "n5", title: "Path Through Pines", thumb: "images/path.jpg", img: "images/path.jpg", alt: "Photograph of a winding dirt path through a misty forest of tall trees and green undergrowth.", excerpt: "A narrow path disappears into the mist, inviting quiet reflection among the trees.", content: "This image explores solitude and serenity within nature. The forest path curves gently into the distance, leading the viewer through soft mist and filtered light. The tall, dark trunks frame a sense of depth and mystery, while the cool greens and muted browns evoke early morning calm. The composition invites the viewer to imagine walking further, beyond what the photograph reveals — a visual metaphor for discovery and introspection." }
  ],
  Digital: [
    { id: "d1", title: "Sleeping", thumb: "images/sleep.jpg", img: "images/sleep.jpg", alt: "Minimalist digital illustration in shades of purple showing a girl sleeping peacefully with a cat stretched across her head on the pillow.", excerpt: "A digital illustration of a girl and her cat resting, rendered in soft monochrome tones.", content: "This digital piece depicts a girl sleeping with her cat curled above her on the pillow, drawn in a unified violet palette. The limited color scheme and simplified shapes create a gentle, dreamlike quality that emphasizes mood over detail. The composition balances symmetry and softness, using rounded forms and tonal contrast to convey intimacy and quiet affection. This work reflects an interest in visual storytelling through minimalism—where shape, color, and emotional tone work together to express comfort and companionship." },
    { id: "d2", title: "Love You ForNever", thumb: "images/loveyoufornever.jpg", img: "images/loveyoufornever.jpg", alt: "Digital artwork depicting scissors cutting through paper hearts and the phrase “LOVE YOU FOREVER,” leaving the word “NEVER.” Rendered in muted red and pink tones with textured shading.", excerpt: "A digital still life of scissors cutting up a love letter, changing the message.", content: "This piece uses digital painting to transform everyday materials—paper, scissors, and handwritten words—into a visual metaphor for emotional conflict. The phrase “Love You Forever” becomes fragmented as “Never” is cut apart, representing the tension between sentiment and separation. A muted rose palette and soft digital brushwork evoke nostalgia and vulnerability, while the composition’s flat perspective draws attention to gesture and texture. The work explores how simple imagery and subdued color can communicate emotion with quiet intensity." },
    { id: "d3", title: "Orange Grove", thumb: "images/orangegrove.jpg", img: "images/orangegrove.jpg", alt: "Digital painting of a bright sky filled with fluffy clouds above an orange grove. Sunlight filters through green leaves and orange fruit.", excerpt: "A digital landscape of orange trees capturing sunlight.", content: "This digital painting depicts an orange grove bathed in sunlight, rendered in loose, impressionistic strokes. The use of warm greens, golds, and sky blues creates a luminous, airy composition that feels both expansive and serene. Layered digital brushwork mimics the softness of natural paint, allowing the foliage and fruit to blur into abstract patterns of color. The piece reflects an exploration of light and organic rhythm—translating natural beauty into a calm, painterly digital space." },
    { id: "d4", title: "Us", thumb: "images/us-sketch.jpg", img: "images/us-sketch.jpg", alt: "Simple black-and-white cartoon of two characters standing side by side, each wearing hoodies, surrounded by two cats. A thought bubble with two faces and a heart floats above them, conveying affection.", excerpt: "A black-and-white digital illustration of two characters and their cats.", content: "This digital drawing portrays two stylized figures and their cats, rendered in a clean, cartoon-like line style. Minimal shading and expressive linework give the composition a casual, sketchbook feel, while the thought bubble adds a playful, narrative touch. The piece emphasizes character design and emotional storytelling through subtle gestures rather than detail. It reflects a recurring theme in my work—capturing warmth, personality, and human connection in a simple yet expressive visual language." }
  ],
   Acrylic: [
    { id: "a1", title: "Trail Ride", thumb: "images/horse-painting.jpg", img: "images/horse-painting.jpg", alt: "Acrylic painting of two people holding hands while sitting on horses. The horses stand side by side under bright sunlight, with rich green grass behind them.", excerpt: "A painting depicting two figures on horseback reaching toward each other.", content: "This painting celebrates connection, companionship, and movement through expressive color and light, capturing a fleeting moment of balance and warmth. Painted in acrylic on canvas, the piece uses saturated greens and rich browns to emphasize sunlight and natural energy. Textural brushwork highlights the horses’ musculature and the tactile feel of their coats, contrasting with the smooth fields of background color. The work combines observational realism with emotional storytelling—using color, gesture, and composition to portray harmony between people, animals, and their shared environment." },
    { id: "a2", title: "Freeloader, 2025", thumb: "images/babynut.jpg", img: "images/babynut.jpg", alt: "Small acrylic painting on canvas showing a cat peeking out from under a wrinkled beige blanket on a bed.", excerpt: "A small acrylic painting portrays a cat peeking from beneath rumpled tan blankets.", content: "This intimate acrylic painting captures quiet domestic warmth through texture and subtle color contrast. The piece focuses on the play of texture—the folds of fabric, the gentle highlights of the bedding, and the small but expressive presence of the cat’s eyes. By emphasizing muted browns and creams, the work evokes a sense of comfort and stillness, transforming an everyday moment into a quiet study of warmth and observation. The painting reflects my interest in finding emotional resonance in ordinary spaces, using restrained color and brushwork to create intimacy and familiarity." }
   ],
  Trad: [
    { id: "t1", title: "Smoke", thumb: "images/sketch-smoke.jpg", img: "images/sketch-smoke.jpg", alt: "Graphite portrait of a person wearing sunglasses and a beanie, holding a cigarette between their fingers. Curving smoke trails surround the figure.", excerpt: "A graphite portrait exploring smoke-like forms.", content: "This graphite drawing captures a stylized portrait rendered with close attention to value, depth, and gesture. Using layered shading and contrasting tones, the piece creates a strong sense of dimensionality and motion. The swirling smoke-like forms surrounding the subject blur the line between realism and abstraction, adding rhythm and visual energy to the composition. The figure’s confident pose, detailed textures, and dramatic lighting emphasize mood and individuality. This work reflects an exploration of expressive realism—using pencil as a tool to balance precision with intuition, and technical control with emotional tone." },
    { id: "t2", title: "Sister Portrait", thumb: "images/sketch-sara.JPG", img: "images/sketch-sara.JPG", alt: "Pencil sketch of a woman wearing a hat, smiling softly. Flowers, butterflies, and hands are drawn around her on the page, giving the sketchbook spread a warm, whimsical feeling.", excerpt: "A graphite sketchbook study combining portraiture and natural motifs.", content: "This graphite sketch captures a loose portrait surrounded by organic details such as flowers, butterflies, and gestural linework. The drawing emphasizes expressive mark-making and spontaneity, balancing structural portrait elements with decorative flourishes that suggest motion and liveliness. Subtle shading and confident pencil strokes convey form while preserving the immediacy of a sketchbook drawing. This piece reflects an ongoing exploration of observational drawing and visual storytelling—using graphite as a medium to capture both likeness and atmosphere in an intuitive, personal way." },
    { id: "t3", title: "Man in Water", thumb: "images/sketch-jinyoung.jpg", img: "images/sketch-jinyoung.jpg", alt: "Realistic pencil drawing of a young man in a T-shirt with wet hair, resting his hand on his forehead as he stands in shallow water.", excerpt: "A graphite portrait study capturing a man in a body of water.", content: "This graphite drawing portrays a figure immersed in water, rendered with delicate shading and fine linework to convey mood and introspection. The composition emphasizes posture and gesture over detail, allowing the subtle transitions of tone to guide the viewer’s focus. The wet hair, soft ripples, and downward gaze evoke a sense of stillness and contemplation. Through controlled pencil technique and gentle value contrasts, the piece explores emotion through minimalism—using light and texture to express vulnerability and calm." },
    { id: "t4", title: "Transfiguration Study", thumb: "images/raphael.jpg", img: "images/raphael.jpg", alt: "Detailed graphite studies of classical figures and hands, inspired by Renaissance sculpture. The sketchbook shows a bearded man, a younger figure, and expressive hand studies with dramatic shading.", excerpt: "A graphite study based on Raphael’s Transfiguration", content: "This graphite study reproduces and interprets figures from Raphael’s School of Athens, focusing on the relationship between structure, proportion, and light. The piece includes detailed renderings of heads and hands, emphasizing the anatomy and gestural qualities that define Renaissance draftsmanship. Careful tonal layering creates depth and realism while preserving the looseness and movement of a sketch. Through this study, I explored traditional drawing techniques—such as hatching, cross-contour shading, and edge variation—to understand how value and line work together to create presence and emotion. The work reflects an appreciation for classical study as a foundation for expressive, modern drawing practice." },
    { id: "t5", title: "Noah Kahan", thumb: "images/sketch-noahkahan.JPG", img: "images/sketch-noahkahan.JPG", alt: "Graphite profile portrait of a man with long hair and a beard, wearing a collared shirt. Text around the drawing reads “One day I’ll be gone.”", excerpt: "A graphite portrait sketch capturing the mood and likeness of singer Noah Kahan.", content: "This graphite drawing portrays a side-profile portrait rendered with controlled lines and subtle tonal variation. The simplicity of the sketch highlights form and proportion, while the soft shading emphasizes the structure of the face and hair. Text reading “one day I’ll be gone” (lyrics from one of his songs) curves gently around the composition, adding a quiet emotional layer that connects the technical study to a sense of narrative and introspection. The piece balances observational accuracy with expressive restraint, using pencil to explore atmosphere, personality, and the understated power of minimal marks." }
  ],
  Watercolor: [
    { id: "wa1", title: "Bird Study", thumb: "images/watercolor-birds.jpg", img: "images/watercolor-birds.jpg", alt: "Watercolor studies of four birds perched on branches: a Mountain Chickadee in black and white, a yellow Baltimore Oriole, a red Pyrrhuloxia, and a blue Blue Jay. Each bird is labeled in delicate script.", excerpt: "A watercolor study of North American birds.", content: "This watercolor piece depicts four species of North American birds—the Mountain Chickadee, Baltimore Oriole, Pyrrhuloxia, and Blue Jay—each rendered with attention to texture, color, and posture. The work focuses on observing and translating the delicate patterns of feathers, light, and anatomy through transparent layers of pigment. Soft washes and fine line detailing create depth and subtle movement, while the inclusion of handwritten species names adds a personal, illustrative touch. The piece reflects an interest in both scientific observation and artistic interpretation, balancing accuracy with expressive mark-making to celebrate the beauty and individuality of each bird." },
    { id: "wa2", title: "Cozy Hamster", thumb: "images/watercolor-hamster.jpg", img: "images/watercolor-hamster.jpg", alt: "Watercolor painting of a fluffy hamster in a striped sweater and pink mittens, holding a steaming mug.", excerpt: "A small watercolor illustration of a bundled-up hamster holding a warm drink.", content: "This watercolor illustration depicts a cozy winter scene featuring a hamster wrapped in a striped sweater and scarf, clutching a warm drink. The soft washes of pink, gray, and blue create a calm, comforting mood, while fine pen lines define the form and texture. The small scale of the piece highlights its intimacy and charm—inviting the viewer to connect with the warmth and quietness of the moment. This work reflects an interest in character-based illustration and emotional storytelling through minimal composition, soft palettes, and tactile brushwork." },
    { id: "wa3", title: "Pajama Party", thumb: "images/watercolor-sleepover.jpg", img: "images/watercolor-sleepover.jpg", alt: "Small watercolor illustration of a dog and cat holding hands, each wearing oversized T-shirts and slippers. The background glows warm yellow.", excerpt: "A watercolor illustration of a cat and dog in oversized pajamas holding hands.", content: "This small watercolor painting depicts a cat and dog dressed in soft pastel pajamas, standing hand in hand against a glowing yellow background. The piece uses gentle washes of color and minimal linework to convey a sense of comfort and companionship. The simplified forms and soft edges create a nostalgic, storybook-like feeling, while the warm palette emphasizes emotional warmth and lightheartedness. This work reflects an interest in small-scale storytelling through character design and color harmony—transforming an everyday moment into a tender, expressive scene." }
  ],              
  Wearable: [
    { id: "w1", title: "Cat Applique Sweater", thumb: "images/cat_shirt.JPG", img: "images/cat_shirt.JPG", alt: "Black sweatshirt featuring a rectangular orange appliqué with a calico cat stitched in patterned fabric. The background shows a warm-toned design with text reading “made by emma★” in a hand-stamped style.", excerpt: "A one-of-a-kind sweatshirt featuring a hand-sewn calico cat applique created from reclaimed thrifted fabrics.", content: "This sweatshirt features a hand-stitched applique created from thrifted fabric, giving new life to secondhand materials through slow, intentional craftsmanship. Each piece of fabric was carefully selected for its texture and color, then cut and sewn by hand using a needle and thread to form the detailed cat design. The completed patch was securely sewn onto a Gildan sweatshirt, combining handmade artistry with a comfortable, wearable base. The piece highlights sustainability, individuality, and the tactile charm of hand-sewn work—turning an ordinary garment into a one-of-a-kind piece of wearable art." },
    { id: "w2", title: "Dragonfly Hoodie", thumb: "images/dragonfly_hoodie.JPG", img: "images/dragonfly_hoodie.JPG", alt: "Navy blue hoodie laid flat on a wooden table with a large, detailed bleach-painted dragonfly design spanning the back.", excerpt: "A hand-painted dragonfly design created with bleach on fabric.", content: "This hoodie features a hand-painted dragonfly design created using a bleach painting technique on fabric. The design was applied with precision using diluted bleach and fine brushes to capture the intricate details of the wings and body. The result reveals warm copper and tan tones that contrast against the dark fabric, emphasizing the organic beauty and symmetry of the dragonfly form. Painted directly across the back of the hoodie, the piece transforms a simple garment into wearable art—blending sustainability, experimentation, and craftsmanship in a single design." },
    { id: "w3", title: "Orchid Embroidered Beanie", thumb: "images/orchid_beanie.jpeg", img: "images/orchid_beanie.jpeg", alt: "Lilac Carhartt beanie embroidered with clusters of delicate purple flowers and green leaves around the brand’s logo patch.", excerpt: "A lilac Carhartt beanie embroidered by hand with delicate lavender orchids.", content: "This project transforms a classic Carhartt beanie into a personalized piece through hand embroidery. Using needle and thread, small lavender flowers were stitched around the Carhartt logo, creating a subtle yet striking contrast between the structured industrial brand and the delicate, organic imagery. Each stitch was placed by hand, emphasizing care, patience, and craftsmanship. The piece explores the balance between function and decoration—merging utilitarian workwear with gentle, nature-inspired artistry to create a wearable reflection of individuality and softness." },
    { id: "w3", title: "Embroidered Nike Socks", thumb: "images/embroidery-socks.jpeg", img: "images/embroidery-socks.jpeg", alt: "Three pairs of Nike socks with custom embroidery. The blue pair features a moon and stars, the cyan pair shows fluffy clouds, and the white pair is decorated with tiny green vines and leaves.", excerpt: "Hand-embroidered Nike socks featuring celestial, cloud, and floral designs.", content: "This project reimagines simple Nike socks through the addition of hand-embroidered details inspired by nature and atmosphere. Using needle and thread, each pair was customized with small, precise stitches depicting three distinct themes—stars and moon on navy, clouds and sky on blue, and delicate greenery on white. The embroidery process emphasized patience and texture, layering thread to build dimension and softness. Together, the series explores the balance between branding and individuality, turning mass-produced items into small expressions of creativity, care, and visual storytelling." }
  ],
  Pottery: [
    { id: "c1", title: "Bunnies Dish", thumb: "images/pottery-bunnies.jpg", img: "images/pottery-bunnies.jpg", alt: "Cream-colored ceramic bowl with a hand-painted blue bunny design. The rabbit’s shape curves around the inside of the bowl in a minimal, continuous-line style.", excerpt: "A hand-thrown ceramic bowl featuring a playful blue line drawing of bunnies.", content: "This ceramic bowl was hand-thrown on the wheel and finished with a minimalist line illustration painted in cobalt blue underglaze. The design features a pair of stylized bunnies that curve with the form of the bowl, creating a sense of motion and continuity within the circular shape. The simplicity of the linework contrasts with the natural texture of the clay, highlighting both the handmade process and the organic imperfections of the material. This piece reflects an interest in blending functional pottery with whimsical, character-driven imagery—turning a simple vessel into a small, expressive work of art." },
    { id: "c2", title: "Car Coasters", thumb: "images/pottery-coasters.jpg", img: "images/pottery-coasters.jpg", alt: "Two green ceramic coasters with carved notches, painted with delicate white daisies and brown stems.", excerpt: "Hand-painted ceramic car coasters featuring delicate white florals on a matte green base.", content: "This pair of ceramic car coasters was handbuilt and then hand-painted with a botanical design using underglaze and fine brushes. Each coaster features a soft green surface adorned with white flowers and branching stems, arranged in a balanced, natural composition. The paint was applied with attention to flow and repetition, allowing the organic forms to complement the circular shape of the pieces. After glazing and firing, the surface reveals a gentle contrast between the smooth finish and the subtle brush texture beneath. These coasters merge everyday functionality with thoughtful design—transforming a small utilitarian object into a piece of handcrafted decoration inspired by nature and simplicity." },
    { id: "c3", title: "Star Planter & Dish", thumb: "images/pottery-planter.jpg", img: "images/pottery-planter.jpg", alt: "Green ceramic planter and matching saucer with bold yellow star designs.", excerpt: "A hand-thrown ceramic planter and tray set glazed in deep green with bold yellow star motifs.", content: "This ceramic planter and matching tray were hand-thrown on the wheel and decorated using a wax-resist glazing technique. A deep green glaze serves as the base, while bright yellow stars were revealed through the resist process, creating a striking visual contrast between the two tones. The pattern wraps around the form, emphasizing movement and repetition while maintaining a balance between boldness and simplicity. Designed to be both functional and decorative, this piece explores the intersection of utility and creativity—transforming an everyday planter into a vibrant statement of color, texture, and form." },
    { id: "c4", title: "Cat Match Holder", thumb: "images/pottery-match.jpg", img: "images/pottery-match.jpg", alt: "Small handmade ceramic dish with a glossy cream glaze. A miniature clay cat sits on the rim.", excerpt: "A hand-sculpted ceramic match holder featuring a small cat figurine.", content: "This piece is a hand-built ceramic match holder designed with a whimsical sculptural element—a small cat perched on the rim of the dish. The form was shaped and refined by hand, then coated in a glossy clear glaze to highlight the natural tone of the clay and the warm brown and white accents of the cat. The figure’s expressive posture adds charm and character, transforming a simple utilitarian object into a piece of decorative art. This project reflects an interest in merging form and function, where everyday items are reimagined through a personal, handcrafted lens that emphasizes storytelling and individuality." },
    { id: "c5", title: "Travel Mug", thumb: "images/pottery-travelmug.jpg", img: "images/pottery-travelmug.jpg", alt: "Handmade cream-colored ceramic travel mug with raised cloud shapes and a matching ceramic lid.", excerpt: "A hand-built ceramic travel mug with raised cloud motifs and a matching lid.", content: "This travel mug was hand-built using slab construction and designed with an integrated lid for daily use. The surface features raised cloud shapes crafted from the same clay body, creating a subtle tone-on-tone texture that stands out beneath a glossy white glaze. The piece balances simplicity and whimsy, with gentle, rounded forms that evoke calm and lightness. Designed to be both practical and expressive, this mug reflects a focus on tactile design—where surface, shape, and usability work together to create a comforting and personal object." },
    { id: "c6", title: "Moon Jar", thumb: "images/pottery-moonjar.jpg", img: "images/pottery-moonjar.jpg", alt: "Rounded ceramic moon jar with a narrow opening and glossy white glaze. The surface features abstract blue and yellow wavy patterns that flow organically around the vessel.", excerpt: "A wheel-thrown ceramic moon jar decorated with blue and yellow underglaze patterns.", content: "This moon jar was thrown on the pottery wheel and decorated using blue and yellow underglazes applied in freeform, gestural strokes. The fluid pattern wraps around the round body of the vessel, emphasizing its soft curves and balanced proportions. After being coated in a clear glaze and fired, the colors developed a subtle translucency that enhances the depth and movement of the surface. Inspired by traditional moon jar forms, this piece explores the relationship between control and spontaneity—combining structured craftsmanship with intuitive mark-making to create a vessel that feels both timeless and expressive." }
  ],
  Misc: [
    { id: "m1", title: "Apple & Worm Keychain", thumb: "images/keychain.jpg", img: "images/keychain.jpg", alt: "Handmade felt keychain shaped like a red apple with a stitched face, yellow button, and green felt leaf. A small pink worm charm wraps around the keyring.", excerpt: "A hand-stitched felt apple keychain featuring a sleepy face, button detail, and a playful worm charm.", content: "This keychain was hand-sewn from layers of felt using simple embroidery and stitching techniques. The design features a stylized apple with a small face, a contrasting button accent, and a pink worm charm that adds a touch of humor and personality. Soft color contrasts and visible stitching emphasize the handmade quality of the piece, while the compact form makes it both decorative and functional. This work explores character design through textile craft, transforming familiar materials into a playful, tactile object that carries warmth and individuality." },
    { id: "m2", title: "Tea Time", thumb: "images/mousetree-paperart.jpg", img: "images/mousetree-paperart.jpg", alt: "Colorful paper collage of a mouse in a green coat sitting on a tree branch, holding a large striped mug. The background is bright blue with small flowers and leaves.", excerpt: "A hand-cut paper collage depicting a mouse sipping tea in a tree.", content: "This piece was created entirely from hand-cut colored paper, assembled into a layered collage illustrating a whimsical scene of a mouse perched on a branch, enjoying a cup of tea. Each shape was individually cut and arranged to create dimension and personality within the small composition. The use of textured cardstock adds depth to the flat forms, while subtle details—like the striped teacup and the mouse’s content expression—bring warmth and character to the piece. This work reflects an interest in narrative illustration and tactile craft, using paper as both a drawing tool and a sculptural medium to convey charm, calmness, and quiet humor." },
    { id: "m3", title: "PBJ Bears", thumb: "images/pbj-bears.jpg", img: "images/pbj-bears.jpg", excerpt: "A playful food art piece featuring peanut butter bears and jelly squares arranged on toast.", content: "This piece transforms a simple slice of peanut butter and jelly toast into a whimsical work of edible art. Using peanut butter shaped into small bear faces and jelly as a contrasting background, the design balances composition, color, and texture. Each bear face was sculpted with attention to expression and symmetry, creating a grid-like pattern that merges cuteness with visual structure. The piece reflects an interest in elevating the ordinary—turning a familiar, comforting food into a medium for playful experimentation and aesthetic joy." },
    { id: "m4", title: "Grocery Cat", thumb: "images/catbag-paperart.jpg", img: "images/catbag-paperart.jpg", alt: "Hand-cut paper collage of a stylized black cat with wide orange eyes peeking from inside a white bag filled with bread loaves and flowers, arranged on a pastel background.", excerpt: "A vibrant hand-cut paper collage of a cat nestled among loaves of bread.", content: "This piece was created using hand-cut colored papers, layered to form a stylized illustration of a cat surrounded by bread loaves and flowers. The design emphasizes shape, color, and composition through precise cutting and assembly, creating depth without the use of linework. Each element was arranged to balance warmth and contrast, with soft pastels offset by rich orange and navy tones. The work captures a sense of charm and humor, transforming simple materials into a lively narrative scene. It reflects an ongoing exploration of storytelling through cut-paper techniques—blending flat form, texture, and whimsy into a cohesive visual language." }
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



