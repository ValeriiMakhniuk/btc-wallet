export const saveToClipboard = async (textToSave: string) => {
  return await navigator.clipboard.writeText(textToSave);
};
