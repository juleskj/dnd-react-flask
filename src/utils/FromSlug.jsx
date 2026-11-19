export default function fromSlug(slug) {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
}
