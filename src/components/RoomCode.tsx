import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import copyImg from '../assets/images/copy.svg';

import '../styles/room-code.scss';

type Props = {
  code: string
}

export function RoomCode(props: Props) {
  const { t } = useTranslation();
  
  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);
    toast.success(t('copiedToClipboard'));
  }
  
  return (
    <button
      className="room-code"
      onClick={copyRoomCodeToClipboard}
      title={t('copyRoomCode')}
    >
      <div>
        <img src={copyImg} alt={t('copyRoomCode')} />
      </div>
      <span>{t('room')} {props.code}</span>
    </button>
  );
}