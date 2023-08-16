import ScrollContainer from 'react-indiana-drag-scroll';
import './HorizontalDraggableButtons.scss';

type Props = {
  additionalFirstButton?: string;
  data?: string[];
  additionalLastButton?: string;
  gridArea?: string;
  handleClick: (e: any) => void;
};

export default function HorizontalDraggableButtons({
  additionalFirstButton,
  data,
  additionalLastButton,
  gridArea,
  handleClick,
}: Props) {
  return (
    <ScrollContainer
      vertical={false}
      horizontal
      style={{ gridArea: gridArea }}
      className="horizontal-draggable-buttons__container"
    >
      <div className="horizontal-draggable-buttons">
        {additionalFirstButton ? (
          <button
            type="button"
            value={additionalFirstButton}
            className="horizontal-draggable-buttons__button"
            onClick={handleClick}
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
              onClick={handleClick}
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
            onClick={handleClick}
          >
            {additionalLastButton?.toUpperCase()}
          </button>
        ) : null}
      </div>
    </ScrollContainer>
  );
}
