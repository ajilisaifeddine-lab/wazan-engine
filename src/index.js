// Wazan Engine v1 - Saifeddine Agili - Kasserine
// الفكرة الاصلية: التشكيل = Bitmask سياسة أمان

const DIACRITICS = {
  SUKOON: 1, // = فقل
  FATHA: 2,  // = فتح
  DAMMA: 4,  // = آمن
  KASRA: 8,  // = تشفير
  SHADDA: 16 // = تعزيز
};

function hasPolicy(policy, flag) {
  return (policy & flag) === flag;
}

function generateWazan(root) {
  // مثال: ك-ت-ب
  const policy = DIACRITICS.DAMMA | DIACRITICS.KASRA;
  const isSecure = hasPolicy(policy, DIACRITICS.DAMMA);
  return {
    root: root,
    policy: policy,
    secure: isSecure,
    message: `${root} -> سياسة - ملفات 6 يولد ${policy}`
  };
}

function validateWazan(wazan) {
  return wazan && wazan.policy > 0 && wazan.root;
}

console.log(generateWazan("كتب"));
console.log("Policies loaded:", Object.keys(DIACRITICS).length);

module.exports = { DIACRITICS, generateWazan, hasPolicy, validateWazan };

// Wazan Engine - Tunisian Innovation
// Kasserine - 2025 - Full v2
// End of Engine - 38 lines
