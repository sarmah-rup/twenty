const HTTP_SCHEME_REGEX = /^https?:\/\//i;

export const ensureAbsoluteUrl = (value: string): string => {
  const trimmedValue = value.trim();

  if (HTTP_SCHEME_REGEX.test(trimmedValue)) {
    return trimmedValue;
  }

  return `https://${trimmedValue}`;
};
