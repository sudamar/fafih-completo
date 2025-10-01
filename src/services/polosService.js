import polosData from '@/data/polos.json' with { type: 'json' };

const buildMapUrl = (address) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

export const listLocations = () =>
  polosData.locations.map((location) => ({
    ...location,
    mapUrl: buildMapUrl(location.address),
  }));

export const listHighlights = () => polosData.highlights.map((highlight) => ({ ...highlight }));

export const getPolosContent = () => ({
  locations: listLocations(),
  highlights: listHighlights(),
});

export default {
  listLocations,
  listHighlights,
  getPolosContent,
};
