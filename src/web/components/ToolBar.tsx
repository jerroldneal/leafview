import i18next from 'i18next';
import { FaFolderOpen, FaPlay, FaTrash, FaPlayCircle } from 'react-icons/fa';

import './ToolBar.scss';

interface Props {
  onPrev: () => Promise<void>;
  onNext: () => Promise<void>;
  onRemove: () => Promise<void>;
  onMotion: () => Promise<void>;
  onClickOpen: () => Promise<void>;
  motionEnabled: boolean;
}

export const ToolBar = (props: Props): JSX.Element => {
  return (
    <div className="toolbar">
      <div className="folder">
        <div
          className="icon"
          title={i18next.t('Open...')}
          onClick={props.onClickOpen}
        >
          <FaFolderOpen size="1.5rem" />
        </div>
      </div>
      <div className="arrows">
        <div
          className="icon"
          title={i18next.t('Prev Image')}
          onClick={props.onPrev}
        >
          <FaPlay size="1.5rem" className="reverse" />
        </div>
        <div
          className="icon"
          title={i18next.t('Next Image')}
          onClick={props.onNext}
        >
          <FaPlay size="1.5rem" />
        </div>
      </div>
      {props.motionEnabled ? (
        <div className="motion">
          <div
            className="icon"
            data-testid="motion"
            title={i18next.t('motion')}
            onClick={props.onMotion}
          >
            <FaPlayCircle size="2rem" />
          </div>
        </div>
      ) : null}
      <div className="trash">
        <div
          className="icon"
          title={i18next.t('Move to Trash')}
          onClick={props.onRemove}
        >
          <FaTrash size="1.5rem" />
        </div>
      </div>
    </div>
  );
};
