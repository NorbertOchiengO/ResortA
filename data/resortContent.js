// ✏️ Single source of truth. Facts marked ✔ come from public listings (Expedia/Hotels.com/Travelocity/Discover Kenya)
// and should be re-confirmed with the client. Items marked ⚠ are proposed copy pending client approval.
const U = (id, w = 1400) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=85`

export const brand = { name: 'Mugumo Valley', descriptor: 'Resort', tagline: 'A quiet invitation to stay awhile', location: 'Thika, Kiambu County, Kenya' }

export const contact = {
  whatsapp: '', // ⚠ digits only, e.g. 2547XXXXXXXX. While empty, the form runs in demo mode.
  phone: 'Added at launch', email: 'Added at launch',
}

export const hero = { eyebrow: 'Thika · Kiambu County', words: ['Where', 'the valley', 'slows you', 'down.'], sub: 'Pool-view rooms, a restaurant and bar, shaded gardens and a children’s play area, forty minutes from Nairobi’s edge and a world away from its pace.' }

export const img = {
  hero: U('1470252649378-9c29740c9fa8', 2200), story: U('1448375240586-882707db888b'), pool: U('1500534314209-a25ddb2bd429'),
  garden: U('1441974231531-c6227db76b6e'), table: U('1524758631624-e2822e304c36'), path: U('1464822759023-fed622ff2c3b'),
  hills: U('1500534623283-312aade485b7'), lake: U('1470770841072-f978cf4d019e'), leaves: U('1511497584788-876760111969'),
  r1: U('1540518614846-7eded433c457', 1200), r2: U('1600607687939-ce8a6c25118c', 1200), r3: U('1600566753190-17f0baa2a6c3', 1200),
}

export const nav = [['Stay', '#stay'], ['Days Out', '#days'], ['Dine', '#dine'], ['Explore', '#explore'], ['Gallery', '#gallery'], ['FAQ', '#faq']]

// ✔ glance facts
export const glance = [
  ['30', 'Rooms'], ['Pool', 'Outdoor pool'], ['Free', 'Daily breakfast'], ['Bar', 'Restaurant & bar'], ['Free', 'Parking'], ['24h', 'Front desk'],
]
export const rating = { score: '4.2', count: '162', source: 'public guest reviews' } // ⚠ refresh before launch

export const story = {
  title: ['Named for a tree', 'people gather under.'],
  body: ['The mugumo is the wild fig long held sacred in Kikuyu tradition: a place to meet, to rest, to be heard. That spirit shapes how we host.',
    'Just off the Thika corridor, Mugumo Valley is built around the simple things that make a break feel like one: water to sit beside, a garden to wander, good food, and nobody rushing you.'],
}

// ✔ three pool-view room types
export const rooms = [
  { name: 'Deluxe Double', meta: 'Pool view · sleeps 2', text: 'A double bed, a private bathroom and a view over the pool. Made for slow mornings and an early swim.', img: 'r1' },
  { name: 'Deluxe Twin', meta: 'Pool view · twin beds', text: 'Two beds for friends, family or colleagues, with the same calm outlook over the water.', img: 'r2' },
  { name: 'Deluxe Single', meta: 'Pool view · sleeps 1', text: 'A quiet, well-kept room for the solo traveller who just needs to switch off.', img: 'r3' },
]
export const roomIncludes = ['Free Wi-Fi', 'Smart TV', 'Private bathroom', 'Free bottled water', 'Daily housekeeping', 'Free breakfast']

export const days = [
  ['Outdoor pool', 'Cool water, loungers and the sound of children laughing. The reason many families drive out.'],
  ['Children’s play area', 'Space for little ones to run it off while parents finally sit down.'],
  ['Garden & grounds', 'Shaded corners for picnics, long chats and a slower afternoon.'],
]
export const dine = {
  lead: 'A restaurant for lunches that run long, a bar and lounge for the evening, and a free continental breakfast every morning.',
  items: [['Continental breakfast', 'Free for guests, 7:30 – 9:30 daily'], ['Restaurant', 'Lunch and dinner in the valley'], ['Bar & lounge', 'Unwind after the day']],
}
// ✔ nearby
export const explore = [['Fourteen Falls', 'About 15 minutes’ drive'], ['Christina Wangari Gardens', 'About 15 minutes’ drive'], ['Thika town', 'About 7 km away'], ['JKIA', 'About 94 minutes’ drive']]
export const mapQuery = 'The Mugumo Valley Resort, Thika, Kenya'

export const gallery = [['hills', 'Misty green hills'], ['pool', 'Sunlit valley', 1], ['garden', 'Tall trees in the garden'], ['leaves', 'Leaves catching the light'], ['lake', 'Valley and still water', 1], ['path', 'A green path']]

export const faq = [
  ['Is breakfast included?', 'Yes. A continental breakfast is included for guests every day from 7:30 to 9:30.'],
  ['Is there parking?', 'Yes, free parking is available on site.'],
  ['Do you offer an airport shuttle?', 'Not at the moment. JKIA is roughly a 94-minute drive, and we are happy to suggest transport options.'],
  ['Are pets allowed?', 'Pets are not allowed on the property.'],
  ['Can we celebrate or hold a team day here?', 'Tell us your plans, such as a birthday, family reunion or team day, and we will come back with options.'], // ⚠
]
export const enquiryTypes = ['Room stay', 'Day visit', 'Celebration or team day', 'General enquiry']
