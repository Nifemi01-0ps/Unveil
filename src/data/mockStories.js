import landScapeImg from "../assets/art01.avif";
import impasstoImg from "../assets/art3.avif";
import mountainImg from "../assets/art4.avif";
import bapoqueImg from "../assets/art5.avif";
import sculptureImg from "../assets/art6.avif";
import muralImg from "../assets/art7.avif";

export const mockStories = [
    {
        id: 'artwork-01',
        title: 'Echoes of the High Weald',
        artist: "Evelyn Sterling",
        category: "Landscape",
        imageUrl: landScapeImg,
        artworkAlt: "An abstract expressionist landscape with bare trees, electric green grass, a red bush and purple irises under a turbulent lavender sky",
        hook: 'Nature can be so peaceful without pollution',
        chapters: [
            {
                id: 1,
                title: "The Moment Before",
                subtitle: "Inspiration and Origins",
                content: "In November 2025, the frost on the High Weald did not melt for 3 months straight. I woke up at 4:00am every single morning to sit in absolute darkness. The silence wasn't peaceful; it felt heavy, almost suffocating. My hands were freezing, stiff, refusing to hold a brush. I realized that morning that I wasn't trying to paint the landscape outside my window — I was trying to capture the feeling of waiting for an engine to spark to life in the dead of winter."
            },
            {
                id: 2,
                title: "The Struggle Inside the Work",
                subtitle: "Process and Collapse",
                content: "On the fourth afternoon of working on this specific canvas, the composition collapsed entirely. The blues turned muddy, losing all of their translucent light. Out of raw frustration, I took a palette knife and slashed a clean, three-inch tear right through the upper quadrant of the raw cotton warp. I sat on the floor of the studio for four hours doing absolutely nothing. The fix wasn't to patch it up; the fix was to sew it back together with thick, coarse golden twine, letting the scar become the structural baseline for the light layers to rest on."
            },
            {
                id: 3,
                title: "What I Want You to Carry",
                subtitle: "Meaning & Reflection",
                content: "When you look at this piece, do not look for a perfect horizon. Look for the points where the texture breaks. I want you to remember that the moments where your internal map falls completely to pieces are not errors. The tear in your fabric is precisely where the weight of your history begins to look beautiful under a localized spotlight."
            }
        ]
    },

    {
        id: 'artwork-03',
        title: 'Collision of Every Feeling I Swallowed',
        artist: "Declan Osei",
        category: "Abstract",
        imageUrl: impasstoImg,
        artworkAlt: "A dense, explosive impasto painting with thick palette knife strokes of yellow, orange, crimson, teal, white and violet colliding across the entire canvas surface",
        hook: 'Some feelings are too loud to stay inside',
        chapters: [
            {
                id: 1,
                title: "The Moment Before",
                subtitle: "Inspiration and Origins",
                content: "I had not spoken to my father in six years when his number appeared on my phone at 2:17am on a Tuesday in March 2025. I did not pick up. I sat with the buzzing phone in my hand until it stopped, and then I walked into my studio and picked up every tube of paint I owned and squeezed them directly onto the canvas without a single plan. I did not use a brush once. Only knives, fingers, and the heel of my palm. This painting is what six years of unspoken things look like when they finally leave your body."
            },
            {
                id: 2,
                title: "The Struggle Inside the Work",
                subtitle: "Process and Collapse",
                content: "Three hours in, the center of the canvas became a gray sludge — every color I applied just cancelled the last one out. I almost scraped the whole surface clean and started again. But then I realized the gray was honest. It was the part of the argument I still didn't have words for. So I worked around it, pushing the yellows and crimsons outward like they were trying to escape the middle, and slowly the gray disappeared under layers of white and teal without me ever directly covering it. That's how you deal with the things you can't face directly."
            },
            {
                id: 3,
                title: "What I Want You to Carry",
                subtitle: "Meaning & Reflection",
                content: "I want whoever owns this to hang it somewhere they will see it on their worst days. Not because it is cheerful — it isn't. But because it proves that chaos has texture, weight and even beauty when you stop trying to smooth it into something acceptable. You do not have to resolve everything. Sometimes you just have to put it on a surface and walk away."
            }
        ]
    },

    {
        id: 'artwork-04',
        title: 'The Road That Forgot Where It Was Going',
        artist: "Miriam Calloway",
        category: "Watercolor",
        imageUrl: mountainImg,
        artworkAlt: "A classical watercolor landscape depicting pale grey limestone cliffs towering above a winding dirt road flanked by warm amber and rust-coloured autumn foliage",
        hook: 'Not all paths need a destination to be worth walking',
        chapters: [
            {
                id: 1,
                title: "The Moment Before",
                subtitle: "Inspiration and Origins",
                content: "I came across this valley completely by accident in the autumn of 2024, on a drive I took because I did not want to go home to an empty house. My marriage had ended quietly the month before — no shouting, no dramatic scene, just two people realizing they had been walking in separate directions for years without noticing. When I turned the corner and saw the cliffs rising above the road like pale grey walls, I pulled over and sat in the car for forty minutes. Something about the scale of the stone against the smallness of the road felt exactly like how I felt — enormous grief, narrow path forward."
            },
            {
                id: 2,
                title: "The Struggle Inside the Work",
                subtitle: "Process and Collapse",
                content: "Watercolor punishes impatience, and I was deeply impatient during this period of my life. The cliffs were the hardest part — limestone has this translucent quality in afternoon light, almost like skin stretched over bone, and every time I tried to capture it I overworked the wash and it dried flat and chalky. I repainted the cliff face eleven times across four separate attempts. The version you are looking at is the one where I finally stopped trying to make the stone look impressive and instead let the white of the paper do most of the work. Restraint was the lesson I needed most that year."
            },
            {
                id: 3,
                title: "What I Want You to Carry",
                subtitle: "Meaning & Reflection",
                content: "I want you to notice the road in the foreground. It winds out of the frame — you cannot see where it leads. I painted it that way on purpose. I want whoever holds this piece to remember that not knowing what comes next is not the same as being lost. The cliffs have stood for thousands of years. The road has always found its way through."
            }
        ]
    },

    {
        id: 'artwork-05',
        title: 'What the Ceiling Knows',
        artist: "Isabeau Fontaine",
        category: "Figurative",
        imageUrl: bapoqueImg,
        artworkAlt: "A sweeping Baroque ceiling fresco study depicting dozens of mythological figures — gods, angels, warriors and cherubs — tumbling through dramatic storm clouds with golden light breaking through the upper register",
        hook: 'The gods were never calm. Why did we think we had to be?',
        chapters: [
            {
                id: 1,
                title: "The Moment Before",
                subtitle: "Inspiration and Origins",
                content: "I spent two weeks lying on my back on a wooden scaffold inside a deconsecrated chapel in Lyon in the summer of 2023, studying a ceiling fresco that most visitors walked past in under thirty seconds. What struck me was not the grandeur of it — it was the chaos. Every figure in that painting was mid-motion, mid-conflict, mid-fall. No one was at rest. Not a single god, not a single angel. The whole celestial hierarchy was in a state of perpetual turbulence, and it had been painted that way deliberately as something magnificent. I had spent my entire adult life trying to appear composed. This ceiling laughed at that."
            },
            {
                id: 2,
                title: "The Struggle Inside the Work",
                subtitle: "Process and Collapse",
                content: "I made fourteen preparatory studies before touching the final surface. The figures defeated me repeatedly — Baroque anatomy is exaggerated in ways that feel wrong until suddenly they feel more true than realism. A shoulder twisted beyond its natural range. A torso caught mid-spiral. I kept correcting toward anatomical accuracy and every correction made the figures weaker, more static, more suburban. The breakthrough came when I stopped consulting my anatomy references entirely and just painted the feeling of falling upward. After that, the figures arrived quickly."
            },
            {
                id: 3,
                title: "What I Want You to Carry",
                subtitle: "Meaning & Reflection",
                content: "Look at the center of this piece — the figure in blue ascending through the gold. She is not serene. Her body is working hard, her drapery is fighting the wind, her face holds something between terror and joy. I want whoever owns this to remember her on the days when moving forward feels violent. Ascension was never supposed to be graceful. It was always supposed to cost something."
            }
        ]
    },

    {
        id: 'artwork-06',
        title: 'The Weight of Looking Up',
        artist: "Cormac Vane",
        category: "Sculpture",
        imageUrl: sculptureImg,
        artworkAlt: "A close-up photographic study of a classical white marble male sculpture, arms crossed at the chest, head tilted upward with an expression of quiet resolve against a pale architectural background",
        hook: 'Strength is not the absence of fear. It is the decision to look up anyway.',
        chapters: [
            {
                id: 1,
                title: "The Moment Before",
                subtitle: "Inspiration and Origins",
                content: "I was twenty-three years old, newly arrived in a city where I knew no one, standing in a gallery corridor at 9am on a Wednesday because I had nowhere else to be. I had dropped out of my architecture degree four months earlier and told no one. My family thought I was still enrolled. I was actually spending my days walking through museums trying to figure out what I believed in. When I turned the corner and came face to face with the sculpture — his arms crossed, his chin raised, his gaze somewhere far above me — I stood there for close to an hour. He looked like someone who had already accepted the worst possible outcome and decided to stand anyway."
            },
            {
                id: 2,
                title: "The Struggle Inside the Work",
                subtitle: "Process and Collapse",
                content: "I returned to this sculpture twelve times over three years to photograph and sketch it. Each visit I was a different person with a different question. At twenty-three I saw defiance in his face. At twenty-five I saw grief. At twenty-six I saw something I can only describe as patience — the kind that has given up on a particular outcome but not on the act of enduring. I spent a long time deciding how to frame the final image. I chose to cut off the top of his head and the base of his torso deliberately — I did not want the full figure. I only wanted the part that was looking up."
            },
            {
                id: 3,
                title: "What I Want You to Carry",
                subtitle: "Meaning & Reflection",
                content: "He was carved from a single block of stone. Everything that was not him was removed. I think about that often — that the process of becoming something was entirely a process of loss. I want whoever owns this to look at it on the days when they feel like too much of themselves has been taken away. What remains is not a remnant. It is the sculpture."
            }
        ]
    },

    {
        id: 'artwork-07',
        title: 'She Sees Everything You Are Hiding',
        artist: "Nadia Voss",
        category: "Street Art",
        imageUrl: muralImg,
        artworkAlt: "A large-scale street mural close-up showing two piercing blue-grey eyes set in a warm-toned face surrounded by vivid floral and organic patterns in teal, coral, gold and deep violet",
        hook: 'The wall was blank. Then it started watching.',
        chapters: [
            {
                id: 1,
                title: "The Moment Before",
                subtitle: "Inspiration and Origins",
                content: "The wall was on a street where four people I knew personally had experienced violent crime in the space of eighteen months. The neighbourhood had the particular silence of a place that has stopped expecting things to get better. The building owner gave me permission with one condition — that whatever I painted had to make people feel seen. Not safe, not inspired, not uplifted. Seen. I spent two weeks just sitting on a plastic chair across the street at different times of day watching who walked past and what their faces did when they thought no one was looking. The eyes in this mural are built from at least forty different pairs of real eyes I observed on that street."
            },
            {
                id: 2,
                title: "The Struggle Inside the Work",
                subtitle: "Process and Collapse",
                content: "Scale destroyed my first attempt. What reads as intimate at arm's length turns cold and graphic at forty feet. I repainted the eyes three times — the irises specifically, trying to hold that quality of depth that makes a painted eye feel inhabited rather than decorative. The breakthrough was adding the grey-blue undertone to the whites of the eyes, a technique I borrowed from Renaissance portrait painters who understood that pure white eyes look dead. Living eyes are never white. They hold every colour the person has ever cried."
            },
            {
                id: 3,
                title: "What I Want You to Carry",
                subtitle: "Meaning & Reflection",
                content: "People stop in front of this wall and they go quiet. I have watched it happen from across the street many times. Something about being looked at — really looked at — by something that cannot judge you stops people in a way that words on a wall never do. I want whoever collects this to know that the eyes are not watching you. They are recognizing you. There is a difference, and it matters."
            }
        ]
    }
];