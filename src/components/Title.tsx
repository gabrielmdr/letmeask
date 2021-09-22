import { useTranslation } from 'react-i18next';
import illustrationImg from '../assets/images/illustration.svg';

import '../styles/title.scss';

export function Title() {
  const { t } = useTranslation();
  
  return (
    <aside>
      <img src={illustrationImg} alt="" />
      <strong>{t('descriptionTitle')}</strong>
      <p>{t('descriptionSubtitle')}</p>
    </aside>
  );
}