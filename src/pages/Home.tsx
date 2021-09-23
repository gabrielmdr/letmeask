import { useHistory } from 'react-router-dom';
import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss';
import { FormEvent, useState } from 'react';
import { database } from '../services/firebase';
import { Title } from '../components/Title';
import { useTranslation } from 'react-i18next';

export function Home() {
  const history = useHistory();
  const { t } = useTranslation();
  const { signInWithGoogle, user } = useAuth();
  const [roomCode, setRoomCode] = useState('');

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();
    if (roomCode.trim() === '') {
      return;
    }
    
    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert(t('roomDoesNotExist'));
      return;
    }

    if (roomRef.val().endedAt) {
      alert(t('roomAlreadyClosed'));
      return;
    }

    history.push(`/rooms/${roomCode}`);
  }
  
  return (
    <div id="page-auth">
      <Title />
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask" />
          <button className="create-room" onClick={handleCreateRoom}>
            <img src={googleIconImg} alt={t('googleLogo')} />
            {t('createRoomWithGoogle')}
          </button>
          <div className="separator">{t('orEnterARoom')}</div>
          <form onSubmit={handleJoinRoom}>
            <input
              onChange={event => setRoomCode(event.target.value)}
              placeholder={t('typeRoomCode')}
              type="text"
              value={roomCode}
            />
            <Button type="submit">
              {t('enterRoom')}
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}