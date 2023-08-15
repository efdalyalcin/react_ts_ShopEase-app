import './HorizontalDraggableButtons.scss';

type Props = {
  additionalFirstButton?: string;
  data?: string[];
  additionalLastButton?: string;
  gridArea?: string;
};

export default function HorizontalDraggableButtons({
  additionalFirstButton,
  data,
  additionalLastButton,
}: Props) {
  return (
    <div
      className="horizontal-draggable-buttons"
      // style={{'grid-area': 2/1/2/-1}}
      // grid-area: 2 / 1 / 2 / -1;
    >
      {additionalFirstButton ? (
        <button
          type="button"
          value={additionalFirstButton}
          className="horizontal-draggable-buttons__button"
        >
          {additionalFirstButton?.toUpperCase()}
        </button>
      ) : null}
      {data?.map((buttonText, i) => {
        return (
          <button
            key={`${i}.${buttonText}`}
            value={buttonText}
            className="horizontal-draggable-buttons__button"
          >
            {buttonText.toUpperCase()}
          </button>
        );
      })}
      {additionalLastButton ? (
        <button
          type="button"
          value={additionalLastButton}
          className="horizontal-draggable-buttons__button"
        >
          {additionalLastButton?.toUpperCase()}
        </button>
      ) : null}
    </div>
  );
}
