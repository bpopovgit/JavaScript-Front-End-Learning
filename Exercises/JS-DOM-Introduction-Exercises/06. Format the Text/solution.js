function solve() {
  const outputElement = document.getElementById('output');
  const textAreaElement = document.getElementById('input');
  const text = textAreaElement.value;

  // Convert to paragraphs
  const result = text
    .split('.')
    .filter(sentence => !!sentence)
    .reduce((result, sentence, index) => {
      const resultIndex = Math.floor(index / 3);
      if (!result[resultIndex]) {
          result[resultIndex] = []
      }

      result[resultIndex].push(sentence.trim());

      return result;
    }, [])
    .map(sentences => `<p>${sentences.join('. ')}.</p>`)
    .join('\n');
    


  // Append to output element
  outputElement.innerHTML = result;

}