export const getModifier = (score) =>
  Math.floor(((Number(score) || 10) - 10) / 2);
export const getProficiencyBonus = (level) => Math.ceil(level / 4) + 1;
export const formatBonus = (n) => (n >= 0 ? `+${n}` : `${n}`);
