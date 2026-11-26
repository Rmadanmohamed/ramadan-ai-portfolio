export function buildContactMailto(recipient: string, name: string, email: string, message: string) {
  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`);
  return `mailto:${recipient}?subject=${subject}&body=${body}`;
}
