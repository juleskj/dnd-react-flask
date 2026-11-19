export default function toSlug(title) {
  return title.toLowerCase().replace(/\s+/g, "-");
}
