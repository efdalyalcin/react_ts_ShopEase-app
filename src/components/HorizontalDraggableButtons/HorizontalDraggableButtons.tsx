import ScrollContainer from 'react-indiana-drag-scroll';
import cn from 'classnames';
import './HorizontalDraggableButtons.scss';

type Props = {
  additionalFirstButton?: string;
  data?: string[];
  additionalLastButton?: string;
  gridArea?: string;
  handleClick: (e: any) => void;
  selected?: string;
};

export default function HorizontalDraggableButtons({
  additionalFirstButton,
  data,
  additionalLastButton,
  gridArea,
  handleClick,
  selected,
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
            className={cn('horizontal-draggable-buttons__button', {
              'horizontal-draggable-buttons__button--selected':
                selected === additionalFirstButton,
            })}
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
              className={cn('horizontal-draggable-buttons__button', {
                'horizontal-draggable-buttons__button--selected':
                  selected === buttonText,
              })}
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
            className={cn('horizontal-draggable-buttons__button', {
              'horizontal-draggable-buttons__button--selected':
                selected === additionalLastButton,
            })}
            onClick={handleClick}
          >
            {additionalLastButton?.toUpperCase()}
          </button>
        ) : null}
      </div>
    </ScrollContainer>
  );
}
