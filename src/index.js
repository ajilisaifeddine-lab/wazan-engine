// Wazan Engine v1 - Saifeddine Agili - Kasserine 2026-10-01
// الفكرة الأصلية: التشكيل = Bitmask سياسة أمان

const DIACRITICS = {
  SUKOON: 1, // ْ = قفل
  FATHA: 2,  // َ = فتح
  DAMMA: 4,  // ُ = آمن
  KASRA: 8,  // ِ = تشفير
  SHADDA: 16 // ّ = تعزيز
};

function generateWazan(root) {
  // مثال: ك-ت-ب
  const policy = DIACRITICS.DAMMA | DIACRITICS.KASRA; // 12
  return `${root} -> يولد 6 ملفات - سياسة ${policy}`;
}

console.log(generateWazan("كتب"));

module.exports = { DIACRITICS, generateWazan };
