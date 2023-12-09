const AVERAGE_WORDS_PER_MINUTE = 200; // Ortalama dakikada okunan kelime sayısı

export function calculateReadingTime(text: string) {
  const textLength = text.split(/\s+/).length; // Boşluklara göre kelimeleri ayır ve say
  if (textLength === 0) {
    return 0;
  }

  const minutes = Math.ceil(textLength / AVERAGE_WORDS_PER_MINUTE);
  return minutes;
}