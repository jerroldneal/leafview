import { memo } from 'react';
import i18next from 'i18next';

import { FolderOpen } from './icons/FolderOpen';
import { ArrowLeft } from './icons/ArrowLeft';
import { ArrowRight } from './icons/ArrowRight';
import { Trash } from './icons/Trash';

import './ToolBar.scss';

type Props = {
  onClickOpen: () => void;
  onPrev: () => Promise<void>;
  onNext: () => Promise<void>;
  onRemove: () => Promise<void>;
};

export const ToolBar = memo((props: Props) => {
  return (
    <div className="toolbar">
      <div className="folder">
        <div
          className="icon"
          title={i18next.t('Open...')}
          onClick={props.onClickOpen}
        >
          <FolderOpen />
        </div>
      </div>
      <div className="arrows">
        <div
          className="icon"
          title={i18next.t('Prev Image')}
          onClick={props.onPrev}
        >
          <ArrowLeft />
        </div>
        <div
          className="icon"
          title={i18next.t('Next Image')}
          onClick={props.onNext}
        >
          <ArrowRight />
        </div>
      </div>
      <div className="trash">
        <div
          className="icon"
          title={i18next.t('Move to Trash')}
          onClick={props.onRemove}
        >
          <Trash />
        </div>
      </div>
    </div>
  );
});
ToolBar.displayName = 'ToolBar';
