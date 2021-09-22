import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Button } from '../components/Button';

import logoImg from '../assets/images/logo.svg';

import '../styles/auth.scss';
import { database } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';
import { Title } from '../components/Title';
import { useTranslation } from 'react-i18next';

export function NewRoom() {
  const history = useHistory();
  const { t } = useTranslation();
  const { user } = useAuth();
  const [newRoom, setNewRoom] = useState('');
  
  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();
    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');
    const firebaseRoom = await roomRef.push({
      authorId: user?.id,
      title: newRoom
    });

    history.push(`/rooms/${firebaseRoom.key}`);
  }
  
  return (
    <div id="page-auth">
      <Title />
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <h2>{t('createNewRoom')}</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              onChange={event => setNewRoom(event.target.value)}
              placeholder={t('roomName')}
              type="text"
              value={newRoom}
            />
            <Button type="submit">
              {t('createRoom')}
            </Button>
          </form>
          <p>{t('wantToJoinExistingRoom')} <Link to="/">{t('clickHere')}</Link></p>
        </div>
      </main>
    </div>
  );
}