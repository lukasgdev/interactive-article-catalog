interface HighlightTextProps {
  text: string;
  highlight?: string;
}

export function HighlightText({ text, highlight }: HighlightTextProps) {
  if (!highlight || highlight.trim() === '') {
    return <>{text}</>;
  }

  // Escape special regex characters in the search term
  const escaped = highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escaped})`, 'gi');
  const parts = text.split(regex);

  const lowercaseHighlight = highlight.toLowerCase();

  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === lowercaseHighlight ? (
          <mark
            key={index}
            className="bg-yellow-200 text-inherit rounded-sm px-0.5"
          >
            {part}
          </mark>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </>
  );
}
