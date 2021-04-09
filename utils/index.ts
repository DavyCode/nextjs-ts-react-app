/**
 * @param date time and date string
 * @returns human readable date
 */
export function formatDateReadable(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

/**
 * @param location - a valid address 
 * @returns formatted location string
 */
export function formattedAddress(location: string) {
  return location.replace(', ', '\n');
}